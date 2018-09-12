document.getElementById('js-answer-btn').onclick = function() {
  const answer = document.querySelector('input[name="answer"]:checked').value;

  document.getElementById('js-answer')
    .innerHTML = 'Sua resposta foi ' + answer + '.';
}