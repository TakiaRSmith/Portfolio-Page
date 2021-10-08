{/* <script type="text/javascript">
$(document).ready(function(){
  $('.slider').slick({
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
  });
});
</script> */}

const themeSwitch = document.querySelector('input');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});
