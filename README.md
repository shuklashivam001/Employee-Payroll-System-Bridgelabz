# Employee Payroll System (EPS)

## 📌 Project Overview

The **Employee Payroll System (EPS)** is a server-side web application built using **Node.js**, **Express.js**, and **EJS**.
It allows users to manage employee records and automatically calculate payroll details such as tax and net salary.

The system stores employee data in a local JSON file and follows a modular architecture for cleaner code management.

---

## 🎯 Objective

Build a web application that:

* Displays a dashboard with employee details
* Calculates payroll values dynamically
* Allows adding, editing, and deleting employees
* Persists data in a JSON file
* Uses a custom module for file operations

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **EJS (Embedded JavaScript Templates)**
* **HTML / CSS**
* **fs.promises (File System Module)**

---

## 📂 Project Structure

```
payroll-app/
│
├── modules/
│   └── fileHandler.js      # Custom module for file read/write
│
├── public/
│   └── style.css           # Application styling
│
├── views/
│   ├── index.ejs           # Dashboard (Employee Table)
│   ├── add.ejs             # Add Employee Form
│   └── edit.ejs            # Edit Employee Form
│
├── employees.json          # JSON database
└── server.js               # Main server file
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd payroll-app
```

### 2️⃣ Initialize Project

```bash
npm init -y
```

### 3️⃣ Install Dependencies

```bash
npm install express ejs
```

### 4️⃣ Run the Application

```bash
node server.js
```

Open your browser and go to:

```
http://localhost:3000
```

---

## 🚀 Features

### 🧾 Dashboard

* Displays all employees in a table
* Shows:

  * Employee Name
  * Department
  * Basic Salary
  * Tax (12%)
  * Net Salary

### 💰 Payroll Calculation

Inside the EJS loop:

```
Tax = Basic Salary * 0.12
Net Salary = Basic Salary - Tax
```

### ➕ Add Employee

* Form inputs:

  * Name
  * Department
  * Basic Salary
* Validation:

  * Name cannot be empty
  * Salary cannot be negative
* Salary converted using `Number()`

### ✏️ Edit Employee

* Loads employee data using ID
* Updates existing record

### ❌ Delete Employee

* Remove employee using route:

```
/delete/:id
```

### 💾 Data Persistence

* Data stored inside `employees.json`
* File operations handled via custom module

---

## 🧩 Custom Module (fileHandler.js)

This module handles file operations safely using:

* `fs.promises`
* `try/catch` blocks

### Functions

#### read()

Reads employee data from JSON file.

#### write(data)

Writes updated data back to JSON file.

---

## 📌 Technical Requirements Implemented

✔ Unique IDs using `Date.now()`
✔ Server-side validation
✔ Proper redirection using `res.redirect('/')`
✔ Static files served from `/public` folder
✔ Modular file handling architecture

---

## 🧪 Sample Employee JSON

```json
[
  {
    "id": 1710000000000,
    "name": "John Doe",
    "department": "IT",
    "salary": 30000
  }
]
```

---

## 🔁 Workflow Summary

1. Server starts → reads `employees.json`
2. Data sent to EJS dashboard
3. User performs CRUD operations
4. Updated data written back to JSON file
5. Redirect to dashboard

---

## 📚 Learning Concepts Covered

* Express routing
* EJS templating
* CRUD operations
* File system handling in Node.js
* MVC-style modular architecture
* Data validation

---

## 🧑‍💻 Future Improvements (Optional)

* Add search/filter functionality
* Use UUID instead of Date.now()
* Add REST API endpoints
* Integrate MongoDB
* Add authentication system

---

## 📄 License

This project is created for educational purposes.

---