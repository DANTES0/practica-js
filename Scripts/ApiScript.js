// let EnglishWord = 'read'


const root = document.getElementById('root')
const pump = document.getElementById('pump')

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

// const r = encodeURI(`https://jffhwufghure.com/親`)

let store = {
    character: '1',
    kanji: {
        video: {
            mp4: '',
            poster: ''
        }
    }
};

const fetchData = async () => {
    const word = document.getElementById('input-word')

    const response = await fetch(url+word.value, options);
    const data = await response.json();
    console.log(data[0].kanji.character)

    // const {
    //     character
    // } = data[0].kanji

    console.log(data[0].kanji.character);

    store = {
        ...store,
        character: data[0].kanji.character
    }

    console.log(store)

    pump.innerHTML = data[0].kanji.character

    const responseEnglish = await fetch(urlE+data[0].kanji.character, optionsEnglish);
	const result = await responseEnglish.json();

    console.log(result)

    const {
        kanji: {
            video: {
                mp4,
                poster
            }
        }
    } = result
    console.log(mp4)
    console.log(poster)

    pump.innerHTML = `<img src ="${poster}"/>`

    word.value =""
};

const markup = () => {
    const {character} = store;
    return ` <div>${character}</div>`
}

// const renderComponent = () => {
//     root.innerHTML = markup();
// }
// const {character} = store


// const urlE = `https://kanjialive-api.p.rapidapi.com/api/public/kanji/${character}`;
// const EncodeURL = encodeURI(urlE)
// const optionsEnglish = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f6ecb975d7msh2261e06589e3676p19964fjsndd30636c56c4',
// 		'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
// 	}
// };

// console.log(EncodeURL)
// console.log(character)


const fetchDataEnglish = async() => {
    
    const response = await fetch(EncodeURL, optionsEnglish);
	const result = await response.json();
    console.log(result)
}

const buttonClick = document.getElementById("input")
buttonClick.addEventListener('click', fetchData)
// word.value=""
// buttonClick.setAttribute('value', "")

// fetchData();
// fetchDataEnglish();
const image = async() => {
    const response = await fetch(`https://api.waifu.im/search/?included_tags=waifu`)
    const result = await response.json()
    console.log(result)

}


const news = async() => {
    const responseq = await fetch(`https://animechan.xyz/api/random`)
    const resultw = await responseq.json()
    console.log(resultw)

    // pump.innerHTML = `<img src ="${result.results[0].source_url}"/>`
};

const imageWaifu = async() => {
    const responseq = await fetch(`https://api.waifu.pics/sfw/waifu`)
    const resultw = await responseq.json()
    console.log(resultw)

    // pump.innerHTML = `<img src ="${result.results[0].source_url}"/>`
};

const fact = async() => {
    const responseq = await fetch(`https://japan-api.ninja/api/v1/random_fact`)
    const resultw = await responseq.json()
    console.log(resultw)

    // pump.innerHTML = `<img src ="${result.results[0].source_url}"/>`
};

// var size = 80 * 25;
// var b = [];
// for (i = 0; i < size + 81; i++)
//   b[i] = 0;
// var char = " .:*sS#$".split("");
// var e = document.getElementsByTagName("PRE")[0].firstChild;

// function f()
// {
//   for (i = 0; i < 10; i++)
//     b[Math.floor(Math.random() * 80) + 80 * 24] = 70;
//   a = "";
//   for (i = 0; i < size; i++)
//   {
//     b[i] = Math.floor((b[i] + b[i + 1] + b[i + 80] + b[i + 81]) / 4);
//     a += char[b[i] > 7 ? 7 : b[i]];
//     if (i % 80 > 78)
//       a += "\r\n";
//   }
//   e.data = a;
//   setTimeout(f, 30);
// }
// f();
//******************************************************************************************************* */
// var size = 200 * 25;
// var b = [];
// for (i = 0; i < size + 201; i++)
//   b[i] = 0;
// var char = " .:*sS#$".split("");
// var e = document.getElementsByTagName("PRE")[0].firstChild;

// function f()
// {
//   for (i = 0; i < 10; i++)
//     b[Math.floor(Math.random() * 200) + 200 * 24] = 190;
//   a = "";
//   for (i = 0; i < size; i++)
//   {
//     b[i] = Math.floor((b[i] + b[i + 1] + b[i + 200] + b[i + 201]) / 4);
//     a += char[b[i] > 7 ? 7 : b[i]];
//     if (i % 200> 198)
//       a += "\r\n";
//   }
//   e.data = a;
//   setTimeout(f, 30);
// }
// f();
//***************************************************************************************************************** */

// const fireElement = document.getElementById('fire');

// function generateFire() {
//   const fireHeight = 15;
//   const fireWidth = 50;
//   const fireChars = [' ', '.', ':', '+', '*', '?', 'S', '#', '@'];

//   let fire = '';

//   // Генерация огня с помощью случайных символов ASCII из массива fireChars
//   for (let y = fireHeight - 1; y >= 0; y--) {
//     for (let x = 0; x < fireWidth; x++) {
//       const randomCharIndex = Math.floor(Math.random() * fireChars.length);
//       const randomIntensity = Math.floor(Math.random() * 3) + 1;
//       fire += `<span class="fire-char fire-char-intensity-${randomIntensity}">${fireChars[randomCharIndex]}</span>`;
//     }
//     fire += '\n';
//   }

//   return fire;
// }

// function updateFire() {
//   fireElement.innerHTML = generateFire();
// }

// // Обновление огня каждые 100 миллисекунд
// setInterval(updateFire, 100);


// fact()

// image()
// imageWaifu()
// news()



