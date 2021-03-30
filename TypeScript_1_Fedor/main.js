//Завдання 1
/*
let city:string = "Київ"
city = 'Львів'

let address: string = city
console.log(address);
*/
// Завдання 2 
/*
let prom: any =  prompt('Ведіть число')

prom === '0' ? console.log('0') :  (prom % 2 === 0) ? console.log('парне'):  console.log('непарне')
*/
//Завдання 3 
/*
function max(a: number ,b: number, ...arr ) {
   console.log( Math.max(a,b, ...arr));
   
}
max(5,-2)
max(5,-2, 30, 6)
*/
// Завдання 4
// function getSqrt(number?:any) {
//     if(number === +number && number > 0 ){
//         console.log(`${number} = ${Math.sqrt(number)} `)
//     };
//     if(number === number+''){
//         console.log(`Повино бути числове значення`)
//     };
//     if(number < 0){
//         console.log(`Введіть додатнє число`)
//     };
//     if(!number){
//         console.log('ведіть число');
//     }
// } 
// getSqrt(-1)
// getSqrt(3)
// getSqrt("papa")
// getSqrt()
// Завдання 5 
let form = document.forms['form'];
let text = document.querySelector('.block__row');
let textRed = document.querySelectorAll('.red');
let textArea = document.getElementById('textAria');
let arr = ['java', 'tottnham'];
function stoc() {
    text.innerHTML = `<p class="red"> ${arr}  </p>`;
}
stoc();
form.btnAdd.addEventListener('click', function () {
    let inpValue = form.intValue.value;
    if (inpValue.length > 0) {
        form.intValue.value = '';
        arr.push(inpValue);
        text.innerHTML = `<p class="red"> ${arr}  </p>`;
    }
    validation(inpValue, form.intValue);
});
form.btnReset.addEventListener('click', function () {
    text.innerHTML = "";
    arr = [];
});
function validation(name, style) {
    if (name.length === 0) {
        style.style.border = '1px solid red';
    }
    if (name.length > 0) {
        style.style.border = '';
    }
}
form.btnCenzor.addEventListener('click', function () {
    let texts = form.textArea.value;
    const areaText = texts.split(/[.,\/ -]/);
    arr.filter(elMasiv => {
        areaText.filter((elText, ind, arr) => {
            if (elMasiv === elText) {
                arr[ind] = '*'.repeat(elText.length);
            }
        });
    });
    form.textArea.value = areaText.join(' ');
    validation(texts, form.textArea);
});
