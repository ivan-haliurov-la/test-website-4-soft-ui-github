import type { Config } from "@level-ci/cli";
export default {
  organization: "ivan-haliurov-7-userway-org",
  project: "test-website-4-soft-ui-github-1",
  token: process.env.LEVEL_CI_TOKEN,
  reportPaths: ["./level-ci-reports"],
  server: "https://api.qa.userway.dev",
} satisfies Config;
