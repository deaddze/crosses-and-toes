
const message = document.getElementById('message');
function hint(winner){
  winner === 'ничья' ? message.textContent = 'Ничья!' : message.textContent = `Победитель ${winner}!`
}
export {hint}