document.getElementById("nav-bar-icon-open").addEventListener("click",function(){
    document.getElementById("nav-xsml").style.height = 40 + "vh";
    document.getElementById("siteout2").style.display = "block";
    document.getElementById("sitein2").style.display = "block";
    document.getElementById("nav-bar-icon-open").style.display = "none";
    document.getElementById("nav-bar-icon-close").style.display = "block";
})

document.getElementById("nav-bar-icon-close").addEventListener("click",function(){
    document.getElementById("nav-xsml").style.height = 00 + "vh";
    document.getElementById("siteout2").style.display = "none";
    document.getElementById("sitein2").style.display = "none";
    document.getElementById("nav-bar-icon-open").style.display = "block";
    document.getElementById("nav-bar-icon-close").style.display = "none";
})

//NAV KISMI BİTTİ

//Photo Workshop
//typertitle

var txt = "Photo Workshop";
var i = 0;
var txt2 = "- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui non diam eleifend egestas id a ligula. Proin interdum vehicula neque sit amet scelerisque. Nulla imperdiet mollis libero."
var d = 0;
var speed = 200;
var speed2 = 45;

function typeWriter(){
    if(i<=txt.length){
        document.getElementById("typerheading").innerHTML += txt.charAt(i);
        i++
    }
    setTimeout(typeWriter,speed);

    if(i==txt.length){
        typeWriter2();
    }
}

var typeWriter2 = function(){
    if(d<=txt2.length){
        document.getElementById("typertitle").innerHTML += txt2.charAt(d);
        d++
    }
    setTimeout(typeWriter2,speed2);
}

// TYPEWRİTER BİTTİ


//MENU SEÇİMİ ÜRÜN

document.getElementById("all").addEventListener("click",function(){
    document.getElementById("product1").style.display = "block";
    document.getElementById("product2").style.display = "block";
    document.getElementById("product3").style.display = "block";
    document.getElementById("product4").style.display = "block";
})


//ALL SEÇİMİ BİTTİ


document.getElementById("popular").addEventListener("click",function(){
    document.getElementById("product1").style.display = "block";
    document.getElementById("product2").style.display = "none";
    document.getElementById("product3").style.display = "block";
    document.getElementById("product4").style.display = "none";
})


//POPULAR SEÇİMİ BİTTİ


document.getElementById("new").addEventListener("click",function(){
    document.getElementById("product1").style.display = "none";
    document.getElementById("product2").style.display = "block";
    document.getElementById("product3").style.display = "none";
    document.getElementById("product4").style.display = "none";
})


//NEW SEÇİMİ BİTTİ

document.getElementById("lens").addEventListener("click",function(){
    document.getElementById("product1").style.display = "none";
    document.getElementById("product2").style.display = "none";
    document.getElementById("product3").style.display = "none";
    document.getElementById("product4").style.display = "block";
})


//LENSE SEÇİMİ BİTTİ


document.getElementById("product1").addEventListener("click",function(){
    document.getElementById("temp1").style.width = 80 + "%";
    document.getElementById("temp1").style.height = 100 + "vh";
    document.getElementById("sect1").style.display ="flex";
    document.getElementById("product1").style.padding = 20+"px";
    document.getElementById("nav-md").style.display = "none";
    document.getElementById("nav-xsml").style.display = "none";
    document.getElementById("nav-xsml-bar-wrapper").style.display = "none";

    var mediaQuery = window.matchMedia('(max-width: 768px)')
    if(mediaQuery.matches){
        document.getElementById("temp1").style.width = 100 + "%";
    }

})

//1. KISIM BİTTİ

document.getElementById("product2").addEventListener("click",function(){
    document.getElementById("temp2").style.width = 80 + "%";
    document.getElementById("temp2").style.height = 100 + "vh";
    document.getElementById("sect2").style.display ="flex";
    document.getElementById("product2").style.padding = 20+"px";
    document.getElementById("nav-md").style.display = "none";
    document.getElementById("nav-xsml").style.display = "none";
    document.getElementById("nav-xsml-bar-wrapper").style.display = "none";

    var mediaQuery2 = window.matchMedia('(max-width: 768px)')
    if(mediaQuery2.matches){
        document.getElementById("temp2").style.width = 100 + "%";
    }

})

//2.KISIM BİTTİ


