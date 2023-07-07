
document.getElementsByClassName('search-bar-input')[0]
    .addEventListener('click', function() { //mouseover
        const input = document.getElementById('search-bar-input')
        input.style.transition = '1.5s all'
        input.style.width = '740px'
        input.setAttribute('placeholder', '')
})

document.getElementsByClassName('search-bar-input')[0]
    .addEventListener('mouseout', function() {
        const input = document.getElementById('search-bar-input')
        input.style.transition = '1.5s all'
        input.style.width = '120px'
        input.setAttribute('placeholder', 'поиск...')
})

document.getElementsByClassName('search-bar-input')[0]
    .addEventListener('keydown', function(event) {
        const input = document.getElementById('search-bar-input')
        if (event.keyCode == 13) {
            if (input.value != ''){
                console.log(input.value)
                fetchData();
            }  
        }
    
})

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
        name.textContent = 'Изучение японских иероглифов';
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
  
  let text = `Кандзи (漢字, букв. «Буквы (династии) Хань») — китайские иероглифы, используемые в японской письменности в основном для записи имён существительных, основ глаголов и прилагательных, а также японских имён собственных. Первые китайские тексты были завезены в Японию буддийскими монахами из корейского королевства Пэкче в V веке н. э. Сегодня наряду с исконно китайскими иероглифами используются знаки, изобретённые в самой Японии: так называемые кокудзи. В зависимости от того, каким путём кандзи попал в японский язык, иероглифы могут использоваться для написания одного или разных слов или, ещё чаще, морфем. С точки зрения читателя это означает, что кандзи имеют одно или несколько чтений. Выбор чтения иероглифа зависит от контекста, сочетания с другими кандзи, места в предложении и т. д. Некоторые часто используемые кандзи имеют десять или больше различных чтений. Чтения, как правило, подразделяются на онные чтения, или онъёми (японские интерпретации китайского произношения иероглифа) и кунные чтения, или кунъёми (основанные на произношении исконно японских слов). Некоторые кандзи имеют несколько онъёми, потому что были заимствованы из Китая несколько раз: в разное время и из разных областей. Некоторые имеют разные кунъёми, потому что к китайскому иероглифу нашлось несколько японских синонимов. С другой стороны, кандзи может и не иметь ни одного онъёми или ни одного кунъёми. Редкие чтения иероглифов называются нанори. Нанори широко распространены в именах собственных, в частности фамилиях. Существует много сочетаний кандзи, для произношения составляющих которых используются и оны, и куны: такие слова называют дзу: бако (重箱) или юто: (湯桶). Сами эти два термина являются автологическими: первый кандзи в слове дзубако читается по ону, а второй — по куну, а в слове юто — наоборот. Другие примеры: 金色 кинъиро — «золотой» (он-кун); 空手道 каратэдо: — каратэ (кун-кун-он). Гикун (義訓) — чтения сочетаний кандзи, не имеющие прямого отношения к кунам или онам отдельных иероглифов, а относящиеся к смыслу всего сочетания. К примеру, сочетание 一寸 можно прочесть как иссун (то есть «один сун»), однако на самом деле это неделимое сочетание тётто («немного»). Гикун часто встречается в японских фамилиях. По всем этим причинам выбор правильного чтения иероглифа является сложной задачей для изучающих японский язык. В большинстве случаев для записи одного японского слова использовались разные кандзи, для отражения оттенков значения. Например, слово наосу, записанное как 治す, будет означать «лечить болезнь», в то время как запись 直す будет означать «чинить» (например, велосипед). Иногда разница в написании прозрачна, а иногда достаточно тонка. Для того, чтобы не ошибиться в оттенках смысла, слово порой записывается хираганой. В современном письменном языке активно используется около 3 тысяч иероглифов. 2136 кандзи составляют необходимый минимум, преподаваемый в школах с 2010 года (до этого минимум был 1945 кандзи). От кандзи произошли две слоговые азбуки — каны: хирагана и катакана. `
  
  revealText(text, '.text-main', 5, 500, alphabet)

  let checkOnDestroy = 0

  const url = `https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?kem=`;
