$(document).ready(function () {
  $('#toggle_nav_button').click(function () {
    $('#chapter_selection').toggleClass('show')
    $('.down_arrow').toggle()
    $('.up_arrow').toggle()
  })
  $('.chapter_navigation').hover(
    function () {},
    function () {
      $('#chapter_selection').removeClass('show')
    }
  )
})
