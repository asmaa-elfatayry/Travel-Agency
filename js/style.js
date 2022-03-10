
   
// check about local storge
let mainColor=localStorage.getItem('color-option');

let imageArr;
if(window.innerWidth<767){
    if(mainColor==="#FFA726"){
        imageArr=["1min","11min","cover2"] //1
        }
        if(mainColor==="#81D4FA"){ //2
        imageArr=["2min","22min","cover2"]
        }
        if(mainColor==="#B39DDB"){ //3
        imageArr=["3min","33min","cover2"]
        }
        if(mainColor==="#FDB091"){ //3
        imageArr=["4min","44min","cover2"]
        }
        if(mainColor==="#9CCC65"){ //5
        imageArr=["5min","55min","cover2"]
        }
        if(mainColor==="#31abdb"){ //6
        imageArr=["6min","66min","cover2"]
        }
}else{

if(mainColor==="#FFA726"){
    imageArr=["1","11","cover2"] //1
    }
    if(mainColor==="#81D4FA"){ //2
    imageArr=["2","22","cover2"]
    }
    if(mainColor==="#B39DDB"){ //3
    imageArr=["3","33","cover2"]
    }
    if(mainColor==="#FDB091"){ //3
    imageArr=["4","44","cover2"]
    }
    if(mainColor==="#9CCC65"){ //5
    imageArr=["5","55","cover2"]
    }
    if(mainColor==="#31abdb"){ //6
    imageArr=["6","66","cover2"]
    }

}
// if user chosen color
if(mainColor !==null){
// console.log(localStorage.getItem('color-option'));

// get color that user chossen from local storage
document.documentElement.style.setProperty('--main-color',mainColor);

   // remove active class from color list
document.querySelectorAll(".color-list li").forEach((ele)=>{
    ele.classList.remove('active');


      //   add active class if data = data in local storge
      if(ele.dataset.color===mainColor){
          ele.classList.add('active');
          mainColor=ele.dataset.color;
      }
});


}


// icon in setting
let icon=document.querySelector('.icon');

icon.onclick=function(){
    this.classList.toggle('fa-spin');

    // to open the box
    document.querySelector('.setting-user').classList.toggle('open');
}

// switch color  array about color
const colorLi=document.querySelectorAll('.color-list li');

colorLi.forEach(li=>{
    li.addEventListener('click',(e)=>{
       // console.log(e.target.dataset.color);

        // set color
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);

        // set color in local storge
        localStorage.setItem('color-option',e.target.dataset.color);

        // remove active class
       handlingActive(e);
        
    })
})

// random background option 
let randomBackground=true;
let intervalVar;

// check if we have local storage random background
let local_backgroundImg=localStorage.getItem('background_option');

// check if not null
if(local_backgroundImg !==null){
  if (local_backgroundImg==='true'){
    randomBackground=true;
  }else{
      randomBackground=false;

  }
//   remove all active class from span
document.querySelectorAll('.random-img span').forEach((ele)=>{
    ele.classList.remove('active');
});

if(local_backgroundImg==='true'){
document.querySelector('.yes').classList.add('active');
}else{
 document.querySelector('.no').classList.add('active');  
}
} 

// switch background image
const randomImg=document.querySelectorAll('.random-img span');

randomImg.forEach(span=>{
    span.addEventListener('click',(e)=>{
        // console.log(e.target.dataset.color);

        // remove active class
        handlingActive(e);
        
        if(e.target.dataset.background==='yes'){
            randomBackground=true;

            randomizeImage();

            localStorage.setItem('background_option',true);

        }else{
            randomBackground=false;

            // clear interval image
            clearInterval(intervalVar);

            localStorage.setItem('background_option',false);

        }
    })
})



// select element
let pageLanding=document.querySelector('.landin-page');

// switch color back ground

function randomizeImage(){
  
    if(randomBackground===true){
      
document.querySelectorAll(".color-list li").forEach(function(ele){
    ele.addEventListener("click",function(){
        console.log(ele.dataset.color);
        if(window.innerWidth<767){
            if(ele.dataset.color==="#FFA726"){ //1
                imageArr=["1min","11min","cover2"]
                }
                if(ele.dataset.color==="#81D4FA"){ //2
                imageArr=["2min","22min","cover2"]
                }
                if(ele.dataset.color==="#B39DDB"){ //3
                imageArr=["3min","33min","cover2"]
                }
                if(ele.dataset.color==="#FDB091"){
                    imageArr=["4min","44min","cover2"] //4
                    }
                if(ele.dataset.color==="#9CCC65"){ //5
                imageArr=["5min","55min","cover2"]
                }
                if(ele.dataset.color==="#31abdb"){
                imageArr=["6min","66min","cover2"]
                }
        }  else{

if(ele.dataset.color==="#FFA726"){ //1
imageArr=["1","11","cover2"]
}
if(ele.dataset.color==="#81D4FA"){ //2
imageArr=["2","22","cover2"]
}
if(ele.dataset.color==="#B39DDB"){ //3
imageArr=["3","33","cover2"]
}
if(ele.dataset.color==="#FDB091"){
    imageArr=["4","44","cover2"] //4
    }
if(ele.dataset.color==="#9CCC65"){ //5
imageArr=["5","55","cover2"]
}
if(ele.dataset.color==="#31abdb"){
imageArr=["6","66","cover2"]
}
        }
    })
})
        
intervalVar=setInterval(()=>{
  
 // genrate random number
let random=Math.floor(Math.random()*imageArr.length);

pageLanding.style.backgroundImage='url(./pic/'+ imageArr[random]+'.png)';

},4700)
    }
}

