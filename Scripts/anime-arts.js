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
  
  let text1 = `Отаку — человек, который увлекается чем-либо (не путать с нерд или geek). За пределами Японии, в том числе и в России, обычно употребляется по отношению к фанатам аниме и манги. В Японии данному смыслу соответствует аббревиатура «аниота» — «аниме»+ «отаку» . В японском языке это слово имеет следующую этимологию: о (уважительный префикс) + таку (?) (дом, жилище). Дословно означает «ваш дом». Впервые в качестве термина это слово появилось в цикле статей «Исследование „отаку“» ( Отаку но кэнкю:?) эссэиста Накамори Акио. Цикл публиковался в журнале «Манга бурикко» (яп. ?) в период с июня по декабрь 1983 года, и в названии было использовано слово, которым, по наблюдениям Накамори, чаще всего называли друг друга представители субкультуры. Изначально слово использовалось для обозначения себе подобных среди фотографов-любителей — фотографы в глазах других людей были социофобами, затворниками, фанатиками своего хобби, и постепенно слово «отаку» получило негативное значение: затворник, фанатик. Обычно отаку — это молодой человек, который живёт дома, на работу не ходит, общается всего с 2—3 людьми не из своей «тусовки».  `
  
  let text2 = `В японской речи также существуют обороты «пасокон отаку» (по отношению к помешанным на персональных компьютерах), «гэйму отаку» (к играющим в видеоигры) и отаку, как экстремальные фанаты идолов — разрекламированных певцов. Это слово чрезвычайно распространено и в английском уже стало литературным, и сейчас используется для обозначения поклонников в целом: музыкальных отаку, отаку боевых искусств, и т. п. Слово «отаку» в Японии имеет сильно негативную окраску; называть так собеседника невежливо, если только он сам себя так не называет. Однако в других странах фанаты аниме и манги часто называют себя «отаку», понимая под этим отнюдь не помешанного фаната, а лишь преданного поклонника. Однако и там встречаются поклонники аниме, знающие о японском значении этого слова и потому не любящие, чтобы их называли «отаку». В связи с этим слово стало записываться катаканой, чтобы отличать от отаку, которое по-прежнему обозначает дом собеседника в вежливой речи. Близкое по смыслу слово, которое употребляется во многих странах, например в России и Украине, анимешник — любитель аниме и/или манги, но не фанат. `
  revealText(text1, '.text-main-anime1', 5, 500, alphabet)

  setTimeout(()=> revealText(text2, '.text-main-anime2', 5, 500, alphabet), 7000)

//   revealText(text2, '.text-main-anime2', 5, 500, alphabet)
const imgWaifu = document.getElementById(`waifu`)
const imgCatBoy = document.getElementById(`catBoy`)

const imageWaifu = async() => {
  const response = await fetch(`https://api.waifu.pics/sfw/waifu`)
  const result = await response.json()
  imgWaifu.setAttribute('src', result.url)

  // pump.innerHTML = `<img src ="${result.results[0].source_url}"/>`
};

const imageCatBoy = async() => {
  const response = await fetch(`https://api.catboys.com/img`)
  const result = await response.json()
  imgCatBoy.setAttribute('src', result.url)
  console.log(result.url)

}
imageCatBoy()
let store = {
  urlWaifu: '',
  urlCatBoy: '' 
}

const imageResponse = async() => {
  const responseWaifu = await fetch(`https://api.waifu.pics/sfw/waifu`)
  const resultWaifu = await responseWaifu.json()
  imgWaifu.setAttribute('src', resultWaifu.url)

  const responseCatBoy = await fetch(`https://api.catboys.com/img`)
  const resultCatBoy = await responseCatBoy.json()
  imgCatBoy.setAttribute('src', resultCatBoy.url)
}
imageResponse()

document.getElementById('waifuBtn').addEventListener('click', imageWaifu)
document.getElementById('catBoyBtn').addEventListener('click', imageCatBoy)

document.getElementById('catBoyBtn').addEventListener('click', function() {
  imgCatBoy.style.transition = '0.3s all'
  imgCatBoy.style.opacity = '0'
  setTimeout(changeOpacityCat, 1200)
})

function changeOpacityCat() {
  imgCatBoy.style.opacity = '1'
}
function changeOpacityWaifu() {
  imgWaifu.style.opacity = '1'
}

document.getElementById('waifuBtn').addEventListener('click', function() {
  imgWaifu.style.transition = '0.3s all'
  imgWaifu.style.opacity = '0'
  setTimeout(changeOpacityWaifu, 1200)
})

document.getElementById('burger-line-wrapper').addEventListener('click', function() {
  const checker = document.getElementById('check-menu')
  const burgerMenu = document.getElementById('burger-menu')
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
    name.textContent = 'Изучение японских иероглифов';
    name.style.textShadow = 'none'
    japanFlag.style.display = 'none'
    }

})