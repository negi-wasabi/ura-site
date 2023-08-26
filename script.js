// JavaScript functionality
// Fetch tweets and user data from a backend API
// Add event listeners for interactions (e.g., like, retweet, reply)

// Example code
const tweetsSection = document.getElementById('tweets');
const userProfileDiv = document.getElementById('user-profile');
const trendingTopicsDiv = document.getElementById('trending-topics');

// Example function to fetch and display tweets
function fetchAndDisplayTweets() {
    // Fetch tweets from the backend API
    const tweets = fetchTweetsFromAPI();

    // Iterate through tweets and create tweet components
    tweets.forEach(tweet => {
        const tweetDiv = document.createElement('div');
        tweetDiv.classList.add('tweet');
        tweetDiv.innerHTML = `
            <img src="${tweet.userProfileImage}" alt="User Profile">
            <div class="tweet-content">
                <p class="user-name">${tweet.userName}</p>
                <p class="tweet-text">${tweet.text}</p>
                <div class="tweet-actions">
                    <button class="like-button">Like</button>
                    <button class="retweet-button">Retweet</button>
                    <button class="reply-button">Reply</button>
                </div>
            </div>
        `;
        tweetsSection.appendChild(tweetDiv);
    });
}

// Fetch and display user profile
function fetchAndDisplayUserProfile() {
    // Fetch user data from the backend API
    const user = fetchUserDataFromAPI();

    // Display user profile information
    userProfileDiv.innerHTML = `
        <img src="${user.profileImage}" alt="User Profile">
        <p>${user.userName}</p>
        <p>${user.bio}</p>
        <p>Followers: ${user.followers}</p>
        <p>Following: ${user.following}</p>
    `;
}

// Fetch and display trending topics
function fetchAndDisplayTrendingTopics() {
    // Fetch trending topics from the backend API
    const trendingTopics = fetchTrendingTopicsFromAPI();

    // Display trending topics
    trendingTopicsDiv.innerHTML = `
        <h2>Trending Topics</h2>
        <ul>
            ${trendingTopics.map(topic => `<li>${topic}</li>`).join('')}
        </ul>
    `;
}

// 既存のJavaScriptコードをそのまま残します

// ツイートの投稿フォームに対するイベントリスナーを追加
const tweetForm = document.getElementById('tweet-form');
const tweetTextArea = document.getElementById('tweet-text');

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault(); // デフォルトのフォーム送信を防止

    const tweetText = tweetTextArea.value; // ツイートのテキストを取得

    // サーバーにツイートを投稿するためのHTTPリクエストを作成
    // この部分はバックエンドの実装に依存します

    // 例: サーバーにPOSTリクエストを送信
    fetch('/api/tweets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: tweetText }), // ツイートのテキストをJSON形式で送信
    })
    .then(response => response.json())
    .then(data => {
        // サーバーからの応答を処理する
        console.log('Tweet posted:', data);
        // ツイートが成功した場合、画面に表示したり、リストに追加するなどの操作を実行
    })
    .catch(error => {
        console.error('Error posting tweet:', error);
        // エラーが発生した場合、エラーメッセージを表示するなどの操作を実行
    });
    
    // ツイートのテキストエリアをクリア
    tweetTextArea.value = '';
});



// Fetch and display data when the page loads
fetchAndDisplayTweets();
fetchAndDisplayUserProfile();
fetchAndDisplayTrendingTopics();
