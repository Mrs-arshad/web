$(document).ready(function(){

   

  
  $(".Bars").click(function(){
    console.log("click")
       $(".dropdown-content").addClass("dropdown-content-show")
       $("body").css("overflow", "hidden");
       $("body").addClass("drawer-open");
   
       });
       $(".time").click(function(){
        console.log("click")
    $(".dropdown-content").removeClass("dropdown-content-show");
    $("body").css("overflow", "auto");
    $("body").removeClass("drawer-open");

    });   
    $(".plus").click(function(){
      // $(".plus-dropdown").slideDown("slow");
    });
  $(".plus").click(function(){
  //     console.log("click")
  // $(".minus").show()
  // $(".plus").hide()
  });

  $(".fa-solid").click(function(){
  //   var list =$(this).siblings(".plus");
  // list.slideToggle()
  // $(this).slideDown(".plus");
  $(this).parents(".items").next(".plus-dropdown").slideToggle();
  $(this).toggleClass("fa-plus") 
  $(this).toggleClass("fa-minus")  
});






//   $(".plus-dropdowm").click(function(){
//     console.log("click")
//     $(this).hide();

// });

  // $(".time").click(function(){
  //     console.log("click")
  // $(".dropdown-content").hide()
  // });
});