function gram(){
var
var button = document.getElementsByClassName('sqdOP  L3NKy   y3zKF     ');
for(var i =0; i<button.length; i++){
button[i].click();
}
console.log('done');
}


function expired(){
var domains = []
var nav = document.getElementsByClassName('pagination-container');
var buttons = []

for (var i = 0; i < nav.length; i++) {
    buttons.push(nav[i].getElementsByTagName('strong'));
  }

var button = buttons[1]
var aHerf = button[1].getElementsByTagName('a')[0]
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 300);
  });

for(var i =0; i<796; i++){
    var resultsbox = document.getElementById('results-box');
    var label = resultsbox.querySelectorAll('label')
    label =  [].slice.call(label);
    var domain = label.map((name) => {
        return name.innerHTML;
      });

      domains = domains.concat(domain);
      myPromise.then(aHerf.click());
}

console.log(JSON.stringify(domains));
}


function link(){
var button = document.getElementsByClassName('full-width artdeco-button artdeco-button--2 artdeco-button--full artdeco-button--secondary ember-view');
for(var i =0; i<button.length; i++){
console.log(i);
button[i].click();
}
}


function investment(invest, gain, day, loseTime, loseAmount){
    for(var i = 0; i<day; i++){
        invest += invest*gain; 
        if(i%loseTime === 0){invest -= invest*loseAmount}
    }
    return invest;
}