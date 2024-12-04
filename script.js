// var h = document.getElementById('main');
// var s ="";
// for(let i=1;i<=8;i++){
//     s += "<h1>GoodBye</h1>"
// }
// h.innerHTML = s;

//yellow wala
//https://i.pinimg.com/564x/1c/57/93/1c57937487a39b7e84cdba3fe054eeeb.jpg

//green wala
//https://i.pinimg.com/564x/4a/c4/58/4ac458b8bc53756a40af5c1c947e4a5d.jpg

//orange wala
//https://i.pinimg.com/564x/82/46/9e/82469e3e56928571d11391eddf694b7d.jpg

//blue wala
//https://i.pinimg.com/736x/87/a1/3e/87a13ebe6b5e4f100b84b0e68bc994d5.jpg

//pink wala
//https://i.pinimg.com/564x/8c/9b/cb/8c9bcbfe572f5ff326cdc94d46b587e8.jpg

//purple wala
//https://i.pinimg.com/564x/96/79/85/967985ca22b2b00b485eca2bd47295d2.jpg

//cat gunda
//https://i.pinimg.com/564x/15/87/95/1587952b6f63bed9be47dfbefd51067d.jpg

//titli
//https://i.pinimg.com/564x/f4/b3/6c/f4b36c406e116b502e60c52598ec841e.jpg

var main = document.getElementById('main');
var s ="";

var array = ["https://i.pinimg.com/564x/1c/57/93/1c57937487a39b7e84cdba3fe054eeeb.jpg",
             "https://i.pinimg.com/564x/4a/c4/58/4ac458b8bc53756a40af5c1c947e4a5d.jpg",
             "https://i.pinimg.com/564x/82/46/9e/82469e3e56928571d11391eddf694b7d.jpg",
             "https://i.pinimg.com/736x/87/a1/3e/87a13ebe6b5e4f100b84b0e68bc994d5.jpg",
             "https://i.pinimg.com/564x/8c/9b/cb/8c9bcbfe572f5ff326cdc94d46b587e8.jpg",
             "https://i.pinimg.com/564x/96/79/85/967985ca22b2b00b485eca2bd47295d2.jpg",
             "https://i.pinimg.com/564x/15/87/95/1587952b6f63bed9be47dfbefd51067d.jpg",
             "https://i.pinimg.com/564x/f4/b3/6c/f4b36c406e116b502e60c52598ec841e.jpg"
            ]
for (let i=1;i<=48;i++) {
    let r = Math.floor(Math.random()*array.length);
    let p = array[r];
    s += `<div class="card"><img src=${p}></div>`;
}
main.innerHTML = s;














