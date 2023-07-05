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
        name.textContent = 'Клинок, рассекающий демонов';
        name.style.textShadow = 'none'
        japanFlag.style.display = 'none'
      }
  
  })


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
  
  let text = `   Эпоха «Тайсё» была полна неожиданностей. Много легенд нашли свое логическое подтверждение в те года. Люди давненько стали думать о присутствии демонов в гущах леса. И эти существа были крайне опасны и кровожадны. В ночное время суток они вели охоту на людей, убивая невинных граждан, демоны питались их плотью. Однако со временем эти легенды стали больше напоминать сказки. Подобных инцидентов в лесах не происходило, люди перестали верить. И было это зря, ведь несколько лет назад с отцом главного героя – Танджиро Камадо случилась неприятность.
  Тот пропал при странных обстоятельствах, а юноша взвалил на себя ответственность за семью. Когда Танджиро отправился продавать уголь, он не думал, что при возвращении домой застанет кровавую картину. Его родственники были убиты. Семья растерзана, и везде по дому виднеются следы крови. Единственный человек оставшийся в живых – сестренка главного героя. Она рассказала о демонах пришедших из леса в их дом. Оказалось, что девушка была ими обращена и скоро может стать убийцей. Герою истории нужно следить за поведением сестры и мстить за смерть матери и младшего братика.`
  
  revealText(text, '.text-about', 5, 500, alphabet)

//   const quotesName = document.getElementById("name-quotes")

//   const quotes = async() => {
//     const response = await fetch("https://animechan.xyz/api/random/anime?title=Demon Slayer")
//     const result = await response.json()
//     console.log(result)
//   }

// quotes()