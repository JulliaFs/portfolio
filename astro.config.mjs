import { defineConfig } from 'astro/config';

// GitHub Pages: o site fica em julliafs.github.io/portfolio. Com domínio próprio, trocar `site` e tirar `base`.
export default defineConfig({
  site: 'https://julliafs.github.io',
  base: '/portfolio',
  trailingSlash: 'never',
  build: { format: 'directory' },
});
