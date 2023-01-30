function showPassword() {
    const btn = document.querySelector('.password_btn')
    const input = document.querySelector('.password_input')

btn.addEventListener('click', () => {
    btn.classList.toggle('active')
    if(input.getAttribute('type') ==='password'){
        input.setAttribute('type','text')
    }else{
        input.setAttribute('type','password')
    }
})
}
showPassword()

let nums = [2, 7, 11, 15];
let target = 9;
function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
      map.set(nums[i], i);
    }
  }
console.log(twoSum(nums,target))


// function romanToInt(s) {
//     let map = new Map();
//     map.set("I", 1);
//     map.set("V", 5);
//     map.set("X", 10);
//     map.set("L", 50);
//     map.set("C", 100);
//     map.set("D", 500);
//     map.set("M", 1000);
  
//     let result = 0;
//     for (let i = 0; i < s.length; i++) {
//       let current = map.get(s[i]);
//       let next = map.get(s[i+1]);
//       if (next && current < next) {
//         result -= current;
//       } else {
//         result += current;
//       }
//     }
//     return result;
//   }


const slide = document.querySelector('#slide')
const output = document.querySelector('#output')

const showValue = () =>{
    output.textContent = slide.value
}

slide.oninput = () =>{
    showValue()
}
showValue()

const saveEmail = () => {
  // В реальности email приходит из формы
  const email = '  SuppORT@hexlet.IO';
  // обрезаем пробельные символы
  const trimmedEmail = email.trim();
  const preparedEmail = trimmedEmail.toLowerCase();
  console.log(preparedEmail);
  // здесь будет запись в базу данных
}
saveEmail()

// скрыть/открыть блок
const button = document.querySelector('#button')
const content = document.querySelector('#content')
button.addEventListener('click', () =>{
  
  if (content.classList.toggle('content-hidden')){
    button.textContent = "Открыть блок"
  }else{
    button.textContent = "Закрыть блок"
  }  
})
///Аккордеон
//1.вариант
const headers = document.querySelectorAll('[data-name="accordeon-title"]')

headers.forEach(function (item) {
  item.addEventListener('click',function(){
    this.nextElementSibling.classList.toggle('hidden')
  })
})
///2.вариант

// headers.forEach(function(item){
//   item.addEventListener('click'())
// })

// function showContent() {
//   this.nextElementSibling.classList.toggle('hidden')
// }


