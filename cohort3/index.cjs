const { Command } = require("commander");
const program = new Command();
const fs = require("fs");
program
  .name("count")
  .version("1.0.0")
  .command("<file>")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split("\n").length;
        console.log(`tHERE ARE ${lines} in ${file}`);
      }
    });
  });
