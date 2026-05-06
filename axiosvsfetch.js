const axios = require("axios");
async function main() {
  fetch("https:://sun-server.100xdevs.com/todos").then(async (response) => {
    const data = await response.json;
    console.log(data.todos.length);
  });
}

async function max() {
  const response = await axios.get("https:://sun-server.100xdevs.com/todos");
  //response.data
  console.log(response.data);
}
