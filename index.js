let speakers = [
  {
    name: 'John Doe',
    role: 'Chief Marketing Officer',
    company: 'Acme Corp',
    img: 'images/speaker1.png'
  },
  {
    name: 'Jane Smith',
    role: 'Chief Engagement Officer',
    company: 'Acquia',
    img: 'images/speaker2.png'
  },
  {
    name: 'Michael Johnson',
    role: 'Chief Technical Developer',
    company: 'Pantheon',
    img: 'images/speaker3.png'
  },
  {
    name: 'Emily Davis',
    role: 'Chief Marketing Officer',
    company: 'Spectee',
    img: 'images/speaker4.png'
  }
];

const prevButton = document.querySelector('.speaker-navigation--prev');
const nextButton = document.querySelector('.speaker-navigation--next');
const renderSpeakers = () => {
  const List = document.querySelector('.speaker-list');
  List.innerHTML = '';
  List.appendChild(prevButton); 
  List.appendChild(nextButton); 
  
  speakers.forEach(speaker => {
    const card = document.createElement('div');
    card.classList.add('speaker-card');
    card.setAttribute('data-speaker', speaker.name);
    card.setAttribute('data-role', speaker.role);
    card.setAttribute('data-company', speaker.company);
    card.setAttribute('data-img', speaker.img);

    card.innerHTML = `
          <img src="${speaker.img}" alt="${speaker.name}" class="speaker-card__image" />
          <h3 class="speaker-card__name">${speaker.name}</h3>
          <p class="speaker-card__role">${speaker.role}</p>
          <span class="speaker-card__company">${speaker.company}</span>
        `;
    const nextButton = document.querySelector('.speaker-navigation--next');
    List.insertBefore(card, nextButton);
  });
}


renderSpeakers()
nextButton.addEventListener('click', () => {
  let user = speakers.shift();
  speakers.push(user);
  renderSpeakers();
});

prevButton.addEventListener('click', () => {
  let user = speakers.pop();
  speakers.unshift(user); 
  renderSpeakers(); 
});





// for modal
const speakerList = document.querySelector('.speaker-list');
const speakerModal = document.querySelector('.speaker-modal');

speakerList.addEventListener('click', (event) => {
  const card = event.target.closest('.speaker-card');
  if (card) {
    const speakerName = card.getAttribute('data-speaker');
    const speakerRole = card.getAttribute('data-role');
    const company = card.getAttribute('data-company');
    const speakerImage = card.getAttribute('data-img');

    // Creating elements dynamically
    const container = document.createElement('div');
    container.classList.add('speaker-details__container');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('speaker-details__image-container');

    const image = document.createElement('img');
    image.src = speakerImage;
    image.alt = speakerName;
    image.classList.add('speaker-card__image');
    imageContainer.appendChild(image);

    const info = document.createElement('div');
    info.classList.add('speaker-details__info');

    const name = document.createElement('h2');
    name.textContent = speakerName;
    info.appendChild(name);

    const role = document.createElement('p');
    role.classList.add('speaker-details__company');
    role.textContent = `${speakerRole} at`;
    info.appendChild(role);

    const companyText = document.createElement('p');
    companyText.classList.add('speaker-details__role');
    companyText.textContent = company;
    info.appendChild(companyText);

    const socialContainer = document.createElement('div');
    socialContainer.classList.add('speaker-details__social');


    const socialImages = ['./images/logo.png', './images/linkedin.png', './images/x.png'];

    socialImages.forEach((path) => {
      const svgImage = document.createElement('img');
      svgImage.src = path;
      svgImage.alt = 'Social Icon';
      svgImage.width = 24;
      svgImage.height = 24;
      socialContainer.appendChild(svgImage);
    });

    info.appendChild(socialContainer);

    const divider = document.createElement('div');
    divider.classList.add('speaker-details__divider');

    const description = document.createElement('div');
    description.classList.add('speaker-details__description');

    const descriptionText = document.createElement('p');
    descriptionText.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi maiores quidem quia aspernatur deserunt quae delectus. Eveniet, adipisci commodi.`;
    description.appendChild(descriptionText);

    const closeButton = document.createElement('span');
    closeButton.classList.add('speaker-details__close');
    closeButton.textContent = '×';

    closeButton.addEventListener('click', () => {
      speakerModal.style.display = 'none';
    });

    container.appendChild(imageContainer);
    container.appendChild(info);
    container.appendChild(divider);
    container.appendChild(description);
    container.appendChild(closeButton);
    speakerModal.innerHTML = '';
    speakerModal.appendChild(container);
    speakerModal.style.display = 'block';
  }
});
