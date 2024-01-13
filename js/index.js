
var inputSearch=document.getElementById('inputSearch')
var navlink=document.getElementsByClassName('nav-link');
var dayName=document.getElementById('dayName');
// var dayDate=document.getElementById('dayDate');
var dayDateNumber=document.getElementById('dayDateNumber');
var dayDateName=document.getElementById('dayDateName')
var cityName=document.getElementById('cityName');

var tembC=document.getElementById('tembC');
var tembImgMini=document.getElementById('tembImgMini');
var tembImage=document.getElementById('tembImage');
var text=document.getElementById('text');
var imageOne=document.getElementById('imageOne');
var imageTow=document.getElementById('imageTow');
var imageThree=document.getElementById('imageThree');
var percentDay=document.getElementById('percentDay');
var distanceDay=document.getElementById('distanceDay');
var compass=document.getElementById('compass');
var todayDate= new Date("2024-01-12")

//////////////////////////////////////////////////////////////////////////

var textDayTow=document.querySelectorAll('.textDayTow');
//////////////////////////////////////////////////////////////////////
var day2Name=document.querySelectorAll('.day2Name');

var iconday2=document.querySelectorAll('.iconday2');
var tembCTow=document.querySelectorAll('.tembCTow');
var tembTow=document.querySelectorAll('.tembTow');
var textDayTow=document.querySelectorAll('.textDayTow');
/////////////////////////////////////////////////////////////////////////

 async function getData(name){
    let  weatherdata= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=cd484c350242450bbc3194057241101&q=${name}&days=3`)
    let weathecurrentdata=await weatherdata.json();
  
    return weathecurrentdata;
    
}

/////////////////////////////////////////////////////////////////////////


function displayweaherToday(data){
    cityName.innerHTML=data.location.name;
    tembC.innerHTML=data.current.temp_c;
    tembImage.setAttribute("src",data.current.condition.icon);
    text.innerHTML=data.current.condition.text;
    percentDay.innerHTML=data.current.humidity+"%";
    distanceDay.innerHTML=data.current.wind_kph;
    compass.innerHTML=data.current.wind_dir;
    
    dayName.innerHTML=todayDate.toLocaleDateString('en',{weekday:"long"});
    dayDateNumber.innerHTML= todayDate.getDate();
    dayDateName.innerHTML=todayDate.toLocaleDateString("en",{month:"long"})


}


 function displayDaytow(data){
    var focatdetails=data.forecast.forecastday;
   
    // console.log(focatdetails)
    for(var i=0;i<2;i++){
        // dayName.innerHTML=todayDate.toLocaleDateString('en',{weekday:"long"});
        var towName=new Date(focatdetails[i+1].date);
        // console.log(towName);
        day2Name[i].innerHTML=towName.toLocaleDateString("en",{weekday:"long"})
        tembCTow[i].innerHTML=focatdetails[i+1].day.maxtemp_c;
        iconday2[i].setAttribute('src',focatdetails[i+1].day.condition.icon)
        tembTow[i].innerHTML=focatdetails[i+1].day.mintemp_c;
        textDayTow[i].innerHTML=focatdetails[i+1].day.condition.text;
    }
}
 function displayDaythree(data){
    var docatditailsthree=data.forecast.forecastday;
    // console.log(docatditailsthree);
      for(var i=0;i<2;i++){
        var todayName= new Date()
        
        tembCTow[i].innerHTML=focatdetails[i+2].day.maxtemp_c;
        iconday2[i].setAttribute('src',focatdetails[i+2].day.condition.icon)
        tembTow[i].innerHTML=focatdetails[i+2].day.mintemp_c;
        textDayTow[i].innerHTML=focatdetails[i+2].day.condition.text;
    }
 }





 

  async function calldata(search="alex"){
    var waehergetdata=await getData(search)
    // console.log(waehergetdata);
    
    displayweaherToday(waehergetdata);
    displayDaytow( waehergetdata);
    displayDaythree(waehergetdata);

 }
 calldata()

inputSearch.addEventListener('input',function(){
    console.log(inputSearch.value);
    calldata(inputSearch.value)
})

// navlink=document.addEventListener('click',function(){
//     for(var i=0;i<navlink.length;i++){
        
//         navlink[i].style.borderWidth="5px";
//         navlink[i].style.borderColor="blue";
//         navlink[i].style.borderStyle="solid"

//     }
// })

var newsLink=document.getElementById('newsLink');
newsLink.addEventListener('click',function(){
    
    newsLink.classList.add("links");
    //  contactLink.classList.remove('links');
    //  photoLink.classList.remove('links');
    liveLink.classList.remove('links');
    // newsLink.classList.remove("links");
})
var liveLink=document.getElementById('liveLink');
liveLink.addEventListener('click',function(){
    liveLink.classList.add('links')
    newsLink.classList.remove("links");
    photoLink.classList.remove('links');
})
var photoLink=document.getElementById('photoLink');
photoLink.addEventListener('click',function(){

    photoLink.classList.add('links')
    contactLink.classList.remove('links')
    liveLink.classList.remove('links')
    
})

var contactLink=document.getElementById('contactLink');
contactLink.addEventListener('click',function(){
    contactLink.classList.add('links')
    photoLink.classList.remove('links')
    // liveLink.classList.remove('links')
    // newsLink.classList.remove("links");
})




