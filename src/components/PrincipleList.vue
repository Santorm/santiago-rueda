<template>
  <div class="principles-wrap">    
    <div
      v-for="principle in principles"
      :key="principle.index"
      :class="['principles', 'principles-'+principle.index, 'slide-in-right-'+principle.index]"
      @click="selectPrinciples(principle.index)">
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
      switch (item) {
        case 1:
          this.$router.push({path: '../manifiesto/habla'})
          break;
        case 2:
          this.$router.push({path: '../manifiesto/descubre'})
          break;
        case 3:
          this.$router.push({path: '../manifiesto/significa'})
          break;
        case 4:
          this.$router.push({path: '../manifiesto/crea'})
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.principles-wrap {
    display: flex;
    flex-direction: row;
    overflow: hidden;
}

.principles {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: width 1.5s ease-out;
  
  color: #ffffff;
}

.principles-title {
  font-family: 'Playfair', serif !important;
}

.principles span  {
  font-size: 45px;
  width: 100%;
  text-align: end;
  padding-right: 5px;
  padding-left: 10px;
  position: relative;
  bottom: 33%;

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
  background: #d8cdb5;
  /*#856c8b;*/
}

@media only screen and (max-width: 768px) {
  .principles-wrap {
    flex-direction: column;
    .principles {
      width: 100%;
      span {
        text-align: start;
      }
    }
  }

}
</style>