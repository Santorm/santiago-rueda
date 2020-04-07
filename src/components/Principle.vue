<template>
  <div :class="['principle-selected-wrap', 'principle-selected-'+index ,  'text-focus-in-'+index]">
    <div @click="backToListPrinciples" class="back-icon text-pop-up-top">
      <img src="../assets/noun_back.svg" alt="Volver" />
    </div>
    <div class="title">
      <span>
        <slot name="title"></slot>
      </span>
    </div>
    <div class="sentences">
      <div>
        <span>
          <slot name="sentence-1"></slot>
        </span>
      </div>
      <div>
        <span>
          <slot name="sentence-2"></slot>
        </span>
      </div>
      <div>
        <span>
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
      selectedElement: null
    };
  },
  methods: {
      backToListPrinciples(){
          this.$emit('backToListPrinciples')
      }
  }
};
</script>

<style lang="scss" scoped>
.principle-selected-wrap {
  width: 100%;
  height: 100vh;
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