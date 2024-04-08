// Получаем элементы
const modal = document.getElementById("modalOverlay");
const openBtn1 = document.getElementById("openModalBtn1");
const openBtn2 = document.getElementById("openModalBtn2");
const openBtn3 = document.getElementById("openModalBtn3");
const closeBtn = document.getElementById("closeModal");

// Функция для открытия модального окна
openBtn1.onclick = function() {
    modal.style.display = "flex";
}
openBtn2.onclick = function() {
    modal.style.display = "flex";
}
openBtn3.onclick = function() {
    modal.style.display = "flex";
}

// Функция для закрытия модального окна
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Закрыть модальное окно, если пользователь кликает за его пределами
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}