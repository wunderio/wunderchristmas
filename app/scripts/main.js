/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
;(function () {
  'use strict';

  /* Overlay */
  var container = document.getElementById( 'container' ),
      transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
        'transition': 'transitionend'
      };

  var transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ];
  var support = { transitions : Modernizr.csstransitions };

  function toggleOverlay(e) {
    e.preventDefault();
    var overlaySelector = this.getAttribute('overlay');
    var overlay = document.querySelector( '.overlay-' + overlaySelector );
    if (!overlay) {
        classie.add(this,'animated');
        classie.add(this,'shake');
        var that = this;
        setTimeout(function(){
          classie.remove(that,'animated');
          classie.remove(that,'shake');
        },900);
      return;
    }

    if( classie.has( overlay, 'open' ) ) {
      classie.remove( overlay, 'open' );
      classie.remove( container, 'overlay-open' );
      classie.add( overlay, 'close' );
      var onEndTransitionFn = function( ev ) {
        if( support.transitions ) {
          if ( ev.propertyName !== 'visibility' ) {
            return;
          }
          this.removeEventListener( transEndEventName, onEndTransitionFn );
        }
        classie.remove( overlay, 'close' );
      };
      if( support.transitions ) {
        overlay.addEventListener( transEndEventName, onEndTransitionFn );
      }
      else {
        onEndTransitionFn();
      }
    }
    else if( !classie.has( overlay, 'close' ) ) {
      classie.add( overlay, 'open' );
      classie.add( container, 'overlay-open' );
      // analytics
      if (typeof ga !== 'undefined'){
        ga('send', 'event', 'Calendar Day', 'open', overlaySelector);
      }
    }
  }

  Gator(document).on('click', '.trigger-overlay', toggleOverlay);
  Gator(document).on('click', '.overlay-close', toggleOverlay);

  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);

      try {
        if( (window['console'] !== undefined) ){
        console.log("" +
"                   -+yo`               \n" +
"                  -oyyyys.              \n" +
"                `+yyyyyyys`\n" +
"               `syyyyyyyyy/\n" +
"   ----.`      oyyyyyyyyyys   `.--::.\n" +
"  `yyyyyyyo/` -yyyyyyyyy/.`-+syyyyyyo\n" +
"   syyyyyyyy. +yyyyyyy/``+yyyyyyyyyy/\n" +
"   :yyyyyyyy. +yyyyyo` /yyyyyyyyyyyy`   \n" +
"    +yyyyyyy: :yyyyo` oyyyyyyyyyyyy:\n" +
"     /yyyyyys `syyy` +yyyyyyyyyyys-\n" +
"      .oyyyyy/ .yy+ `yyyyyyyyyyy/`\n" +
"        `/oyyy/ .s- -yyyyyyys+-         \n" +
"           `.:/- `` .////:-`            \n" +
"              .-://///:-`               \n" +
"          -+shhhhhhhhyyyyyo/.\n" +
"       .+hhhhhhhhhhyyyyyyyyyys/`\n" +
"     `ohhhhhhhhhhyyyyyyyyyyyyyys/`\n" +
"    :hhhhhhhhhyyyyyyyyyyyyyyyyyyys.\n" +
"   :hhhhhhhhyyyyyyyyyyyyyyyyyyyyyss.\n" +
"  .hhhhhhhhyyyyyyyyyyyyyyyyyyyyyssss\n" +
"  ohhhhhyyyyyyyyyyyyyyyyyyyyyyssssss:\n" +
"  yhhhyyyyyyyyyyyyyyyyyyyyyyssssssss+\n" +
"  hhhyyyyyyyyyyyyyyyyyyyyysssssssssso\n" +
"  oyyyyyyyyyyyyyyyyyyyyyssssssssssss/\n" +
"  -yyyyyyyyyyyyyyyyyyyssssssssssssss`   \n" +
"   +yyyyyyyyyyyyyyyysssssssssssssss:\n" +
"    +yyyyyyyyyyyyyssssssssssssssss:\n" +
"     -syyyyyyyyysssssssssssssssso.      \n" +
"      `/syyyyysssssssssssssssso-        \n" +
"        `/sysssssssssssssssso-          \n" +
"          `/sssssssssssssso-            \n" +
"            `:sssssssssso-              \n" +
"              `:sssssso-                \n" +
"                `:sso-                  \n" +
"                  `-\n\n\n"+
" Knock, knock.\n" +
" Follow the white rabbit :)\n\n" +
" Contact us, get ready to fly http://www.wunderkraut.com/get-ready-to-fly \n\n\n");
        }
      } catch(e) {}

    }, false);
  }

})();