// script.js
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key

function fetchChannelData() {
    const query = document.getElementById('channelSearch').value;
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=channel&key=${API_KEY}`;

    fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
            const channelId = data.items[0].id.channelId;
            getChannelDetails(channelId);
        })
        .catch(error => console.error('Error fetching channel data:', error));
}

function getChannelDetails(channelId) {
    const detailsUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,status,brandingSettings&id=${channelId}&key=${API_KEY}`;

    fetch(detailsUrl)
        .then(response => response.json())
        .then(data => {
            displayChannelData(data.items[0]);
        })
        .catch(error => console.error('Error fetching channel details:', error));
}

function displayChannelData(channel) {
    const analyticsDisplay = document.getElementById('analyticsDisplay');

    // RPM rates based on country
    const rpmRates = {
        'US': 7.53, // United States
        'GB': 5.62, // United Kingdom
        'NZ': 5.56, // New Zealand
        'AE': 2.33, // United Arab Emirates
        'PK': 2.5,  // Pakistan
        'IN': 2.5   // India
    };

    // Get country code (default to 'IN' if not available)
    const countryCode = channel.snippet.country || 'IN';
    const rpm = rpmRates[countryCode] || 2.5; // Default RPM if country code is missing

    // Calculate revenue
    const viewCount = channel.statistics.viewCount || 0;
    const revenue = (viewCount / 1000) * rpm; // Revenue = (Views / 1000) * RPM

    // Display all analytics data
    analyticsDisplay.innerHTML = `
        <div class="analytics-block"><strong>Channel ID:</strong> ${channel.id}</div>
        <div class="analytics-block"><strong>Channel Title:</strong> ${channel.snippet.title}</div>
        <div class="analytics-block"><strong>Description:</strong> ${channel.snippet.description}</div>
        <div class="analytics-block"><strong>Subscriber Count:</strong> ${channel.statistics.subscriberCount || 'N/A'}</div>
        <div class="analytics-block"><strong>Video Count:</strong> ${channel.statistics.videoCount}</div>
        <div class="analytics-block"><strong>View Count:</strong> ${viewCount}</div>
        <div class="analytics-block"><strong>Channel Creation Date:</strong> ${new Date(channel.snippet.publishedAt).toLocaleDateString()}</div>
        <div class="analytics-block"><strong>Profile Picture:</strong> <img src="${channel.snippet.thumbnails.default.url}" alt="Profile Picture"></div>
        <div class="analytics-block"><strong>Country:</strong> ${countryCode}</div>
        <div class="analytics-block"><strong>Channel Status:</strong> ${channel.status.privacyStatus}</div>
        <div class="analytics-block revenue-block"><strong>Total Revenue:</strong> $${revenue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
    `;
}
