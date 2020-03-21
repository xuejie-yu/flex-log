#!/usr/bin/env node

const {program} = require("commander");
const cp = require("child_process");
const bunyan = require('bunyan');
const logger = bunyan.createLogger({name: "flex-log"});
const argv = process.argv;

program
	.version("0.1.0")
	.option("-p, --port <number>", "Running log UI on specified port")
	.parse(argv);

const uiServer = require("./web/index");

const PORT = program.port || 8080;

uiServer.init(PORT, logger);

const targetProcess = cp.spawn("node", program.args);

targetProcess.stdout.on("data", data => {
	const dataString = data.toString();
	logger.info(`Received log: ${dataString}`);
  uiServer.getIO().emit("log", dataString);
});

targetProcess.stderr.on("data", data => {
  logger.error(`stderr: ${data}`);
});

targetProcess.on("close", code => {
  logger.info(`Process exited with code ${code}`);
});