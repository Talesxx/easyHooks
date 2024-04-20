import { defineConfig } from '@ice/pkg';

// https://pkg.ice.work/reference/config/
export default defineConfig({
  plugins: [
    [
      '@ice/pkg-plugin-docusaurus',
      {
        baseUrl: "/easyHooks",
        title: "easy-hooks",
        navBarTitle: "easy-hooks"
      },
    ],
  ],
});
