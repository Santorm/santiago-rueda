<template>
  <div class="main-wrap">
    <div
      class="page-container page1"
      v-if="isPage1"
      :class="[backgrounTransition ? 'backgrounTransition': '']"
    >
      <div class="home-text-wrap text-blur-out">
        <span class="text-focus-in-f">Espacio terapéutico para</span>
        <span class="text-focus-in-1 text-espaced">re-inventarte</span>
        <span class="text-focus-in-2">a tí mismo.</span>
      </div>
    </div>
    <div class="page-container page2 slide-in-right-1" v-else>
      <div class="principles-wrap">
        <div
          class="principles principles-1"
          :class="[slideIn ? 'slide-in-right-1':'']"
          @click="selectPrinciples('1')"
        >
          <span>hablar</span>
        </div>
        <div
          class="principles principles-2"
          :class="[slideIn ? 'slide-in-right-2':'']"
          @click="selectPrinciples('2')"
        >
          <span>descubrir</span>
        </div>
        <div
          class="principles principles-3"
          :class="[slideIn ? 'slide-in-right-3':'']"
          @click="selectPrinciples('3')"
        >
          <span>re-significar</span>
        </div>
        <div
          class="principles principles-4"
          :class="[slideIn ? 'slide-in-right-4':'']"
          @click="selectPrinciples('4')"
        >
          <span>reinventar</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPage1: true,
      backgrounTransition: false,
      slideIn: false
    };
  },
  created() {
    let me = this;
    this.slideIn = true;
    setTimeout(function() {
      me.goToPage2();
    }, 3000);
  },
  methods: {
    goToPage2() {
      // this.backgrounTransition = true;

      let me = this;
      setTimeout(function() {
        me.isPage1 = false;
      }, 1500);
    },
    selectPrinciples(item) {
      console.log("order: ", item);
      let elements = document.querySelectorAll(".principles");
      let page = document.querySelector(".page2");
      let selectedElement = document.querySelector(".principles-" + item);
      let backgroundSelected = getComputedStyle(selectedElement)
        .backgroundColor;
      console.log("backGroundSelected: ", backgroundSelected);
      page.style.backgroundColor = backgroundSelected;

      for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        let elementItem = index + 1;
        if (elementItem != item) {
          element.classList.add("slide-out-left-" + elementItem);
          setTimeout(function() {
            selectedElement.style.width = "100%";
            element.style.display = "none";
            // element.style.width = "25%";
          }, 900);
        }
      }
    }
  }
};
</script>

<style>
.main-wrap {
  height: 100vh;
  width: 100%;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#effaff),
    to(#d9e7ff)
  );
  background: linear-gradient(90deg, #effaff 0%, #d9e7ff 100%);
  overflow: hidden;
  cursor: none !important;
}

.page-container {
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

/*
.page1 {
  background: linear-gradient(to right, transparent 50%, #ffff 50%);
  background-size: 200% 100%;
  background-position: left bottom;
  transition: background-position 1s ease;
}
*/

.page2 {
  /* background: linear-gradient(90deg, transparent 0%, blue 100%);*/
  /*background-color: #ffffff;*/
}

.principles-wrap {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.principles {
  width: 25%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 0.7s ease;
}

.principles span {
  font-size: 30px;
  width: 100%;
  text-align: end;
  padding-right: 5px;
}

.principles:hover span {
  font-size: 60px;
  /* z-index: 60; */
  /*
  position: absolute;
  left: 0;
  bottom: 19%;
  */
}

.principles-1 {
  background: #ffeb99;
}

.principles-2 {
  background: #a4c5c6;
}

.principles-3 {
  background: #d4ebd0;
}

.principles-4 {
  background: #856c8b;
}
/*
.principles-wrap>.principles {
  flex: 1 0 50%;
}

.principles-wrap>.principles:first-child {
  flex: 0 1 100%;
}
*/

.backgrounTransition {
  background-position: right bottom;
}

.home-text-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50%;
  width: 100%;
  margin: -15% 0 0 -50%;
  font-size: 30px;
}

.home-text-wrap span {
  display: inline-block;
}
.text-espaced {
  margin-right: 0.3em;
  margin-left: 0.3em;
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

/* ----------------------------------------------
 * Generated by Animista on 2020-4-5 13:25:22
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-right 
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

/* ----------------------------------------------
 * Generated by Animista on 2020-4-5 2:4:25
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-out-left
 * ----------------------------------------
 */
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

/* ----------------------------------------------
 * Generated by Animista on 2020-4-4 19:12:1
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation text-focus-in
 * ----------------------------------------
 */
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

/* ----------------------------------------------
 * Generated by Animista on 2020-4-4 22:28:47
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation text-blur-out
 * ----------------------------------------
 */
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
</style>