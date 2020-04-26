<template>
  <div :class="['principle-selected-wrap', 'principle-selected-'+principle.id]">
    <div @click="backToListPrinciples" class="back-icon text-focus-in-1">
      <img src="../assets/icono_back blanco.svg" alt="Volver" />
    </div>
    <div class="quotes-wrap">
      <span class="title">
        <div class="under-line-title"></div>
        {{principle.title}}
        <!-- <slot name="title"></slot> -->
      </span>
      <div class="quotes" v-for="sentence in principle.sentences" :key="sentence.id">
        <div
          class="quote"
          :class="[quoteSelected === sentence.id ? 'active':'']"
          @click="selectQuote(sentence.id)"
          @mouseover="selectQuote(sentence.id)"
        >
          <span>{{sentence.quote}}</span>
        </div>
      </div>
    </div>
    <div class="sentences">
      <transition :name="isScrollingNext ? 'slide-next' : 'slide-back'">
        <div :key="quoteSelected" class="sentence">
          <div class="comillas">"</div>
          <span v-html="getSentenceContent"></span>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: ["principle"],
  data() {
    return {
      // isPage1: true,
      isInsidePrinciple: false,
      // backgrounTransition: false,
      slideIn: false,
      principlesSelectedMode: false,
      selectedElement: null,
      quoteSelected: 1,
      isScrollingNext: true,
      principlesNavByScroll: false
    };
  },
  watch: {
    quoteSelected: function(newVal, oldVal) {
      if (newVal > oldVal) {
        this.isScrollingNext = true;
      } else {
        this.isScrollingNext = false;
      }
    },
    principle: function() {
      if(! this.principlesNavByScroll){
        this.quoteSelected = 1;
      }
    }
  },
  mounted() {
    let element = document.querySelector(".principle-selected-wrap");
    if (element) {
      //element.addEventListener("scroll", this.handleScroll);
      element.addEventListener("touchstart", this.handleTouchStart);
      element.addEventListener("touchend", this.handleTouchEnd);
    }
  },
  destroyed() {
    let element = document.querySelector(".principle-selected-wrap");
    if (element) {
      //element.removeEventListener("scroll", this.handleScroll);
      element.removeEventListener("touchstart", this.handleTouchStart);
      element.removeEventListener("touchend", this.handleTouchEnd);
    }
  },
  computed: {
    getSentenceContent() {
      return this.principle.sentences[this.quoteSelected - 1].content;
    }
  },
  methods: {
    handleTouchStart(event) {
      // this.touchStartX = event.changedTouches[0].clientX
      this.touchStartY = event.changedTouches[0].clientY;
      this.touchStartTime = event.timeStamp;
    },
    handleTouchEnd(event) {
      this.principlesNavByScroll = false
      this.touchEndTime = event.timeStamp;
      if (this.touchEndTime - this.touchStartTime > 300) {
        return;
      }
      let isScrolling = false;
      // this.touchEndX = event.changedTouches[0].clientX
      this.touchEndY = event.changedTouches[0].clientY;
      this.isScrollingNext = this.touchStartY - this.touchEndY > 0;
      isScrolling = Math.abs(this.touchStartY - this.touchEndY) > 75;

      if (!isScrolling) {
        return;
      }
      //  setTimeout(() => {
      if (
        !this.isScrollingNext &&
        this.quoteSelected === 1 &&
        this.principle.id !== 1
      ) {
        this.quoteSelected = 3;
        this.$emit("navigatePrinciples", "back");
        this.principlesNavByScroll = true
        // this.isScrollingNext = true
        return;
      }

      if (
        this.isScrollingNext &&
        this.quoteSelected === 3 &&
        this.principle.id !== 4
      ) {
        this.quoteSelected = 1;
        this.$emit("navigatePrinciples", "next");
        // this.isScrollingNext = false
        return;
      }

      if (this.isScrollingNext && this.quoteSelected < 3) {
        this.quoteSelected++;
      }

      if (!this.isScrollingNext && this.quoteSelected > 1) {
        this.quoteSelected--;
      }
      //  }, 500);
    },
    backToListPrinciples() {
      this.$router.push({ path: "../manifiesto" });
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
  height: 100%;
  min-height: 540px;
  display: flex;
  overflow-y: auto;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  .quotes-wrap {
    position: relative;
    width: 40%;
    display: flex;
    justify-content: center;
    flex-flow: column;
    margin-left: 50px;
    text-align: start;
    @media only screen and (max-width: 768px) {
      width: 100%;
      padding-left: 20px;
      margin-left: 0;
      box-sizing: border-box;
    }
    .title {
      font-family: "Playfair", serif;
      font-size: 8vw;
      margin-top: 100px;
      margin-bottom: 40px;
      z-index: 1;
      @media only screen and (max-width: 768px) {
        font-size: 60px;
        margin-bottom: 10px;
        margin-top: 50px;
      }
      .under-line-title {
        height: 8px;
        width: 100%;
        background-color: #ffffff;
        position: relative;
        top: 5.7vw;
        z-index: -1;
        border-radius: 2px;

        @media only screen and (max-width: 768px) {
          top: 45px;
          height: 5px;
        }
      }
    }

    .quotes {
      font-family: "Lato", sans-serif;
      font-size: 1.7vw;
      font-weight: 300;
      user-select: none;

      @media only screen and (max-width: 768px) {
        font-size: calc(0.8em + 1vw);
      }
      .quote {
        margin: 0 auto 12px;
        &.active {
          font-weight: 400;
          text-decoration: underline;
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
    text-align: justify;
    padding: 10px 50px 100px 60px;
    box-sizing: border-box;
    overflow: hidden;

    @media only screen and (max-width: 768px) {
      width: 100%;
      font-size: calc(1em + 1vw);
      line-height: 62px;
      padding: 4% 4% 70px;
      height: 60%;
      justify-content: center;
      text-align: justify;
    }
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
      @media only screen and (max-width: 768px) {
        line-height: 19px;
      }
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
  left: 30px;
  transition: all 1s ease;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    top: 15px;
    left: 10px;
  }

  img {
    height: 50px;
    width: 50px;
    @media only screen and (max-width: 768px) {
      height: 36px;
      width: 36px;
    }
  }
}
</style>