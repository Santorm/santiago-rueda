<template>
  <div id="app">
    <Menu />
    <Mouse v-if="!isTouch" class="mouse-component" />
    <router-view></router-view>
    <!-- <Home /> -->
  </div>
</template>

<script>
// import Home from "./components/Home.vue";
import Mouse from "./components/Mouse";
import Menu from "./components/Menu";

export default {
  name: "App",
  data() {
    return {
      isTouch: false
    };
  },
  components: {
    // Home,
    Mouse,
    Menu
  },
  created() {
    window.addEventListener("touchstart", () => {
      this.touchStartHandle();
    });
    /*eslint-disable */
    this.isTouch = false;
    window.mobileCheck = () => {
      let check = false;
      (a => {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      this.isTouch = check;
    };
    /*eslint-enable */
  },
  methods: {
    touchStartHandle() {
      this.isTouch = true;
    }
  }
};
</script>

<style lang="scss">
/*
font-family: 'Palanquin', sans-serif;
font-family: 'Lato', sans-serif;
font-family: 'Zilla Slab', serif;
font-family: 'Playfair Display', serif;
*/

html,
body {
  user-select: none;
  height: 100% !important;
  width: 100% !important;
}
#app {
  height: auto;
  min-height: 100%;
  min-height: -webkit-fill-available;
  min-height: 500px;
  width: 100%;
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*
.mouse-component {
  @media only screen and (max-width: 768px) {
    display: none;
  }
}
*/

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/*ANIMATIONS */
.text-focus-in-0-5 {
  -webkit-animation: text-focus-in 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: text-focus-in 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

.text-focus-in-1 {
  -webkit-animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

.text-focus-in-2 {
  -webkit-animation: text-focus-in 1.7s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: text-focus-in 1.7s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

.text-focus-in-f {
  -webkit-animation: text-focus-in 2.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: text-focus-in 2.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
.text-blur-out {
  -webkit-animation: text-blur-out 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    3.5s both;
  animation: text-blur-out 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) 3.5s both;
}

.slide-out-left-1 {
  -webkit-animation: slide-out-left 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: slide-out-left 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

.slide-out-left-2 {
  -webkit-animation: slide-out-left 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    0.2s both;
  animation: slide-out-left 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.2s both;
}

.slide-out-left-3 {
  -webkit-animation: slide-out-left 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    0.4s both;
  animation: slide-out-left 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.4s both;
}

.slide-out-left-4 {
  -webkit-animation: slide-out-left 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    0.5s both;
  animation: slide-out-left 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.5s both;
}

.slide-in-right-1 {
  -webkit-animation: slide-in-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-right-2 {
  -webkit-animation: slide-in-right 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    0.3s both;
  animation: slide-in-right 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both;
}

.slide-in-right-3 {
  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    0.6s both;
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s both;
}

.slide-in-right-4 {
  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    0.9s both;
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.9s both;
}

.slide-in-out-top-enter-active {
  -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-out-top-leave-active {
  -webkit-animation: slide-out-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: slide-out-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

.slide-next-enter-active {
  -webkit-animation: slide-in-bottom 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-next-leave-active {
  -webkit-animation: slide-out-top 0.7s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: slide-out-top 0.7s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

.slide-back-enter-active {
  -webkit-animation: slide-in-top 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-top 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-back-leave-active {
  -webkit-animation: slide-out-bottom 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: slide-out-bottom 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

/*
.slide-next-enter-active {
  -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}*/

/* ----------------------------------------------
 * Generated by Animista on 2020-4-8 0:12:59
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation text-pop-up-top
 * ----------------------------------------
 */

@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@-webkit-keyframes slide-out-left {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
}
@keyframes slide-out-left {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
}

@-webkit-keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}

@-webkit-keyframes text-blur-out {
  0% {
    -webkit-filter: blur(0.01);
    filter: blur(0.01);
  }
  100% {
    -webkit-filter: blur(12px) opacity(0%);
    filter: blur(12px) opacity(0%);
  }
}
@keyframes text-blur-out {
  0% {
    -webkit-filter: blur(0.01);
    filter: blur(0.01);
  }
  100% {
    -webkit-filter: blur(12px) opacity(0%);
    filter: blur(12px) opacity(0%);
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2020-4-20 20:2:21
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-out-right
 * ----------------------------------------
 */
@-webkit-keyframes slide-out-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
}
@keyframes slide-out-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2020-4-20 23:10:56
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-left
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2020-4-25 17:20:34
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-top
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2020-4-25 18:5:27
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-out-top
 * ----------------------------------------
 */
@-webkit-keyframes slide-out-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
}
@keyframes slide-out-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2020-4-26 13:49:38
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-out-bottom
 * ----------------------------------------
 */
@-webkit-keyframes slide-out-bottom {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
}

@keyframes slide-out-bottom {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2020-4-26 13:52:59
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-bottom
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
