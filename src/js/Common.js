import objectFitImages from 'object-fit-images';
import objectFitVideos from 'object-fit-videos';
import { $scrolledElements, $body, Resp, detectIE } from './_helpers';

// import '@fancyapps/fancybox';
import './components/Sliders'

import 'bootstrap'
import 'jquery'

export class Common {
  constructor() {
    this.init();
  }

  init() {
    objectFitImages();
    objectFitVideos();
    this.screenScroll();
    this.expandText();
    this.addClassIE();
  }

  addClassIE() {
    if (detectIE()) $body.addClass('is-ie');
  }

  screenScroll() {
    const $btn = $('.screen__descr-btn');

    $btn.on('click', function () {
      const offsetTop = Resp.isDesk ? 70 : 60;
      $scrolledElements.animate({
        scrollTop: $('#pass').offset().top - offsetTop
      }, 2000);
      return false;
    });
  }

  expandText() {
    const $btn = $('.js-expand-btn');

    $btn.each(function (i, $btn) {
      $($btn).on('click', (e) => {
        const $this = $(e.currentTarget);
        $this.parent().prev().slideDown();
        $this.parent().addClass('hidden');
      });
    });
  }
}

	$('.toggle-menu').click(function(){
		$(this).toggleClass('active');
		$('.dropdown-content--menu').toggleClass('open');
	})

var acc = document.getElementsByClassName("accordion");
var i;

$('.accordion__head').on('click', function(){
		var el = $(this);
		el.next('.accordion__body').slideToggle();
		el.toggleClass('open');
		return false;
	});

export default new Common();
