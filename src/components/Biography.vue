<template>
  <div class="bio-wrap">
    <div class="photo"></div>
    <div class="content-wrap">
      <div class="content-fixed">
        <div v-for="step in stepsContent" :key="step.step">
          <transition :name="forwardDireccion ? 'slideforward' :'slideback'">
            <div class="content-text" v-if="step.step === timelineStep">
              <!-- :class="[step.step === timelineStep ? 'slide-out-left-1': 'slide-in-right-1']" -->
              <div class="content-text-container">
                <p v-html="step.text"></p>
                <div v-if="step.step === (stepsContent.length - 1) && false" class="cv-wrap">
                  <div
                    class="cv-items"
                    :style="{background: getRandPaleteColor}"
                    v-for="item in cvItems"
                    :key="item.id"
                  ></div>
                </div>
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
      timelineStep: 0, //3,
      forwardDireccion: true,
      palete: [
        {
          id: 0,
          color: "#d8cdb5"
        },
        {
          id: 1,
          color: "#d4ebd0"
        },
        {
          id: 2,
          color: "#a4c5c6"
        },
        {
          id: 3,
          color: "#ffeb99"
        }
      ],
      stepsContent: [
        {
          step: 0,
          hito: "de donde vengo...",
          text:
            "<p>Mi historia empieza en un lugar que divide en dos al planeta, un centro y a la vez una periferia. Ecuador, un pequeño país, de grandes contrastes, diverso en sus bellezas y realidades. Ahora vivo en Barcelona, mi hogar desde hace ya varios años, donde he podido crecer y re-inventarme tanto en lo personal, como profesionalmente.</p> "
        },
        {
          step: 1,
          hito: "¿Por qué psicología?",
          text:
            "<p>Mi elección profesional empezó como una búsqueda personal que me llevó a estudiar la carrera de Psicología Clínica. Durante mi formación, tuve la suerte de encontrarme con la filosofía y el psicoanálisis. De esta etapa me llevo sobre todo la riqueza de los encuentros y las conversaciones fuera de las aulas donde la teoría se cruzaba con la vida.</p>"
        },
        {
          step: 2,
          hito: "Barcelona",
          text:
            "<p>La experiencia de venir a Barcelona me permitió ir rompiendo una burbuja que no me había dado cuenta que existía. El poner a prueba mis propios esquemas me ayudó a tomar una nueva posición como terapeuta, y descubrir también nuevas pasiones como la innovación social y el uso de la tecnología para intentar resolver retos sociales de forma colaborativa.<p/>"
        }
        /*,
        {
          step: 3,
          hito: "por donde he pasado...",
          text: ""
        }*/
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
      ],
      cvItems: [
        {
          id: 0,
          Text: "Cuadro "
        },
        {
          id: 1,
          Text: "Cuadro "
        },
        {
          id: 2,
          Text: "Cuadro "
        },
        {
          id: 3,
          Text: "Cuadro "
        },
        {
          id: 4,
          Text: "Cuadro "
        },
        {
          id: 5,
          Text: "Cuadro "
        },
        {
          id: 6,
          Text: "Cuadro "
        },
        {
          id: 7,
          Text: "Cuadro "
        },
        {
          id: 8,
          Text: "Cuadro "
        },
        {
          id: 9,
          Text: "Cuadro "
        },
        {
          id: 10,
          Text: "Cuadro "
        },
        {
          id: 11,
          Text: "Cuadro "
        }
      ]
    };
  },
  mounted() {
    /*
    document
      .querySelector(".content-wrap")
      .addEventListener("scroll", this.handleScroll);
      */
    window.addEventListener("wheel", helpers.debounce(this.handleWheel, 300));
  },
  destroyed() {
    /*
    document
      .querySelector(".content-wrap")
      .removeEventListener("scroll", this.handleScroll);
      */
    window.removeEventListener("wheel", this.handleWheel);
    // window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    getRandPaleteColor() {
      //return setInterval(() => {
      let max = this.palete.length;
      let min = 0;
      let random = Math.floor(Math.random() * (max - min + 1) + min);
      return this.palete[random].color;
      // }, 1000);
    }
  },
  methods: {
    isStepVisible(step) {
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
      return step === this.timelineStep;
    },
    /*
    handleScroll(event) {
      console.log("handleScroll: ", event);
    },
    */
    handleWheel(event) {
      let forward = event.deltaY > 0;
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
    @media only screen and (max-width: 768px) {
      background-size: cover;
      height: calc(100% - 100px);
      background-position-x: center;
      opacity: 0.3;
    }
  }
  .content-wrap {
    position: relative;
    padding: 100px 50px 50px 50px;
    // font-family: "Lato", sans-serif;
    font-family: "Playfair Display", serif;
    // font-family: 'Zilla Slab', serif;
    height: 100%;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    // overflow-x: scroll;
    @media only screen and (max-width: 768px) {
      padding: 100px 3% 50px 3%;
    }
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
        &-container {
          position: relative;
          height: calc(100% - 100px);
          font-family: "Lato", sans-serif;
          font-weight: 300;
          font-size: 20px;
          @media only screen and (max-width: 768px) {
            font-size: 16px;
            line-height: 18px;
          }
        }
        .timeline-wrap {
          position: absolute;
          height: 100px;
          width: 100vw;
          bottom: 0px;
          right: -50px;
          @media only screen and (max-width: 768px) {
            right: -3%;
          }

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

              @media only screen and (max-width: 768px) {
                right: 270px;
              }
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

        .cv-wrap {
          display: flex;
          width: 100%;
          height: 100%;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: stretch;
          padding-bottom: 50px;
          box-sizing: border-box;

          .cv-items {
            box-sizing: border-box;
            width: calc(25% - 4px);
            height: auto;
            padding: 5px;
            margin: 2px;
            // background: #ffffff;
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
