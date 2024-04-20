const sideBarWidth=$(".side-nav").outerWidth();
let maxLength=100;
$("#nav-open").click(function () {
    $(".side-nav").animate({"left" : `0px`},500);
 
})
$(".fa-xmark").click(function () {
    $(".side-nav").animate({"left" : `-${sideBarWidth}`},500);
 
})
$(".target-H").click(function(e){
$(e.target).parent().next().slideToggle(500);
})
$("a[href^='#']").click(function (e) {

    let href=$(e.target).attr("href");
    let sectionTop=$(href).offset().top;
    $("html,body").animate({ scrollTop: sectionTop }, 2000);
})


window.onload = function() {
   
    countDownToTime("10 july 2024 9:56:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))

    $(".date-days").html(`${days} D`);
    $(".date-hours").html(`${hours} h`);
    $(".date-mins").html(`${ mins } m`);
    $('.date-secs').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }
$("textarea").keyup(function (e) { 
    let written=$(e.target).val().length;
    let charLeft=maxLength-written;
    if(charLeft<=0){
        $("#leftChars").html("your available character finished")
    }
    else{
        $("#leftChars").html(charLeft);
        
    }

})
