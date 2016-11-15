// Взаимодействие с селектом выбора домена верхнего уровня
var topDomainSelect__item01 = topDomainSelectList.children[0],
    topDomainSelect__item02 = topDomainSelectList.children[1],
    topDomainSelect__item03 = topDomainSelectList.children[2];


topDomainSelect.addEventListener('click', topDomainSelectToggler);

// Обработчики кликов на каждом из вариантов селекта
topDomainSelect__item01.onclick = function () {
    topDomainSelect__DefaultItem.textContent = topDomainSelect__item01.textContent;
};

topDomainSelect__item02.onclick = function () {
    topDomainSelect__DefaultItem.textContent = topDomainSelect__item02.textContent;
};

topDomainSelect__item03.onclick = function () {
    topDomainSelect__DefaultItem.textContent = topDomainSelect__item03.textContent;
};

// Закрываем селект при клике вне его
document.body.onclick = outsideSelectClickHandler;
topDomainSelect.onclick = function (event) {
    event.stopImmediatePropagation()
};


function topDomainSelectToggler() { // Переключает видимость списка вариантов выбора у селекта
    topDomainSelectList.classList.toggle("select__items-list_visible");
    topDomainSelect.classList.toggle("select_active");
}

function outsideSelectClickHandler() {
    topDomainSelectList.classList.remove("select__items-list_visible");
    topDomainSelect.classList.remove("select_active");
}
