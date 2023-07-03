document.getElementById('burger-line-wrapper').addEventListener('click', function() {
    const checker = document.getElementById('check-menu')
    const burgerMenu = document.getElementById('burger-menu')
    console.log(burgerMenu)
    const name = document.getElementById('page-name')
    const japanFlag = document.getElementById('japan-flag')
    if (!checker.checked) {
        name.textContent = 'Японская атмосфера';
        japanFlag.style.display = 'block'  
        name.style.textShadow ='-3px 3px #558ABB'  
        checker.checked = true
        burgerMenu.style.maxHeight = '100vh'
    } else {
        checker.checked = false
        burgerMenu.style.maxHeight = '0'
        name.textContent = 'Факты о Японии';
        name.style.textShadow = 'none'
        japanFlag.style.display = 'none'
      }
  
  })