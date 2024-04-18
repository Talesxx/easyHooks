import { defineConfig } from '@ice/pkg';

// https://pkg.ice.work/reference/config/
export default defineConfig({
  plugins: [
    [
      '@ice/pkg-plugin-docusaurus',
      {
        title: "easy-hooks",
        navBarTitle: "easy-hooks"
      },
    ],
  ],
});
