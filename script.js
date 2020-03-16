$("#other-title").hide();
$("#colors-js-puns").hide();
$("#paypal").hide();
$("#bitcoin").hide();
$("#name").focus();
$("button").hide();
//initially hides the user inputted job title and color options for t-shirts and focuses on name

$("#name").change(function(){
    if(document.getElementById("name").value != ""){
        $("#w-name").hide();
    }
});


  $("#mail").change(function(){
      let mail = document.getElementById("mail").value; 
      let valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail);
      if(!valid){ 
          $("#w-email").show();
      }
      else{
          $("#w-email").hide();
      }
  })

$("#title").change(function(){ 
    if($("#title option:selected").text() == "Other"){
        $("#other-title").show();
    }
    else{ 
        $("#other-title").hide();
    }
});
//this shows and hides the user input for job title

$("#design").change(function(){
    $("#colors-js-puns").show();
    if($("#design option:selected").text() == "Theme - JS Puns"){ 
        var colors = $("option"); 
        colors.each((index,value)=>{
            if(index > 15 && index <19){ //only showing the js puns colors
                $(value).hide();
         }else{
            $(value).show();
         }
        })
    }
    else{
        var colors = $("option"); 
        colors.each((index,value)=>{
            if(index > 12 && index <16){ //only showing the heart theme colors
                $(value).hide();
         }else{
            $(value).show();
        }
        })
    }
});
//this shows the color options for the shirts depending on which style is chosen

let works = $("input[type='checkbox']"); 

works.click(function(){
    let checked = $("input[type='checkbox']:checked");
    let tot = 0;
    console.log(checked[0]);
    checked.each((index,value)=>{
        tot += parseInt($(value).attr("data-cost").substring(1)); //adding up the total price
    })
    works.each((index, value)=>{
        $(value).prop("disabled",false);
        $(value).parent().removeClass("conflict")
        checked.each(function(){
            if(($(value).attr("data-day-and-time") == $(this).attr("data-day-and-time")) && $(this) != $(value)){ //disabling the conflicts
                $(value).prop("disabled", true);
                $(value).parent().addClass("conflict"); //adding the class with the strikethrough text
            }
        })
    })
    checked.prop("disabled", false); //taking off the
    checked.parent().removeClass("conflict");
    let total = document.getElementsByClassName("bordered")[0];
    total.textContent = "Total:$" + tot;  //displaying the total price
});
//this only shows the activities that a user can sign up for 
//it changes as users pick activities and crosses out the ones they are not eligible for anymore

$("#payment").change(function(){
    $("#payment option:first").attr("disabled",true);
    if($("#payment option:selected").text() == "Credit Card"){ 
        $("#credit-card").show();
        $("#paypal").hide();
        $("#bitcoin").hide();
       
    }
    else if($("#payment option:selected").text() == "PayPal"){ 
        $("#credit-card").hide();
        $("#paypal").show();
        $("#bitcoin").hide();
    }
    else if($("#payment option:selected").text() == "Bitcoin"){ 
        $("#credit-card").hide();
        $("#paypal").hide();
        $("#bitcoin").show();
    }
});
//this shows and hides information depending on how the user wants to pay
//

$("#cc-num").change(function(){
    let num = document.getElementById("cc-num").value; 
    let valid = /\d{13,16}/.test(num);
    if(!valid){ 
        $("#w-card").show();
    }
    else{
        $("#w-card").hide();
    }
})
//this is validating the credit card

$("#zip").change(function(){
    let zip = document.getElementById("zip").value; 
    let valid = /\d{5}/.test(zip);
    if(!valid){ 
        $("#w-zip").show();
    }
    else{
        $("#w-zip").hide();
    }
})
//this is validating the zip code

$("#cvv").change(function(){
    let cvv = document.getElementById("cvv").value; 
    let valid = /\d{3}/.test(cvv);
    if(!valid){ 
        $("#w-cvv").show();
    }
    else{
        $("#w-cvv").hide();
    }
})
//this is validating the cvv

$("body").change(function(){ 
    if(/\d{3}/.test(document.getElementById("cvv").value) && /\d{5}/.test(document.getElementById("zip").value) && /\d{13,16}/.test(document.getElementById("cc-num").value) && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("mail").value)){
        $("button").show()
    } else{ 
        $("button").hide();
    }
});


