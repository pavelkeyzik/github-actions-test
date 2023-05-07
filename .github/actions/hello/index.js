import core from "@actions/core";
import github from "@actions/github";

try {
  // Get input
  const name = core.getInput("who-to-greet");
  console.log(`Hello ${name}`);

  // Set output
  const time = new Date();
  core.setOutput("time", time.toTimeString());

  console.log(JSON.stringify(github, null, 2));
} catch (error) {
  // Workflow won't be failed until we use `setFailed`
  // even if the code is actually broken

  // Set error message
  core.setFailed(`Error: ${error.message}`);
}
