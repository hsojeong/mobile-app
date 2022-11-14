$('.commonheader .opennav').on('click', function(){
  $('.commonheader').toggleClass('on')
  $('#mypagesection').toggleClass('on')
  $('#nav').toggleClass('on')
  if ($(this).find('i').hasClass('fa-bars')) {
      $(this).find('i').removeClass('fa-bars').addClass('fa-xmark')
      $('html').css({overflowY:'hidden'})
  } else {
      $(this).find('i').removeClass('fa-xmark').addClass('fa-bars')
      $('html').css({overflowY:'auto'})
  }
  $('#footer #fmenu').toggleClass('on')
})