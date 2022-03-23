let popupElement = document.querySelector('.popup');
let editButton = document.querySelector('.info__edit-button');
let closeButton = popupElement.querySelector('.popup__close-button');
let formElement = popupElement.querySelector('.form');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#about-me');
let submitButton = formElement.querySelector('.form__button');
let infoName = document.querySelector('.info__name');
let infoAboutMe = document.querySelector('.info__about-me');
let heartWhiteOne = document.querySelectorAll('.card__heart')[0];
let heartWhiteTwo = document.querySelectorAll('.card__heart')[1];
let heartWhiteThree = document.querySelectorAll('.card__heart')[2];
let heartWhiteFour = document.querySelectorAll('.card__heart')[3];
let heartWhiteFive = document.querySelectorAll('.card__heart')[4];
let heartWhiteSix = document.querySelectorAll('.card__heart')[5];
let heartBlack = document.querySelector('.card__heart_black');

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

function clickHeartOne() {
    heartWhiteOne.classList.add('card__heart_black');
}

function clickHeartTwo() {
    heartWhiteTwo.classList.add('card__heart_black');
}

function clickHeartThree() {
    heartWhiteThree.classList.add('card__heart_black');
}

function clickHeartFour() {
    heartWhiteFour.classList.add('card__heart_black');
}

function clickHeartFive() {
    heartWhiteFive.classList.add('card__heart_black');
}

function clickHeartSix() {
    heartWhiteSix.classList.add('card__heart_black');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
heartWhiteOne.addEventListener('click', clickHeartOne);
heartWhiteTwo.addEventListener('click', clickHeartTwo);
heartWhiteThree.addEventListener('click', clickHeartThree);
heartWhiteFour.addEventListener('click', clickHeartFour);
heartWhiteFive.addEventListener('click', clickHeartFive);
heartWhiteSix.addEventListener('click', clickHeartSix);