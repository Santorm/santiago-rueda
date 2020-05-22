<template>
  <div class="page-container">
    <div class="post-container">
      <div
        class="post-card-wrap"
        v-for="post in this.publishedPost"
        :key="post.guid"
        @mouseenter="mouseDark"
        @mouseleave="mouseLight"
      >
        <div class="post-card" @click="goTo(post.link)">
          <div class="title">{{post.title}}</div>
          <div class="description" v-html="post.description"></div>
          <!-- <div class="description">{{post.description}}</div> -->
          <div class="medio" v-if="post.medio">Publicado en: {{post.medio}}</div>
          <!-- <img class="medio-logo" v-if="post.medioIcon" :src="post.medioIcon"/> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// import {xml2json} from "../helpers/xml2json"
export default {
  name: "articles",
  data() {
    return {
      publishedPost: {},
      posts: {},
      postxmltojson: {}
    };
  },
  created() {
    axios.get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@santo.rueda"
      )
      .then(response => {
        console.log("response: ", response.data);
        this.posts = response.data;
        this.getOtherfeeds();
      });
  },
  methods: {
    goTo(url) {
      window.open(url, "_blank");
    },
    getOtherfeeds() {
      this.posts.items.forEach(post => {
        post.medio = null;
      });

      //disabled guid Medium
      let guidDisabled = ["https://medium.com/p/1b0f9ae7ede"];
      this.publishedPost = this.posts.items.filter(post => {
        if (post.guid) {
          return guidDisabled.indexOf(post.guid) === -1;
        }
      });

      this.publishedPost.push({
        published: true,
        title: "Naturaleza, realidad y sujeto: ¿hacia un paradigma post-covid?",
        description:
          "Las narrativas del Covid aceleran la transformación de las dimensiones de la “realidad” y lo “natural”. Cuáles podrían ser sus efectos en el escenario de las proyecciones futuras que desafían lo que entendemos por “lo humano” y las condiciones de posibilidad del sujeto.",
        link:
          "https://diecisiete.org/expediente/naturaleza-realidad-y-sujeto-hacia-un-paradigma-post-covid/",
        medio: "17, Instituto de Estudios Criticos",
        medioIcon: "../../assets/articles/17logo.png"
        // santiago-rueda\src\components\Articles.vue
        // santiago-rueda\src\assets\articles\17logo.svg
      });
    }
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
    .post-card {
      cursor: pointer;
      .title {
        font-family: "Playfair", serif;
        font-size: 30px;
        color: #2c3e50;
      }
      .description {
        margin: 20px 0 0;
        position: relative;
        height: 4em;
        overflow: hidden;
        /* padding: 30px; */
        font-size: 18px;
        line-height: 1.4em;
        width: 100%;
        text-align: start;
        &:after {
          content: "";
          text-align: right;
          position: absolute;
          bottom: 0;
          right: 0;
          width: 70%;
          height: 1.2em;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0),
            #ffffff 50%
          );
        }
      }
      .medio {
        margin-top: 24px;
        text-align: start;
        font-size: 13px;
      }
      .medio-logo {
        height: 63px;
        width: 58px;
        display: inline-block;
      }
    }
  }
}
</style>