/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const setErrorMsg = (msg) => {
  const errorField = document.querySelector('#error');
  errorField.textContent = msg;
  errorField.classList.remove('hidden');
  setTimeout(() => {
    errorField.classList.remove('visuallyhidden');
  }, 20);

  setTimeout(() => {
    errorField.classList.add('visuallyhidden');
    setTimeout(() => {
      errorField.classList.add('hidden');
    }, 400);
  }, 4000);
};

const createCard = ({ name, img, types, owned, number }) => {
  const elementsObj = createElementsObj({
    card: 'div',
    imageCardDiv: 'div',
    imageCard: 'img',
    cardContent: 'div',
    pokemonName: 'h5',
    pokemonTypes: 'p',
    cardAction: 'div',
    checkboxLabel: 'p',
    checkboxHolder: 'label',
    checkbox: 'input',
    checkboxRound: 'span',
  });

  appendNodes(elementsObj, {
    card: ['imageCardDiv', 'cardContent', 'cardAction'],
    imageCardDiv: ['imageCard'],
    cardContent: ['pokemonName', 'pokemonTypes'],
    cardAction: ['checkboxLabel', 'checkboxHolder'],
    checkboxHolder: ['checkbox', 'checkboxRound'],
  });

  setClasses(elementsObj, {
    card: ['col', 's12', 'm6', 'l3', 'card'],
    imageCardDiv: 'card-image',
    cardContent: 'card-content',
    cardAction: 'card-action',
    checkboxRound: 'round',
    checkboxLabel: 'checkbox-label',
  });

  setTextContents(elementsObj, {
    pokemonName: name,
    pokemonTypes: types,
    checkboxLabel: 'Captured',
  });

  attribute(elementsObj.imageCard, 'src', img);
  attribute(elementsObj.checkbox, 'type', 'checkbox');
  attribute(elementsObj.checkbox, 'id', number);
  attribute(elementsObj.checkboxHolder, 'id', 'switch');
  attribute(elementsObj.checkboxRound, 'id', 'slider');
  attribute(elementsObj.checkbox, 'checked', owned);

  // yur commint
  elementsObj.checkbox.addEventListener('change', async function a() {
    switchFetch(this);
    try {
      node.disable = true;
      await toggleCapturedFetch(node.id);
      node.disable = false;
    } catch (error) {
      node.checked = !node.checked;
      node.disable = false;
      setErrorMsg(error);
    }
  });

  return elementsObj.card;
};

const cardList = (arr) => {
  clear(cardContainer);
  if (arr && arr.length !== 0)
    arr.forEach((obj) => {
      cardContainer.appendChild(createCard(obj));
    });
  else cardContainer.appendChild(document.createTextNode('there is no data'));
};
