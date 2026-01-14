# web2-2
# Weather & Country Information Backend Application

## 📌 Project Overview
This project is a backend-driven web application that retrieves and displays real-time weather data for a selected city and additional information about the corresponding country.

All third-party API requests are handled strictly on the server side to ensure security and clean architecture.

---

## 🚀 Features
- Real-time weather data retrieval
- Server-side API integration only
- Additional country-related information
- Clean backend architecture
- Simple and responsive frontend UI

---

## 🛠 Technologies Used
- Node.js
- Express.js
- OpenWeather API
- REST Countries API
- HTML, CSS, JavaScript

---

## 🌦 APIs Used

### 1. OpenWeather API (Core API)
Used to retrieve real-time weather data, including:
- Temperature
- Feels-like temperature
- Weather description
- Coordinates
- Wind speed
- Country code
- Rain volume for the last 3 hours

### 2. REST Countries API (Additional API)
Used to retrieve country-related information:
- Country region
- Population

---

## 📂 Project Structure
weather-backend-app/
│── server.js
│── package.json
│── .env
│── README.md
│
└── public/
│── index.html
│── style.css
└── script.js

---

## ⚙️ Setup Instructions

1. Clone the repository:
2. git clone https://github.com/your-username/weather-backend-app.git

2. Install dependencies:
npm install

3. Create a `.env` file in the project root and add your OpenWeather API key:
WEATHER_API_KEY=7c9f1a2b3d4e5f6g8h9

4. Start the server:
npm start

5. Open the application in your browser:
http://localhost:3000

---

## 🧠 Design Decisions
- All external API requests are processed on the server side
- API keys are stored in environment variables for security
- Backend aggregates data from multiple APIs into a single JSON response
- Frontend is responsible only for data presentation

---

## 🧪 Example API Request
GET /api/weather?city=London

---

## 🎓 Educational Purpose
This project was developed as part of **Assignment 2: Backend API Integration & Service Development** to demonstrate server-side API integration, clean project structure, and backend logic.







