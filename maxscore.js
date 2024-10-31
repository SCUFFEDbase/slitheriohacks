setInterval(() => {
  let score = parseInt(document.querySelector('.score-container .score').innerText);
  if (score < 999999) {
    document.querySelector('.score-container .score').innerText = score + 1;
  }
}, 100);
