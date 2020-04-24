<template>
  <div class="nav-dot-wrap">
    <div class="nav-dot" v-for="(page, index) in pages" :key="index" @click="gotoPage(page)">
      <div v-if="page.page === currentPage" class="nav-dot-selected"></div>
      <div v-else class="nav-dot-not-selected"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pages", "currentPage", "isBio"],
  methods: {
    gotoPage(page) {
      if(this.isBio){
        this.$emit('pageSelected', page.page)
        return
      }
      switch (page.page) {
        case 1:
          this.$router.push({ path: "../manifiesto/habla" });
          break;
        case 2:
          this.$router.push({ path: "../manifiesto/descubre" });
          break;
        case 3:
          this.$router.push({ path: "../manifiesto/significa" });
          break;
        case 4:
          this.$router.push({ path: "../manifiesto/crea" });
          break;
      }
      // this.$emit('pageSelected', page.page)
    }
  }
};
</script>
<style lang="scss">
.nav-dot-wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 4;
  .nav-dot {
    position: relative;
    margin: 0 5px;
    width: 30px;
    height: 30px;
    padding: 9px;
    box-sizing: border-box;
    /* border: 2px solid #ffffff;*/
    border-radius: 50%;
    // background: #ffffff;
    /*
    position: relative;
    width: 15px;
    height: 15px;
    margin: 0 8px;
    border: 1px solid #ffffff;
    border-radius: 50%;
    opacity: 0.8;
    */
    &:hover {
      opacity: 1;
    }

    .nav-dot-selected {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 10px;
      height: 10px;
      /* border: 2px solid #ffffff;*/
      border-radius: 50%;
      background: #ffffff;
    }

    .nav-dot-not-selected {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 4px;
      height: 4px;
      /* border: 2px solid #ffffff;*/
      border-radius: 50%;
      background: #ffffff;
    }
  }
}
</style>