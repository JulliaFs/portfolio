import { defineConfig } from 'astro/config';

// `site` entra quando o domínio existir (sitemap e hreflang absolutos).
export default defineConfig({
  trailingSlash: 'never',
  build: { format: 'directory' },
});
