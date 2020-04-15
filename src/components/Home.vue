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
          <template slot="quote-1">Somos nuestra historia, única e irrepetible.</template>
          <template slot="sentence-1">
            <p>Nuestras experiencias nos hacen únicos e irrepetibles. Todos sentimos tristeza o amor, sin embargo cada uno lo vivimos desde nuestro modo singular de estar en el mundo.</p>
            <p>
              Al tratar con personas y no con etiquetas, la terapia se vuelve un proceso 'hecho a medida', sensible a la particular historia de cada uno.
              <!-- donde podemos descubrir a través de nuestra historia el lugar desde el que entendemos el mundo. -->
            </p>
            <p></p>
          </template>
          <template slot="quote-2">La palabra es sanadora.</template>
          <template slot="sentence-2">
            <p>Nuestros conflictos no resueltos son nudos de palabras, trozos de historias desconectados de nuestros sentidos más profundos.</p>
            <p>Hay cosas que cuesta decirlas en voz alta, incluso decírnoslo a nosotros mismos. Es por eso que "hablar" hace circular lo que está detenido, produciendo nuevos sentidos y emociones.</p>
          </template>
          <template slot="quote-3">Un espacio honesto y seguro.</template>
          <template slot="sentence-3">
            <p>Un proceso terapéutico requiere honestidad para hablar de uno mismo. Es un acto de valentía y compromiso que necesita de un espacio confidencial, respetuoso y sin juicios.</p>
            <br />
            <p>La terapia es un sitio privilegiado donde podemos tener la libertad de enfrentarnos a nosotros mismos.</p>
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
            <p>La respiración es como un pulso del que no somos siempre conscientes y que sin embargo podemos controlar. Al igual que con la respiración no siempre advertimos el por qué de las desiciones que tomamos.</p>
            <p>Estamos tan envueltos de nuestra historia, que como si se tratase del aire, no vemos todo aquello que rodea nuestros actos y elecciones.</p>
          </template>
          <template slot="quote-2">La libertad de elegir ser uno mismo</template>
          <template slot="sentence-2">
            <p>Estamos rodeados de exigencias de éxito que se confunden con lo que esperamos de nosotros mismos. Estos ideales incluso los defendemos, a pesar de que esclavizan nuestros propósitos. La terapia permite un punto de vista crítico que nos libera de lo que suponemos que los demás esperan de nosotros.</p>
          </template>
          <template slot="quote-3">Un punto de escucha diferente.</template>
          <template slot="sentence-3">
            <p>Escuchar nuestra vida desde otro lugar nos permite tomar distancia y poder vernos a nosotros mismos desde un plano más amplio. Conocernos es descubrir los hilos inconscientes de nuestra vida, para desenredarlos y empezar a darnos cuenta que somos los que tejemos nuestro relato.</p>
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
            <p>¿Qué quiero? es una pregunta que cambia con el tiempo, por lo que es necesario darle cada vez un nuevo sentido. En algún momento del proceso terapéutico nos hacemos esta pregunta, para darnos cuenta de que lo importante es que cada uno debe elegir su respuesta.</p>
          </template>
          <template slot="quote-2">Nadie puede hacerse cargo de nuestro deseo.</template>
          <template slot="sentence-2">
            <p>
              Somos nuestra historia, pero sobre todo es lo que hacemos con ella. Darnos cuenta de que nuestra vida no depende tanto de los acontecimientos que hemos vivido, sino de la posición desde dónde la vivimos, nos permite
              hacernos cargo de nuestro deseo.
              <!-- Nadie puede hacerse cargo de nuestro deseo. 
            
              Parte del proceso es entender cómo estamos implicados en lo qué sucede en nuestras vidas. Esto significa comprender qué de nosotros se pone en juego en nuestro malestar. De esta manera podemos no retroceder ante nuestro deseo y hacernos responsables.-->
              <!-- ¿Cómo estamos implicados en las cosas que nos suceden? Esta pregunta nos interpela, nos obliga a tomar posición y a aceptar que a pesar de nuestras contradicciones, podemos hacernos cargo de nuestro deseo y poder ganar la libertad para re-inventarlo. -->
            </p>
          </template>

          <template slot="quote-3">Sentido desde tus propósitos.</template>
          <template slot="sentence-3">
            <p>Todos buscamos una vida significativa, que tenga sentido. Dar sentido es cómo tomar una brújula para orientarnos, pero también es sentir desde nuestro cuerpo, y sobre todo volver significantes nuestros propósitos.</p>
          </template>
        </principle>
        <!-- PRINCIPLE 4-->
        <principle
          key="4"
          v-if="itemSelected === 4"
          :index="4"
          @backToListPrinciples="backToListPrinciples"
        >
          <template slot="title">crea</template>
          <template slot="quote-1">La terapia es un acto creativo.</template>
          <template slot="sentence-1">
            <p>La terapia es un espacio de acompañamiento co-creado, no se trata tanto de la guía de un experto como de un espacio de libertad creativa.</p>
            <br />
            <p>Cambiar requiere un acto creativo sobre uno mismo. El espacio terapéutico es como un taller creativo en el que podemos re-inventarnos.</p>
          </template>
          <template slot="quote-2">Romper, construir, actuar.</template>
          <template slot="sentence-2">
            <p>Muchas veces necesitamos romper para poder volver a construir. La terapia es principalmente una experiencia de ruptura y construcción de sentidos y emociones. Es un proceso en el que se trata de inventar nuestra manera de actuar conforme a nuestro deseo.</p>
          </template>
          <template slot="quote-3">Crear tu modo único de habitar el mundo.</template>
          <template slot="sentence-3">
            <p>La terapia no tiene porque ser una carrera, y tampoco existe la píldora mágica, nadie se cura de la vida!</p>
            <br />
            <p>Piensa la terapia como una experiencia vital transformadora, que te permita encontrar la libertad necesaria para inventar tu modo único de estar en el mundo.</p>
          </template>
        </principle>
      </div>
    </div>
    <a v-if="isPage != 1" class="contact-whatsapp text-focus-in-1" href="https://api.whatsapp.com/send?phone=[-34][657649342]" target="_blank"></a>
    <!-- <div
      v-if="isPage != 1"
      class="contact-whatsapp text-focus-in-1"
      @click="openWhatsAppDialog = true"
    >
      <div class="whatsapp-dialog" v-if="openWhatsAppDialog">
        <div class="icon" @click="closeDialog"></div>
        <div class="name">santiago rueda</div>
        <div class="city">Barcelona - Terapia online</div>
        <a href="tel:+34657649342" class="phone">+34 657-64-9342</a>
      </div>
    </div> -->
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
      selectedElement: null,
      openWhatsAppDialog: false
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
    closeDialog() {
      console.log('closeDialog')
      this.openWhatsAppDialog = false
    },
    openDialogWhatsApp() {},
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
.contact-whatsapp {
  background: url(../assets/whatsapp.png);
  background-size: contain;
  background-repeat: no-repeat;
  height: 60px;
  width: 60px;
  position: absolute;
  bottom: 25px;
  right: 50px;
}
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

/*
.whatsapp-dialog {
  background-color: #ffffff;
  width: 300px;
  height: 120px;
  position: absolute;
  left: -255px;
  top: -10px;
  padding: 10px;
  border-radius: 10px;
  font-family: "Playfair Display", serif;
  .icon {
    position: absolute;
    right: 3px;
    height: 20px;
    width: 30px;
    background: url(/img/close.f31e3797.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  
}
*/
</style>