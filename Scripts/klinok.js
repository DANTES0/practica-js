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
        burgerMenu.style.maxHeight = '80vh'
    } else {
        checker.checked = false
        burgerMenu.style.maxHeight = '0'
        name.textContent = 'Клинок, рассекающий демонов';
        name.style.textShadow = 'none'
        japanFlag.style.display = 'none'
      }
  
  })

const imageMainCharacters = ['../img/tangiro.png','../img/nezuko.png', '../img/inoske.png', '../img/zenitsu.png', '../img/mudzan.png']
const textMainCharacters = ['Танджиро по своей природе очень добр. «Человек с добрыми глазами» - так его описывают. Очень решительный и целеустремлённый. Хотя Танджиро и сам относительно силён, он не боится просить других о помощи, когда в этом есть необходимость. Он всегда готов встать на защиту окружающих, но защита сестры для него является высшим приоритетом.Важной чертой характера Танджиро является его сострадательность, нередко проявляющаяся даже по отношению к демонам. Однако за время службы в рядах истребителей Танджиро набирается опыта, становится более расчётливым и решительным. Благодаря храбрости и желанию защитить слабых он встречает соперников с уважением и достоинством, будь то люди или демоны.','Младшая сестра Танджиро. Она была превращена в демона Мудзаном Кибуцуджи. Будучи еще человеком Незуко была очень доброй, заботливой старшей сестрой, которая прежде всего думала о других.Однако, как Демон, Незуко, похоже, забыла значительную часть своих воспоминаний о человеке, помимо тех, что связаны с её семьёй. Она по-прежнему очень заботится и защищает людей, которых считает членами своей семьи.Незуко также сохраняет некоторые из своих человеческих эмоций, поскольку она плачет, когда грустит, и улыбается, когда счастлива, но в целом она выглядит лишенной эмоции по сравнению с человеком. Она всё ещё гораздо спокойнее и менее зла, чем большинство демонов.', 'Охотник на демонов, путешествующий в компании Танджиро. Иноске невероятно вспыльчивый и опрометчивый, поэтому он часто влезает в драку с более сильным противником, не задумываясь о последствиях. Он любит соревноваться и часто пытается спровоцировать своих товарищей — Танджиро и Зеницу — на поединок. Иноске вырос в горах один, и из-за этого ему сложно общаться с людьми, он не умеет читать и писать. Благодаря тому, что он стал охотником на демонов и обрёл друзей, Иноске научился уделять больше времени обдумыванию стратегий, анализу противника и оценке рисков. Иноске довольно мстителен, особенно когда страдают люди, о благосостоянии которых он заботится.', 'Истребитель демонов и один из главных героев, путешествующих с Танджиро Камадо. Зеницу труслив. Он считает, что, ввиду опасности работы охотника на демонов, жить ему осталось недолго, из-за чего он часто пристает ко встречным девушкам, упрашивая их выйти за него замуж. У Зеницу низкая самооценка, мешающая ему оправдать ожидания других людей и свои собственные. Это часто заставляет его потерять веру в свои способности и, даже когда это очевидно, Зеницу отрицает, что он одержал победу своими силами. Он думает, что его призвание — жить скромной жизнью, а не убивать демонов. Но, даже будучи мягкотелым, чувство долга перед помогает Зеницу забыть о страхе и сосредоточиться в нужный момент.', 'Первый в своем роде демон, прародитель остальных демонов. Антагонист аниме и манги "Клинок, рассекающий демонов". Лунам он не прощает некомпетентность и провалы, но может похвалить за успешное завершение миссии. Кибуцуджи не воспринимает своих врагов всерьез. Мудзану также не нравится, когда ему задают вопросы или приказывают. Он склонен к нарциссизму. Его раздутое самолюбие и бредовое чувство собственного достоинства настолько велико, что он не может выдержать, когда над ним насмехаются или корректируют его, полагая, что другие существуют только для того, чтобы служить ему. Это также означает, что он редко воспринимает какого-либо противника или угрозу всерьёз. ']
const nameMainCharacters = ['Танджиро Камадо', 'Незуко Камадо', 'Иноске Хашибира', 'Зеницу Агацума', 'Мудзан Кибуцуджи']
const firstText = document.getElementById('first-text')
const firstImg = document.getElementById('first-img')
const firstName = document.getElementById('first-name')
const mainBorder = document.getElementById('main-border')
let countMainClick = 0
document.getElementById('first-btn').addEventListener('click', function() {
  console.log('сработало нажатие')
  countMainClick++
  if (countMainClick != 5){
    firstImg.style.opacity = '0'
    mainBorder.style.opacity = '0'
    mainBorder.style.transition = '0.3 all'
    firstImg.style.transition = '0.3s all'
    setTimeout(() => {
      changeImg(firstImg, imageMainCharacters, countMainClick)
    }, 200)
    setTimeout(() => {
      changeOpacity(firstImg, mainBorder)
    }, 1200)
    // firstImg.style.backgroundImage = `url(${imageMainCharacters[countMainClick]})`
    firstText.innerHTML = textMainCharacters[countMainClick]
    firstName.innerHTML = nameMainCharacters[countMainClick]
  } else {
    countMainClick = -1
  }
  

})

