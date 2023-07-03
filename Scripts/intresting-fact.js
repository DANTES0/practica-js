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

  function close(id_checkMenu, id_answer) {
    const checker = document.getElementById(id_checkMenu)
    const answer1 = document.getElementById(id_answer)
    if(checker.checked) {
        answer1.style.maxHeight = '400px';
    } else 
    {
        answer1.style.maxHeight = '0';
    }
  }
document.getElementById('question1').addEventListener('click', () => close('check-menu1', 'answer1'))
document.getElementById('question2').addEventListener('click', () => close('check-menu2', 'answer2'))
document.getElementById('question3').addEventListener('click', () => close('check-menu3', 'answer3'))
document.getElementById('question4').addEventListener('click', () => close('check-menu4', 'answer4'))
document.getElementById('question5').addEventListener('click', () => close('check-menu5', 'answer5'))
document.getElementById('question6').addEventListener('click', () => close('check-menu6', 'answer6'))
document.getElementById('question7').addEventListener('click', () => close('check-menu7', 'answer7'))
document.getElementById('question8').addEventListener('click', () => close('check-menu8', 'answer8'))
document.getElementById('question9').addEventListener('click', () => close('check-menu9', 'answer9'))
document.getElementById('question10').addEventListener('click', () => close('check-menu10', 'answer10'))
document.getElementById('question11').addEventListener('click', () => close('check-menu11', 'answer11'))
document.getElementById('question12').addEventListener('click', () => close('check-menu12', 'answer12'))
document.getElementById('question13').addEventListener('click', () => close('check-menu13', 'answer13'))
document.getElementById('question14').addEventListener('click', () => close('check-menu14', 'answer14'))
document.getElementById('question15').addEventListener('click', () => close('check-menu15', 'answer15'))
