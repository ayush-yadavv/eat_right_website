"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import React, {
  type ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";

import { cn } from "@/lib/utils";

const inputWrapperClassName = cn(
  "bg-surface border border-border has-[:focus-visible]:border-primary relative w-full rounded-2xl p-3.5 transition-all duration-200",
  "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary/20",
);

const inputClassName =
  "w-full bg-transparent text-text-main text-base outline-none placeholder:text-text-muted/60";

type InputFieldProps = ComponentPropsWithoutRef<"input"> & {
  wrapperClassName?: string;
};

type SmoothInputProps = InputFieldProps & {
  wrapperClassName?: string;
  fontSize?: number | string;
};

const Input = ({ className, wrapperClassName, ...props }: InputFieldProps) => {
  return (
    <div className={cn(inputWrapperClassName, wrapperClassName)}>
      <input className={cn(inputClassName, className)} {...props} />
    </div>
  );
};

const PASSWORD_CHAR = typeof navigator !== "undefined" && navigator.userAgent.match(/firefox|fxios/i)
  ? "\u25CF"
  : "\u2022";

const SmoothInput = ({
  className,
  wrapperClassName,
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  onClick,
  onKeyUp,
  onKeyDown,
  onPointerUp,
  onPointerDown,
  onSelect,
  type = "text",
  placeholder = "Enter text...",
  style,
  fontSize,
  inputMode,
  ...props
}: SmoothInputProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const caretX = useMotionValue(0);
  const caretOpacity = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const isControlled = value !== undefined;
  const inputValue = isControlled ? String(value) : String(internalValue);

  // Use inputMode="email" with type="text" to allow selectionStart measurement (Chrome blocks selection API on native type="email")
  const isEmailType = type === "email";
  const actualType = isEmailType ? "text" : type;
  const actualInputMode = isEmailType ? "email" : inputMode;

  const springCaretX = useSpring(
    caretX,
    prefersReducedMotion
      ? { stiffness: 10000, damping: 100, mass: 0.1 }
      : { stiffness: 600, damping: 35, mass: 0.4 },
  );

  const syncMeasureSpan = useCallback(() => {
    const input = inputRef.current;
    const measureSpan = measureRef.current;
    if (!input || !measureSpan) return;

    const styles = window.getComputedStyle(input);
    const isPassword = input.type === "password";

    let calculatedFontSize = styles.fontSize;
    if (
      PASSWORD_CHAR === "\u2022" &&
      isPassword &&
      typeof navigator !== "undefined" &&
      !navigator.userAgent.match(/chrome|chromium|crios/i)
    ) {
      calculatedFontSize = `${parseFloat(calculatedFontSize) + 6.25}px`;
    }

    measureSpan.style.font = `${styles.fontStyle} ${styles.fontWeight} ${calculatedFontSize} ${styles.fontFamily}`;
    measureSpan.style.letterSpacing = styles.letterSpacing;
    measureSpan.style.fontFeatureSettings = styles.fontFeatureSettings;
    measureSpan.style.fontVariationSettings = styles.fontVariationSettings;
  }, []);

  const measurePrefixWidth = useCallback((text: string) => {
    const input = inputRef.current;
    const measureSpan = measureRef.current;
    if (!input || !measureSpan) return null;

    syncMeasureSpan();
    measureSpan.textContent = text;

    const paddingLeft =
      parseFloat(window.getComputedStyle(input).paddingLeft) || 0;

    return text.length > 0
      ? measureSpan.offsetWidth + paddingLeft
      : paddingLeft;
  }, [syncMeasureSpan]);

  const scrollCaretIntoView = (
    target: HTMLInputElement,
    absoluteWidth: number,
  ) => {
    const styles = window.getComputedStyle(target);
    const paddingLeft = parseFloat(styles.paddingLeft) || 0;
    const paddingRight = parseFloat(styles.paddingRight) || 0;
    const maxScroll = Math.max(0, target.scrollWidth - target.clientWidth);
    const visibleRight = target.scrollLeft + target.clientWidth - paddingRight;
    const visibleLeft = target.scrollLeft + paddingLeft;

    if (absoluteWidth > visibleRight) {
      target.scrollLeft = Math.min(
        absoluteWidth - target.clientWidth + paddingRight,
        maxScroll,
      );
      return;
    }

    if (absoluteWidth < visibleLeft) {
      target.scrollLeft = Math.max(0, absoluteWidth - paddingLeft);
    }
  };

  const getCaretIndex = (target: HTMLInputElement): number => {
    try {
      const selectionStart = target.selectionStart;
      const selectionEnd = target.selectionEnd;

      if (selectionStart !== null && selectionStart !== undefined) {
        if (selectionStart === selectionEnd) {
          return selectionStart;
        }
        return target.selectionDirection === "backward"
          ? selectionStart
          : (selectionEnd ?? selectionStart);
      }
    } catch {
      // Fallback for browsers/types blocking selectionStart
    }

    return target.value.length;
  };

  const updateCaretFromInput = useCallback((target: HTMLInputElement) => {
    let hasSelection = false;
    let caretIndex = target.value.length;

    try {
      if (target.selectionStart !== null && target.selectionEnd !== null) {
        hasSelection = target.selectionStart !== target.selectionEnd;
      }
      caretIndex = getCaretIndex(target);
    } catch {
      hasSelection = false;
    }

    const isPassword = target.type === "password";
    const textBeforeCaret = isPassword
      ? PASSWORD_CHAR.repeat(caretIndex)
      : target.value.slice(0, caretIndex);

    const absoluteWidth = measurePrefixWidth(textBeforeCaret);
    if (absoluteWidth === null) return;

    scrollCaretIntoView(target, absoluteWidth);

    const styles = window.getComputedStyle(target);
    const paddingLeft = parseFloat(styles.paddingLeft) || 0;
    const paddingRight = parseFloat(styles.paddingRight) || 0;
    const caretPosition = absoluteWidth - target.scrollLeft;
    const minX = paddingLeft;
    const maxX = target.clientWidth - paddingRight;
    const isCaretVisible =
      caretPosition >= minX - 2 && caretPosition <= maxX + 2;

    caretX.set(Math.min(Math.max(caretPosition, minX), maxX));

    if (!isCaretVisible || hasSelection) {
      caretOpacity.set(0);
      return;
    }

    caretOpacity.set(1);
  }, [measurePrefixWidth, caretX, caretOpacity]);

  const triggerCaretUpdate = useCallback(() => {
    requestAnimationFrame(() => {
      const input = inputRef.current;
      if (input && document.activeElement === input) {
        updateCaretFromInput(input);
      }
    });
  }, [updateCaretFromInput]);

  useEffect(() => {
    const input = inputRef.current;
    if (input && document.activeElement === input) {
      triggerCaretUpdate();
    }
  }, [inputValue, triggerCaretUpdate]);

  useEffect(() => {
    const input = inputRef.current;
    if (input && document.activeElement === input) {
      triggerCaretUpdate();
    }
  }, [type, fontSize, triggerCaretUpdate]);

  useEffect(() => {
    const input = inputRef.current;
    const container = containerRef.current;
    if (!input || !container) return;

    const updateCaretIfFocused = () => {
      if (document.activeElement === input) {
        updateCaretFromInput(input);
      }
    };

    const handleSelectionChange = () => {
      if (document.activeElement !== input) return;
      requestAnimationFrame(updateCaretIfFocused);
    };

    document.addEventListener("selectionchange", handleSelectionChange);
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.addEventListener("loadingdone", updateCaretIfFocused);
      void document.fonts.ready.then(updateCaretIfFocused);
    }
    input.addEventListener("scroll", updateCaretIfFocused);

    const resizeObserver = new ResizeObserver(updateCaretIfFocused);
    resizeObserver.observe(container);

    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
      if (typeof document !== "undefined" && document.fonts) {
        document.fonts.removeEventListener("loadingdone", updateCaretIfFocused);
      }
      input.removeEventListener("scroll", updateCaretIfFocused);
      resizeObserver.disconnect();
    };
  }, [updateCaretFromInput]);

  return (
    <div className={cn(inputWrapperClassName, wrapperClassName)}>
      <div
        ref={containerRef}
        className="relative grid grid-cols-1 p-0 font-sans"
        style={{ caretColor: "transparent", fontSize }}
      >
        <input
          {...props}
          ref={inputRef}
          type={actualType}
          inputMode={actualInputMode}
          placeholder={placeholder}
          className={cn(
            inputClassName,
            "col-start-1 col-end-2 row-start-1 row-end-2 text-inherit",
            className,
          )}
          style={style}
          value={inputValue}
          onFocus={(e) => {
            onFocus?.(e);
            triggerCaretUpdate();
          }}
          onClick={(e) => {
            onClick?.(e);
            triggerCaretUpdate();
          }}
          onPointerDown={(e) => {
            onPointerDown?.(e);
            triggerCaretUpdate();
          }}
          onPointerUp={(e) => {
            onPointerUp?.(e);
            triggerCaretUpdate();
          }}
          onKeyUp={(e) => {
            onKeyUp?.(e);
            triggerCaretUpdate();
          }}
          onKeyDown={(e) => {
            onKeyDown?.(e);
            triggerCaretUpdate();
          }}
          onSelect={(e) => {
            onSelect?.(e);
            triggerCaretUpdate();
          }}
          onChange={(e) => {
            if (!isControlled) setInternalValue(e.target.value);
            onChange?.(e);
            triggerCaretUpdate();
          }}
          onBlur={(e) => {
            caretOpacity.set(0);
            onBlur?.(e);
          }}
        />
        <span
          ref={measureRef}
          aria-hidden
          className="pointer-events-none invisible absolute top-0 left-0 whitespace-pre font-sans"
        />
        <motion.div
          className="bg-primary pointer-events-none col-start-1 col-end-2 row-start-1 row-end-2 h-[1.1em] w-0.5 self-center rounded-full"
          style={{ x: springCaretX, opacity: caretOpacity }}
        />
      </div>
    </div>
  );
};

const Skiper106 = () => {
  return (
    <div className="bg-surface text-text-main flex h-full w-full flex-col items-center justify-center p-6">
      <div className="flex w-full flex-col items-center space-y-4 max-w-[420px]">
        <SmoothInput placeholder="Smooth caret input..." aria-label="Smooth caret input" />
        <Input
          placeholder="Normal input..."
          className="caret-primary"
          aria-label="Normal input"
        />
      </div>
    </div>
  );
};

export { Input, Skiper106, SmoothInput };
