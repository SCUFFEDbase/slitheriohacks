setInterval(() => {
  let snake = document.querySelector('.snake');
  let speed = snake.style.animationDuration.slice(0, -1); // Remove the 's' at the end
  speed = parseFloat(speed) / 2; // Half the current speed
  snake.style.animationDuration = speed + 's'; // Set the new speed
}, 100);
