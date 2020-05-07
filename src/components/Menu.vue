<template>
  <div class="menu-container">
    <div
      id="nav-icon"
      :class="[mode === 'dark' ? 'mode-dark':'', menuActive ? 'open' : '']"
      @click="menuActive = !menuActive"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div @click="menuActive = false" class="overlay text-focus-in-0-5" v-if="menuActive"></div>
    <transition name="slide-in-out-top">
      <div class="menu" v-if="menuActive" @mouseenter="mouseDark" @mouseleave="mouseLight">
        <!-- <div
        id="nav-icon"
        :class="[mode === 'dark' ? 'mode-dark':'', menuActive ? 'open' : '']"
        @click="menuActive = !menuActive"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        </div>-->

        <div class="content-wrap">
          <!-- <div class="logo"></div> -->
          <div class="menu-intro">
            <p class="name">
              Hola!<br/>Soy Santiago,
              <br />te invito a conocer
              <br /> más acerca de:
            </p>
          </div>
          <div class="page-links">
            <!-- <div class="link" @mouseenter="mouseHover" @mouseleave="mouseNormal">Principios</div> -->
            <div
              :class="currentPage === 'manifiesto' ? 'active': ''"
              class="link"
              @mouseenter="mouseHover"
              @mouseleave="mouseNormal"
              @click="closeMenu"
            >
              <router-link class="routerlink" to="/manifiesto">el proceso terapéutico</router-link>
            </div>
            <div
              :class="currentPage === 'bio' ? 'active': ''"
              class="link"
              @mouseenter="mouseHover"
              @mouseleave="mouseNormal"
              @click="closeMenu"
            >
              <router-link class="routerlink" to="/bio">mi recorrido</router-link>
            </div>
          </div>
          <div class="presentationData">
            <div class="logo"></div>
            <div class="city">Barcelona - terapia online</div>
            <div>
              <a href="mailto:hola@santiagoruedam.com" class="mail">hola@santiagoruedam.com</a>
            </div>
            <div>
              <a href="tel:+34657649342" class="phone">+34 657-64-9342</a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuActive: false,
      mode: "light",
      currentPage: ""
    };
  },
  watch: {
    "$route.path": function() {
      this.getMode();
    }
  },
  created() {
    this.getMode();
  },
  methods: {
    closeMenu() {
      this.menuActive = false;
    },
    getMode() {
      switch (this.$route.path) {
        case "/bio":
          this.currentPage = "bio";
          this.mode = "light";
          break;
        case "/manifiesto":
          this.currentPage = "manifiesto";
          this.mode = "light";
          break;
        default:
          this.currentPage = "manifiesto";
          this.mode = "light";
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-container {
  // position: relative;
  cursor: none !important;
  .menu {
    background: linear-gradient(180deg, #effaff 0%, #d9e7ff 100%);
    position: absolute;
    width: 500px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 90%;
    margin: 20px auto;
    height: calc(100% - 65px);
    top: 25px;
    // background: #ffff;
    border-radius: 5px;
    z-index: 3;
    min-height: 350px;

    .content-wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // padding-top: 100px;
      box-sizing: border-box;
      height: 100%;
      padding: 40px 10% 15px;

      .logo {
        float: left;
        background-image: url(/img/logo.d3af3b36.jpg);
        height: 100px;
        min-height: 50px;
        width: 50px;
        background-size: contain;
        background-repeat: no-repeat;
        // margin: auto;
      }

      .menu-intro {
        text-align: start;
        font-size: calc(1em + 2vw);
        margin: 15px 0;
        line-height: calc(1em + 0.5vw);
        font-family: "Playfair", serif;
      }
      .page-links {
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // font-family: "Zilla Slab", serif;
        font-family: "Lato", sans-serif;

        .link {
          text-align: start;
          margin-bottom: 15px;
          font-size: calc(1em + 0.2vw);
          // border-bottom: 1px solid #c5c5c5;
          // border-bottom: 1px solid #ffeb99;
          .routerlink {
            color: #326da0;
            border-bottom: 1px solid currentColor;
          }
          &.active {
            font-weight: 600;
           // border-bottom: 3px solid #ffeb99;
          }

          &:hover {
            // border-bottom: 1px solid #ffeb99;
            font-weight: 600;
            /*
            &:not(.active) {
              border-bottom: 1px solid #ffeb99;
            }*/
          }
          a {
            text-decoration: none;
            color: #2c3e50;
          }
        }
      }
      .presentationData {
        height: 75px;
        text-align: end;
        color: #2c3e50;
        font-size: 14px;
        .name {
          // font-size: 30px;
          margin-top: 20px;
        }
        .city {
          margin-top: 10px;
          // font-size: 16px;
        }
        .phone {
          color: #326da0;
          display: block;
          margin-top: 5px;
          font-family: "Lato", sans-serif;
          font-size: 14px;

          text-decoration: none;
        }
        .mail {
          color: #326da0;
          // font-family: "Zilla Slab", serif;
          // font-family: "Lato", sans-serif;
          // font-size: 12px;
          display: inline-block;
          // position: absolute;
          // margin: auto;
          margin-top: 3px;
          text-decoration: none;
        }
      }
    }
  }

  .overlay {
    position: absolute;
    width: 100vw;
    height: 100%;
    min-height: auto;
    background: #00000082;
    z-index: 1;
  }

  /*menu-icon*/

  #nav-icon {
    left: calc(50% - 15px);
    z-index: 4;
    width: 30px;
    height: 25px;
    // width: 40px;
    // height: 45px;
    position: absolute;
    top: 20px;
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

    @media only screen and (max-width: 768px) {
      margin: 15px 10px;
      top: 0;
      left: auto;
      right: 10px;
    }
  }

  #nav-icon span {
    display: block;
    position: absolute;
    height: 2px;
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
    height: 2px;
    background: #2c3e50;
    top: 10px;
    @media only screen and (max-width: 768px) {
      background: #ffffff;
    }
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
    left: 2px;
    top: 4px;
  }

  #nav-icon.open span:nth-child(2) {
    left: calc(50% - 5px);
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
    left: 1px;
    top: 13px;
    /*
    @media only screen and (max-width: 768px) {
      top: 13px;
    }
    */
  }

  #nav-icon.open span:nth-child(6) {
    left: calc(50% - 4px);
    top: 13px;
    /*
    @media only screen and (max-width: 768px) {
      top: 13px;
    }*/
  }

  .mode-dark span {
    background: #7b7b7b !important;
  }
}
</style>