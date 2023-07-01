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
    }
};

const fetchData = async () => {
    const word = document.getElementById('search-bar-input')
    let i = 0;
    let arrKanji = [];

    const response = await fetch(url+word.value, options);
    const data = await response.json();

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
            }
        } = result
        console.log(character)
        console.log(english)
        console.log(images)
        console.log(mp4)
        console.log(poster)
        console.log(examples)
            i++;
    }
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

    word.value =""
};