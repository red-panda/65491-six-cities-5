#!/usr/bin/env node
import {CLIApplication, HelpCommand, VersionCommand, ImportCommand } from './cli/index.js';
import {GenerateCommand} from './cli/commands/generate.command.js';

function bootstrap() {
  const cliApplication = new CLIApplication();
  cliApplication.registerCommands([
    new HelpCommand(),
    new VersionCommand(),
    new ImportCommand(),
    new GenerateCommand(),
  ]);

  cliApplication.processCommand(process.argv);
}

bootstrap();
