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
    <principle-list v-if="isPage === 2" @principleSelected="principleSelected" />
    <!-- PRINCIPLES -->
    <div class="page-container slide-in-right-1" v-if="isPage === 3">
      <div class="principles-wrap">
        <!-- PRINCIPLE 1-->
        <principle
          key="1"
          v-if="itemSelected == 1"
          :index="1"
          @backToListPrinciples="backToListPrinciples"
        >
          <template slot="title">habla</template>
          <template slot="quote-1">Somos nuestra historia.</template>
          <template slot="sentence-1">
            <p>
              <!-- Construimos nuestro mundo, desde el punto de vista que nuestra historia nos enseñó a mirar. 
              Cada vivencia única e irrepetible hace de nuestra experiencia de vida un punto singular desde donde 
              habitamos nuestros miedos y dificultades, pero también nuestras oportunidades y fortalezas.-->
              Cada una de nuestras vivencias son experiencias personales e irrepetibles que moldean nuestro mundo y el lugar único desde el que tomamos nuestras desiciones. Es por ello que "somos nuestra historia" que a la vez la reescribimos con nuestras desiciones. No podemos cambiar nuestro pasado, pero podemos re-
              <strong>descubrirlo</strong>
              y darle otro sentido para construir el futuro.
              <!-- Los recuerdos marcan nuestro presente. Es por ello que "somos nuestra historia" y las desiciones que tomamos desde este lugar único en el mundo.

              Somos nuestra historia, 
              Tienes la capacidad de contruir tu mundo en el presente
              Construimos nuestro mundo a partir de nuestra historia-->
            </p>
            <p></p>
          </template>
          <template slot="quote-2">Las cosas de las que nos cuesta hablar.</template>
          <template slot="sentence-2">
            <p>La palabra es sanadora. Lo que llamamos trauma, las repeticiones vitales de las que no podemos salir, nuestros temores más ocultos, son nudos de palabras, trozos de historias desconectados de nuestros sentidos más profundos.</p>
            <br />
            <p>Hay cosas que cuesta decirlas en voz alta, incluso decírnoslo a nosotros mismos. Es por eso que "hablar" hace circular lo que está detenido, produciendo nuevos sentidos y emociones.</p>
          </template>
          <template slot="quote-3">Un espacio honesto y seguro.</template>
          <template slot="sentence-3">
            <p>Empezar un proceso terapéutico requiere honestidad con nosotros mismos, es un acto de valentía y compromiso que necesita la confianza de un espacio confidencial, respetuoso y sin juicios, desde donde podamos aceptarnos a nosotros mismos para empezar un cambio.</p>
          </template>
        </principle>

        <!-- PRINCIPLE 2-->
        <principle
          key="2"
          v-if="itemSelected === 2"
          :index="2"
          @backToListPrinciples="backToListPrinciples"
        >
          <template slot="title">descubre</template>
          <template slot="quote-1">Un punto ciego para nosotros mismos.</template>
          <template slot="sentence-1">
            <p>La respiración es como un pulso del que no somos siempre conscientes y que sin embargo podemos controlar. Al igual que con la respiración no siempre advertimos el por qué de las desiciones que tomamos. Estamos tan envueltos de nuestra historia, que como si se tratase del aire, no vemos todo aquello que rodea nuestros actos y elecciones.</p>
          </template>
          <template slot="quote-2">La libertad de elegir ser uno mismo</template>
          <template slot="sentence-2">
            <p>Estamos rodeados de exigencias de éxito que se confunden con lo que esperamos de nosotros mismos. Estos ideales incluso los defendemos, a pesar de que esclavizan nuestros propósitos, alimentándose de lo que suponemos que los demás esperan de nosotros.</p>
          </template>
          <template slot="quote-3">Un punto de escucha diferente.</template>
          <template slot="sentence-3">
            <p>Escuchar nuestra vida desde otro lugar nos permite tomar distancia y poder vernos a nosotros mismos desde un plano más amplio. Conocernos a nosotros mismos es descubrir los hilos inconscientes de nuestra vida, para empezar a tejer nuestra historia.</p>
          </template>
        </principle>
        <!-- PRINCIPLE 3-->
        <principle
          key="3"
          v-if="itemSelected === 3"
          :index="3"
          @backToListPrinciples="backToListPrinciples"
        >
          <template slot="title">re-significa</template>
          <template slot="quote-1">¿Qué quiero?</template>
          <template slot="sentence-1">
            <p>¿Qué quiero? es una pregunta que no esta hecha para ser respondida de una vez por todas. Nuestro deseo cambia junto con nosotros, por lo que es necesario darle cada vez un nuevo sentido. En algún momento del proceso terapéutico, esta pregunta se presenta como la revelación de que hay que re-inventar y elegir una respuesta. </p>
          </template>
          <template slot="quote-2">Romper, construir, actuar.</template>
          <template slot="sentence-2">
            <p>              
              Re-significar requiere romper para poder volver a construir. El proceso terapéutico es principalmente una experiencia .</p>
            </template>
          <template slot="quote-3">Decisiones desde tus propósitos.</template>
          <template slot="sentence-3">El proceso terapéutico es creativo. Es necesario crear un propósito significativo, es decir, que nos de un sentido. Dar sentido es cómo tomar una brújula para orientarnos, pero también es sentir desde nuestras emociones, y sobre todo volver nuestros propósitos significantes dentro de nuestras vidas.</template>
          
        </principle>
        <!-- PRINCIPLE 4-->
        <principle
          key="4"
          v-if="itemSelected === 4"
          :index="4"
          @backToListPrinciples="backToListPrinciples"
        >
          <template slot="title">crea</template>
          <template slot="quote-1">Deconstruye tu propia historia.</template>
          <template slot="sentence-1">Deconstruye tu propia historia explicado.</template>
          <template slot="quote-2">Hazte cargo de tu deseo.</template>
          <template slot="sentence-2">Hazte cargo de tu deseo explicado.</template>
          <template slot="quote-3">Crear tu modo único de habitar el mundo.</template>
          <template slot="sentence-3">Crear tu modo único de habitar el mundo explicado.</template>
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
      let me = this;
      setTimeout(function() {
        me.isPage = 2;
      }, 1500);
    },
    principleSelected(index) {
      this.itemSelected = index;
      this.isPage = 3;
    },
    backToListPrinciples() {
      this.isPage = 2;
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