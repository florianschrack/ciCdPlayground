import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Florian Schrack (Trainer)",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Build and deployment pipelines", "Automation", "DevOps"],
    // Which CI/CD tools do you use in your project?
    tools: "Jenkins, Azure DevOps",
    // What do you want to learn in this workshop?
    expectations: ["Share experiences about different CI/CD solutions"],
  },
});
