## **AIPROMPT**

### **AI Prompts Documentation**

---

###  **Overview**

This document outlines the key AI prompts used throughout the development process, along with their outcomes and insights.

---

### **1. Image Editing Prompt**

**Prompt:**
Create the same image but with higher resolution, and change the man's outfit color to:

```js
export const darkblue = 'rgba(19, 41, 106, 1)';
```

---

### **2. UI Library Research – Table Alternatives**

**Prompt:**
Suggest alternatives to MUI Table.

**Top Recommendation:**  **Ant Design (Best Ready-to-Use Option)**

**Why Ant Design?**

* Powerful and fully-featured Table component
* Built-in sorting, pagination, and filtering
* More stable and fewer issues compared to MUI tables
* Widely used in large-scale applications

---

### **3. Installing Ant Design**

**Prompt:**
How to install Ant Design?

**Result:**
Open your project terminal and run:

```bash
npm install antd
```

Or if using Yarn:

```bash
yarn add antd
```

 **Important Step (Don’t Skip):**
Make sure to import the library's CSS file in your project.

---

### **4. Deployment – GitHub Pages**

**Prompt:**
How to deploy a Vite + React application to GitHub Pages?

**Result:**

* Configured Vite base path
* Used `gh-pages` package
* Switched to `HashRouter` for proper routing

---

### ** Conclusion**

AI significantly accelerated the development process by helping with problem-solving, fixing bugs, improving UI logic, and providing efficient implementation guidance.
