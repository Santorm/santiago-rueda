<template>
  <div class="principles-wrap">
    <div
      v-for="principle in principles"
      :key="principle.index"
      :class="['principles', 'principles-'+principle.index, 'slide-in-right-'+principle.index]"
      @click="selectPrinciples(principle.index)"
    >
      <span class="principles-title">{{principle.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["index"],
  data() {
    return {
      principles: [
        {
          index: 1,
          title: "habla"
        },
        {
          index: 2,
          title: "descubre"
        },
        {
          index: 3,
          title: "re-significa"
        },
        {
          index: 4,
          title: "crea"
        }
      ],
      isInsidePrinciple: false,
      slideIn: false,
      principlesSelectedMode: false,
      selectedElement: null
    };
  },
  methods: {
    selectPrinciples(item) {
      this.$emit("principleSelected", item);
    }
  }
};
</script>

<style lang="scss" scoped>
.principles-wrap {
    display: flex;
}

.principles {
  width: 25%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: width 1.5s ease-out;
  font-family: "Playfair Display", serif;
  color: #ffffff;
}

.principles span {
  font-size: 45px;
  width: 100%;
  text-align: end;
  padding-right: 5px;
  position: relative;
  bottom: 30%;
  /* transition: all 0.7s ease;*/
}

.principles:hover .principles-title {
  color: #7b7b7b;
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
  background: #d1b5d8;
  /*#856c8b;*/
}
</style>