# 🎟️ Voucher App

A web application for managing vouchers, registration, and user authentication.  
Built with **Next.js**, **React Hook Form**, and **Tailwind CSS**.

---

## 📌 Features
- **User Registration & Login** — secure signup with password confirmation
- **Voucher Management** — create, view, and manage vouchers
- **Responsive Design** — works on mobile, tablet, and desktop
- **Form Validation** — powered by React Hook Form
- **API Integration** — connects to backend API for data persistence

---

## 🛠️ Tech Stack
- **Frontend:** Next.js, React, Tailwind CSS
- **Form Handling:** React Hook Form
- **API Calls:** Fetch API
- **State Management:** Local state / React Hook Form
- **Notifications:** Sonner
- **Component Library:** Flowbite React

---

## 📂 Project Structure
```
/src/app           → Next.js app routes
/src/features      → Feature modules (auth, dashboard, static pages)
/src/services      → API functions (e.g., registerUser, loginUser)
/src/styles        → Global styles (Tailwind + custom CSS)
/public            → Static assets (images, icons)
/.ENV              → Environment variables
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/voucher-app.git
cd voucher-app
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Environment Variables
Create a `.env.local` file in the root and add:
```env
NEXT_PUBLIC_API_URL=your api
```

### 4️⃣ Run the App
```bash
npm run dev
```
Your app will be available at **http://localhost:3000**.

---

## 🔗 API Endpoints
The app uses a backend API (update `NEXT_PUBLIC_API_URL` as needed):
- `POST /register` — Register a new user
- `POST /login` — Login user
- `GET /vouchers` — Get all vouchers
- `POST /vouchers` — Create a voucher

---

## 🧪 Example Registration Request
```js
await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "John Doe",
    email: "john@example.com",
    password: "secret123",
    password_confirmation: "secret123"
  })
});
```

---

## 📸 Screenshots
_Add screenshots of your app UI here._

---

## 📜 License
This project is licensed under the MIT License — feel free to use and modify it.

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

**Author:** Solomon Tuangpu 
**GitHub:** [solomontuangpu](https://github.com/solomontuangpu)