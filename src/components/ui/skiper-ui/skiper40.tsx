"use client";

import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

type SkiperLinkProps = React.ComponentProps<typeof Link> & {
  children: React.ReactNode;
  className?: string;
};

const Link000 = ({
  children,
  href,
  className,
  ...props
}: SkiperLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center text-inherit transition-colors",
        "before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:h-[0.08em] before:w-full before:bg-current before:content-['']",
        "before:origin-right before:scale-x-0 before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)]",
        "hover:before:origin-left hover:before:scale-x-100",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

const Link001 = ({
  children,
  href,
  className,
  ...props
}: SkiperLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center text-inherit transition-colors",
        "before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:h-[0.08em] before:w-full before:bg-current before:content-['']",
        "before:origin-right before:scale-x-0 before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)]",
        "hover:before:origin-left hover:before:scale-x-100",
        className,
      )}
      {...props}
    >
      {children}
      <svg
        className="ml-[0.3em] size-[0.55em] translate-y-0.5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none"
        fill="none"
        viewBox="0 0 10 10"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M1.004 9.166 9.337.833m0 0v8.333m0-8.333H1.004"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};

const Link002 = ({
  children,
  href,
  className,
  ...props
}: SkiperLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center text-inherit transition-colors",
        "before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:h-[0.08em] before:w-full before:bg-current before:content-['']",
        "before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)]",
        "hover:before:origin-right hover:before:scale-x-100",
        className,
      )}
      {...props}
    >
      {children}
      <svg
        className="ml-[0.3em] size-[0.55em] translate-y-0.5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none"
        fill="none"
        viewBox="0 0 10 10"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M1.004 9.166 9.337.833m0 0v8.333m0-8.333H1.004"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};

const Link003 = ({
  children,
  href,
  className,
  ...props
}: SkiperLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center text-inherit transition-colors",
        "before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:h-[0.08em] before:w-full before:bg-current before:content-['']",
        "before:origin-center before:scale-x-0 before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)]",
        "hover:before:scale-x-100",
        className,
      )}
      {...props}
    >
      {children}
      <svg
        className="ml-[0.3em] size-[0.55em] translate-y-0.5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none"
        fill="none"
        viewBox="0 0 10 10"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M1.004 9.166 9.337.833m0 0v8.333m0-8.333H1.004"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};

const Link004 = ({
  children,
  href,
  className,
  ...props
}: SkiperLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center px-2 py-0.5 text-inherit transition-colors",
        "before:pointer-events-none before:absolute before:left-0 before:w-full before:bg-primary before:content-['']",
        "before:origin-center before:h-0 before:scale-x-100 before:transition-all before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)]",
        "before:z-0 hover:before:h-full before:rounded-md hover:text-primary-foreground",
        className,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  );
};

const Link005 = ({
  children,
  href,
  className,
  ...props
}: SkiperLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center px-2 py-0.5 text-inherit transition-colors",
        "before:pointer-events-none before:absolute before:left-0 before:w-full before:bg-primary before:content-['']",
        "before:origin-left before:h-full before:scale-x-0 before:transition-all before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)]",
        "before:z-0 hover:before:scale-x-100 before:rounded-md hover:text-primary-foreground",
        className,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  );
};

const Skiper40 = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-6">
      <Link000 href="#link0">Minimal Underline Link</Link000>
      <Link001 href="#link1">Animated Arrow Link</Link001>
      <Link002 href="#link2">Left Origin Link</Link002>
      <Link003 href="#link3">Center Expand Link</Link003>
    </div>
  );
};

export { Link000, Link001, Link002, Link003, Link004, Link005, Skiper40 };

/**
 * Skiper 40 Animated Link — React + Next.js
 * Author: @gurvinder-singh02
 * Website: https://gxuri.me | https://skiper-ui.com/v1/skiper40
 */