const hashiroName = ['Гёмей Химеджима', 'Кёджуро Ренгоку', 'Тенген Узуй', 'Гию Томиока', 'Мицури Канроджи', 'Обанай Игуро', 'Санеми Шинадзугава', 'Муичиро Токито', 'Шинобу Кочо']
const hashiroImage = ['../img/stolp.png', '../img/rengoku.png', '../img/tengen.png','../img/tomioko.png', '../img/kanrodji.png', '../img/iguro.png', '../img/sanemi.png', '../img/muichiro.png', '../img/kocho.png']
const secondImg = document.getElementById('second-img')
const secondName = document.getElementById('second-name')
const hashiroBorder = document.getElementById('hashiro-border')
let countHashiroClick = 0
document.getElementById('second-btn').addEventListener('click', function() {
  countHashiroClick++
  if (countHashiroClick != 9) {
    secondImg.style.opacity = '0'
    hashiroBorder.style.opacity = '0'
    hashiroBorder.style.transition = '0.3 all'
    secondImg.style.transition = '0.3s all'
    setTimeout(() => {
      changeImg(secondImg, hashiroImage, countHashiroClick)
    }, 200)
    setTimeout(() => {
      changeOpacity(secondImg, hashiroBorder)
    }, 1200)
    // secondImg.style.backgroundImage = `url(${hashiroImage[countHashiroClick]})`
    secondName.innerHTML = hashiroName[countHashiroClick]
  } else {
    countHashiroClick = -1
  }
})

const demonName =['Аказа', 'Гютаро', 'Энму', 'Руи']
const demonImage = ['../img/akaza.png', '../img/gitaro.png', '../img/enmu.png', '../img/rui.png']
const demonBorder = document.getElementById('demon-border')
const thirdImg = document.getElementById('third-img')
const thirdName = document.getElementById('third-name')
let countDemonClick = 0 

document.getElementById('third-btn').addEventListener('click', function() {
  countDemonClick++
  if (countDemonClick != 4) {
    thirdImg.style.opacity = '0'
    demonBorder.style.opacity = '0'
    demonBorder.style.transition = '0.3 all'
    thirdImg.style.transition = '0.3s all'
    setTimeout(() => {
      changeImg(thirdImg, demonImage, countDemonClick)
    }, 200)
    setTimeout(() => {
      changeOpacity(thirdImg, demonBorder)
    }, 1200)
    thirdName.innerHTML = demonName[countDemonClick]
  } else {
    countDemonClick = -1
  }
})

function changeOpacity(img, border) {
  img.style.opacity = '1'
  border.style.opacity = '1'
}
function changeImg(idImg, nameImg, count) {
  idImg.style.backgroundImage = `url(${nameImg[count]})`
}

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


  const quotesName = document.getElementById("name-quotes")
  const quotesText = document.getElementById("text-quotes")
  document.addEventListener("click", function(){
    quotes()
  })

//   const quotes = async() => {
//     const response = await fetch("https://animechan.xyz/api/random/anime?title=Demon Slayer")
//     const result = await response.json()
//     console.log(result)
//     quotesName.innerHTML = result.character
//     quotesText.innerHTML = result.quote
//   }
// quotes()
