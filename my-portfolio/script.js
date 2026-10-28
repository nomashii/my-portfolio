
const filterButtons = document.querySelectorAll(".filter");
const workCards = document.querySelectorAll(".work-card");

const modal = document.getElementById("work-modal");
const modalTitle = document.getElementById("modal-title");
const modalType = document.getElementById("modal-type");
const modalDescription = document.getElementById("modal-description");
const closeButton = document.querySelector(".modal-close");

// カテゴリで作品を絞り込む
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    workCards.forEach((card) => {
      const matches =
        selectedCategory === "all" ||
        card.dataset.category === selectedCategory;

      card.hidden = !matches;
    });
  });
});

// 作品をクリックして詳細を表示
workCards.forEach((card) => {
  const openButton = card.querySelector(".work-open");

  openButton.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalType.textContent = card.dataset.type;
    modalDescription.textContent = card.dataset.description;

    modal.showModal();
  });
});

// 閉じるボタン
closeButton.addEventListener("click", () => {
  modal.close();
});

// ダイアログの外側をクリックしたら閉じる
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
