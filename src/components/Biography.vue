<template>
  <div class="bio-wrap">
    <div class="photo"></div>
    <div class="content-wrap">
      <div class="content-fixed">
        <div v-for="step in stepsContent" :key="step.step">
          <transition :name="forwardDireccion ? 'slideforward' :'slideback'">
            <div class="content-text" v-if="step.step === timelineStep">
              <!-- :class="[step.step === timelineStep ? 'slide-out-left-1': 'slide-in-right-1']" -->
              <div>
                <p v-html="step.text"></p>
              </div>
              <div class="timeline-wrap">
                <div class="line">
                  <div class="point">
                    <div class="point-title">{{step.hito}}</div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import helpers from "../helpers/helpers.js";

// santiago-rueda\src\helpers\helpers.js
// santiago-rueda\src\components\Biography.vue
export default {
  name: "bio",
  data() {
    return {
      timelineStep: 0,
      forwardDireccion: true,
      stepsContent: [
        {
          step: 0,
          hito: "de dónde vengo",
          text:
            "<p>Vengo de donde una línea divide en dos al planeta, un centro y a la vez una periferia. Ecuador es un país diverso, tanto en su belleza como sus realidades y los retos que tenemos. </p><br><p>Ahora vivo desde varios años en Barcelona. Extranjero a ciertas costumbres y acentos, considero un privilegio poder ver las cosas un poco desde fuera y a la vez sentirme parte. Para mí es importante poder sentarse en una plaza y poder ser uno mismo.</p> "
        },
        {
          step: 1,
          hito: "¿Por qué psicología?",
          text:
            "<p>Mi elección profesional, más que una cuestión vocacional, como es clásico en la psicología, fue por una curiosidad neurótica. Siempre quise entender el mundo y qué es eso que nos hace humanos. Tuve la suerte de formarme como psicólogo clínico.</p><br<p> Si resumo con lo que me quedo de mi formación académica, serían las clases de filosofía y de psicoanálisis; así como los grupos de trabajo y las conversaciones con los colegas que me rompían tanto los esquemas que era difícil evitar que me transforme.</p>"
        },
        {
          step: 2,
          hito: "Barcelona",
          text:
            "Vine a Barcelona para continuar con mi formación, pero también quería romper la burbuja y ver qué hay del otro lado. Continúe con mi formación y volví a poner todo patas arriba. La experiencia de escuchar otros referentes en la SCB y el máster fue descubrir encuentros fabulosos entre diversos saberes. Nuevamente esto me llevó a cuestionarme lo que daba por sentado y empezar a dejar de defender puntos de vista para empezar a buscar uno propio."
        }
      ],
      points: [
        {
          id: 0,
          text: "El primer texto"
        },
        {
          id: 1,
          text: "El segundo texto"
        }
      ]
    };
  },
  mounted() {
    document
      .querySelector(".content-wrap")
      .addEventListener("scroll", this.handleScroll);
    window.addEventListener("wheel", helpers.debounce(this.handleWheel, 300));
  },
  destroyed() {
    document
      .querySelector(".content-wrap")
      .removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("wheel", this.handleWheel);
    // window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    isStepVisible(step) {
      console.log("isStepVisible: ", step);
      return step.step === this.timelineStep;
      //  console.log('reeeturn: ', helpers.debounce(this.isCurrentStep(step), 500))
      /*
    setTimeout(() => { 
      console.log('jhkjh: ', step.step === this.timelineStep)
       return step.step === this.timelineStep
      }, 500);
      // return helpers.debounce(this.isCurrentStep(step), 500)
      */
    },
    isCurrentStep(step) {
      console.log("dgsdgsd: ", step);
      return step === this.timelineStep;
    },
    handleScroll(event) {
      console.log("handleScroll: ", event);
    },
    handleWheel(event) {
      let forward = event.deltaY > 0;
      console.log("this.stepsContent.length: ", this.stepsContent.length);
      console.log("this.timelineStep: ", this.timelineStep);

      if (forward && this.timelineStep < this.stepsContent.length - 1) {
        this.forwardDireccion = true;
        setTimeout(() => {
          this.timelineStep++;
        }, 200);
      }
      if (!forward && this.timelineStep > 0) {
        this.forwardDireccion = false;
        setTimeout(() => {
          this.timelineStep--;
        }, 200);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.bio-wrap {
  cursor: none;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  background: #dddddd;
  overflow: hidden;
  // overflow-x: scroll;
  .photo {
    /* padding: 100px 50px 50px 50px; */
    /* -webkit-box-sizing: border-box; */
    /* box-sizing: border-box; */
    position: absolute;
    /* top: 0; */
    /* left: 0; */
    //santiago-rueda\src\components\Biography.vue
    // santiago-rueda\public\santiago_rueda.jpg

    background: url("../assets/santiago_rueda.jpg");
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
    opacity: 0.6;
  }
  .content-wrap {
    position: relative;
    padding: 100px 50px 50px 50px;
    //  font-family: "Lato", sans-serif;
    font-family: "Playfair Display", serif;
    // font-family: 'Zilla Slab', serif;
    height: 100%;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    // overflow-x: scroll;
    .content-fixed {
      position: relative;
      width: 100%;
      height: 100%;
      .content-text {
        position: absolute;
        padding-top: 50px;
        text-align: end;
        width: 700px;
        right: 0;
        line-height: 25px;
        height: 100%;
        max-width: 100%;
        .timeline-wrap {
          position: absolute;
          height: 100px;
          width: 100vw;
          bottom: 0px;
          right: -50px;

          .line {
            position: absolute;
            bottom: 100px;
            height: 1px;
            width: 100%;
            background: grey;
            // bottom: 100px;
            .point {
              position: absolute;
              height: 12px;
              width: 12px;
              background: #ffffff;
              border-radius: 50%;
              right: 40%;
              top: -5px;
              .point-title {
                margin: auto;
                position: relative;
                text-align: center;
                vertical-align: middle;
                top: 20px;
                background: #ffffff;
                height: auto;
                width: 250px;
                padding: 5px;
                border-radius: 5px;
              }
            }
          }
        }
      }
    }
  }
}

.slideforward-enter-active {
  animation: slide-in-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.slideforward-leave-active {
  animation: slide-out-left 0.7s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
.slideback-enter-active {
  animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.slideback-leave-active {
  animation: slide-out-right 0.7s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
</style>
