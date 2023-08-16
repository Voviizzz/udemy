//мое решение

document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.querySelectorAll("[data-modal]");
  const closeModalBtn = document.querySelectorAll("[data-close]");
  const modalWindow = document.querySelector(".modal");
  //   openModalBtn.forEach((item) => {
  //     item.addEventListener("click", () => {
  //     });
  //   });
  //   closeModalBtn.forEach((item) => {
  //     item.addEventListener("click", () => {
  //       modalWindow.style.display = "none";
  //     });
  //   });

  //решение чела
  function openModal() {
    modalWindow.style.display = "block";
    //так же можно через toggle, но сначала нужно добавить класс к модальному окну
    document.body.style.overflow = "hidden"; //для отсутсвия прокрутки при скроле
    clearInterval(timerModal);
  }
  openModalBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      openModal();
    });
  });

  // openModalBtn.addEventListener("click", () => {
  //   // modalWindow.style.display = "block";
  //   //так же можно через toggle, но сначала нужно добавить класс к модальному окну
  //   // document.body.style.overflow = "hidden"; //для отсутсвия прокрутки при скроле
  //   openModal();
  // });
  closeModalBtn.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      closeModal();
    });
  });

  function closeModal() {
    modalWindow.style.display = "none";
    document.body.style.overflow = "";
  }

  //для закрытия при клике на подложке
  //можно отследить куда кликнул пользователь использую event.target

  modalWindow.addEventListener("click", (e) => {
    if (e.target === modalWindow) {
      closeModal();
    }
  });
  //приницип DRY
  //   dont repeat yoyself, нельзя повтораять код два раза
  const timerModal = setTimeout(openModal, 10000);

  //------ОТСЛЕЖИВАНИЕ СКРОЛА, ДЛЯ ПОЯВЛЕНИЯ Модального окна

  //document.documentElement.scrollHeight - высота полностью страницы
  function showModalByScroll() {
    if (
      window.scrollY + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 50
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
  window.addEventListener("scroll", showModalByScroll);
});
