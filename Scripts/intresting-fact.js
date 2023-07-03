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


function revealText(text, selector, n_changes, duration_milliseconds, charset) {
    let element = document.querySelector(selector)
    let text_index = 0
    let text_interval = setInterval(function() {
      
      let i = text_index
      if (i >= text.length) {
        clearInterval(text_interval)
        return
      }
      
      let span = document.createElement('span')
      
      if (text[i] == '\n' || text[i] == ' ') {
        span.innerText = text[i]
      } else {
        span.innerText = charset[Math.floor(Math.random()*charset.length)]
      }
      span.style.opacity = '0.0'
      element.appendChild(span)
      span.style.transition = `all ${duration_milliseconds}ms ease-in`
      
      setTimeout(function() {
        span.style.opacity = '1.0'
        if (text[i] == '\n' || text[i] == ' ') return
  
        let count = 0
        let interval = setInterval(function() {
  
          count += 1
          if (count == n_changes) {
            span.innerText = text[i]
            clearInterval(interval)
          } else {
            span.innerText = charset[Math.floor(Math.random()*charset.length)]
          }
  
        }, duration_milliseconds/n_changes)
      }, 30)
      text_index += 1
    }, 1)
    
  }
  
  let alphabet = '一人七八九十入二三上下大女万土山千川子小くぞだなにねのぷゐゕ゜゜゜ィシ##**!!!&$$#^'
  
  let text = `  Япония привлекает путешественников с тех пор, как в 1853 году она впервые открылась для международной торговли. Несмотря на сохранение многочисленных традиций и культурных достопримечательностей, Япония также является одним из ведущих экономических и технологических центров мира. Древние боги и традиционные обычаи соседствуют с передовыми технологиями и модной поп-культурой, и всегда есть что-то новое, что можно испытать во время посещения.
    На этой странице собраны самые интересные факты о Японии. Прочитав их, вы погрузитесь в японскую атмосферу и возможно захотите побывать в этой красивой и разнообразной стране.`
  
  revealText(text, '.text-fact', 5, 500, alphabet)
  
