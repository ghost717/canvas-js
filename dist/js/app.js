"use strict";jQuery(document).ready(function(t){t("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=t(this.hash);if((e=e.length?e:t("[name="+this.hash.slice(1)+"]")).length)return t("html,body").animate({scrollTop:e.offset().top},1e3),!1}}),t(".main__oferta .owl-carousel").owlCarousel({loop:!0,margin:0,nav:!0,dots:!1,mouseDrag:!1,navText:["<",">"],responsive:{0:{items:1},768:{items:2}}}),t(".menu-toggle").click(function(e){t(this).toggleClass("toggled"),t("#menu").toggleClass("active")}),t(".menu-item").click(function(e){t(".menu-toggle").removeClass("toggled"),t("#menu").removeClass("active")})});