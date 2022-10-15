$(function() {
    $('.skitter-large').skitter()
});


//review slider
$('.owl-carousel').owlCarousel({
  
    autoplay:true,
    loop:true,
    autoplayTimeout:2000,
    responsiveClass:true,
    center:true,
    active:true,
    responsive:{
        0:{
            items:1,
            loop:true
            
            
        },
  
        400:{
          items:1,
          loop:true,
          
          
          
      },
  
      600:{
        items:1,
        loop:true,
        
        
    },
  
  
        800:{         
            items:3,
            nav:false,
            loop:true,
            
  
            
        },
        1000:{
            items:5,  
            nav:true,
            loop:true,
            
  
        }
    }
  })




 


// get coffe api (image-title)
let coffeMenuAPi=[];
async function getData() {
let result = await fetch(`https://api.sampleapis.com/coffee/hot`);
let response =  await result.json(); 
coffeMenuAPi = response;
displayApi()
}
getData();


//display api in html
function displayApi() {
    let str='';
    for (let i = 0; i < 6; i++) {
        str+=`
        <div class="col-md-4 col-sm-6 mb-2">
            <div class="text-center p-4 menuDetails rounded-1 ">
                <img src="${coffeMenuAPi[i].image}" class="mb-2 shadow-lg " alt="">
                <h5 class="text-capitalize">${coffeMenuAPi[i].title}</h5>
                <p>$15.99</p>
                <button class="btn rounded-0 text-light  bg-gold">Add To Cart</button>      
             </div>
        </div>
        `
    }

    $('#Coffe').html(str);
    
}


//convert color from white to red for love icon
$('.fa-heart').click(function () {

    if ($(this).css('color')=='rgb(255, 255, 255)') {

        $(this).css({
            color:'red',
            backgroundColor:'#d3ad7f'

        })
    }

    else{
        $(this).css({
            color:'white',
            backgroundColor:'transparent'

        })

    }

})



// open show box when click eye icon
$('.fa-eye').click(function(){
    $('#fixedBox').css({
        display:'block',
        transition: 'all 1s'
    })
})


// close show box when click close icon
$('.fa-close').click(function(){
    $('#fixedBox').css('display','none')
    $('#showBox h4').html(`${value=1}`)
  

     
})



//when click on eye icon get data from menu and display it on show Box 
let eysIcons = document.querySelectorAll('.fa-eye');
let cofeprice;
eysIcons.forEach((icons)=>{
    icons.addEventListener('click', function () {
        let coffeeImg =icons.nextElementSibling;
        let coffeeTitle = coffeeImg.nextElementSibling
        let coffePrice = coffeeTitle.nextElementSibling
        cofeprice=  coffePrice.nextElementSibling.innerHTML
        $('#showBox img').attr('src',coffeeImg.src)
        $('#showBox h1').html(coffeeTitle.innerHTML)
        $('#showBox span').html(cofeprice)
               
    })
})



//when click on cart icon display check icon and The opposite is true when  click on check icon display cart 
let cartIcon =document.querySelectorAll('.fa-shopping-cart');
cartIcon.forEach((icons)=>{
    icons.addEventListener('click',function () {
        let checkIcon=icons.previousElementSibling;
             $(checkIcon).css("backgroundColor",'#d3ad7f')
            $(checkIcon).fadeIn(500)
            $(icons).css('display','none')

            checkIcon.addEventListener('click',function () {
                $(icons).fadeIn(500)
                $(checkIcon).css('display','none')
            })
            
    })
})


//when click plus icon the count increases and the price too
let value = Number($('#showBox h4').html());
$('.fa-plus').click(function () {
    $('#showBox h4').html(`${value+=1}`)
      let  newPrice = ($('#showBox h4').html())*Number(cofeprice) ;
       $('#showBox span').html(newPrice)
    
})


//when click minus icon the count decreases and the price too
$('.fa-minus').click(function () {
    if (value > 0) {
        $('#showBox h4').html(`${value-=1}`)
        let newPrice = ($('#showBox h4').html())*Number(cofeprice) ;
        $('#showBox span').html(newPrice)
    }
})




//when click on link in navbar go to his section at 2 seconds
$('.nav-link').click(function () {
    let clikedLink = $(this).attr('href')
    let sectionOffsetTop = $(clikedLink).offset().top
    console.log(sectionOffsetTop)
    $('body').animate(
     {
       scrollTop:sectionOffsetTop,
     },2000);   
 })
 
 
 //when click on link in footer go to his section at 2 seconds
 $('.liHover').click(function () {
     let clikedLink = $(this).attr('href')
     let sectionOffsetTop = $(clikedLink).offset().top
     console.log(sectionOffsetTop)
     $('body').animate(
      {
        scrollTop:sectionOffsetTop,
      },2000);   
  })
 
 
  //when scroll change navbar color 
  let aboutOffset = $('#About').offset().top;
 $(window).scroll(function () {
 
     let winScrollTop = $(window).scrollTop();
     if (winScrollTop+140 > aboutOffset) {
         $('.navbar').addClass('bg-nav border-0');

         $('.navbar img').attr('src','images/logo2.png')
         
     } else {
         $('.navbar').removeClass('bg-nav');
         $('.navbar img').attr('src','images/logo.png')
         
     }
 
 })


 //show and hide the btn up
$(window).scroll(function () {

    let winScrollTop = $(window).scrollTop();
    if (winScrollTop > aboutOffset) {
           $('.btn-up').fadeIn(1000);
    } else {
        $('.btn-up').fadeOut(1000);
        
    }

})

//when click on btn up move to home section 
$(".btn-up").click(function () {
    let homeOffset = $("#Home").offset().top;
    console.log(homeOffset);
  
    $('body').animate(
      {
        scrollTop: "0px",
      },
      3000
);
  });

//when click on cart icon in navbar show the cart section      
  $('#nav .fa-cart-shopping').click(function () {

    $('.cart').slideToggle(1000)
    
  })

//when scroll hide the cart section      
  $(window).scroll(function () {

    $('.cart').slideUp(1000)
    

})


$(document).ready(function () {
    $('.loading').fadeOut(2000 , function () {
      $('body').css('overflow','auto')
      $('.navbar').animate({
        opacity:'1'
      },3000)
      
    })
    
  })

