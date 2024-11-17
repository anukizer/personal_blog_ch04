const btns = document.querySelector('#btns')
const body = document.body

const toggleSwitch = document.createElement('button')

toggleSwitch.textContent = 'Light Mode'
btns.appendChild(toggleSwitch)

toggleSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-mode')

    if(body.classList.contains('dark-mode')){
        toggleSwitch.textContent = "Dark Mode"
    } else {
        toggleSwitch.textContent = "Light Mode"
    }

})

