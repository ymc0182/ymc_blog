import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: cloudflare(),


  //主题配置（不用的注释掉）
  theme: {
    //网站名称
    siteTitle: "",

    //网站描述
    siteDescription: "",

    //网站关键字
    siteKeywords: ['Astro', 'Blog'],

    //网站Logo
    siteLogo: "",
  },
});