<template>
  <div :class="['principle-selected-wrap', 'principle-selected-'+index ,  'text-focus-in-'+index]">
    <div @click="backToListPrinciples" class="back-icon text-focus-in-1">
      <img src="../assets/noun_back.svg" alt="Volver" />
    </div>
    <div class="quotes-wrap">
      <span class="title">
        <div class="under-line-title"></div>
        <slot name="title"></slot>
      </span>
      <div class="quotes">
        <div class="quote" @click="selectQuote(1)">
          <span>
            <slot name="quote-1"></slot>
            <div class="under-line"></div>
          </span>
        </div>
        <div class="quote" @click="selectQuote(2)">
          <span>
            <slot name="quote-2"></slot>
            <div class="under-line"></div>
          </span>
        </div>
        <div class="quote" @click="selectQuote(3)">
          <span>
            <slot name="quote-3"></slot>
            <div class="under-line"></div>
          </span>
        </div>
      </div>
    </div>
    <div class="sentences">
      <div class="sentence text-focus-in-0-5" v-show="quoteSelected === 1">
        <span>
          <span class="comillas">"</span>
          <slot name="sentence-1"></slot>
        </span>
      </div>
      <div class="sentence text-focus-in-0-5" v-show="quoteSelected === 2">
        <span>
          <span class="comillas">"</span>
          <slot name="sentence-2"></slot>
        </span>
      </div>
      <div class="sentence text-focus-in-0-5" v-show="quoteSelected === 3">
        <span>
          <span class="comillas">"</span>
          <slot name="sentence-3"></slot>
        </span>
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
      this.$emit("backToListPrinciples");
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
  .quotes-wrap {
    position: relative;
    top: 100px;
    width: 35%;
    display: flex;
    justify-content: center;
    flex-flow: column;
    margin-left: 50px;
    text-align: start;
    .title {
      font-family: "Playfair", serif;
      font-size: 100px;
      margin-bottom: 40px;
      z-index: 1;
      .under-line-title {
        height: 10px;
        width: 100%;
        background-color: #ffffff;
        position: relative;
        top: 72px;
        z-index: -1;
      }
    }

    .quotes {
      font-family: "Lato", sans-serif;
      font-size: 25px;
      font-weight: 300;
      .quote {
        margin: 25px auto;
        &:hover {
          background-color: #ffffff;
          transition: all 0.5s ease-in;
          .under-line {
            transition: all 0.5s ease-in;
            // width: 100%;
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
    width: 65%;
    display: flex;
    justify-content: center;
    flex-flow: column;
    font-size: 36px;
    text-align: end;
    margin-right: 50px;
    top: -100px;
    .comillas {
      font-family: "Palanquin", sans-serif;
      font-size: 126px;
      position: relative;
      left: -10px;
      top: 25px;
    }

    .sentence {
      margin: 20px 0;
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
  background: #d1b5d8;
  /*#856c8b;*/
}
.back-icon {
  position: absolute;
  height: 80px;
  z-index: 1;
  top: 50px;
  left: 25px;
  transition: all 1s ease;
  overflow: hidden;

  img {
    height: 80px;
    width: 80px;
  }
}
</style>