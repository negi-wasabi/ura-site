document.addEventListener("DOMContentLoaded", function () {
    // ページ読み込み時に1つ目のポップアップを表示
    showPopup("popup1");

    // スクロールイベントを監視し、スクロール時に2つ目のポップアップを表示
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            showPopup("popup2");
        }
    });

    // 3秒後に3つ目のポップアップを表示
    setTimeout(function () {
        showPopup("popup3");
    }, 3000);

    // ポップアップを表示する関数
    function showPopup(id) {
        const popup = document.getElementById(id);
        if (popup) {
            popup.style.display = "block";
        }
    }
});
