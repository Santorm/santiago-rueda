<template>
  <div :class="['principle-selected-wrap', 'principle-selected-'+index]">
    <div @click="backToListPrinciples" class="back-icon text-focus-in-1">
      <img src="<%= BASE_URL %>icono_back blanco.svg" alt="Volver" />
    </div>
    <div class="quotes-wrap">
      <span class="title">
        <div class="under-line-title"></div>
        <slot name="title"></slot>
      </span>
      <div class="quotes">
        <div
          class="quote"
          @click="selectQuote(1)"
          @mouseover="selectQuote(1)"
          :class="[quoteSelected === 1 ? 'active':'']"
        >
          <span>
            <slot name="quote-1"></slot>
          </span>
          <!-- <div class="under-line"></div> -->
        </div>
        <div
          class="quote"
          @click="selectQuote(2)"
          @mouseover="selectQuote(2)"
          :class="[quoteSelected === 2 ? 'active':'']"
        >
          <span>
            <slot name="quote-2"></slot>
          </span>
          <!-- <div class="under-line"></div> -->
        </div>
        <div
          class="quote"
          @click="selectQuote(3)"
          @mouseover="selectQuote(3)"
          :class="[quoteSelected === 3 ? 'active':'']"
        >
          <span>
            <slot name="quote-3"></slot>
          </span>
          <!-- <div class="under-line"></div> -->
        </div>
      </div>
    </div>
    <div class="sentences">
      <div class="sentence text-focus-in-0-5" v-show="quoteSelected === 1">
        <div class="comillas">"</div>
        <slot name="sentence-1"></slot>
      </div>
      <div class="sentence text-focus-in-0-5" v-show="quoteSelected === 2">
        <span class="comillas">"</span>
        <slot name="sentence-2"></slot>
      </div>
      <div class="sentence text-focus-in-0-5" v-show="quoteSelected === 3">
        <span class="comillas">"</span>
        <slot name="sentence-3"></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ["index"],
  data() {
    return {
      // isPage1: true,
      isInsidePrinciple: false,
      // backgrounTransition: false,
      slideIn: false,
      principlesSelectedMode: false,
      selectedElement: null,
      quoteSelected: 0
    };
  },
  methods: {
    backToListPrinciples() {
      // this.$emit("backToListPrinciples");
      this.$router.push({path: '../manifiesto'})
    },
    selectQuote(quote) {
      this.quoteSelected = quote;
    }
  }
};
</script>

<style lang="scss" scoped>
.principle-selected-wrap {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-y: auto;
  .quotes-wrap {
    position: relative;
    width: 40%;
    display: flex;
    justify-content: center;
    flex-flow: column;
    margin-left: 50px;
    text-align: start;
    .title {
      font-family: "Playfair", serif;
      font-size: 8vw;
      margin-top: 100px;
      margin-bottom: 40px;
      z-index: 1;
      .under-line-title {
        height: 0.7vw;
        width: 100%;
        background-color: #ffffff;
        position: relative;
        top: 5.7vw;
        z-index: -1;
      }
    }

    .quotes {
      font-family: "Lato", sans-serif;
      font-size: 1.7vw;
      font-weight: 300;
      .quote {
        margin: 1.5vw auto;
        &.active {
          font-weight: 400;
        }
        &:hover {
          // background-color: #ffffff;
          // transition: all 0.5s ease-in;
          .under-line {
            transition: all 0.5s ease-in;
            width: 100%;
          }
        }
        .under-line {
          height: 3px;
          width: 0%;
          background-color: #ffffff;
          position: absolute;
        }
      }
    }
  }
  .sentences {
    font-weight: 300;
    position: relative;
    width: 60%;
    display: flex;
    justify-content: flex-end;
    flex-flow: column;
    font-size: 1.9vw;
    text-align: end;
    padding: 10px 50px 100px 60px;
    box-sizing: border-box;
    overflow: hidden;
    .comillas {
      font-family: "Palanquin", sans-serif;
      font-size: 526px;
      position: relative;
      top: 136px;
      opacity: 0.1;
      display: block;
      user-select: none;
      z-index: -1;
      /*
      font-family: "Palanquin", sans-serif;
      font-size: 126px;
      position: relative;
      left: -10px;
      top: 25px;
      */
    }
    .sentence {
      position: relative;
      margin: 20px 0;
      line-height: 2.5vw;
    }
  }
}

.principle-selected-1 {
  background: #ffeb99;
}

.principle-selected-2 {
  background: #a4c5c6;
}

.principle-selected-3 {
  background: #d4ebd0;
}

.principle-selected-4 {
  background: #d8cdb5;
  /*#856c8b;*/
}
.back-icon {
  position: absolute;
  height: 50px;
  z-index: 1;
  top: 50px;
  left: 25px;
  transition: all 1s ease;
  overflow: hidden;

  img {
    height: 50px;
    width: 50px;
  }
}
</style>