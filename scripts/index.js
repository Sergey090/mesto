let popupElement = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = popupElement.querySelector('.popup__close-button');
let formElement = popupElement.querySelector('.popup__form');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#about-me');
let infoName = document.querySelector('.profile__name');
let infoAboutMe = document.querySelector('.profile__about-me');

function openPopup() {
    popupElement.classList.add('popup_opened');
    nameInput.value = infoName.textContent;
    jobInput.value = infoAboutMe.textContent;
}

function closePopup() {
    popupElement.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    infoName.textContent = nameInput.value;
    infoAboutMe.textContent = jobInput.value;
    closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);