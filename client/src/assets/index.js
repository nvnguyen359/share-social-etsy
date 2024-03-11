
window.addEventListener('load', (event) => {
});
function jsRun() {
  var btns = document.querySelectorAll(".menu  a");
  btns.forEach((btn, index) => {
    if (btn.textContent == "Tất Cả") {
      btn.classList.add("active");
    }
    if (btn) {
      btn.addEventListener("click", () => {
        let btns = document.querySelectorAll(".menu  a");
        btns.forEach((btn) => {
          btn.classList.remove("active");
        });
        localStorage.setItem("url", btn.getAttribute("data-id"));
        btn.classList.add("active");
      });
    }
  });
}
