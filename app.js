const notifiContainer = document.querySelector(".notifi_container");
const openBtn = document.getElementById("notice_open");
const closeBtn = document.getElementById("notice_close");

openBtn.addEventListener("click", () => {
  notifiContainer.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  notifiContainer.style.display = "none";
});
