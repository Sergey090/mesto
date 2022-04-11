const cards = document.querySelector('.cards');
const popupProfile = document.querySelector('.popup_profile');
const popupCard = document.querySelector('.popup_card');
const popupImage = document.querySelector('.popup_image');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButtonProfile = popupProfile.querySelector('.popup__close-button');
const closeButtonCard = popupCard.querySelector('.popup__close-button');
const closeButtonImage =  popupImage.querySelector('.popup__close-button');
const formProfile = popupProfile.querySelector('.popup__form');
const formCard = popupCard.querySelector('.popup__form');
const nameInput = formProfile.querySelector('#name');
const jobInput = formProfile.querySelector('#about-me');
const titleInput = formCard.querySelector('#title');
const linkInput = formCard.querySelector('#link');
const infoName = document.querySelector('.profile__name');
const infoAboutMe = document.querySelector('.profile__about-me');
const imagePlace = popupImage.querySelector('.popup__image-place');
const namePlace = popupImage.querySelector('.popup__name-place');

const createCard = function(taskCard) {
  const template = document.querySelector('#card-template');
  const card = template.content.querySelector('.card').cloneNode(true);
  const image = card.querySelector('.card__image');
  card.querySelector('.card__image').src = taskCard.link;
  card.querySelector('.card__title').textContent = taskCard.name;
  image.addEventListener('click', function() {
    imagePlace.src = taskCard.link;
    imagePlace.alt = taskCard.name;
    namePlace.textContent = taskCard.name;
    openPopup(popupImage);
  });
  card.querySelector('.card__busket-button').addEventListener('click', function() {
    card.remove();
  });
  const likeButton = card.querySelector('.card__like-button');
  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('card__like-button_active');
  });
  return card;
};

initialCards.reverse().forEach(function (taskCard) {
  addCard(taskCard);
});

function openPopupProfile() {
  nameInput.value = infoName.textContent;
  jobInput.value = infoAboutMe.textContent;
  openPopup(popupProfile);
}

function openPopupCard() {
  openPopup(popupCard);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function closePopupProfile() {
  closePopup(popupProfile);
}

function closePopupCard() {
  closePopup(popupCard);
}

function closePopupImage() {
  closePopup(popupImage);
}

function handleSubmitProfileForm(evt) {
  evt.preventDefault();
  infoName.textContent = nameInput.value;
  infoAboutMe.textContent = jobInput.value;
  closePopup(popupProfile);
}

function addCard(taskCard) {
  cards.prepend(createCard(taskCard));
}

function handleSubmitCardForm(evt) {
  evt.preventDefault();
  const cardPlace = {
    link: linkInput.value,
    name: titleInput.value
  };
  addCard(cardPlace);
  closePopup(popupCard);
  linkInput.value = '';
  titleInput.value = '';
}

editButton.addEventListener('click', openPopupProfile);
addButton.addEventListener('click', openPopupCard);
closeButtonProfile.addEventListener('click', closePopupProfile);
closeButtonCard.addEventListener('click', closePopupCard);
closeButtonImage.addEventListener('click', closePopupImage);
formProfile.addEventListener('submit', handleSubmitProfileForm);
formCard.addEventListener('submit', handleSubmitCardForm);