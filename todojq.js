var thedate = new Date();
var arrangedate = thedate.toDateString();
var timing = thedate.getHours() + ":" + thedate.getMinutes() + ":" + thedate.getSeconds();
document.getElementById("todate").innerText = `Today ${arrangedate}`
 var output = input.value;
$(document).ready(function(){
   $('.addbutton').click(function(e){
       e.preventDefault()
    var output = $('#input').val();
    $(this).val(' ');   
    $('ol').append('<li>'+ output + '<button class = "del">delete</button>' + ' ' + timing)

     $('li').click(function(){
         $(this).fadeOut(1000);
   })
   
});
});
