const projectSection = document.getElementById('recent-works-projects');
// dummy data
const data = [
  {
    id: 1,
    name: 'Multi-Post Stories Gain+Glory',
    image: window.innerWidth < 450 ? './images/portfolio.svg' : './images/portfolio-desktop.svg',
    pillList: ['Ruby on rails', 'css', 'Javascript', 'html'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea...",
  },
  {
    id: 2,
    name: 'Multi-Post Stories Gain+Glory',
    image: window.innerWidth < 450 ? './images/portfolio.svg' : './images/portfolio-desktop.svg',
    pillList: ['Ruby on rails', 'css', 'Javascript', 'html'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea...",
  },
  {
    id: 3,
    name: 'Multi-Post Stories Gain+Glory',
    image: window.innerWidth < 450 ? './images/portfolio.svg' : './images/portfolio-desktop.svg',
    pillList: ['Ruby on rails', 'css', 'Javascript', 'html'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea...",
  },
  {
    id: 4,
    name: 'Multi-Post Stories Gain+Glory',
    image: window.innerWidth < 450 ? './images/portfolio.svg' : './images/portfolio-desktop.svg',
    pillList: ['Ruby on rails', 'css', 'Javascript', 'html'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea...",
  },
  {
    id: 5,
    name: 'Multi-Post Stories Gain+Glory',
    image: window.innerWidth < 450 ? './images/portfolio.svg' : './images/portfolio-desktop.svg',
    pillList: ['Ruby on rails', 'css', 'Javascript', 'html'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea...",
  },
  {
    id: 6,
    name: 'Multi-Post Stories Gain+Glory',
    image: window.innerWidth < 450 ? './images/portfolio.svg' : './images/portfolio-desktop.svg',
    pillList: ['Ruby on rails', 'css', 'Javascript', 'html'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea...",
  },
];

// create a single card
function createCard(id, name, pillList) {
  const card = document.createElement('div');
  card.className = 'card';
  const cardImage = document.createElement('div');
  cardImage.className = 'card-image';
  card.append(cardImage);
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  const title = document.createElement('h3');
  title.innerText = name;
  cardBody.append(title);
  const list = document.createElement('ul');
  list.className = 'pill-list';
  for (let i = 0; i < pillList.length; i += 1) {
    const item = document.createElement('li');
    const content = document.createElement('div');
    content.className = 'pills';
    content.innerHTML = pillList[i];
    item.append(content);
    list.append(item);
  }
  cardBody.append(list);
  const button = document.createElement('button');
  button.id = id;
  button.classList.add('button', 'open-modal');
  button.innerText = 'See Projects';
  cardBody.append(button);
  card.append(cardBody);
  projectSection.append(card);
}
function generateProjects() {
  for (let i = 0; i < data.length; i += 1) {
    const { id, name, pillList } = data[i];
    createCard(id, name, pillList);
  }
}

generateProjects();

const brand = document.getElementById('brand');
const humberger = document.getElementById('humberger');
const humbergerClose = document.getElementById('humberger-close');
const navigation = document.querySelector('nav');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const openModals = document.querySelectorAll('.open-modal');
const closeModal = document.querySelector('.modal-close');
const modal = document.querySelector('#modal');

const modalImage = document.getElementById('cover-image');
const cardTitle = document.getElementById('card-title');
const pillModalList = document.getElementById('pill-list');
const modalDescription = document.getElementById('description');

function toggleNavigation(flag) {
  if (flag === true) {
    navigation.style = 'transform:scale(1,1)';
    brand.style = 'visibility:hidden';
    humberger.style = 'display:none';
    humbergerClose.style = 'display:block';
  } else {
    navigation.style = 'transform:scale(1,0)';
    brand.style = 'visibility:visible';
    humberger.style = 'display:block';
    humbergerClose.style = 'display:none';
  }
}

navToggle.addEventListener('change', (e) => {
  if (e.target.checked === true) {
    toggleNavigation(true);
  } else {
    toggleNavigation(false);
  }
});

function toggle() {
  if (window.innerWidth < 450) {
    toggleNavigation(false);
  }
}

navLinks.forEach((it) => {
  it.addEventListener('click', () => {
    toggle();
  });
});

