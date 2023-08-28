// JavaScriptをここに追加

// ポップアップ広告の表示と非表示を制御する関数
function showPopupAd(index) {
    const popupAds = document.querySelectorAll('.popup-ad');
    popupAds[index].style.display = 'block';
}

function hidePopupAd(index) {
    const popupAds = document.querySelectorAll('.popup-ad');
    popupAds[index].style.display = 'none';
}

// ページ読み込み時に実行される初期化関数
function init() {
    // ページ読み込み時の初期化処理をここに追加

    // ポップアップ広告の初期化
    const popupAds = document.querySelectorAll('.popup-ad');
    for (let i = 0; i < popupAds.length; i++) {
        popupAds[i].style.display = 'none';
    }

    // ポップアップ広告の表示タイミングを設定
    setTimeout(() => showPopupAd(0), 5000);
    setTimeout(() => showPopupAd(1), 10000);
    setTimeout(() => showPopupAd(2), 15000);
}

// ページ読み込み完了時に初期化関数を実行
window.onload = init;
