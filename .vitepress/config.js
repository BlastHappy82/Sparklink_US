import { defineConfig } from 'vitepress';
import sidebar from './option/sidebar.js';
import nav from './option/nav.js';

export default defineConfig({
  title: 'SparkLink PlayJoy',
  description: 'SparkLink PlayJoy',
  logo: '/logo.svg',
  lang: 'en-US',
  base: '/keyboard-docs/',
  lastUpdated: true,
  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/sparklinkplayjoy/keyboard-docs' }],
    nav,
    sidebar,
    search: {
      provider: 'local',
    },
    docFooter: {
      prev: 'Previous page',
      next: 'Next page',
    },
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
    outline: {
      level: [2, 3],
      label: 'Table of Contents',
    },
  },
});
