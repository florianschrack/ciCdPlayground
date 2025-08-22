import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Florian Schrack",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Automation", "Build/deployment pipelines", "Blinking tests"],
    // Which CI/CD tools do you use in your project?
    tools: "Recently migrated from Jenkins to Azure DevOps",
    // What do you want to learn in this workshop?
    expectations: ["Introduce basic concepts and some CI/CD tools", "Share experience with different CI/CD tools"],
  },
});
