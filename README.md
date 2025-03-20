# 🎥 YouTube Analytics Tool

## 🌟 Overview
A modern, futuristic YouTube Analytics Tool that allows users to search for any YouTube channel and display detailed analytics. The tool fetches real-time data using the YouTube Data API v3 and displays the information in a clean, interactive, and responsive design. It also includes interactive charts for data visualization.

## ✨ Features

### 🔍 Search Functionality
- Search by YouTube channel name, URL, or handle (e.g., @username).
- Real-time data fetching using the YouTube Data API v3.

### 📊 Analytics Display
- Channel ID, Title, Description, Custom URL (Handle).
- Subscriber Count, Video Count, Lifetime Views.
- Channel Creation Date, Profile Picture, Country, Status.
- Related Playlists, Keywords (if available).

### 💰 Revenue Calculation
- Calculate estimated revenue based on total views and country-specific RPM rates.

### 🎨 Design
- Dark theme with neon accents.
- Fully responsive layout for desktop, tablet, and mobile.
- Smooth animations and hover effects.

## 🛠️ Technologies Used

### Frontend
- HTML5, CSS3 (Flexbox, Grid)
- JavaScript (ES6+)
- Chart.js for data visualization

### API
- YouTube Data API v3

## 🚀 How to Set Up and Run

### Step 1: Get a YouTube Data API Key
1. Go to the **Google Cloud Console**.
2. Create a new project (e.g., `YouTube Analytics Tool`).
3. Enable the **YouTube Data API v3**:
   - Navigate to `APIs & Services > Library`.
   - Search for `YouTube Data API v3` and click **Enable**.
4. Create an API key:
   - Go to `APIs & Services > Credentials`.
   - Click **Create Credentials > API Key**.
   - Copy the generated API key.

### Step 2: Add the API Key to the Project
Open the `script.js` file in the project and replace `YOUR_API_KEY` with your actual API key:

```javascript
const API_KEY = 'YOUR_API_KEY'; // Replace with your API key
```

### Step 3: Run the Project

#### Local Setup
1. Download or clone the repository.
2. Open the `index.html` file in your browser.
3. Ensure your API key is unrestricted or allows `http://localhost`.

#### Live Server
- Use a local development server like **Live Server** in VS Code.
- Right-click on `index.html` and select **Open with Live Server**.

#### Production Deployment
- Host the project on platforms like **GitHub Pages, Netlify, or Vercel**.
- Ensure your API key is restricted to your domain for security.

## 📂 Project Structure
```
youtube-analytics-tool/
├── index.html          # Main HTML file
├── styles.css          # CSS styles for the project
├── script.js           # JavaScript for API integration and interactivity
├── README.md           # Project documentation
└── assets/             # Optional folder for images/icons
```

## 🖥️ Usage
1. Open the tool in your browser.
2. Enter a **YouTube channel name, URL, or handle** in the search box.
3. Click **See Analytics**.
4. View detailed analytics and interactive charts.

## 📝 Example Inputs
- **Channel URL**: `https://www.youtube.com/channel/UC_x5XG1OV2P6uZZ5FSM9Ttw`
- **Handle**: `@YouTube`
- **Search Query**: `"MrBeast"`

## ⚠️ Error Handling
- If the channel is not found, an error message will be displayed.
- Missing data (e.g., related playlists or keywords) will show as **"N/A"**.
- API errors (e.g., quota exceeded) will display a user-friendly message.

## 🎨 Customization

### Styling
- Update colors in `styles.css` under the `:root` variables.
- Modify the gradient banner or neon accents.

### Charts
- Customize chart types and data in the `createCharts()` function in `script.js`.

### Revenue Calculation
- Update RPM rates in the `rpmRates` object in `script.js`.

## 🤝 Contributing
Contributions are welcome! Follow these steps:
1. **Fork** the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a **pull request**.

## 📜 License
This project is licensed under the **MIT License**. See the `LICENSE` file for details.
