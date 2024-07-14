dWidth() ;
$(document).ready(function() {
    $(".loader").fadeOut(500,function () {
        $(".loading").fadeOut(300,function(){
            $("body").css({overflow:"auto"})
        });
    });
});
$('.close').on("click" ,function(){
    $(".links ul li").animate({top: 300} , 1400)
    $('.close').css({display:"none"});
    $('.open').css({display:"block"});
  let contentWidth  = $('.sidenav').innerWidth();
  $('.sidenav').animate({left:`${-contentWidth +60}`},1000);
});
$('.open').on("click" ,function(){
    $(".links ul li").animate({top: -10},900)
    $('.close').css({display:"block"});
    $('.open').css({display:"none"});
    let contentWidth  = $('.sidenav').innerWidth();
    $('.sidenav').animate({left:`${0}`},1000);
})
function dWidth() {
    let contentWidth  = $('.sidenav').innerWidth();
    $('.sidenav').animate({left:`${-contentWidth +60}`},0);
}





 var submitBtn = document.getElementById("submitBtn") ;

function validateName() {
  var regex = /^[a-zA-Z ]+$/;
  if (regex.test(inputName.value) == true) {
    nameAlert.style.display = "none";
    return true;
  } else {
    nameAlert.style.display = "block";
  }
}
function validateEmail() {
  var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(emailInput.value) == true) {
    emailAlert.style.display = "none";
    return true;
  } else {
    emailAlert.style.display = "block";
  }
}
function validatePhone() {
  var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if (regex.test(phone.value) == true) {
    phoneAlert.style.display = "none";
    return true;
  } else {
    phoneAlert.style.display = "block";
  }
}
function validateAge () {
  var regex = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
  if (regex.test(age.value) == true) {
    ageAlert.style.display = "none";
    return true;
  } else {
    ageAlert.style.display = "block";
  }
}
function validatePass () {
  var regex =/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/ ;
  if (regex.test(password.value) == true) {
    passwordAlert.style.display = "none";
    return true;
  } else {
    passwordAlert.style.display = "block";
  }
}
function validateRePass () {
  if (password.value === repass.value) {
    repasswordAlert.style.display = "none";
    return true;
  } else {
    repasswordAlert.style.display = "block";
  }
}
function o() {
  if ( validateName() && validateEmail() &&  validatePhone() &&  validateAge() &&  validatePass() &&  validateRePass()){
    submitBtn.removeAttribute("disabled");
  }else{
    submitBtn.setAttribute("disabled")
  }

}