const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

let cards = document.querySelector('.cards');
let popupProfile = document.querySelector('.popup_profile');
let popupCard = document.querySelector('.popup_card');
let popupImage = document.querySelector('.popup_image');
let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
let closeButtonProfile = popupProfile.querySelector('.popup__close-button');
let closeButtonCard = popupCard.querySelector('.popup__close-button');
let closeButtonImage =  popupImage.querySelector('.popup__close-button');
let formProfile = popupProfile.querySelector('.popup__form');
let formCard = popupCard.querySelector('.popup__form');
let nameInput = formProfile.querySelector('#name');
let jobInput = formProfile.querySelector('#about-me');
let titleInput = formCard.querySelector('#title');
let linkInput = formCard.querySelector('#link');
let infoName = document.querySelector('.profile__name');
let infoAboutMe = document.querySelector('.profile__about-me');
let imagePlace = popupImage.querySelector('.popup__image-place');
let namePlace = popupImage.querySelector('.popup__name-place');

let createCard = function(taskCard) {
  let template = document.querySelector('#card-template');
  let card = template.content.querySelector('.card').cloneNode(true);
  let image = card.querySelector('.card__image');
  card.querySelector('.card__image').src = taskCard.link;
  card.querySelector('.card__title').textContent = taskCard.name;
  image.addEventListener('click', function() {
    imagePlace.src = taskCard.link;
    imagePlace.alt = taskCard.name;
    namePlace.textContent = taskCard.name;
    popupImage.classList.add('popup_opened');
  });
  card.querySelector('.card__busket-button').addEventListener('click', function() {
    card.remove();
  });
  let likeButton = card.querySelector('.card__like-button');
  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('card__like-button_active');
  });
  return card;
};

let elements = initialCards.map(function(taskCard) {
  return createCard(taskCard);
})
cards.append(...elements);

function openPopupProfile() {
  popupProfile.classList.add('popup_opened');
  nameInput.value = infoName.textContent;
  jobInput.value = infoAboutMe.textContent;
}

function openPopupCard() {
  popupCard.classList.add('popup_opened');
}

function closePopup() {
  popupProfile.classList.remove('popup_opened');
  popupCard.classList.remove('popup_opened');
  popupImage.classList.remove('popup_opened');
}

function formSubmitHandlerProfile(evt) {
  evt.preventDefault();
  infoName.textContent = nameInput.value;
  infoAboutMe.textContent = jobInput.value;
  closePopup();
}

function addCard(taskCard) {
  cards.prepend(createCard(taskCard));
}

function formSubmitHandlerCard(evt) {
  evt.preventDefault();
  let CardPlace = [];
  CardPlace.link = linkInput.value;
  CardPlace.name = titleInput.value;
  addCard(CardPlace);
  closePopup();
}

editButton.addEventListener('click', openPopupProfile);
addButton.addEventListener('click', openPopupCard);
closeButtonProfile.addEventListener('click', closePopup);
closeButtonCard.addEventListener('click', closePopup);
closeButtonImage.addEventListener('click', closePopup);
formProfile.addEventListener('submit', formSubmitHandlerProfile);
formCard.addEventListener('submit', formSubmitHandlerCard);