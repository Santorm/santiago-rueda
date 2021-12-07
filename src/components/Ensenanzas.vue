<template>
  <div class="page-container">
    <div class="post-container">
      <div
        class="post-card-wrap"
        @mouseenter="mouseDark"
        @mouseleave="mouseLight"
      >
        <div class="post-card" >
          La terapia es uno de los espacios privilegiados donde podemos aprender de nosotros mismos. Un espacio íntimo para quitarnos los velos de las certezas en las que nos enredamos, aprender a escucharnos para comprender cómo nuestras experiencias vitales han dado forma a nuestro mundo; para finalmente atravernos a tomar nuestras vidas como un proceso de transformación creativa.
          <br><br><br>
          De alguna u otra manera todos estamos buscándonos a nosotros mismos, tratando de resolver nuestros propósitos y deseos. He decidido llamar “acompañantes” a las personas con quienes cruzamos recorridos para hablar de nuestros paisajes internos, dibujar los mapas y afinar los sentidos y las emociones para orientarnos en esta búsqueda.
          <br><br><br>

          <b>He pedido a algunas de las personas que he acompañado en este recorrido que compartan una enseñanza vital. Me atrevo a sentir sus palabras como mias, ya que yo mismo me he visto tocado por cada uno de los procesos que se han ido hilando con cada encuentro.</b>
          <br><br>
          Agradezco a cada una, por permitirme ser parte de su camino y por haber llenado de aprendizajes y paisajes el mio.
        <br><br>
        <div class="note">Los siguientes testimonios han sido solicitados con total libertad y respeto en el formato y anonimato, bajo un consentimiento previo para su publicación. </div>
        </div>
      </div>

      <div
        class="post-card-wrap"
        @mouseenter="mouseDark"
        @mouseleave="mouseLight"
        v-for="ensenanza in ensenanzas" :key="ensenanza.firma"
      >
        <div class="post-card-left" >
          <span v-html="ensenanza.contenido"></span><br><br>
          <div class="firma">{{ensenanza.firma}}</div>
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
      ensenanzas: [
        {
          firma: 'A.K',
          contenido: `
        Te envío unas líneas, espero que sea lo que tenías pensado<br><br>
        Me ha servido para hacer un repaso de mi descubrimiento personal de estos años, gracias por la idea y por el acompañamiento, que por mi cuenta no hubiera estado en el mismo lugar que ahora =)<br><br>
        Un abrazo!<br><br><br>
        A mi yo de hace 5 años: <br><br>
        Ahora que llevas unos meses hablando de ti y no sabes muy bien que estás haciendo con esto y tampoco con la mayoría de las otras cosas de tu vida, todavía crees que tienes la culpa de lo que pasa a tu alrededor y sigues mayormente paralizada en la autocompasión y el victimismo; déjame decirte cómo lo veo ahora.<br>
        <br><br> 
        No tienes mucha idea de lo que significa la paciencia, busca de que va, sobre todo contigo.<br><br>
        Todavía no sabes como relajarte, te seguirá constando de aquí a un tiempo, pero cada tanto lo conseguirás, sigue practicando.<br><br>
        Cuando no sepas qué hacer, hazle caso a tu instinto, la mayoría de las veces las cosas saldrán mejor, y cuando no, te sentirás más en paz contigo. <br><br>
        
        Haces bien volviendo a leer y explorando nuevos gustos.<br><br>
        Vas bien por allí con el tema de caminar por el monte y correr, sigue.<br><br>
        Sigue trabajando, pero concéntrate más en las cosas que quieres hacer y no en lo que otros quieren que hagas... no te preocupes si no sabes de que te estoy hablando, todavía lo estarás descubriendo en unos años. <br><br>
        No está mal darte un gusto de vez en cuando. Tampoco arreglarte. Tampoco decir que no. Tampoco destacar. Esto también seguirá costando, pero ahora lo has escuchado por primera vez. <br><br>
        Has comenzado a conocer a gente extraordinaria, aun no lo sabes, pero les caes bien porque te muestras como eres, no con tu muralla habitual y eso hará que las cosas salgan bien en el futuro. <br><br>
        Más no es mejor. <br><br>
        Lo siento por haberte expuesto a cosas innecesarias, que hayas tenido que tolerar a personas con mal fondo, que te hayas hecho daño, que no sea tu habilidad natural leer entrelíneas. Pero será parte del proceso necesario para que en el futuro vivas una vida más plena, eres un poco terca, y sé que con esta carta no te hubiera bastado para aprender a vivir un poco mejor. <br><br>
        Y por último, no dejes de ponerte las cremitas,  lo agradecerás.`
        },
        {
          firma: 'Grace',
          contenido: `
          Ahí va un pequeño texto de una experiencia transformadora.<br><br>
Hace ocho años, cuando decidí mudarme a otro país, empezó un periodo que transformó mi vida. Descentrarme de mi realidad y, de alguna forma, poner una distancia obligatoria con situaciones que me estaban consumiendo, fue una decisión que me salvó de muchas formas. No todos los nuevos comienzos son tan dramáticos, pero en mi caso no solo implicó un paso hacia la superación personal sino toda una confrontación interna, pesada y dolorosa, entre la capacidad de desapego de mi propia cárcel, que en ese momento estaba condensada en una relación tóxica, y la posibilidad de sacar de mis maletas prejuicios, falsas certezas, determinaciones culturales, poses, antipatías y miedos.<br><br>
Esa es una lucha que todavía se libra en mi persona, pero dar el paso y salir, aunque sea por la ventana, me abrió el camino a tantas posibilidades y experiencias que hicieron crecer el tamaño del mundo. Ahora estoy intentando abrirme también a ese mundo, llevarlo conmigo a mi país, reencontrarme con experiencias que –desde adentro- han sido imposibles de lidiar para mí. Estos años, apenas ocho, me demuestran que solo con darle ciertas señales de movimiento al universo a veces es suficiente para que las puertas se abran y la luz entre en la casa.
          `
        }

      ]

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
      border: 1px solid #ffffff;
    }
    .post-card, .post-card-left {
      line-height: 20px;
      .note {
        font-size: 10px;
      }
    }

    .post-card-left {
      text-align: justify;
      .firma {
        font-style: italic;
        text-align: end;
      }
    }
  }
}
</style>