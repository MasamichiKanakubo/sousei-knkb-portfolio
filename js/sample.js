// CSSクラスが namebox である要素をクリックした時にその内容をアラートボックスに出力する．
// document.querySelector('.namebox').addEventListener('click', (event) => {
//   const text = event.target.innerText;
//   // アラートボックスに出力する．
//   alert(text);
// });

// JavaScriptのプログラムを追加する場合，下に書いてください．
/* ここから */

const modal = document.getElementById("imageModal");
const img = document.getElementById("profile-img");
const modalImg = document.getElementById("modal-img");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}

modalImg.onclick = function () {
  modal.style.display = "none";
}

/* ここまで */
