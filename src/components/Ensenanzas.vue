<template>
  <div class="page-container">
 
    <div class="post-container">
      <div class="title">Enseñanzas y testimonios</div>
      <div
        class="post-card-wrap"
        @mouseenter="mouseDark"
        @mouseleave="mouseLight"
      >
        <div class="post-card" >
          
          La terapia es un espacio donde descubrirnos y aprender de nosotros mismos. Un espacio íntimo para quitarnos los velos de las certezas en las que nos enredamos, aprender a escucharnos para comprender cómo nuestras experiencias vitales han dado forma a nuestro mundo; para finalmente atravernos a tomar nuestras vidas como un proceso de transformación creativa.
          <br><br><br>
          
          <!--De alguna u otra manera todos estamos buscándonos a nosotros mismos, tratando de dar sentido a nuestro dolor para descubrir nuestros propósitos y deseos. -->
           He decidido llamar “acompañantes” a las personas con quienes recorro sus paisajes internos, para dibujar los mapas y afinar los sentidos y las emociones que orienten su búsqueda.
          <br><br><br>

          <b>He pedido a algunas de las personas que he acompañado en este recorrido que compartan una enseñanza vital. Me atrevo a sentir sus palabras como mias, ya que yo mismo me he visto tocado por cada uno de los procesos que se han ido hilando con cada encuentro.</b>
          <br><br>
          Agradezco por permitirme ser parte de su camino y por haber llenado de aprendizajes el mio.
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
        <i>Te envío unas líneas, espero que sea lo que tenías pensado<br><br>
        Me ha servido para hacer un repaso de mi descubrimiento personal de estos años, gracias por la idea y por el acompañamiento, que por mi cuenta no hubiera estado en el mismo lugar que ahora =)<br><br>
        Un abrazo!<br><br><br></i>
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
          <i>Ahí va un pequeño texto de una experiencia transformadora.<br><br></i>
          Hace ocho años, cuando decidí mudarme a otro país, empezó un periodo que transformó mi vida. Descentrarme de mi realidad y, de alguna forma, poner una distancia obligatoria con situaciones que me estaban consumiendo, fue una decisión que me salvó de muchas formas. No todos los nuevos comienzos son tan dramáticos, pero en mi caso no solo implicó un paso hacia la superación personal sino toda una confrontación interna, pesada y dolorosa, entre la capacidad de desapego de mi propia cárcel, que en ese momento estaba condensada en una relación tóxica, y la posibilidad de sacar de mis maletas prejuicios, falsas certezas, determinaciones culturales, poses, antipatías y miedos.<br><br>
          Esa es una lucha que todavía se libra en mi persona, pero dar el paso y salir, aunque sea por la ventana, me abrió el camino a tantas posibilidades y experiencias que hicieron crecer el tamaño del mundo. Ahora estoy intentando abrirme también a ese mundo, llevarlo conmigo a mi país, reencontrarme con experiencias que –desde adentro- han sido imposibles de lidiar para mí. Estos años, apenas ocho, me demuestran que solo con darle ciertas señales de movimiento al universo a veces es suficiente para que las puertas se abran y la luz entre en la casa.
          `
        },
        {
          firma: 'Nicolás',
          contenido: `
          Me enfoco en controlar lo que PUEDO controlar. La actitud o comportamiento que tengo depende de CÓMO respondo ante las situaciones presentadas en el día, en la semana, en el mes. Lo que tiene que pasar, tendrá que pasar; bueno o malo. Si, me pueden pasar cosas feas, incomprensibles, difíciles; pero cómo respondo ante ellas es lo importante y lo que dicta mi día.<br><br>
          No siempre pasa, pero me gusta pensar que todo debe tener un lado positivo, puede que no vea ahorita, pero puede ser que si en el futuro.
          `
        },
        {
          firma: 'Javier',
          contenido: `
          <i>Carta a sí mismo:</i> <br><br>
          Hola Javier <br><br>
          Estoy muy contento de la evolución que has tenido sobre todo de cómo has llevado la situación. <br><br>
          Creo que no ha sido fácil manejar varios aspectos que afectaron tu personalidad, en la que dependiendo las circunstancias obligaron a que tomes responsabilidades a muy temprana edad afectando tu forma de ser al actuar con un comportamiento diferente al que solías; el ver las cosas con otro punto de vista. <br><br>
          Me pareció muy saludable el perdonar a nuestro papá y entender que pudo tener diferentes razones por las cuales actuó y no estuvo presente en nuestra infancia. <br><br>
          No fue fácil asumir roles de hijo, padre, hermano, esposo y niño a la vez para poder diferenciar y entender en cada momento aspectos de otros integrantes en su manera de ver y entender cada situación. <br><br>
          Me siento orgulloso de sentir ese cambio en ti y que se refleja en mi ahora; pues ahora, puedo sentir la tranquilidad de no tener esa presión e inseguridad y disfruto cada momento en diferentes circunstancias. <br><br>
          Trato de aprovechar el tiempo con la familia, el tener una buena conversación y sobre todo estoy buscando aprovechar el darme tiempo para mi haciendo lo que me gusta.  <br><br>
          `
        },
        {
          firma: 'Anónimo',
          contenido: `
          Pasar fuera de tu zona de confort, sin tu familia y amigos hizo que mi mundo en cierta parte cambiara. La ansiedad ocupó gran parte de mi tiempo que cuando veo atrás pienso que fue un tiempo perdido pero cuando la analizo más a detalle pienso que fue uno de los más grandes aprendizajes que he tenido.<br><br>
          Siento que puedo controlarla hasta cierto punto y decidir cuando dejarla entrar y cuando no. Todo esto ha  permitido que mi vida pueda tener mucha paz y felicidad. Hoy en día me encuentro disfrutando al máximo de mi  trabajo, hobbies, amigos, esposa, familia. 
          En ciertos puntos de mi vida pensé que nunca iba a pasar y que iba a tener una vida llena de miedo y angustia pero gracias a mi fe, a la terapia, y a factores que aún desconozco he logrado superarlo.
          `
        }

      ]

    };
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

.title {
  font-size: calc(1em + 1.3vw);
  margin-bottom: 30px;
  text-align: center;
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