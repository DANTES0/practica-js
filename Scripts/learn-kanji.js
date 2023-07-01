let check = false
document.getElementsByClassName('menu')[0]
        .addEventListener('click', function (event) {
            const name = document.getElementById('page-name')
            const japanFlag = document.getElementById('japan-flag')
            if (check == false) {
                name.textContent = 'Японская атмосфера';
                japanFlag.style.display = 'block'
                check = true;
                name.style.textShadow ='-3px 3px #558ABB'
            } else {
                name.textContent = 'Изучение японских иероглифов';
                check = false;
                name.style.textShadow = 'none'
                japanFlag.style.display = 'none'
            }
        });

document.getElementsByClassName('search-bar-input')[0]
    .addEventListener('click', function() { //mouseover
        const input = document.getElementById('search-bar-input')
        input.style.transition = '1.5s all'
        input.style.width = '800px'
        input.setAttribute('placeholder', '')
})

document.getElementsByClassName('search-bar-input')[0]
    .addEventListener('mouseout', function() {
        const input = document.getElementById('search-bar-input')
        input.style.transition = '1.5s all'
        input.style.width = '90px'
        input.setAttribute('placeholder', 'поиск...')
})

document.getElementsByClassName('search-bar-input')[0]
    .addEventListener('keydown', function(event) {
        const input = document.getElementById('search-bar-input')
        if (event.keyCode == 13) {
            if (input.value != ''){
                console.log(input.value)
            }  
        }
    
})