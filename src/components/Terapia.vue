<template>
  <div class="page-container">
    <div class="content-wrap">
      <p class="title">Espacio terapéutico para el des-cubrimiento de uno mismo</p>
      <p>Este es un espacio terapéutico en el que te acompaño y oriento a lo largo de un proceso creativo de observación, descubrimiento y diseño de tus propósitos.</p>

      <p><b>Mi orientación terapéutica se alimenta de mi propio caminar profesional y personal, atravezado por diversas y cambiantes dimensiones.</b> Unas académicas como el psicoanálisis lacaniano, la psicología, las teorías del pensamiento crítico, el análisis narrativo y los procesos creativos; pero en gran parte el color de mi propuesta terapéutica se ve matizada por mis vivencias personales, mi búsqueda espiritual y de sentido, mi práctica de la meditación, y sobre todo de los encuentros que he tenido con las personas y lugares que han marcado mi vida. Sin olvidar por supuesto las piedras con las que sigo tropezado una y otra vez en el camino. </p>
      <p>Trabajo con las personas, sus historias y deseos únicos e irrepetibles; lo que hace que el proceso terapéutico que te propongo este ‘hecho a medida’, diferenciándose de un tratamiento psicopatológico o de diagnóstico.</p>

      <p>Estoy convencido que nuestra condición humana es principalmente creadora, lo que significa que siempre es posible añadir un nuevo elemento a la serie de nuestra vida para lograr el cambio que buscamos. Este cambio requiere el coraje de encontrarse con uno mismo. Para logralo te propongo un proceso de creación disruptiva, en el que puedas alinear tus propósitos con tu modo único de estar en el mundo.</p>

      <div @click="goToWhastsApp" class="text-focus-in-1 entra-btn">Empecemos...</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToWhastsApp() {
      const url ="https://api.whatsapp.com/send?phone=[-34][657649342]"
      window.open(url, '_blank');
    }
  },
};
</script>

<style lang="scss" scoped>
.g-cursor__circle {
  border-color: lightslategray !important;
}
.g-cursor__point {
  background: lightsteelblue !important;
}
.page-container {
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding: 2%;
  cursor: none;
  box-sizing: border-box;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#effaff),
    to(#d9e7ff)
  );
  background: linear-gradient(90deg, #effaff 0%, #d9e7ff 100%);

  .content-wrap {
    margin: 0 auto;
    width: 80%;
    padding-top: 150px;
    text-align: justify;

    @media only screen and (max-width: 768px) {
      padding-top: 50px;
      width: 100%;
    }
    .title {
      font-size: calc(1em + 1.3vw);
      margin-bottom: 50px;
      text-align: center;
    }
    p {
      font-size: calc(1em + 0.5vw);
      margin-bottom: 25px;
      font-weight: 300;
      line-height: 30px;
    }
  }
}

.entra-btn {
    user-select: none;
    border-bottom: 3px solid #ffeb99;
    margin: 60px auto;
    width: 125px;
    font-family: "Lato", sans-serif;
    font-size: 19px;
    border: 2px solid #ffeb99;
    padding: 3px 20px;
    text-align: center;
    height: 22px;
    &:hover {
      // border: 2px solid #2c3e50;
      background: #ffeb99;
      color: grey;
    }
  }
</style>