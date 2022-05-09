// создаем див и инпут в документе
let body = document.querySelector('body')
let keyBoard = document.createElement("div");
body.innerHTML = '<input type="text" name="other" class="fade-out" value="123"> ';
input = document.querySelector('input')
// body.appendChild(inputBlock)
keyBoard.classList.add('Key-board');
body.appendChild(keyBoard);
Keyboard1 = document.querySelector('.Key-board')
// let inputIn = inputBlock.value
// чар коды событий кнопок на клавиатуре
const ChartKeys = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift", "Control", "Alt", " ", "Alt", "ContextMenu", "Control"];
const ChartKeysEn = []
// проверка в консоли вывода событий клавиш
document.onkeydown = function(event) {
    console.log(event.key)
    ChartKeys.push(event.key);
    console.log(ChartKeys);
}

function init(){
  let out = '';
  for (let i=0;i<ChartKeys.length;i++){
      if(i==14 || i==28 || i==41 || i==53){
          out +='<div class="clearfix"></div>'
      }
      if (ChartKeys[i] == "Backspace" || ChartKeys[i]=="Tab" || ChartKeys[i] =='CapsLock'|| ChartKeys[i] =="Enter" || ChartKeys[i]=="Shift"){
        out += '<div class="keyboard keyboard-long" data-code="'+ChartKeys[i]+'">' + ChartKeys[i] + '</div>';
      }
      else if(ChartKeys[i]==' '){out += '<div class="keyboard keyboard-very-long" data-code="'+ChartKeys[i]+'">' + ChartKeys[i] + '</div>';}
      else{
      out += '<div class="keyboard" data-code="'+ChartKeys[i]+'">' + ChartKeys[i] + '</div>';
      }
  }
  document.querySelector('.Key-board').innerHTML = out;
}

init()


document.onkeydown = function(event) {
    // console.log(event.code);
    // console.log(event.keyCode);
    document.querySelectorAll('.Key-board .keyboard').forEach(function(element){element.classList.remove('active');})
     let pushCklickedButton = document.querySelector(`.Key-board .keyboard[data-code="${event.key}"]`);
     pushCklickedButton.classList.add('active')
     input.value += document.querySelector(`.Key-board .keyboard[data-code="${event.key}"]`).textContent
}

document.onkeyup = function(event) {
    document.querySelectorAll('.Key-board .keyboard').forEach(function(element){element.classList.remove('active');})
}

// document.querySelectorAll('.Key-board .keyboard').forEach(function(element){
//     element.onclick = function(event){
//         document.querySelectorAll('.Key-board .keyboard').forEach(function(element){element.classList.remove('active');})
//         let code = this.getAttribute('data');
//         this.classList.add('active');
        
//         // setTimeout(document.querySelectorAll('.Key-board .keyboard').forEach(function(element){element.classList.remove('active');}), 1000);
//         // console.log(code);
//     }
// })

Keyboard1.addEventListener('mousedown', function(e){
    // console.log(e)
    // console.log(e.target.innerHTML)
    document.querySelectorAll('.Key-board .keyboard').forEach(function(element){element.classList.remove('active');})
    let pushCklickedButton = document.querySelector(`.Key-board .keyboard[data-code="${e.target.innerHTML}"]`);
     pushCklickedButton.classList.add('active')
     input.value += e.target.innerHTML
});

Keyboard1.addEventListener('mouseup', function(e){
    document.querySelectorAll('.Key-board .keyboard').forEach(function(element){element.classList.remove('active');})
});


// document.onkeydown = function(event){
//     console.log(event);
// }