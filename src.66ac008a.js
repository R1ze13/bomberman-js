parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"g5IB":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"vWcT":[function(require,module,exports) {
var define;
var process = require("process");
var global = arguments[3];
},{"process":"g5IB"}],"N93S":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=f();return function(){var n,r=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function u(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return s(t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.IntroScene=void 0;var p=function(e){o(i,Phaser.Scene);var n=c(i);function i(){var e;return t(this,i),l(s(e=n.call(this,"IntroScene")),"pressAnyKeyText",null),l(s(e),"blinkTimer",0),l(s(e),"isBlinked",!1),e}return r(i,[{key:"preload",value:function(){this.load.image("intro","assets/intro.png"),this.load.spritesheet("dude","assets/dude.png",{frameWidth:32,frameHeight:32})}},{key:"create",value:function(){this.add.sprite(240,344,"intro"),this.add.text(140,50,"Бомбические\nподземелья",{fontSize:28,align:"center",fontFamily:"monospace"}),this.pressAnyKeyText=this.add.text(132,200,"Нажми любую кнопку",{fontSize:20,fontFamily:"monospace",color:"#3CA370 "})}},{key:"update",value:function(e,t){var n=this;this.blinkTimer<600?this.blinkTimer+=t:(this.blinkTimer=0,this.isBlinked?(this.pressAnyKeyText.setColor("#3CA370"),this.isBlinked=!1):(this.pressAnyKeyText.setColor("#CFFF70"),this.isBlinked=!0)),this.input.keyboard.on("keydown",function(){n.scene.start("GameScene")})}}]),i}();exports.IntroScene=p;
},{}],"K0XE":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t,o){return t&&r(e.prototype,t),o&&r(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=u();return function(){var r,o=c(e);if(t){var n=c(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return a(this,r)}}function a(t,r){if(r&&("object"===e(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return l(t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.GameScene=void 0;var p=function(e){n(i,Phaser.Scene);var r=s(i);function i(){var e;return t(this,i),y(l(e=r.call(this,"GameScene")),"cusrors",null),y(l(e),"player",null),y(l(e),"playerSpeed",120),y(l(e),"isHMoves",!1),y(l(e),"isVMoves",!1),e}return o(i,[{key:"preload",value:function(){}},{key:"create",value:function(){console.log("test gh pages"),this.player=this.physics.add.sprite(120,120,"dude"),this.player.setBounce(0),this.player.setCollideWorldBounds(!0),this.cursors=this.input.keyboard.createCursorKeys(),this.anims.create({key:"idle",frames:[{key:"dude",frame:0}],frameRate:10,repeat:0}),this.anims.create({key:"run",frames:this.anims.generateFrameNumbers("dude",{start:0,end:7}),frameRate:12,repeat:-1}),this.player.anims.play("idle")}},{key:"update",value:function(){this.isVMoves||(this.cursors.left.isDown?(this.isHMoves=!0,this.player.anims.play("run",!0),this.player.body.rotation=270,this.player.setVelocityX(-this.playerSpeed)):this.cursors.right.isDown?(this.isHMoves=!0,this.player.anims.play("run",!0),this.player.body.rotation=90,this.player.setVelocityX(this.playerSpeed)):(this.isHMoves=!1,this.player.anims.play("idle"),this.player.setVelocityX(0))),this.isHMoves||(this.cursors.up.isDown?(this.player.anims.play("run",!0),this.player.body.rotation=0,this.isVMoves=!0,this.player.setVelocityY(-this.playerSpeed)):this.cursors.down.isDown?(this.player.anims.play("run",!0),this.player.body.rotation=180,this.isVMoves=!0,this.player.setVelocityY(this.playerSpeed)):(this.player.anims.play("idle"),this.isVMoves=!1,this.player.setVelocityY(0)))}}]),i}();exports.GameScene=p;
},{}],"H99C":[function(require,module,exports) {
"use strict";var e=a(require("phaser")),r=require("./intro.scene"),t=require("./game.scene");function a(e){return e&&e.__esModule?e:{default:e}}var i={width:240,height:240},u={type:e.default.AUTO,width:2*i.width,height:2*i.height,scene:[r.IntroScene,t.GameScene],backgroundColor:"#43434F",physics:{default:"arcade",arcade:{debug:!1}}},d=new e.default.Game(u);
},{"phaser":"vWcT","./intro.scene":"N93S","./game.scene":"K0XE"}]},{},["H99C"], null)
//# sourceMappingURL=/src.66ac008a.js.map