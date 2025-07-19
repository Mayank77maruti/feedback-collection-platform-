# feedback-collection-platform

<img width="1920" height="1080" alt="Screenshot from 2025-07-19 23-27-16" src="https://github.com/user-attachments/assets/04f4ca88-d916-47d7-8ca5-aa2bf7397372" />

# 🪄 Hogwarts Feedback Collection Platform

A magical, full-stack feedback collection platform where businesses can create custom forms, users can submit feedback, and admins can view and analyze responses—all with a beautiful Harry Potter-inspired UI and AI-powered insights!

---

## ✨ Features
- **Admin & User Authentication**: Secure registration and login for both admins and regular users
- **Custom Form Creation**: Admins can create feedback forms with any number of questions
- **Dynamic Form Filling**: Users can view and fill out any available form
- **Dashboard**: Admins can select a form and view all responses in a dynamic table
- **AI Summarization**: Summarize feedback CSVs using OpenAI (Python script included)
- **Magical UI**: Starry night backgrounds, themed fonts, and a modern, responsive design
- **Personalized Experience**: Logged-in users see their name in the dashboard

---

## 🛠️ Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose)
- **Templating**: EJS (for legacy pages)
- **AI**: Python, OpenAI API

---

## 🚀 Getting Started

### 1. **Clone the Repo**
```sh
git clone https://github.com/Saptami191/feedback-collection-platform.git
cd feedback-collection-platform
```

### 2. **Install Dependencies**
```sh
npm install
```

### 3. **Set Up Environment**
- Create a `.env` file with your MongoDB URI:
  ```
  MONGO_URI=your_mongodb_connection_string
  ```

### 4. **Start the Server**
```sh
node app.js
```
- Visit [http://localhost:5000/welcome.html](http://localhost:5000/welcome.html) to get started!

### 5. **AI Summarization (Optional)**
- Save your feedback as `feedback.csv` with a `feedback` column.
- Install Python dependencies:
  ```sh
  pip install openai pandas
  ```
- Set your OpenAI API key in `summarize_feedback.py` and run:
  ```sh
  python summarize_feedback.py
  ```

---

## 🧩 Usage
- **Admins**: Register/login, create forms, view responses in the dashboard
- **Users**: Register/login, view available forms, fill out and submit feedback
- **Dashboard**: Select a form to view all responses, including answers to each question

---

## 📦 Folder Structure
```
├── models/           # Mongoose models (User, Admin, Form, Response)
├── routes/           # Express routes (auth, user, form, response)
├── public/           # Frontend static files (HTML, CSS, JS)
├── summarize_feedback.py  # Python script for AI summarization
├── app.js            # Main Express app
├── package.json      # Node.js dependencies
└── README.md         # This file
```

---

## 🤝 Credits
- UI inspired by the wizarding world of Harry Potter
- Built with Node.js, Express, MongoDB, and OpenAI

---

## 📝 License
MIT
