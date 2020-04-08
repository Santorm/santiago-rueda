<template>
  <div class="main-wrap">
    <!-- START PRESENTATION -->
    <div
      class="page-container page1"
      v-if="isPage === 1"
      :class="[backgrounTransition ? 'backgrounTransition': '']"
    >
      <div class="home-text-wrap text-blur-out">
        <span class="text-focus-in-f">Espacio terapéutico para</span>
        <span class="text-focus-in-1 text-espaced">la re-invensión</span>
        <span class="text-focus-in-2">de uno mismo.</span>
      </div>
    </div>
    <!-- PRINCIPLES LIST-->
    <principle-list v-if="isPage === 2" @principleSelected="principleSelected"/>
    <!-- PRINCIPLES -->
    <div class="page-container slide-in-right-1" v-if="isPage === 3">
      <div class="principles-wrap">     
        <!-- PRINCIPLE 1-->
        <principle key="1" v-if="itemSelected == 1" :index="1" @backToListPrinciples="backToListPrinciples">
          <template slot="title">
            habla
          </template>
          <template slot="quote-1">
            Somos la historia que nos contamos
          </template>
          <template slot="sentence-1">
            Hay cosas de las que cuesta hablar explicado
          </template>
          <template slot="quote-2">
            Las cosas de las que nos cuesta hablar
          </template>
          <template slot="sentence-2">
            Hay cosas de las que cuesta hablar
          </template>
          <template slot="quote-3">
            Confidencial, respetuoso y sin juicios
          </template>
          <template slot="sentence-3">
            Confidencial, respetuoso y sin juicios
          </template>
        </principle>
        
        <!-- PRINCIPLE 2-->
        <principle key="2" v-if="itemSelected === 2" :index="2" @backToListPrinciples="backToListPrinciples">
          <template slot="title">
            descubre
          </template>
          <template slot="quote-1">
            Somos la historia que nos contamos
          </template>
          <template slot="sentence-1">
            Somos la historia que nos contamos
          </template>
          <template slot="quote-2">
            Somos la historia que nos contamos
          </template>
          <template slot="sentence-2">
            Hay cosas de las que cuesta hablar
          </template>
          <template slot="quote-3">
            Somos la historia que nos contamos
          </template>
          <template slot="sentence-3">
            Confidencial, respetuoso y sin juicios
          </template>
        </principle>
        <!-- PRINCIPLE 3-->
        <principle key="3" v-if="itemSelected === 3" :index="3" @backToListPrinciples="backToListPrinciples">
          <template slot="title">
            significa
          </template>
          <template slot="quote-1">
            Toma decisiones desde tus propósitos
          </template>
          <template slot="sentence-1">
            Toma decisiones desde tus propósitos
          </template>
          <template slot="quote-2">
            ¿Qué quiero?
          </template>
          <template slot="sentence-2">
            ¿Qué quiero?
          </template>
          <template slot="quote-3">
            ¿Qué quiero?
          </template>
          <template slot="sentence-3">
            Escúchate, comprende, actúa
          </template>
        </principle>
        <!-- PRINCIPLE 4-->
        <principle key="4" v-if="itemSelected === 4" :index="4" @backToListPrinciples="backToListPrinciples">
          <template slot="title">
            crea
          </template>
          <template slot="quote-1">
            Somos la historia que nos contamos
          </template>
          <template slot="sentence-1">
            Deconstruye tu propia historia
          </template>
          <template slot="quote-2">
            Somos la historia que nos contamos
          </template>
          <template slot="sentence-2">
            Hazte cargo de tu deseo
          </template>
          <template slot="quote-3">
            Somos la historia que nos contamos
          </template>
          <template slot="sentence-3">
            Crear tu modo único de habitar el mundo
          </template>
        </principle>
      </div>
    </div>
  </div>
</template>

<script>
import Principle from "./Principle";
import PrincipleList from "./PrincipleList";
// santiago-rueda\src\components\Principle.vue
export default {
  components: { Principle, PrincipleList },
  data() {
    return {
      itemSelected: null,
      isPage: 1,
      isInsidePrinciple: false,
      backgrounTransition: false,
      slideIn: false,
      principlesSelectedMode: false,
      selectedElement: null
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
      let me = this
      setTimeout(function() {
        me.isPage = 2
      }, 1500)
    },
    principleSelected(index){
      console.log('principleSelected', index)
      this.itemSelected = index
      this.isPage = 3
    },
    backToListPrinciples(){
      this.isPage = 2
    }
  }
};
</script>

<style lang="scss" scoped>
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

.principles-wrap {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

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
  font-family: "Playfair Display", serif;
}

.home-text-wrap span {
  display: inline-block;
}
.text-espaced {
  margin-right: 0.3em;
  margin-left: 0.3em;
}
</style>