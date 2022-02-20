//*hamburger-menu part



$(document).on("click", ".hamburger-menu", function(){
    
    $('.mobile_version').fadeToggle();


  
});

$(document).on("click", ".mobile-close", function(){
  
    $('.mobile_version').fadeToggle();

  
});



//user_select
$(document).on("click", ".header_user_img_title_svg_wrapper",function(){
    $(".header_user_info_wrapper").toggleClass("open");
    $(this).toggleClass("active");
})

$(document).on("click", ".header_user_info",function(){
    $(".header_user_info").removeClass("active");
    $(this).addClass("active");
})

//completed_projects
$(document).on("click", ".completed_projects_title_svg_wrapper",function(){
    $(".completed_projects_info_wrapper").toggleClass("open");
  
})


//input
$(document).on("input", ".top_search_box_input", function(){
      var value =  $(this).val();

      if(value.length > 2){
          $(".top_hidden_search_info_wrapper").addClass("open");
          $(".top_hidden_search_box_btn_wrapper").addClass("open");
      } else{
        $(".top_hidden_search_info_wrapper").removeClass("open");
        $(".top_hidden_search_box_btn_wrapper").removeClass("open");
      }

      $(this).closest(".top_search_box_wrapper").addClass("active");
})

$(document).on("click",".top_hidden_search_box_svg_wrapper", function(){
    $(".top_hidden_search_info_wrapper").removeClass("open");
    $(".top_search_box_input").val("");
     $(this).parent().removeClass("open");

   
})

//rating
$(function () {
 
    $("#rateYo").rateYo({
      normalFill: "#D5DADD"
    });
   
  });

  
  var normalFill = $("#rateYo").rateYo("option", "normalFill"); //returns "#A0A0A0"
 
// Setter
$("#rateYo").rateYo("option", "normalFill", "#F8C51B"); //returns a jQuery Element


//read_more_btn
$(document).on("click",".read_more_btn", function(){
    $(this).parent().find(".find_remote_freelance_jobs_description2").show();
   
})



$(document).on("click", ".read_more_btn2", function(){
    $(this).parent().find(".find_remote_freelance_jobs_description2").show();
})