import { defineConfig } from '@ice/pkg';

// https://pkg.ice.work/reference/config/
export default defineConfig({
  plugins: [
    [
      '@ice/pkg-plugin-docusaurus',
      {
        baseUrl: "/easyHooks",
        title: "tales-easy-hooks",
        navBarTitle: "tales-easy-hooks"
      },
    ],
  ],
});
