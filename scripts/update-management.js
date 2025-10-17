const { execSync } = require("child_process");
const prompts = require("prompts");

const API_VERSIONS = ["unstable", "2022-10"];

async function main() {
  const questions = [
    {
      type: "select",
      name: "version",
      message: "Select API version:",
      choices: API_VERSIONS.map((version) => ({
        title: version,
        value: version,
      })),
      initial: 0,
    },
  ];

  // Only prompt for account ID if not set via environment variable
  if (!process.env.X_ACCOUNT_ID) {
    questions.push({
      type: "text",
      name: "accountId",
      message: "Enter Account ID:",
    });
  }

  // Only prompt for API key if not set via environment variable
  if (!process.env.X_API_KEY) {
    questions.push({
      type: "password",
      name: "apiKey",
      message: "Enter API key:",
    });
  }

  const response = await prompts(questions);

  if (!response.version) {
    console.log("No version selected. Exiting.");
    process.exit(1);
  }

  const accountId = process.env.X_ACCOUNT_ID || response.accountId;
  const apiKey = process.env.X_API_KEY || response.apiKey;

  if (!accountId) {
    console.log("No Account ID provided. Exiting.");
    process.exit(1);
  }

  if (!apiKey) {
    console.log("No API key provided. Exiting.");
    process.exit(1);
  }

  console.log(`\nUpdating management with API version: ${response.version}\n`);

  const command = `genql --endpoint https://management.api.basta.app/graphql --output ./src/management-api/generated --header "X-BASTA-API-VERSION: ${response.version}" --header "X-ACCOUNT-ID: ${accountId}" --header "X-API-KEY: ${apiKey}"`;

  try {
    execSync(command, { stdio: "inherit" });
    console.log("\n✅ Management updated successfully");
  } catch (error) {
    console.error("\n❌ Failed to update management");
    process.exit(1);
  }
}

main();
