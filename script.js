// Intro Screen -> Main Website
const intro = document.getElementById('intro-screen');
const main = document.getElementById('main-website');

intro.addEventListener('click', () => {
  intro.classList.add('fade-out');
  setTimeout(() => {
    intro.style.display = 'none';
    main.style.display = 'block';
    startCounters();
  }, 1000);
});

// Arena Stats Animation
function startCounters(){
  animateCounter('players', 124, 5);
  animateCounter('games', 18, 1);
  animateCounter('hours', 8420, 50);
}

function animateCounter(id, target, step){
  const el = document.getElementById(id);
  let count = 0;
  const interval = setInterval(()=>{
    count += step;
    if(count >= target) { count = target; clearInterval(interval); }
    el.textContent = count;
  }, 30);
}

// Booking Form
const form = document.getElementById('booking-form');
const msg = document.getElementById('booking-msg');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const game = document.getElementById('game-select').value;
  const time = document.getElementById('slot-time').value;
  msg.textContent = `Mission Confirmed! ${game} booked at ${time}`;
  msg.style.color = '#0ff';
  form.reset();
});
