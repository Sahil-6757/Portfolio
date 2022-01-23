let a = document.getElementById('textbox1');
let b = document.getElementById('textbox2');
let c = document.getElementById('textbox3');
function wake()
{
  let para = document.getElementById('message');
  c.innerText= a.innerText+b.innerText;
  para.innerText = c;

  console.log(para);
}