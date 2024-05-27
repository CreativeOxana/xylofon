const heading = document.querySelector('h1');
const stones = document.querySelectorAll('.kamen');

const playToneOnStone = (stone) => {
  const tone = stone.textContent;
  heading.textContent = tone;

  const ring = new Audio(`tony/${tone}.mp3`);
  ring.play();
};

const onClick = (event) => {
  playToneOnStone(event.target);
};

stones.forEach((stone) => {
  stone.addEventListener('click', onClick);
});

const onKey = (event) => {
  const { code } = event;
  if (code.startsWith('Digit')) {
    const number = parseInt(code.substring(5));
    if (number >= 1 && number <= stones.length) {
      playToneOnStone(stones[number - 1]);
    }
  }
};

document.addEventListener('keydown', onKey);
