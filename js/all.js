$(document).ready(function() {
    $('.showmenu').on('click',  function(e){
       e.preventDefault();
       $('.header .menu').toggleClass('menu-show');
   });
 });