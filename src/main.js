import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Florian Schrack",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Build pipelines"],
    // Which CI/CD tools do you use in your project?
    tools: "Azure DevOps",
    // What do you want to learn in this workshop?
    expectations: ["Share experiences with different CI/CD solutions"],
  },
});
