const cover = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const openProgram = document.querySelector('.program-link');
const openMain = document.querySelector('.home-link');
const openSponsor = document.querySelector('.partner-link');
const home = document.getElementById('home');
const about = document.querySelector('.about');
const openBtn = document.querySelector('.wrap-btn');
const openBtnAbout = document.querySelector('.wrap-btn-about');
const options = document.querySelectorAll('.link');
const hamburgerBtn = document.querySelectorAll('.open');
const openAbout = document.querySelector('.about-link');
const menuOpenAbout = document.querySelector('.menu-open-about');
const menuOpenHome = document.querySelector('.menu-open-home');

let number = 2;

function openMenu() {
  cover.classList.remove('hidden');
  openBtn.classList.add('hidden');
  openBtnAbout.classList.add('hidden');
}

function closeMenu() {
  cover.classList.add('hidden');
  openBtn.classList.remove('hidden');
  openBtnAbout.classList.remove('hidden');
}

function openAboutSection() {
  about.classList.remove('hidden');
  home.classList.add('hidden');
}

function openHome() {
  about.classList.add('hidden');
  home.classList.remove('hidden');
}

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
openAbout.addEventListener('click', openAboutSection);
menuOpenHome.addEventListener('click', openHome);
openProgram.addEventListener('click', openHome);
openMain.addEventListener('click', openHome);
openSponsor.addEventListener('click', openHome);
menuOpenAbout.addEventListener('click', openAboutSection);


for (let i = 0; i < hamburgerBtn.length; i += 1) {
  hamburgerBtn[i].addEventListener('click', openMenu);
}

for (let i = 0; i < options.length; i += 1) {
  options[i].addEventListener('click', closeMenu);
}

// Mobile menu finished //

const data = [
  {
    img: 'images/speakers/speaker-1.png',
    name: 'Adam Clifford',
    description: 'Director of comunication (BBC)',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },
  {
    img: 'images/speakers/speaker-2.png',
    name: 'Alexander Buzrukov',
    description: 'Minister of Foreign Economy (Russia)',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },
  {
    img: 'images/speakers/speaker-5.png',
    name: 'Chloe Diego',
    description: 'Secretary of Administration (UNICEF)',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },
  {
    img: 'images/speakers/speaker-3.png',
    name: 'Daniel Ethan',
    description: 'Minister of Information Technology Security (USA)',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },
  {
    img: 'images/speakers/speaker-6.png',
    name: 'Caroline Brooke',
    description: 'Marketologist (Canada)',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },
  {
    img: 'images/speakers/speaker-4.png',
    name: 'Abdul Ahmed Khasan',
    description: 'Social Media Marketologist (United Arab Emirates)',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },
];

function modifiedCard(num) {
  const img = document.querySelectorAll('#img')[num];
  const nameID = document.querySelectorAll('#name')[num];
  const description = document.querySelectorAll('#description')[num];
  const info = document.querySelectorAll('#info')[num];
  img.src = data[num].img;

  nameID.innerHTML = data[num].name;
  img.src = data[num].img;
  description.innerHTML = data[num].description;
  info.innerHTML = data[num].info;
}

function mobile() {
  if (window.innerWidth < 768) {
    for (let i = 0; i < number; i += 1) {
      const speaker = `
            <div class="speaker">
            <img id="img" src="images/speakers/speaker-1.png" alt="speaker" class="speaker-img" />
            <div class="speaker-text">
            <h2 id="name" class="speaker-name"></h2>
              <p id="description" class="speaker-job"></p>
              <div class="line"></div>
              <p id="info" class="speaker-info"></p>
            </div>
          </div>`;
      document.getElementById('card-main').innerHTML += speaker;
      modifiedCard(i);
    }
  } else if (window.innerWidth > 768) {
    for (let i = 0; i < data.length; i += 1) {
      const speaker = `
            <div class="speaker">
            <img id="img" src="images/speakers/speaker-1.png" alt="speaker" class="speaker-img" />
            <div class="speaker-text">
            <h2 id="name" class="speaker-name"></h2>
              <p id="description" class="speaker-job"></p>
              <div class="line"></div>
              <p id="info" class="speaker-info"></p>
            </div>
          </div>`;
      document.getElementById('card-main').innerHTML += speaker;
      modifiedCard(i);
    }
  }
}

mobile();

const btnMore = document.querySelector('.btn-more');
const btnLess = document.querySelector('.btn-less');
btnLess.classList.add('hidden');

btnMore.addEventListener('click', () => {
  document.getElementById('card-main').innerHTML = '';
  btnMore.classList.add('hidden');
  btnLess.classList.remove('hidden');
  number = 6;
  mobile();
});

btnLess.addEventListener('click', () => {
  document.getElementById('card-main').innerHTML = '';
  btnLess.classList.add('hidden');
  btnMore.classList.remove('hidden');
  number = 2;
  mobile();
});