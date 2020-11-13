const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const resetbtn = document.getElementById("resetbtn")
console.log(highScores);

resetbtn.addEventListener("click", function () {
  localStorage.removeItem('highScores');
  window.location.reload();
})


highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

