var size = 214 * 25;
var b = [];
for (i = 0; i < size + 215; i++)
  b[i] = 0;
var char = " .:*sS#$".split("");
var e = document.getElementsByTagName("PRE")[0].firstChild;

function f()
{
  for (i = 0; i < 5; i++)
    b[Math.floor(Math.random() * 214) + 214 * 24] = 204;
  a = "";
  for (i = 0; i < size; i++)
  {
    b[i] = Math.floor((b[i] + b[i + 1] + b[i + 214] + b[i + 215]) / 4);
    a += char[b[i] > 7 ? 7 : b[i]];
    if (i % 214> 212)
      a += "\r\n";
  }
  e.data = a;
  setTimeout(f, 30);
}
f();