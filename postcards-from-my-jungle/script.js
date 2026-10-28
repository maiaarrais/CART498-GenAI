
const animals = [
  {
    "id": "mossling",
    "world": "jungle",
    "name": "Mossling",
    "image": "assets/animals/16_lizard.png",
    "dataset": "assets/dataset/16_lizard.png",
    "x": 69,
    "y": 26,
    "description": "A curious branch-dweller whose feet cling to the underside of leaves.",
    "phrase": "Sha-lu, vemi na.",
    "sound": "assets/sounds/16_lizard.wav"
  },
  {
    "id": "fernwhisper",
    "world": "jungle",
    "name": "Fernwhisper",
    "image": "assets/animals/02_butterfly.png",
    "dataset": "assets/dataset/02_butterfly.png",
    "x": 87,
    "y": 34,
    "description": "Its shifting wings carry messages between the treetops.",
    "phrase": "Vira, vira, sho.",
    "sound": "assets/sounds/02_butterfly.wav"
  },
  {
    "id": "velvettrunk",
    "world": "jungle",
    "name": "Velvettrunk",
    "image": "assets/animals/06_elephant.png",
    "dataset": "assets/dataset/06_elephant.png",
    "x": 62,
    "y": 45,
    "description": "A gentle giant that remembers the rhythm of every rainfall.",
    "phrase": "Duum alara.",
    "sound": "assets/sounds/06_elephant.wav"
  },
  {
    "id": "glimmerwing",
    "world": "jungle",
    "name": "Glimmerwing",
    "image": "assets/animals/04_bird.png",
    "dataset": "assets/dataset/04_bird.png",
    "x": 84,
    "y": 53,
    "description": "It nests in the mist and leaves traces of color behind.",
    "phrase": "Kiri ne, kiru.",
    "sound": "assets/sounds/04_bird.wav"
  },
  {
    "id": "mossrabbit",
    "world": "jungle",
    "name": "Mossrabbit",
    "image": "assets/animals/14_rabbit.png",
    "dataset": "assets/dataset/14_rabbit.png",
    "x": 68,
    "y": 63,
    "description": "Its long ears catch the quietest signals from the forest floor.",
    "phrase": "Mimi shara.",
    "sound": "assets/sounds/14_rabbit.wav"
  },
  {
    "id": "dewcaller",
    "world": "jungle",
    "name": "Dewcaller",
    "image": "assets/animals/10_frog.png",
    "dataset": "assets/dataset/10_frog.png",
    "x": 91,
    "y": 72,
    "description": "It sings just before the first drop of rain.",
    "phrase": "Buro, buro, li.",
    "sound": "assets/sounds/10_frog.wav"
  },
  {
    "id": "twilightdeer",
    "world": "jungle",
    "name": "Twilightdeer",
    "image": "assets/animals/08_deer.png",
    "dataset": "assets/dataset/08_deer.png",
    "x": 55,
    "y": 74,
    "description": "Its antlers branch into shapes no botanist can name.",
    "phrase": "Ola mi vena.",
    "sound": "assets/sounds/08_fox.wav"
  },
  {
    "id": "seedkeeper",
    "world": "jungle",
    "name": "Seedkeeper",
    "image": "assets/animals/12_squirrel.png",
    "dataset": "assets/dataset/12_squirrel.png",
    "x": 94,
    "y": 22,
    "description": "It buries luminous seeds that grow only in moonlight.",
    "phrase": "Chika tolu.",
    "sound": "assets/sounds/12_cat.wav"
  },
  {
    "id": "glimmerfin",
    "world": "underwater",
    "name": "Glimmerfin",
    "image": "assets/animals/01_fish.png",
    "dataset": "assets/dataset/01_fish.png",
    "x": 69,
    "y": 26,
    "description": "A curious swimmer that follows dancing beams of light.",
    "phrase": "Oru-mi, tela.",
    "sound": "assets/sounds/01_fish.wav"
  },
  {
    "id": "pearlback",
    "world": "underwater",
    "name": "Pearlback",
    "image": "assets/animals/03_turtle.png",
    "dataset": "assets/dataset/03_turtle.png",
    "x": 87,
    "y": 34,
    "description": "A gentle creature that collects forgotten sounds in its shell.",
    "phrase": "Muu-ra, omi-ru.",
    "sound": "assets/sounds/03_turtle.wav"
  },
  {
    "id": "driftwhale",
    "world": "underwater",
    "name": "Driftwhale",
    "image": "assets/animals/05_whale.png",
    "dataset": "assets/dataset/05_whale.png",
    "x": 62,
    "y": 45,
    "description": "Its slow movements stir the currents into soft spirals.",
    "phrase": "Vooma re.",
    "sound": "assets/sounds/05_whale.wav"
  },
  {
    "id": "inkdancer",
    "world": "underwater",
    "name": "Inkdancer",
    "image": "assets/animals/07_octopus.png",
    "dataset": "assets/dataset/07_octopus.png",
    "x": 84,
    "y": 53,
    "description": "Its arms trace stories that vanish into the current.",
    "phrase": "Suli, naka, su.",
    "sound": "assets/sounds/07_octopus.wav"
  },
  {
    "id": "coilcrest",
    "world": "underwater",
    "name": "Coilcrest",
    "image": "assets/animals/09_seahorse.png",
    "dataset": "assets/dataset/09_seahorse.png",
    "x": 68,
    "y": 63,
    "description": "It drifts upright among the coral and sleeps in circles.",
    "phrase": "Te-ru, te-ru.",
    "sound": "assets/sounds/09_seahorse.wav"
  },
  {
    "id": "moonray",
    "world": "underwater",
    "name": "Moonray",
    "image": "assets/animals/11_manta_ray.png",
    "dataset": "assets/dataset/11_manta_ray.png",
    "x": 91,
    "y": 72,
    "description": "Its wide fins resemble a moving shadow beneath the moon.",
    "phrase": "Mora na vi.",
    "sound": "assets/sounds/11_ray.wav"
  },
  {
    "id": "shellclick",
    "world": "underwater",
    "name": "Shellclick",
    "image": "assets/animals/13_crab.png",
    "dataset": "assets/dataset/13_crab.png",
    "x": 55,
    "y": 74,
    "description": "It taps patterns on smooth stones to greet its neighbors.",
    "phrase": "Tak tik, nora.",
    "sound": "assets/sounds/13_crab.wav"
  },
  {
    "id": "rippledart",
    "world": "underwater",
    "name": "Rippledart",
    "image": "assets/animals/15_dolphin.png",
    "dataset": "assets/dataset/15_dolphin.png",
    "x": 94,
    "y": 22,
    "description": "A playful diver that chases echoes through deep water.",
    "phrase": "Rii-vo, soma.",
    "sound": "assets/sounds/15_dolphin.wav"
  }
];

