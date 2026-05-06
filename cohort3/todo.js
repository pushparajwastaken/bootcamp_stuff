const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

const FILE = "todo.txt";

program
  .name("todo")
  .description("CLI to add, list and delete todos")
  .version("1.0.0");

// ADD TODO
program
  .command("add")
  .description("add a todo in a file")
  .argument("<todo>", "todo to add")
  .action((todo) => {
    try {
      fs.appendFileSync(FILE, todo + "\n", "utf-8");
      console.log("✅ Todo added");
    } catch (error) {
      console.error("❌ Error adding todo");
    }
  });

// LIST TODOS
program
  .command("list")
  .description("list all todos")
  .action(() => {
    try {
      const data = fs.readFileSync(FILE, "utf-8");
      const todos = data.split("\n").filter(Boolean);

      if (todos.length === 0) {
        console.log("No todos found");
        return;
      }

      todos.forEach((t, i) => {
        console.log(`${i + 1}. ${t}`);
      });
    } catch (error) {
      console.error("❌ Error reading todos");
    }
  });

// DELETE TODO
program
  .command("delete")
  .description("delete a todo")
  .argument("<index>", "index of todo to delete")
  .action((index) => {
    try {
      const data = fs.readFileSync(FILE, "utf-8");
      const todos = data.split("\n").filter(Boolean);

      const i = parseInt(index) - 1;

      if (i < 0 || i >= todos.length) {
        console.log("❌ Invalid index");
        return;
      }

      todos.splice(i, 1);

      fs.writeFileSync(FILE, todos.join("\n") + "\n");
      console.log("🗑️ Todo deleted");
    } catch (error) {
      console.error("❌ Error deleting todo");
    }
  });

program.parse();
