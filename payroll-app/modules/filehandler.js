const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "..", "employees.json");

// read employee data
async function read() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.log("Error reading file:", error.message);
    return [];
  }
}

module.exports = { read };
