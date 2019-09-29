


const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');


if(tabMenu.length && tabContent.length) {

    tabContent[0].classList.add('ativo');

    function activeTab(index) {

        tabContent.forEach( (section, index) => {
            section.classList.remove('ativo');       
        });

        tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach( (itemMenu, index) => {
        itemMenu.addEventListener('click', (e) => {
            e.preventDefault();
            activeTab(index);
        });
    });
}

$(document).ready(function() {

    $('a[data-rel^=lightcase]').lightcase();



    $('.responsive').slick({
    dots: false,
      infinite: true,
      speed: 500,
      arrows: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

});

