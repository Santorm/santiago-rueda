<template>
  <div class="main-wrap">
    <!-- START PRESENTATION -->
    <div
      class="page-container page1"
      v-if="isPage === 1"
    >
      <div class="home-text-wrap">
        <span class="text-focus-in-1">Espacio terapéutico para</span>
        <span class="text-focus-in-2 text-espaced">el descubrimiento</span>
        <span class="text-focus-in-f">de uno mismo</span>
        <div @click="goToPage2" class="text-focus-in-f entra-btn">te acompaño</div>
      </div>
    </div>
    <!-- PRINCIPLES LIST-->
    <principle-list v-if="isPage === 2" @principleSelected="principleSelected" />
    <!-- PRINCIPLES -->
    <div class="page-container slide-in-right-1" v-if="isPage === 3">
      <div class="principles-wrap">
        <principle
          class="slide-in-right-1"
          @backToListPrinciples="backToListPrinciples"
          @navigatePrinciples="navigatePrinciples"
          :principle="principles[itemSelected - 1]"
        ></principle>
      </div>
    </div>
    <a
      v-if="isPage != 1"
      class="contact-whatsapp text-focus-in-1"
      href="https://api.whatsapp.com/send?phone=[-34][657649342]"
      target="_blank"
    ></a>
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
    </div>-->
    <!-- NAV DOTS -->
    <nav-dots
      v-if="isPage === 3"
      class="nav-dots-component"
      :pages="pages"
      @pageSelected="goTopage"
      :currentPage="itemSelected"
    />
  </div>
</template>

