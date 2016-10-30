/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
* Licensed Under MIT (http://opensource.org/licenses/MIT)
*
* Max Bottom - Version@0.0.1
*
*/

(function () {

  // Constructor
  function onMaxBottom (cb) {
    this.evt = function (e) {
      var bodyHeight = document.body.scrollHeight;
      var windowHeight = window.innerHeight;
      var curScroll = window.scrollY;
      var maxBottom = (bodyHeight - windowHeight) === curScroll;
      if(maxBottom){
        return cb ? cb() : null;
      }
    }

    window.addEventListener('scroll', this.evt, false);
  }

  // Remove Event Listener
  onMaxBottom.prototype.remove = function () {
    window.removeEventListener('scroll', this.evt, false);
  };

  // Reinit Event Listener
  onMaxBottom.prototype.reinit = function () {
    window.addEventListener('scroll', this.evt, false);
  };


  // refs: Webpack UMD
  if(typeof module === 'object' && typeof exports === 'object') {
    module.exports = onMaxBottom;
  }
  else if(typeof define === 'function' && define.amd) {
    define([], onMaxBottom);
  }
  else if(typeof exports === 'object') {
    exports['onMaxBottom'] = onMaxBottom;
  }
  else {
    window.onMaxBottom = onMaxBottom;
  }

})();
