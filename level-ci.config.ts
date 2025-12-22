import type { Config } from "@level-ci/cli";
export default {
  organization: "ivan-haliurov-levelaccess-com-hspeq",
  project: "test-website-4-soft-ui-github",
  token: process.env.LEVEL_CI_TOKEN,
  reportPaths: ["./level-ci-reports"],
  server: "https://api.dev.userway.dev",
} satisfies Config;