animals.filter((animal) => animal.world === 'jungle').forEach((animal, index) => {
  [animal.mx, animal.my] = [
    [22, 57],
    [75, 56],
    [45, 67],
    [84, 70],
    [18, 79],
    [58, 81],
    [31, 86],
    [79, 86],
  ][index];
});

animals.filter((animal) => animal.world === 'underwater').forEach((animal, index) => {
  [animal.mx, animal.my] = [
    [22, 57],
    [75, 56],
    [45, 67],
    [84, 70],
    [18, 79],
    [58, 81],
    [31, 86],
    [79, 86],
  ][index];
});

let world = 'jungle';
let activeAnimal = null;
let ambient = null;

const found = new Set();
const scene = document.getElementById('world');
const spots = document.getElementById('creatures');
const overlay = document.getElementById('overlay');

// On all screens, coordinates remain inside the scene. Adjust individual x/y above.
function render() {
  scene.classList.toggle('jungle', world === 'jungle');
  scene.classList.toggle('underwater', world === 'underwater');
  spots.replaceChildren();

  const visibleAnimals = animals.filter((animal) => animal.world === world);
  visibleAnimals.forEach((animal, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'creature' + (found.has(animal.id) ? ' found' : '');
    button.style.setProperty('--x', animal.x + '%');
    button.style.setProperty('--y', animal.y + '%');
    button.style.setProperty('--mx', animal.mx + '%');
    button.style.setProperty('--my', animal.my + '%');
    button.style.setProperty('--delay', -index * 0.65 + 's');
    button.setAttribute('aria-label', 'Discover ' + animal.name);
    button.title = animal.name;

    const image = document.createElement('img');
    image.src = animal.image;
    image.alt = '';
    button.append(image);
    button.onclick = () => openAnimal(animal);
    spots.append(button);
  });

  document.getElementById('chapter').textContent =
    world === 'jungle' ? '01 / THE LIVING CANOPY' : '02 / BENEATH THE SURFACE';
  document.getElementById('subtitle').textContent =
    world === 'jungle'
      ? 'Somewhere beyond the known world, life takes unfamiliar shapes. Follow the movement. Meet its inhabitants.'
      : 'Leave the surface behind. In the blue-green quiet, stranger forms drift through the light.';
  document.getElementById('sceneLabel').innerHTML =
    world === 'jungle'
      ? 'THE LIVING CANOPY <span>•</span> 8 SPECIES'
      : 'THE HIDDEN DEPTHS <span>•</span> 8 SPECIES';
  document.getElementById('switchLabel').textContent =
    world === 'jungle' ? 'Descend into the deep' : 'Return to the canopy';
  document.querySelector('.switch-icon').textContent = world === 'jungle' ? '↓' : '↑';
  document.getElementById('count').textContent = String(found.size).padStart(2, '0') + ' / 16';
  document.getElementById('progressFill').style.width = (found.size / 16) * 100 + '%';
}

