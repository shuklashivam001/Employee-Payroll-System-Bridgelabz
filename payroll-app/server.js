const express = require("express");
const fileHandler = require("./modules/filehandler");

const app = express();
const PORT = 3000;

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);

  const employees = await fileHandler.read();
  console.log("Employee Data:", employees);
});
