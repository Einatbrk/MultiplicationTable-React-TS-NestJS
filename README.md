# 📊 Multiplication Table Game

An interactive **Multiplication Table Game** built with **React + TypeScript** for the frontend and **NestJS** for the backend.  
The game includes a global leaderboard, real-time scoring, and an interactive UI for children.



---

## 🚀 **Features**
✅ Interactive multiplication game  
✅ Global state management with Zustand  
✅ Simple and clean UI  
✅ Leaderboard stored in the backend  
✅ Smooth and fast user experience  
✅ **Live version running on VPS**  : https://81-28-7-55.cloud-xip.com/multiplicationGame/

---

## 📦 **Installation & Running Locally**
To run the project on your local machine, follow these steps:

### **1️⃣ Clone the repository**
```
git clone https://github.com/Einatbrk/MultiplicationTable-React-TS-NestJS.git
cd MultiplicationTable-React-TS-NestJS
```

---

## **🖥️ Running the Backend (NestJS)**
📌 Navigate to the **backend folder**:
```
cd back
```

### **Install dependencies**
```
npm install
```

### **Run the backend server**
```
npm start
```
✅ The backend will now be running locally on **`http://localhost:3001/`**,  
but the frontend is configured to use the **live VPS backend** instead.

---

## **🖥️ Running the Frontend (React)**
📌 Open a new terminal and navigate to the **frontend folder**:
```
cd Front
```

### **Install dependencies**
```
npm install
```

### **Environment Variables**
The frontend is configured to communicate with the **VPS backend** using the following `.env` file:

📁 **Front/.env**  
```
VITE_API_BASE_URL=https://81-28-7-55.cloud-xip.com/multiplicationGame/api
VITE_PUBLIC_URL=/multiplicationGame
```

📢 **This means that even when running locally, API requests will go to the live VPS backend.**  
📢 **If you want to test with a local backend, update `VITE_API_BASE_URL` to `http://localhost:3001`.**

### **Run the frontend**
```
npm run dev
```
✅ The frontend will now be running at **`http://localhost:5173/multiplicationGame/`**.

---

## 🔧 **Tech Stack**
This project is built with:  
### **Frontend**
- ⚛️ **React 18** + **TypeScript**  
- 📦 **Zustand** – Global state management  
- ⚡ **Vite** – Fast development environment  
- 🌐 **Axios** – API requests  

### **Backend**
- 🏗️ **NestJS** – Scalable backend framework   
---
Future Plans & Upcoming Features
We have exciting plans for the future development of this project! Here are some key features that are currently in the pipeline:

1️⃣ UI/UX Improvement – Migrating from SCSS to modern styling libraries for better maintainability and performance.
2️⃣ Enhanced Score Feedback – Adding additional modals for milestone achievements, such as reaching a perfect score of 100.
3️⃣ Game Timer – Implementing a per-game timer, which will eventually play a role in leaderboard rankings.
4️⃣ MongoDB Database Integration – Introducing a user database to manage teachers and students efficiently.
5️⃣ Teacher Dashboard – Secure login for teachers to:

Access student performance data.
Add new students to their classes.
View detailed analytics and progress reports.
Export reports and send them via email.
6️⃣ Student Accounts – In addition to the open-access gameplay, students will be able to log in using a username and password.
Their scores and progress will be stored and linked to their teacher's dashboard.
This will enable personalized tracking and performance analysis.
📌 Want to contribute? Feel free to submit feature requests, ideas, or even PRs! 🚀

---

## 🏆 **Contributing**
We welcome contributions! If you’d like to improve the project, follow these steps:  
1. **Fork the repository**  
2. **Create a feature branch (`git checkout -b feature-name`)**  
3. **Commit your changes (`git commit -m "Added new feature"`)**  
4. **Push to the branch (`git push origin feature-name`)**  
5. **Open a Pull Request**  

We’ll review your changes and merge them if they fit the project! 🚀  

---

## 📞 **Contact**
🔹 **Developer:** [Einat Brk](https://github.com/Einatbrk)  
🔹 **Email:** einat.barak3@gmail.com  

💥 **Enjoy the game and break records on the leaderboard!** 🏆🔥  
