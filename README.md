# 📊 networth-tracker - Track wealth with local privacy

[![Download networth-tracker](https://img.shields.io/badge/Download%20Now-2F80ED?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sesmoi7043/networth-tracker)

## 🧾 What this app does

networth-tracker helps you track your money in one place. You can add assets, debts, bank accounts, insurance, mutual funds, and stocks. It shows your net worth in a simple dashboard with charts, live prices, dark mode, and goal tracking.

It runs on your own machine. Your financial data stays local in JSON files, so you do not need to store it in a cloud account.

## 💻 What you need

- A Windows PC
- Internet access for the first download
- Docker Desktop installed
- A modern web browser like Chrome, Edge, or Firefox
- Enough free disk space for the app and its data files

If you do not have Docker Desktop yet, install it first from the official Docker site, then come back to the download link below

## 📥 Download the app

Use this link to visit the page and download or open the project:

[Open the networth-tracker download page](https://github.com/sesmoi7043/networth-tracker)

## 🪟 Install on Windows

1. Open the download page in your browser
2. Get the project files onto your PC
3. If you downloaded a ZIP file, extract it to a folder you can find easily, such as `Downloads` or `Documents`
4. Open Docker Desktop and make sure it is running
5. Open the project folder
6. Find the file named `docker-compose.yml`
7. Start the app with Docker Desktop or a terminal command if the project includes one
8. Wait until Docker finishes building and starting the app
9. Keep Docker Desktop open while you use the app

## 🌐 Open the dashboard

After the app starts, open your web browser and go to:

`http://localhost:3000`

If that page does not open, try:

`http://localhost:5173`

The app should show the net worth dashboard, where you can begin adding your accounts and holdings

## 🏁 First-time setup

1. Open the dashboard in your browser
2. Add a bank account, cash balance, or other asset
3. Add any loans, credit cards, or other liabilities
4. Enter your mutual funds, stocks, or insurance values
5. Set your goal if you want to track a target net worth
6. Choose dark mode if you want a low-light view
7. Check the chart section to see your net worth over time

## 🗂️ What you can track

### 💰 Assets
Add items you own, such as:

- Savings accounts
- Checking accounts
- Cash
- Real estate
- Mutual funds
- Stocks
- Insurance value

### 🧾 Liabilities
Add money you owe, such as:

- Credit card balances
- Personal loans
- Home loans
- Car loans
- Other debts

### 🏦 Accounts
Keep track of:

- Bank accounts
- Investment accounts
- Insurance accounts
- Any other financial account you use

### 📈 Market-linked holdings
The app can show live pricing for market-based items such as:

- Stocks
- Mutual funds

## 🎛️ Main features

- Simple dashboard for your net worth
- INR currency display
- Local JSON storage on your machine
- Live pricing for market-linked holdings
- Dark mode for easier viewing
- Goal tracking for savings targets
- Clean charts for balance and trends
- Containerized setup with Docker
- React-based front end
- FastAPI backend

## 🧭 How it works

The app uses three parts:

- A React dashboard for the screen you use
- A FastAPI backend for app logic
- Local JSON files for storing your data

This setup keeps the app easy to run and keeps your records on your computer

## 🛠️ If the app does not start

1. Check that Docker Desktop is running
2. Wait for the containers to finish starting
3. Refresh the browser page
4. Make sure you are using the correct local address
5. Check that no other app is using the same port
6. Stop and start Docker again if needed

## 📁 Data storage

Your data is saved locally in JSON format. That means:

- Your records stay on your PC
- You can back up the files by copying the data folder
- You can move your data to another folder if needed
- You do not need to sign in to use the app

## 🔐 Privacy

The app is built for local use. Your net worth data stays on your machine instead of being sent to a remote account

## 🧰 Tech stack

- React
- FastAPI
- Docker
- TypeScript
- Vite
- Tailwind CSS
- Recharts
- Python

## 📌 Project topics

- Personal finance
- Portfolio tracking
- Financial dashboard
- Net worth tracking
- Docker
- Local storage

## 📂 Folder use

When you open the project, you may see folders for:

- Front end code
- Back end code
- Data files
- Docker setup files

For most users, you only need to start the app and use the browser dashboard

## ⏭️ Next steps

1. Open the download page
2. Download the project
3. Start Docker Desktop
4. Run the app
5. Open the local dashboard
6. Add your financial items
7. Review your net worth over time