// var size = 214 * 25;
// var b = [];
// for (i = 0; i < size + 215; i++)
//   b[i] = 0;
// var char = " .:*sS#$".split("");
// var e = document.getElementsByTagName("PRE")[0].firstChild;

// function f()
// {
//   for (i = 0; i < 5; i++)
//     b[Math.floor(Math.random() * 214) + 214 * 24] = 204;
//   a = "";
//   for (i = 0; i < size; i++)
//   {
//     b[i] = Math.floor((b[i] + b[i + 1] + b[i + 214] + b[i + 215]) / 4);
//     a += char[b[i] > 7 ? 7 : b[i]];
//     if (i % 214> 212)
//       a += "\r\n";
//   }
//   e.data = a;
//   setTimeout(f, 30);
// }
// f();



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
  }, 30)
  
}

let alphabet = '一人七八九十入二三上下大女万土山千川子小くぞだなにねのぷゐゕ゜゜゜ィシ##**!!!&$$#^'

let text = `Добро пожаловать на сайт с нетривиальной японской атмосферой! На этом сайте вы сможете проникнуться japonese internet vibe. Этот сайт наполнен интересным дизайном, разными фишками вперемешку с фактами о японской культуре. Вы познакомитесь с японской субкультурой аниме (отаку - яп. オタク), японскими иероглифами (кандзи - яп. 漢字) и многое другое. `

revealText(text, '.info', 5, 500, alphabet)