randomizeImage();

// travels start
// select
let ourTravels=document.querySelector('.Travels');

window.onscroll=function(){
    // travel offsit
    let travelOffcit=ourTravels.offsetTop;

    // outer hight
    let outerhight=ourTravels.offsetHeight;

    // window height
    let windowHight=this.innerHeight;

    // window scroll top
    let windowScrollTop=this.pageYOffset;

    if(windowScrollTop> (travelOffcit + outerhight - windowHight)){
        let allTravels=document.querySelectorAll('.travel-box .progress span');

        allTravels.forEach((ele)=>{
            ele.style.width=ele.dataset.progress;
        })
    }
}

// start our gallery

// create popup with imge 
// get image in array
let ourGallery=document.querySelectorAll('.gallery img');

ourGallery.forEach((img)=>{
    img.addEventListener(('click'),(e)=>{



        // create overlay
        let overlay=document.createElement('div');
        overlay.className="popup-overlay";
        document.body.appendChild(overlay);
        
        // create the popup
        let popupBox=document.createElement("div");

        popupBox.className="popup-box";

 // add alternative text
 if(img.alt !== null){
    // create heading
    let headingImg=document.createElement('h3');
    // create text
    let textImg=document.createTextNode(img.alt);

    headingImg.appendChild(textImg);

    popupBox.appendChild(headingImg)

    // create close span
    let closeSpan=document.createElement('span');

    // create close text
    let close=document.createTextNode('X');

    closeSpan.appendChild(close);

    closeSpan.className="close-btn";

    popupBox.appendChild(closeSpan);

}


        // create img
        let popupImg=document.createElement("img");
    
        // set src of img
        popupImg.src=img.src;

        popupBox.appendChild(popupImg);

        document.body.appendChild(popupBox);

       
    })
})
//  close popup
document.addEventListener("click",function(e){
    if(e.target.className=="close-btn"){
        e.target.parentNode.remove();

        // remove overlay
        // anthor way to rmove
        document.querySelector('.popup-overlay').remove();
    }
})




// select all bullets
const allBullt=document.querySelectorAll('.nav-bullets .bullet');

const allLinks=document.querySelectorAll('.links a');

function scrollToSection(elements){

elements.forEach(ele=>{
    ele.addEventListener("click",(e)=>{
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
behavior:'smooth'
        });
    })
})

}

scrollToSection(allBullt);
scrollToSection(allLinks);

function handlingActive(event){
    event.target.parentElement.querySelectorAll(".active").forEach((ele)=>{

        ele.classList.remove('active');
    });

    // add active class
    event.target.classList.add('active');
    
}

//  show & hide bullets
let bulletSpan=document.querySelectorAll('.bullets-option span');
let bulletsContainer=document.querySelector('.nav-bullets');
let bulletsLocalS=localStorage.getItem('bullets-option')

if(bulletsLocalS!==null){
bulletSpan.forEach(span=>{
    span.classList.remove('active');

});

if(bulletsLocalS==='block'){

    bulletsContainer.style.display="block";

    document.querySelector('.bullets-option .yes').classList.add("active");
}else{

    bulletsContainer.style.display="none";

    document.querySelector('.bullets-option .no').classList.add("active");
}
}

bulletSpan.forEach(span=>{
span.addEventListener("click",(e)=>{

    if(span.dataset.display==='show'){
        bulletsContainer.style.display="block";

        localStorage.setItem("bullets-option","block");
    }else{
        bulletsContainer.style.display="none";
        localStorage.setItem("bullets-option","none");
    }
    handlingActive(e);
});
});

// button reset

document.querySelector('.reset-option').onclick=function(){
    // localStorage.clear();
    // or
    localStorage.removeItem("bullets-option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("color-option");

    window.location.reload();
}

// Toggle menue
let ToogleBtnMenue=document.querySelector('.toggle-menue');

let Links=document.querySelector('.links');

ToogleBtnMenue.onclick=function(e){
    
e.stopPropagation(); 

    this.classList.toggle("active-menue");

    Links.classList.toggle("open");
}
// close menue
document.addEventListener("click",(e)=>{
    if(e.target!==ToogleBtnMenue && e.target!== Links){

        // check if menue open
        if(Links.classList.contains("open")){
            ToogleBtnMenue.classList.toggle("active-menue");

            Links.classList.toggle("open");
        }
    }
})

Links.onclick=function(e){
    e.stopPropagation(); 
}