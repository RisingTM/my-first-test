// var text=document.getElementsByClassName('h1')
// console.log(text)

// var input=document.getElementsByClassName('firstn')
// console.log(input)

// var demo=document.querySelector('#firstn')
// console.log(demo);

// var h1s=document.querySelectorAll('.h1')
// console.log(h1s);

// var photo=document.images
// console.log(photo[1]);

// document.title = "hello"


// var btn=document.getElementById('btn')
// btn.onclick=function(){
//     photo[0].src="https://www.mypetsies.com/blog/app/uploads/2016/09/Top-30-Funny-cat-Memes-and-Quotes-Very-FUnny.jpg"
// }

// var btn1=document.getElementById('btn1')
// btn1.onclick=function(){
//     photo[0].src="https://www.rd.com/wp-content/uploads/2020/11/when-your-humans-guest-calls-you-a-chunky-kitty-meme.jpg?fit=700,700"
// }

// var forms=document.forms
// console.log(form[0]);
// form[0].text1.value="html"
// form[0].num1.value="232"

// var links=document.links
// console.log(links[0]);

// btn.addEventListener('click' , function(){
//     if(forms[1].pass.type=="number"){
//         forms[1].pass.type="password"
//         btn.innerHTML='hide'
//     }
//     else{forms[1].pass.type=="number"
//     btn.innerHTML='show'}
// })

// var btn=document.getElementById("btn")
// var divOne=document.getElementById("divOne")
// btn.addEventListener("click",
// function(){
//     // divOne.classList.toggle("two")
//     if(divOne.classList.contains('one')){
//         divOne.classList.replace('one' , 'two')
//     }
//     else {
//         divOne.classList.replace('two' , 'one')
//     }
// })


// var myImage=document.getElementById("img")
// var myInput=document.getElementById("ipt")
// var btn=document.getElementById("btn")
// btn.addEventListener('click' ,change )


//     function change(){

//         myImage.setAttribute('alt', 'hello this is a photo')
//     }

// console.log(innerHeight);
// console.log(outerHeight);
// console.log(innerWidth);
// console.log(outerWidth);

// var width=document.getElementById('width')
// var height=document.getElementById('height')


// Window.onresize=function(){
//     height.innerhtml=window.innerHeight
//     width.innerhtml=window.innerWidth
// }

// var width=document.getElementById('width')
// var height=document.getElementById('height')
// window.onresize=function(){

//     width.innerHTML=window.innerHeight
//     height.innerHTML=window.innerWidth

// }

// x=confirm('do u know me')
// if(x==true){
//     console.log('hello friend');
// }
// else{
//     window.open('https://www.google.com')
// }

// function time(){
//     document.write("hello")
// }

// setTimeout(time , 3000)

// var input1=document.getElementById("input")

// function time(){
//     document.write("hello <br>")
// }

// setInterval(time , 1000)
// var input1=document.getElementById("input")

// var i=0
// function count(){
//     input1.value=i
//     i++

//     if(i==10){
//         x=clearInterval(x)
//     }

// }

// x=setInterval(count ,1000)


// var y=document.getElementById("y")
// var x="amira"
// function change(){
//  for(var i=0 ; i<x.length; i++){
//     y.innerHTML+=(x[i])
//  }
// }
//  setInterval(change,1000)

// var x="gamal"
// var i=0
// function count(){
//    if (i<x.length){
//       y.innerHTML+=x[i]
//    }
//    i++
// }
// setInterval(count,1000)


// var TxtType = function(el, toRotate, period) {
//    this.toRotate = toRotate;
//    this.el = el;
//    this.loopNum = 0;
//    this.period = parseInt(period, 10) || 2000;
//    this.txt = '';
//    this.tick();
//    this.isDeleting = false;
// };

// TxtType.prototype.tick = function() {
//    var i = this.loopNum % this.toRotate.length;
//    var fullTxt = this.toRotate[i];

//    if (this.isDeleting) {
//    this.txt = fullTxt.substring(0, this.txt.length - 1);
//    } else {
//    this.txt = fullTxt.substring(0, this.txt.length + 1);
//    }

//    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

//    var that = this;
//    var delta = 200 - Math.random() * 100;

//    if (this.isDeleting) { delta /= 2; }

//    if (!this.isDeleting && this.txt === fullTxt) {
//    delta = this.period;
//    this.isDeleting = true;
//    } else if (this.isDeleting && this.txt === '') {
//    this.isDeleting = false;
//    this.loopNum++;
//    delta = 500;
//    }

//    setTimeout(function() {
//    that.tick();
//    }, delta);
// };

