/**
 * Created by martinsuess on 19.02.15.
 */

'use strict';

angular.module('directives', [ ])
  .constant('Modernizr', Modernizr)
  .directive('hoverClass', function (Modernizr, UtilService) {
    return {
      restrict: 'A',
      scope: {
        hoverClass: '@'
      },
      link: function (scope, element) {

        var _body = jQuery('body');
        var cssAnimation = true;
        var css3d = true;

        if (!Modernizr.csstransitions)
          cssAnimation = false;
        if (!Modernizr.csstransforms3d)
          css3d = false;

        var menuOpenCSS = (css3d == true ? 'translate3d(210px, 0,0)' : 'translate(210px, 0)');
        var menuClosedCSS = (css3d == true ? 'translate3d(0, 0,0)' : 'translate(0, 0)');

        element.on('mouseenter', function() {
          if (UtilService.isVisibleSm() || UtilService.isVisibleXs()) {
            return false
          }
          if (_body.hasClass('menu-pin'))
            return;
          if (cssAnimation) {
            _body.addClass('sidebar-visible');
            element.css({
              'transform': menuOpenCSS
            });
          } else {
            _body.addClass('sidebar-visible');
            element.stop().animate({
              left: '0px'
            }, 400, jQuery.bez([.05, .74, .27, .99]), function() {

            });
          }
        });

        element.on('mouseleave', function() {
          if (UtilService.isVisibleSm() || UtilService.isVisibleXs()) {
            return false
          }

          if (typeof e != 'undefined') {
            var target = jQuery(e.target);
            if (target.parent('.page-sidebar').length) {
              return;
            }
          }
          if (_body.hasClass('menu-pin'))
            return;

          if (jQuery('.sidebar-overlay-slide').hasClass('show')) {
            jQuery('.sidebar-overlay-slide').removeClass('show');
            jQuery("[data-pages-toggle]").removeClass('active');
          }

          if (cssAnimation) {
            _body.removeClass('sidebar-visible');
            element.css({
              'transform': menuClosedCSS
            });
          } else {

            element.stop().animate({
              left: '-210px'
            }, 400, jQuery.bez([.05, .74, .27, .99]), function() {

              _body.removeClass('sidebar-visible');
              setTimeout(function() {
                jQuery('.close-sidebar').data({
                  clicked: false
                });
              }, 100);
            });
          }
        });
      }
    };
  })
  .directive('toggleSidebarPin', function(UtilService) {
    return {
      restrict: 'A',
      link: function (scope, element) {

        var _body = jQuery('body');

        element.on('click', function(e) {
          e.preventDefault();

          if (_body.hasClass('mobile') || UtilService.isVisibleXs() || UtilService.isVisibleSm()) {
            _body.removeClass('menu-pin');
          } else {
            _body.toggleClass('menu-pin');
          }
        });
      }
    }
  })
  .directive('toggleSidebar', function() {
    return {
      restrict: 'A',
      link: function(scope, element) {

        var _body = jQuery('body');
        var _sidebar = jQuery('[data-pages="sidebar"]');

        element.on('click touchend', function(e) {

          var timer;
          if (_body.hasClass('sidebar-open')) {
            _body.removeClass('sidebar-open');

            timer = setTimeout(function() {
              _sidebar.removeClass('visible');
            }.bind(this), 400);
          } else {
            clearTimeout(timer);
            _sidebar.addClass('visible');

            setTimeout(function() {
              _body.addClass('sidebar-open');
            }.bind(this), 10);
          }
        });
      }
    }
  });