function openAnimal(animal) {
  activeAnimal = animal;
  found.add(animal.id);
  render();

  document.getElementById('number').textContent = String(animals.indexOf(animal) + 1).padStart(2, '0');
  document.getElementById('habitat').textContent =
    (animal.world === 'jungle' ? 'CANOPY' : 'AQUATIC') + ' / FIELD NOTE';
  document.getElementById('animalName').textContent = animal.name;
  document.getElementById('description').textContent = animal.description;
  document.getElementById('language').textContent = '“' + animal.phrase + '”';

  const image = document.getElementById('animalArt');
  image.src = animal.image;
  image.alt = 'Imagined ' + animal.name;
  document.getElementById('datasetArt').src = animal.dataset;
  document.getElementById('audioNote').textContent = animal.sound
    ? 'Generated animal audio'
    : 'No sound added yet';
  document.getElementById('play').disabled = !animal.sound;
  document.querySelector('.modal').classList.toggle('underwater-card', animal.world === 'underwater');
  overlay.classList.remove('hidden');
  document.getElementById('close').focus();
}

let audioContext;

function playSound(animal) {
  if (animal.sound) {
    new Audio(animal.sound).play().catch(console.error);
  }
}

document.getElementById('play').onclick = () => {
  if (activeAnimal) {
    playSound(activeAnimal);
  }
};

document.getElementById('switch').onclick = () => {
  world = world === 'jungle' ? 'underwater' : 'jungle';
  render();
};

document.getElementById('close').onclick = () => overlay.classList.add('hidden');

overlay.onclick = (event) => {
  if (event.target === overlay) {
    overlay.classList.add('hidden');
  }
};

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    overlay.classList.add('hidden');
  }
});

// Decorative drifting dust / bubbles. No network dependencies.
const particles = document.getElementById('particles');

for (let index = 0; index < 32; index++) {
  const particle = document.createElement('span');
  particle.className = 'particle';
  particle.style.left = Math.random() * 100 + '%';
  particle.style.top = Math.random() * 100 + '%';
  particle.style.setProperty('--dur', 8 + Math.random() * 16 + 's');
  particle.style.setProperty('--delay', -Math.random() * 20 + 's');
  particles.append(particle);
}

// Ambient drone starts only after a click, to respect browser audio permissions.
const toggle = document.getElementById('soundToggle');
let ambientPlaying = false;
let ambientOscillator;
let ambientGain;

toggle.onclick = () => {
  audioContext ??= new (window.AudioContext || window.webkitAudioContext)();

  if (!ambientPlaying) {
    ambientOscillator = audioContext.createOscillator();
    ambientGain = audioContext.createGain();
    ambientOscillator.type = 'sine';
    ambientOscillator.frequency.value = world === 'jungle' ? 95 : 75;
    ambientGain.gain.value = 0.018;
    ambientOscillator.connect(ambientGain).connect(audioContext.destination);
    ambientOscillator.start();
    toggle.textContent = '♪ SOUND ON';
  } else {
    ambientOscillator.stop();
    ambientOscillator.disconnect();
    toggle.textContent = '♪ SOUND OFF';
  }

  ambientPlaying = !ambientPlaying;
};

render();
