import { Command } from "commander";
import { renderApp } from "./lib";
const program = new Command();

program.name("ink-test").version("0.1.0");

program.command("play").action(async () => {
  await renderApp();
});

program.parseAsync();