<script>
import Principle from "./Principle";
import PrincipleList from "./PrincipleList";
import NavDots from "./NavDots";
// santiago-rueda\src\components\Principle.vue
export default {
  components: { Principle, PrincipleList, NavDots },
  data() {
    return {
      itemSelected: 0,
      isPage: 1,
      isInsidePrinciple: false,
     //backgrounTransition: false,
      slideIn: false,
      principlesSelectedMode: false,
      selectedElement: null,
      openWhatsAppDialog: false,
      pages: [
        {
          name: "principle1",
          page: 1
        },
        {
          name: "principle2",
          page: 2
        },
        {
          name: "principle3",
          page: 3
        },
        {
          name: "principle4",
          page: 4
        }
      ],
      principles: [
        {
          id: 1,
          title: "habla",
          sentences: [
            {
              id: 1,
              quote: "Somos nuestra historia, única e irrepetible",
              content:
                "<p>Nuestras experiencias nos hacen únicos e irrepetibles. Todos sentimos tristeza o amor, sin embargo cada uno lo vivimos desde nuestro modo singular de estar en el mundo.</p><p>Al tratar con personas y no con etiquetas, la terapia se vuelve un proceso 'hecho a medida', sensible a la particular historia de cada uno.</p>"
            },
            {
              id: 2,
              quote: "La palabra es sanadora",
              content:
                "<p>Nuestros conflictos no resueltos son nudos de palabras, trozos de historias desconectados de nuestros sentidos más profundos.</p><p>Hay cosas que cuesta decirlas en voz alta, incluso decírnoslo a nosotros mismos. Es por eso que 'hablar' hace circular lo que está detenido, produciendo nuevos sentidos y emociones.</p>"
            },
            {
              id: 3,
              quote: "Un espacio honesto y seguro",
              content:
                "<p>Un proceso terapéutico requiere honestidad para hablar de uno mismo. Es un acto de valentía y compromiso que necesita de una escucha confidencial, respetuosa y sin juicios.</p><br/><p>La terapia es un espacio privilegiado donde podemos tener la libertad de encontrarnos con nosotros mismos.</p>"
            }
          ]
        },
        {
          id: 2,
          title: "descubre",
          sentences: [
            {
              id: 1,
              quote: "Un punto ciego para nosotros mismos",
              content:
                "<p>La respiración es como un pulso del que no somos siempre conscientes y que sin embargo podemos controlar. Al igual que con la respiración no siempre advertimos el por qué de las decisiones que tomamos.</p><p>Estamos tan envueltos en nuestra historia, que como si se tratase del aire, no vemos todo aquello que rodea nuestros actos y elecciones.</p>"
            },
            {
              id: 2,
              quote: "La libertad de elegir ser uno mismo",
              content:
                "<p>Estamos rodeados de exigencias de éxito que se confunden con lo que esperamos de nosotros mismos. Estos ideales los defendemos, a pesar de que esclavizan nuestros propósitos. La terapia permite un punto de vista crítico que nos libera de lo que suponemos que los demás esperan de nosotros.</p>"
            },
            {
              id: 3,
              quote: "Un espacio de escucha diferente",
              content:
                "<p>Escuchar nuestra vida desde otro lugar nos permite tomar distancia y vernos a nosotros mismos desde un plano más amplio. Conocernos es descubrir los hilos inconscientes de nuestra vida, para desenredarlos y empezar a darnos cuenta de que somos nosotros los que tejemos nuestro relato.</p>"
            }
          ]
        },
        {
          id: 3,
          title: "re-significa",
          sentences: [
            {
              id: 1,
              quote: "¿Qué quiero?",
              content:
                "<p>¿Qué quiero? es una pregunta que cambia con el tiempo, por lo que es necesario darle cada vez un nuevo sentido. En algún momento del proceso terapéutico nos hacemos esta pregunta, para darnos cuenta de que lo importante es que cada uno debe elegir su respuesta.</p>"
            },
            {
              id: 2,
              quote: "Nadie puede hacerse cargo de nuestro deseo",
              content:
                "<p>Somos nuestra historia, pero sobre todo somos lo que hacemos con ella. Es importante darnos cuenta de que nuestra vida no depende tanto de los acontecimientos que vivimos, sino de la posición que tomamos frente a ellos para poder hacernos cargo de nuestro deseo.</p>"
            },
            {
              id: 3,
              quote: "Sentido desde tus propósitos",
              content:
                "<p>Todos buscamos una vida significativa, que tenga sentido. Dar sentido es cómo tomar una brújula para orientarnos, pero también es sentir desde nuestro cuerpo, y sobre todo volver significantes nuestros propósitos.</p>"
            }
          ]
        },
        {
          id: 4,
          title: "crea",
          sentences: [
            {
              id: 1,
              quote: "La terapia es un acto creativo",
              content:
                "<p>Cambiar requiere de un acto creativo sobre uno mismo. El espacio terapéutico es como un taller de invención en donde cada uno pueda re-inventarse.</p>"
            },
            {
              id: 2,
              quote: "Romper, construir, actuar",
              content:
                "<p>Muchas veces necesitamos romper para poder volver a construir. La terapia es principalmente una experiencia de ruptura y construcción de sentidos y emociones. Es un proceso en el que se trata de inventar nuestra manera de actuar conforme a nuestro deseo.</p>"
            },
            {
              id: 3,
              quote: "Crear tu modo único de habitar el mundo",
              content:
                "<p>La terapia no tiene porque ser una carrera, y tampoco existe la píldora mágica, nadie se cura de la vida!</p><br/><p>Piensa la terapia como una experiencia vital transformadora, que te permita encontrar la libertad necesaria para inventar tu modo único de estar en el mundo.</p>"
            }
          ]
        }
      ]
    };
  },
  watch: {
    "$route.path": function() {
      this.startNavigation();
    }
  },
  created() {
    this.startNavigation();
  },
  methods: {
    navigatePrinciples(direction) {
      if(direction === 'next'){
        this.itemSelected++
      }
      if(direction === 'back'){
        this.itemSelected--
      }
    },
    startNavigation() {
      let me = this;
      this.slideIn = true;
      let page = this.$route.meta.page;
      let principle = this.$route.meta.principle;

      if (page) {
        switch (page) {
          case 2:
            this.isPage = 2;
            break;
          case 3:
            if (principle) {
              this.principleSelected(principle);
            }
            break;
        }
      } else {
        setTimeout(function() {
          me.goToPage2();
        }, 5000);
      }
    },
    goTopage(page) {
      this.principleSelected(page);
    },
    closeDialog() {
      this.openWhatsAppDialog = false;
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
  background: url("../assets/icono_whatsapp_blanco.svg");
  color: #ffffff;
  background-size: contain;
  background-repeat: no-repeat;
  height: 60px;
  width: 60px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  &:hover {
    background: url("../assets/icono_whatsapp_gris.svg");
  }
  @media only screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
}
.main-wrap {
  height: 100%;
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
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.principles-wrap {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-text-wrap {
  // display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  bottom: 0;
  width: 100%;
  font-size: 2.5vw;
  font-family: "Playfair Display", serif;
  @media only screen and (max-width: 768px) {
    font-size: 20px !important;
  }
  .entra-btn {
    user-select: none;
    border-bottom: 3px solid #ffeb99;
    margin: 60px auto 0;
    width: 125px;
    font-family: "Lato", sans-serif;
    font-size: 19px;
    border: 2px solid #ffeb99;
    padding: 3px;
    text-align: center;
    height: 22px;
    &:hover {
      // border: 2px solid #2c3e50;
      background: #ffeb99;
      color: grey;
    }
  }
}

.home-text-wrap span {
  display: inline-block;
  @media only screen and (max-width: 568px) {
    display: block;
    width: 100%;
    margin: 5px auto;
    text-align: center;
  }
}
.text-espaced {
  margin-right: 0.3em;
  margin-left: 0.3em;
}

.nav-dots-component {
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 180px;
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