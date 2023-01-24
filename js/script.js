function showPassword() {
    const btn = document.querySelector('.password_btn')
    const input = document.querySelector('.password_input')

btn.addEventListener('click', () =>{
    btn.classList.toggle('active')
})
}
showPassword()