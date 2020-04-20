<template>
  <div class="menu-container">
    <div class="overlay text-focus-in-0-5" v-if="menuActive"></div>
    <div class="menu" v-if="menuActive" @mouseenter="mouseDark" @mouseleave="mouseLight">
      <div class="content-wrap">
        <div class="page-links">
          <!-- <div class="link" @mouseenter="mouseHover" @mouseleave="mouseNormal">Principios</div> -->
          <div class="link" @mouseenter="mouseHover" @mouseleave="mouseNormal" @click="closeMenu">
            <router-link to="/bio">bio</router-link>
          </div>
          <div class="link" @mouseenter="mouseHover" @mouseleave="mouseNormal" @click="closeMenu">
            <router-link to="/bio">Qué es para mi la psicoterapia</router-link>
          </div>
          <div class="link" @mouseenter="mouseHover" @mouseleave="mouseNormal" @click="closeMenu">
            <router-link to="/bio">Salúdame</router-link>
          </div>
        </div>
        <div class="presentationData">
          <div class="name">
            <router-link to="/bio">santiago rueda</router-link>
          </div>
          <div class="city">Barcelona - terapia online</div>
          <a href="tel:+34657649342" class="phone">+34 657-64-9342</a>
          <a href="tel:+34657649342" class="mail">hola@santiagoruedam.com</a>
        </div>
      </div>
    </div>
    <div id="nav-icon" :class="[mode === 'dark' ? 'mode-dark':'', menuActive ? 'open' : '']" @click="menuActive = !menuActive">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuActive: false,
      mode: 'light'
    };
  },
  watch: {
    "$route.path": function() {
      this.getMode()
    }
  },
  created () {
    this.getMode()
  },
  methods: {
    closeMenu() {
      this.menuActive = false;
    },
    getMode(){
      if(this.$route.path === '/bio'){
        this.mode = 'dark'
      }else{
        this.mode = 'light'
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-container {
  cursor: none !important;
  .menu {
    position: absolute;
    width: 500px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 90%;
    margin: 20px auto;
    height: calc(100vh - 40px);
    background: #ffff;
    border-radius: 10px;
    z-index: 3;

    .content-wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-top: 100px;
      box-sizing: border-box;
      height: 100%;
      .page-links {
        height: 66%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: "Zilla Slab", serif;
        .link {
          margin: 10px auto;
          font-size: 20px;
          &:hover {
            text-decoration: underline;
          }
          a {
            text-decoration: none;
            color: #2c3e50;
          }
        }
      }
      .presentationData {
        height: 33%;
        font-family: "Zilla Slab", serif;
        .name {
          font-size: 30px;
          margin-top: 20px;
        }
        .city {
          margin-top: 10px;
          font-size: 16px;
        }
        .phone {
          display: block;
          margin-top: 5px;
          font-family: "Lato", sans-serif;
          font-size: 18px;
          color: #2c3e50;
          text-decoration: none;
        }
        .mail {
          font-family: "Zilla Slab", serif;
          // font-family: "Lato", sans-serif;
          font-size: 12px;
          color: #2c3e50;
          display: inline-block;
          position: absolute;
          margin: auto;
          right: 0;
          left: 0;
          bottom: 10px;
          text-decoration: none;
        }
      }
    }
  }

  .overlay {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: #00000082;
    border-radius: 0 10px 10px 0;
    z-index: 1;
  }

  /*menu-icon*/

  #nav-icon {
    left: calc(50% - 20px);
    z-index: 4;
    width: 40px;
    height: 45px;
    position: absolute;
    margin: 50px auto;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  #nav-icon span {
    display: block;
    position: absolute;
    height: 4px;
    width: 50%;
    background: #ffffff;
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  #nav-icon.open span {
    height: 3px;
    background: #7b7b7b;
  }

  #nav-icon span:nth-child(even) {
    left: 50%;
    border-radius: 0 4px 4px 0;
  }

  #nav-icon span:nth-child(odd) {
    left: 0px;
    border-radius: 4px 0 0 4px;
  }

  #nav-icon span:nth-child(1),
  #nav-icon span:nth-child(2) {
    top: 3px;
  }

  #nav-icon span:nth-child(3),
  #nav-icon span:nth-child(4) {
    top: 14px;
  }

  #nav-icon span:nth-child(5),
  #nav-icon span:nth-child(6) {
    top: 25px;
  }

  #nav-icon.open span:nth-child(1),
  #nav-icon.open span:nth-child(6) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #nav-icon.open span:nth-child(2),
  #nav-icon.open span:nth-child(5) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  #nav-icon.open span:nth-child(1) {
    left: 1.8px;
    top: 4px;
  }

  #nav-icon.open span:nth-child(2) {
    left: calc(50% - 3.7px);
    top: 4px;
  }

  #nav-icon.open span:nth-child(3) {
    left: -100%;
    opacity: 0;
  }

  #nav-icon.open span:nth-child(4) {
    left: 100%;
    opacity: 0;
  }

  #nav-icon.open span:nth-child(5) {
    left: 2.5px;
    top: 18.8px;
  }

  #nav-icon.open span:nth-child(6) {
    left: calc(50% - 3.8px);
    top: 19px;
  }

  .mode-dark span  {
    background: #7b7b7b !important;
  }
}
</style>