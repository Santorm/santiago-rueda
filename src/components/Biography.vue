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
                <p>{{step.text}}</p>
              </div>
              <div class="timeline-wrap">
                <div class="line">
                  <div class="point">
                    <div class="point-title">{{points[currentPoint].text}}</div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <!-- <div class="timeline-wrap">
        <div class="line">
          <div class="point">
            <div class="point-title">{{points[currentPoint].text}}</div>
          </div>
        </div>
      </div>-->
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
      currentPoint: 0,
      timelineStep: 0,
      forwardDireccion: true,
      stepsContent: [
        {
          step: 0,
          text: "Primer paso Me voy a a ver el pan, ya vengo"
        },
        {
          step: 1,
          text: "Segundo paso"
        },
        {
          step: 2,
          text: "Tercero paso"
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
    window.addEventListener("wheel", helpers.debounce(this.handleWheel, 500));
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
        }, 300);
      }
      if (!forward && this.timelineStep > 0) {
        this.forwardDireccion = false;
        setTimeout(() => {
          this.timelineStep--;
        }, 300);
      }

      console.log("this.stepsContent.length2222: ", this.stepsContent.length);
      console.log("this.timelineStep2222: ", this.timelineStep);
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

    background: url('../assets/santiago_rueda.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
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
        width: 100%;
        height: 100%;
        .timeline-wrap {
          position: absolute;
          height: 100px;
          width: 100%;
          bottom: 0px;

          .line {
            position: absolute;
            bottom: 100px;
            height: 1px;
            width: 100%;
            background: grey;
            // bottom: 100px;
            .point {
              position: relative;
              height: 12px;
              width: 12px;
              background: #ffffff;
              border-radius: 50%;
              left: 50%;
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
  animation: slide-out-left 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
.slideback-enter-active {
  animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.slideback-leave-active {
  animation: slide-out-right 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
</style>