document.getElementById("product3").addEventListener("click",function(){
    document.getElementById("temp3").style.width = 80 + "%";
    document.getElementById("temp3").style.height = 100 + "vh";
    document.getElementById("sect3").style.display ="flex";
    document.getElementById("product3").style.padding = 20+"px";
    document.getElementById("nav-md").style.display = "none";
    document.getElementById("nav-xsml").style.display = "none";
    document.getElementById("nav-xsml-bar-wrapper").style.display = "none";

    var mediaQuery3 = window.matchMedia('(max-width: 768px)')
    if(mediaQuery3.matches){
        document.getElementById("temp3").style.width = 100 + "%";
    }

})

//3.KISIM BİTTİ


document.getElementById("product4").addEventListener("click",function(){
    document.getElementById("temp4").style.width = 80 + "%";
    document.getElementById("temp4").style.height = 100 + "vh";
    document.getElementById("sect4").style.display ="flex";
    document.getElementById("product4").style.padding = 20+"px";
    document.getElementById("nav-md").style.display = "none";
    document.getElementById("nav-xsml").style.display = "none";
    document.getElementById("nav-xsml-bar-wrapper").style.display = "none";

     var mediaQuery4 = window.matchMedia('(max-width: 768px)')
    if(mediaQuery4.matches){
        document.getElementById("temp4").style.width = 100 + "%";
    }

    else{
        document.getElementById("temp4").style.width = 80 + "%";
        document.getElementById("temp4").style.height = 90 + "vh";
    }

})

//4 .KISIM BİTTİ


document.getElementById("temp1kapa").addEventListener("click",function(){
    document.getElementById("temp1").style.width = 0 + "%";
    document.getElementById("temp1").style.height = 0 + "vh";
    document.getElementById("sect1").style.display ="none";
    document.getElementById("product1").style.padding = 0+"px";
    document.getElementById("nav-md").style.display = "block";
    
    var mediaQueryxsml1 = window.matchMedia('(max-width:768px');
    if(mediaQueryxsml1.matches){
        document.getElementById("nav-xsml").style.display = "flex";
        document.getElementById("nav-xsml-bar-wrapper").style.display = "block";
        document.getElementById("nav-md").style.display = "none";
    }
})

//1. QUERY KISIM BİTTİ


document.getElementById("temp2kapa").addEventListener("click",function(){
    document.getElementById("temp2").style.width = 0 + "%";
    document.getElementById("temp2").style.height = 0 + "vh";
    document.getElementById("sect2").style.display ="none";
    document.getElementById("product2").style.padding = 0+"px";
    document.getElementById("nav-md").style.display = "block";
    
    var mediaQueryxsml2 = window.matchMedia('(max-width:768px');
    if(mediaQueryxsml2.matches){
        document.getElementById("nav-xsml").style.display = "flex";
        document.getElementById("nav-xsml-bar-wrapper").style.display = "block";
        document.getElementById("nav-md").style.display = "none";
    }
})

//1. QUERY KISIM BİTTİ

document.getElementById("temp3kapa").addEventListener("click",function(){
    document.getElementById("temp3").style.width = 0 + "%";
    document.getElementById("temp3").style.height = 0 + "vh";
    document.getElementById("sect3").style.display ="none";
    document.getElementById("product3").style.padding = 0+"px";
    document.getElementById("nav-md").style.display = "block";
    
    var mediaQueryxsml3 = window.matchMedia('(max-width:768px');
    if(mediaQueryxsml3.matches){
        document.getElementById("nav-xsml").style.display = "flex";
        document.getElementById("nav-xsml-bar-wrapper").style.display = "block";
        document.getElementById("nav-md").style.display = "none";
    }
})

//3. QUERY KISIM BİTTİ


document.getElementById("temp4kapa").addEventListener("click",function(){
    document.getElementById("temp4").style.width = 0 + "%";
    document.getElementById("temp4").style.height = 0 + "vh";
    document.getElementById("sect4").style.display ="none";
    document.getElementById("product4").style.padding = 0+"px";
    document.getElementById("nav-md").style.display = "block";
    
    var mediaQueryxsml4 = window.matchMedia('(max-width:768px');
    if(mediaQueryxsml4.matches){
        document.getElementById("nav-xsml").style.display = "flex";
        document.getElementById("nav-xsml-bar-wrapper").style.display = "block";
        document.getElementById("nav-md").style.display = "none";
    }
})

//4. QUERY KISIM BİTTİ