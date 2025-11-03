const { execSync } = require("node:child_process");
const prompts = require("prompts");

const API_VERSIONS = ["2022-10", "unstable"];

async function main() {
  const response = await prompts({
    type: "select",
    name: "version",
    message: "Select API version:",
    choices: API_VERSIONS.map((version) => ({
      title: version,
      value: version,
    })),
    initial: 0,
  });

  if (!response.version) {
    console.log("No version selected. Exiting.");
    process.exit(1);
  }

  console.log(`\nUpdating client with API version: ${response.version}\n`);

  const command = `genql --endpoint https://client.api.basta.app/graphql --output ./src/client-api/generated --header "X-BASTA-API-VERSION: ${response.version}"`;

  try {
    execSync(command, { stdio: "inherit" });
    console.log("\n✅ Client updated successfully");
  } catch (_error) {
    console.error("\n❌ Failed to update client");
    process.exit(1);
  }

  // Update the CLIENT_API_VERSION constant in constants.ts
  console.log("\nUpdating CLIENT_API_VERSION constant...");
  try {
    const fs = require("node:fs");
    const constantsPath = "./src/constants.ts";
    let constantsContent = fs.readFileSync(constantsPath, "utf8");

    // Replace the CLIENT_API_VERSION value
    constantsContent = constantsContent.replace(
      /export const CLIENT_API_VERSION = ".*";/,
      `export const CLIENT_API_VERSION = "${response.version}";`,
    );

    fs.writeFileSync(constantsPath, constantsContent, "utf8");
    console.log("✅ CLIENT_API_VERSION constant updated");
  } catch (error) {
    console.error("❌ Failed to update CLIENT_API_VERSION constant:", error);
    process.exit(1);
  }
}

main();
