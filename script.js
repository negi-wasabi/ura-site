document.addEventListener("DOMContentLoaded", () => {
    const postForm = document.getElementById("post-form");
    const authorInput = document.getElementById("author");
    const messageInput = document.getElementById("message");
    const postsList = document.getElementById("posts-list");

    postForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const author = authorInput.value;
        const message = messageInput.value;

        if (author.trim() === "" || message.trim() === "") {
            alert("名前とメッセージを入力してください");
            return;
        }

        // 新しい投稿を作成
        const postItem = document.createElement("li");
        postItem.innerHTML = `<strong>${author}</strong>: ${message}`;
        postsList.appendChild(postItem);

        // フォームをクリア
        authorInput.value = "";
        messageInput.value = "";
    });
});
