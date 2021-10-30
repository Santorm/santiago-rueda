<template>
  <div class="page-container">
    <div class="post-container">
      <div
        class="post-card-wrap"
        @mouseenter="mouseDark"
        @mouseleave="mouseLight"
      >
        <div class="post-card" >
          <div class="title">post.title</div>
          <div class="description" >DESC</div>
          <!-- <div class="description">{{post.description}}</div> -->
          <div class="medio">Publicado en:</div>
          <!-- <img class="medio-logo" v-if="post.medioIcon" :src="post.medioIcon"/> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Ensenanzas",
  data() {
    return {

    };
  },
  created() {
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
$base-color: #a4c5c6;
.page-container {
  cursor: none;
  width: 100%;
  height: 100%;
  background: $base-color;
  overflow: hidden;
  overflow-y: scroll;
}

.post-container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 150px 0 0;
  width: 85%;

  @media only screen and (max-width: 768px) {
    padding: 50px 0 0;
  }
  .post-card-wrap {
    box-sizing: border-box;
    margin: 20px auto;
    width: 100%;
    max-width: 900px;
    border: 1px solid #ffffff4d;
    border-radius: 4px;
    padding: 3%;
    background: #ffffff;
    &:hover {
      transform: scale(1.005);
      border: 1px solid #ffffff;
    }
  }
}
</style>