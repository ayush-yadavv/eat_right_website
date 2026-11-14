import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';

export default function robots(): MetadataRoute.Robots {
  const aiSearchBots = [
    // OpenAI / SearchGPT / ChatGPT Search
    'OAI-SearchBot',
    'ChatGPT-User',
    'GPTBot',

    // Anthropic / Claude
    'ClaudeBot',
    'Claude-Web',
    'anthropic-ai',

    // Perplexity AI
    'PerplexityBot',
    'Perplexity-User',

    // Google AI / Gemini Grounding
    'Google-Extended',
    'GoogleOther',
    'GoogleOther-Image',
    'GoogleOther-Video',

    // Apple Intelligence & Siri
    'Applebot',
    'Applebot-Extended',

    // Meta AI
    'Meta-ExternalAgent',
    'Meta-ExternalFetcher',

    // Microsoft Copilot & Bing
    'Bingbot',
    'Copilot',

    // Amazon Rufus & Alexa
    'Amazonbot',

    // Cohere
    'cohere-ai',

    // Mistral AI
    'MistralAI',

    // You.com AI Search
    'YouBot',

    // DuckDuckGo AI
    'DuckAssistBot',

    // ByteDance / Doubao
    'Bytespider',

    // DeepSeek
    'DeepSeek',
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/app/r/'],
        disallow: ['/api/', '/thank-you'],
      },
      {
        userAgent: aiSearchBots,
        allow: ['/', '/app/r/'],
        disallow: ['/api/', '/thank-you'],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}

