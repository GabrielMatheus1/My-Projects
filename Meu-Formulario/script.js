
var btnNext = document.querySelector('#next');
var bntback = document.querySelector('#back');

var div1 = document.querySelector('#group1');
var div2 = document.querySelector('#group2');

// evento para mudar a div para a segunda parte // 
btnNext.addEventListener( 'click', function() {
  if (div1.style.display === 'flex') {
    div1.style.display = 'none';
    div2.style.display = 'flex'; } 
 else {
    div1.style.display = 'flex';
    div2.style.display = 'none';
}}); 
// evento para mudar a div para a segunda parte //

// evento para voltar a primeira parte //
bntback.addEventListener( 'click', function() {
  if (div2.style.display === 'flex') {
    div2.style.display = 'none';
    div1.style.display = 'flex'; } 
  else {
    div2.style.display = 'flex';
    div1.style.display = 'none';
  }});
// evento para voltar voltar a primeira parte //