// window.onload = function() {
//    var elements = document.getElementsByClassName('typewrite');
//    for (var i=0; i<elements.length; i++) {
//        var toRotate = elements[i].getAttribute('data-type');
//        var period = elements[i].getAttribute('data-period');
//        if (toRotate) {
//          new TxtType(elements[i], JSON.parse(toRotate), period);
//        }
//    }
//    // INJECT CSS
//    var css = document.createElement("style");
//    css.type = "text/css";
//    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
//    document.body.appendChild(css);
// };




// var btn=document.getElementById("btn")

// btn.addEventListener('click',scroll)

// function scroll(){
//    window.scrollTo(1000,1264
//       )
// }



// var btn4=document.getElementById("btn4")

// btn4.addEventListener('click',scroll4)

// function scroll4(){
//    window.scrollBy(1000,700)
// }



// window.onscroll=function(){
//    document.body.style.backgroundColor=('red')
// }



// window.onscroll=function(){
//    if (scrollY <= 500){
//       document.body.style.backgroundColor='black'
//    }
//    else{document.body.style.backgroundColor='yellow'
// }
// }



// var demmo=document.getElementById("demmo")

// console.log(demmo.offsetTop)

// var ul=document.createElement('ul')
// var li1=document.createElement('li')
// var li2=document.createElement('li')
// var li3=document.createElement('li')
// var text=document.createTextNode('one')
// document.body.appendChild(ul)
// ul.appendChild(li1)
// ul.appendChild(li2)
// ul.appendChild(li3)
// li1.appendChild(text)

// var h1=document.createElement('h1')
// var p=document.createElement('p')

// var text1=document.createTextNode('hello')
// var text12=document.createTextNode('hellot this pizze 2')

// document.body.appendChild(h1)
// document.body.appendChild(p)

// h1.appendChild(text1)
// p.appendChild(text12)

// var loading=document.getElementById('loading')
// window.onload=function(){
//    setTimeout(function() {
//       loading.style.display="none"
//    },2000)
// }

// var discord={
//    name : 'rising',
//    age:14,
//    id:5115,
//    tga:["cpvp","planing","having no life","grinding"],
//    welcome:function(){
//       console.log(hi)
//    }
// }

// console.log(discord.name);
// console.log(discord.age);

// console.log(discord.tga[1])



// var divs=document.getElementsByClassName('list')
// var links=document.getElementsByClassName('li-link')
// console.log(links)
// for(var i=0 ; i<links.length ; i++)
//     console.log (links[i])

// var lis=document.getElementsByClassName('li-link')
// var divs=document.getElementsByClassName('list')

// window.onscroll=function(){
//     for(var i=0 ; i<divs.length ; i++){
//         if(scrollY > divs[i].offsetTop && scrollY< divs[i].offsetTop +divs[i].offsetHeight ){
//             lis[i].classList.add('activeLink')

//        }
//        else{
//         lis[i].classList.remove('activeLink')
//        }
//     }
// }



// for(var i=0 ; i<lis.length ; i++){
//     lis[i].onclick=function(){
//         this.classList.add ('active')
//         // for(var j=0 ; j<lis.length ; j++){
//         //     lis[i].classList.remove('active')
//         // }
//     }
// }

var imgs=Array.from(document.getElementsByTagName('img'))
var imglayer=document.getElementById('imgLayer')
var close=document.getElementById('close')
var imgsinl=document.getElementById('myImg')


for(var i=0 ; i<imgs.length ; i++){
    imgs[i].onclick=function(){
        imglayer.style.display='block'
        imgSCR=this.getAttribute('src')
        imgsinl.setAttribute('src' , imgSCR)
    }
}

close.onclick=function(){
    imgLayer.style.display='none'
}

var photo=document.getElementById('photo')
var btn=document.getElementById('btn')
var images=[
'https://addons-media.operacdn.com/media/CACHE/images/themes/14/263414/1.0-rev1/images/bfbc104282aca898de6aa3700f202b5a/75e543660cc620f3092d8461c51202af.jpg',
'https://rare-gallery.com/thumbnail/76596-Opera-GX.jpg',
'https://preview.redd.it/7xcorg2yle671.jpg?width=3840&format=pjpg&auto=webp&s=a6f091164ff03837277246e921b8127b38461d63',
'https://w0.peakpx.com/wallpaper/164/146/HD-wallpaper-opera-abstract-dark.jpg',
'https://e0.pxfuel.com/wallpapers/161/515/desktop-wallpaper-neon-crypto-3840-x-2160-apexlegends-opera-gx-thumbnail.jpg',
'https://steamuserimages-a.akamaihd.net/ugc/1785138465494263844/D346069A4EE8AC16A21E5A66B83C8B57566FA4DF/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false']

btn.onclick=function(){
    var randomNum=Math.floor(Math.random()*images.length)
    photo.setAttribute('src' , images[randomNum])
   
}
