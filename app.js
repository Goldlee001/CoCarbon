  const noticeContainer = document.getElementById("notice");
  const noticeOpenBtn = document.getElementById("notice_open");
  const noticeCloseBtn = document.getElementById("notice_close");

  // Restore state for NOTICE
  window.addEventListener("DOMContentLoaded", () => {
    const isNoticeOpen = localStorage.getItem("noticeOpen");
    noticeContainer.style.display = isNoticeOpen === "true" ? "block" : "none";

    const isRewardsOpen = localStorage.getItem("rewardsOpen");
    rewardsContainer.style.display = isRewardsOpen === "true" ? "block" : "none";
  });

  if (noticeOpenBtn) {
    noticeOpenBtn.addEventListener("click", () => {
      noticeContainer.style.display = "block";
      localStorage.setItem("noticeOpen", "true");
    });
  }

  noticeCloseBtn.addEventListener("click", () => {
    noticeContainer.style.display = "none";
    localStorage.setItem("noticeOpen", "false");
  });

  // --- REWARDS PANEL ---
  const rewardsContainer = document.getElementById("rewards");
  const rewardsOpenBtn = document.getElementById("rewards_open");
  const rewardsCloseBtn = document.getElementById("rewards_close");

  if (rewardsOpenBtn) {
    rewardsOpenBtn.addEventListener("click", () => {
      rewardsContainer.style.display = "block";
      localStorage.setItem("rewardsOpen", "true");
    });
  }

  rewardsCloseBtn.addEventListener("click", () => {
    rewardsContainer.style.display = "none";
    localStorage.setItem("rewardsOpen", "false");
  });

  
   const depositBtn = document.querySelector(".deposit-button");
  const depositContainer = document.getElementById("deposit");
  const closeDeposit = document.getElementById("deposit_close");

  // Open the deposit container
  depositBtn.addEventListener("click", () => {
    depositContainer.style.display = "block";
  });

  // Close the deposit container
  closeDeposit.addEventListener("click", () => {
    depositContainer.style.display = "none";
  });