// const url = `https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?kem=английское слово`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f6ecb975d7msh2261e06589e3676p19964fjsndd30636c56c4',
            'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
        }
    };

const urlE = `https://kanjialive-api.p.rapidapi.com/api/public/kanji/`;
// const urlE = `https://kanjialive-api.p.rapidapi.com/api/public/kanji/символ кандзи`;
const optionsEnglish = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f6ecb975d7msh2261e06589e3676p19964fjsndd30636c56c4',
        'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
    }
};

let store = {
    character: '1',
    examples:[] ,
    kanji: {
        character: '',
        meaning: {
            english: ''
        },
        strokes: {
            images: []
        },
        video: {
            mp4: '',
            poster: ''
        }
    },
    kunyomi_ka_display: '',
    onyomi_ja: ''
};

const fetchData = async () => {
    let startValue = 0
    let endValue = 10
    while (startValue < endValue)
    {
        if (document.getElementById(`${startValue}`) != null){
            document.getElementById(`${startValue}`).remove()
        }
        startValue++
    }

    startValue = 0
    const word = document.getElementById('search-bar-input')
    let i = 0;

    const response = await fetch(url+word.value, options);
    const data = await response.json();
    const searchWarning = document.getElementById('kanji-wrapper')
    console.log(data)
    if (data.length == 0) {
        searchWarning.innerHTML = `<div id='destroy' class="nothingText-wrapper">
        <div class="NothingText">Нет результатов</div>
    </div>` 
    const destroy = document.getElementById('destroy')
    checkOnDestroy = 1
    } else {
    if (checkOnDestroy == 1){
        destroy.remove()
        checkOnDestroy = 0
    }
    
    console.log(data[i].kanji.character);
    console.log(data.length)
    while (i < data.length){
        const responseEnglish = await fetch(urlE+data[i].kanji.character, optionsEnglish);
        const result = await responseEnglish.json();

        console.log(result)

        const {
            examples,
            kanji: {
                character,
                meaning: {
                    english
                },
                strokes: {
                    images
                },
                video: {
                    mp4,
                    poster
                }
            },
            kunyomi_ka_display,
            onyomi_ja
        } = result
        console.log(character)
        console.log(english.split(', '))
        let checkOnUndefined = english.split(', ')
        if(checkOnUndefined[1] == undefined) {
            checkOnUndefined[1] = ''
        } else {
            checkOnUndefined[1] = '→ ' + checkOnUndefined[1]
        }
        if(checkOnUndefined[2] == undefined) {
            checkOnUndefined[2] = ''
        }else {
            checkOnUndefined[2] = '→ ' + checkOnUndefined[2]
        }
        console.log(checkOnUndefined[1])
        console.log(images)
        console.log(mp4)
        console.log(poster)
        console.log(examples)
        console.log(examples[0].meaning.english)
        // console.log(examples[3].audio.mp3)
        let createBlock = document.createElement('div')
        createBlock.className = 'kanji'
        createBlock.id = `${i}`
        document.getElementById('kanji-wrapper').appendChild(createBlock);
        createBlock.innerHTML = `<div class="kanji-word">
        <div class="kanji-name">
            <div class="kanji-name-kanji">
                кандзи →
            </div>
            <div class="kanji-name-character">
                ${character}
            </div>
        </div>
        <div class="kanji-table-wrapper">
            <div class="kanji-table">
                <div class="kanji-table-name"> значения:
                    <ul class="kanji-ul">
                        <li class="kanji-list">→ ${checkOnUndefined[0]}</li>
                        <li class="kanji-list">${checkOnUndefined[1]}</li>
                        <li class="kanji-list">${checkOnUndefined[2]}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="kanji-white-line"></div>
    <div class="kanji-about">
        <div class="kanji-about-wrapper">
            <div class="kanji-about-grammar-wrapper">
                <div class="kanji-about-grammar">
                    Правописание
                </div>
                <div class="kanji-about-grammar-examples" id="kanji${i}">
                </div>
                <!-- <div class="kanji-about-grammar-arrow">→</div> -->
            </div>

            <div class="kanji-about-speaking">
                <div class="kanji-about-speaking-onyomi-wrapper">
                    <div class="kanji-about-speaking-onyomi-name">Onyomi</div>
                    <div class="kanji-about-speaking-onyomi-character">${onyomi_ja}</div>
                </div>
                <div class="kanji-about-speaking-konyomi-wrapper">
                    <div class="kanji-about-speaking-konyomi-name">Kunyomi</div>
                    <div class="kanji-about-speaking-konyomi-character">${kunyomi_ka_display}</div>
                </div>
            </div>

            <div class="kanji-about-audio">
                <div class="kanji-about-audio-name-wrapper">
                    <div class="kanji-about-audio-name">
                        Примеры с звуковыми дрожками
                    </div>
                </div>
                <div class="kanji-about-audio-examples-wrapper">
                    <div class="kanji-about-audio-examples" id='audioKanji${i}'>

                    </div>
                </div>
            </div>
        </div>
    </div>`
        let countImages = 0
        let ImagesBlocks = ''
        while (countImages < images.length){
            if (countImages != images.length - 1) {
                ImagesBlocks = ImagesBlocks + 
            `<img src="${images[countImages]}" alt="" class="kanji-about-grammar-steps">
            <div class="kanji-about-grammar-arrow">→</div>`
            } else {
                ImagesBlocks = ImagesBlocks + 
            `<img src="${images[countImages]}" alt="" class="kanji-about-grammar-steps">`
            }
            
            countImages++
            // console.log(ImagesBlocks)
        }
        console.log(ImagesBlocks)
        document.getElementById(`kanji${i}`).innerHTML = ImagesBlocks
        let kanjiAudio = ''
        if (examples.length >= 3) {
            kanjiAudio = kanjiAudio + `<div class="kanji-about-audio-examples-text-column">
            <div data-title='${examples[0].meaning.english}' class="kanji-about-audio-examples-text-column-examples">
            <button onclick="playMusic('${examples[0].audio.mp3}')" class="kanji-about-audio-examples-play"></button>
            <div class="kanji-about-audio-examples-text">${examples[0].japanese}</div>
        </div>
        <div data-title='${examples[1].meaning.english}' class="kanji-about-audio-examples-text-column-examples">
            <button onclick="playMusic('${examples[1].audio.mp3}')" class="kanji-about-audio-examples-play"></button>
            <div class="kanji-about-audio-examples-text">${examples[1].japanese}</div>
        </div>
        <div data-title='${examples[2].meaning.english}' class="kanji-about-audio-examples-text-column-examples">
            <button onclick="playMusic('${examples[2].audio.mp3}')" class="kanji-about-audio-examples-play"></button>
            <div class="kanji-about-audio-examples-text">${examples[2].japanese}</div>
        </div>
            </div>`
            let count = 3
            kanjiAudio = kanjiAudio + `<div class="kanji-about-audio-examples">
            <div class="kanji-about-audio-examples-text-column">
                `
            while (examples[count] != undefined && count!= 6) {
                kanjiAudio = kanjiAudio +
                 `<div data-title='${examples[count].meaning.english}' class="kanji-about-audio-examples-text-column-examples">
                <button onclick="playMusic('${examples[count].audio.mp3}')" class="kanji-about-audio-examples-play"></button>
                <div class="kanji-about-audio-examples-text">${examples[count].japanese}</div>
            </div>`
                count++
            }
        }
        kanjiAudio = kanjiAudio + `</div>
        </div>`
        count = 0
        document.getElementById(`audioKanji${i}`).innerHTML = kanjiAudio
        

    // store = {
    //     ...store,
    //     character: data[0].kanji.character
    // }

    // console.log(store)

    // pump.innerHTML = data[0].kanji.character

    // const responseEnglish = await fetch(urlE+data[0].kanji.character, optionsEnglish);
	// const result = await responseEnglish.json();

    // console.log(result)

    // const {
    //     kanji: {
    //         video: {
    //             mp4,
    //             poster
    //         }
    //     }
    // } = result
    // console.log(mp4)
    // console.log(poster)

    // pump.innerHTML = `<img src ="${poster}"/>`
    i++;
    word.value =""
}}}



function playMusic(url){
    var music = new Audio(url);
    music.play();
}