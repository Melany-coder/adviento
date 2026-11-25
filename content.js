/* ============================================================
   ✏️  AQUÍ EDITAS TODO EL CONTENIDO DEL CALENDARIO
   Tipos de día: carta, cartaimg, poema, foto, audio, video,
   cancion (una o varias), playlist, parejas, vale, juego, final.
   Los textos marcados con ✏️ son de relleno: cámbialos por los tuyos.
   ============================================================ */

/* Parejas de personajes (se usan en los días 8, 13 y 15) */
const PAREJAS = [
  { a: "Odiseo",         b: "Penélope",        serie: "EPIC: The Musical", nota: "Ni en más de 20 años perdería mi amor por ti." },
  { a: "Pauline",        b: "Waluigi",         serie: "Universo Mario", nota: "Explosiones, locura y bananas: ¡qué pareja tan cómica!" },
  { a: "Flora",          b: "Helia",           serie: "Winx Club", nota: "Te protegería con mi vida con tal de que estés bien." },
  { a: "Rubí",           b: "Zafiro",          serie: "Steven Universe", nota: "5,750 años y 8 meses a tu lado me parecen poquito, teniendo en cuenta lo mucho que te amo." },
  { a: "Marceline",      b: "Dulce Princesa",  serie: "Hora de aventura", nota: "Un amor que se puede separar, pero se construye con más intensidad." },
  { a: "Amity",          b: "Luz",             serie: "La casa búho", nota: "Mi Tabatita, la que me puede dejar sin paciencia, pero a la que tanto amo." },
  { a: "Adora",          b: "Catra",           serie: "She-Ra y las princesas del poder", nota: "Yo sé que peleamos, pero qué rico cuando chingamos." },
  { a: "Rangi",          b: "Kyoshi",          serie: "Avatar: las novelas de Kyoshi", nota: "Sé que a veces soy impulsivo y te preocupo. Soy un tonto, pero un tonto enamorado." },
  { a: "Korra",          b: "Asami",           serie: "La leyenda de Korra", nota: "Tú eres fuego, yo soy hielo: vamos a ver quién se quema primero." },
  { a: "Supergirl",      b: "Lena",            serie: "Supergirl", nota: "Soy capaz de dártelo todo: una empresa, mil ramos de flores, hasta el sol. Todo, solo por ti." },
  { a: "Saitama",        b: "Fubuki",          serie: "One Punch Man", nota: "Soy tonto, no capto las indirectas, pero ¿cómo imaginar que alguien tan perfecta se fijaría en mí?" },
  { a: "Akaza",          b: "Koyuki",          serie: "Demon Slayer", nota: "Por ti soy capaz de derrotar a más de cien hombres y de enloquecer por completo, porque tú eres mi cordura." },
  { a: "Reze",           b: "Denji",           serie: "Chainsaw Man", nota: "Podrán haber tantas mujeres en el mundo, pero mi única luz eres tú, la que me saca de la oscuridad en la que se puede volver mi mente." },
  { a: "Chico Bestia",   b: "Raven",           serie: "Jóvenes Titanes", nota: "Un tonto soy, puedo convertirme en cualquier cosa, pero lo que más quiero es ser la mejor versión de mí mismo para ti." },
  { a: "Nightwing",      b: "Starfire",        serie: "Jóvenes Titanes", nota: "El mejor superpoder que puedo llegar a tener es la posibilidad de conquistar tu corazón para toda la vida." },
  { a: "Batman",         b: "Catwoman",        serie: "Batman", nota: "Podremos ser de mundos distintos, pero tus encantos me envuelven y es imposible no caer en esa tentación peligrosa." }
];

window.CONFIG = {
  para: "Mon Cherie",
  de: "Melany",
  anio: 2026,
  titulo: "Nuestro calendario de adviento",
  subtitulo: "25 días, 25 pedacitos de nosotras",
  antes: "Todavía no empieza, pero algo bonito viene en camino…",

  dias: [
    /* ---------- 1 ---------- */
    { n: 1, tipo: "carta", icono: "💌", titulo: "Para empezar",
      texto: [
        "Mon Cherie, hoy empieza algo que preparé con muchísimo cariño solo para ti.",
        "Cada día de diciembre vas a encontrar una sorpresa: canciones, mi voz, fotos, cartas, poemas, juegos y cosas que nos representan.",
        "Ábrela solo una por día, sin hacer trampa (yo me daré cuenta 👀).",
        "Gracias por ser mi mejor regalo de este año."
      ], firma: "Con todo mi amor" },                                   // ✏️

    /* ---------- 2 ---------- */
    { n: 2, tipo: "foto", icono: "📸", titulo: "Nosotras",
      fotos: [
        { src: "media/fotos/selfie1.jpg" },     
        { src: "media/fotos/selfie2.jpg" }
      ],
      texto: "Mírennos. No sé cómo hago para enamorarme más cada vez que te veo." },

    /* ---------- 3 ---------- */
    { n: 3, tipo: "cancion", icono: "🎶", titulo: "Una pregunta bonita",
      cancion: "Would You Fall in Love with Me Again?", artista: "EPIC: The Musical", spotify: "3n6EpwMvMKRXEuYz4YUVRV",
      porque: "Odiseo y Penélope se hacen la pregunta más tierna del mundo. Mi respuesta es sí: me volvería a enamorar de ti cada día." },  // ✏️

    /* ---------- 4 ---------- */
    { n: 4, tipo: "audio", icono: "🎧", titulo: "Lo que siento por ti",
      src: "media/audios/audio-a.mp3",
      texto: "Ponte audífonos, busca un lugar tranquilo y dale play. Es solo para ti." },

    /* ---------- 5 ---------- */
    { n: 5, tipo: "juego", juego: "memoria", icono: "🃏", titulo: "Memoria de nosotras",
      pares: [
        "media/fotos/mini/selfie1.jpg", "media/fotos/mini/selfie2.jpg",
        "media/fotos/mini/selfie3.jpg", "media/fotos/mini/selfie4.jpg",
        "media/fotos/mini/pose1.jpg",   "media/fotos/mini/pose2.jpg",
        "media/fotos/mini/manos.jpg",   "media/fotos/mini/risa1.jpg"
      ],
      premio: "Ganaste, mil veces para ti. Pero hey, si me lo das, hay garantía para que me los devuelvas." },

    /* ---------- 6 ---------- */
    { n: 6, tipo: "poema", icono: "🎻", titulo: "En clave de ti",
      versos: "Las claves son idiomas musicales distintos:\ntú lees en Do y yo en Sol.\nQuizás la diferencia no sea igual,\npero dicen que los lenguajes universales\nson la música y el amor,\ny esos dos nos unen de manera especial.\n\nEn cada nota del pentagrama suena una melodía,\npero siento que ninguna se compara\ncon lo melodiosa que es tu risa.\nMe enredas con la música de tu dulce voz;\nen cada palabra linda que me dices\neres especial, como una nota afinada,\neres perfecta.\n\nTu tocar me envuelve,\ntu mirada me hace perder,\ny lo único que quiero\nes adorarte con tonadas,\ncomo si de una diosa se tratara.",
      autor: "Para ti, Mon Cherie" },

    /* ---------- 7 ---------- */
    { n: 7, tipo: "cancion", icono: "🎭", titulo: "Musicales y cuentos que nos hablan",
      texto: "Canciones de teatro musical y de cuentos que siento muy nuestras:",
      lista: [
        { cancion: "Helpless", artista: "Hamilton", spotify: "54Sc7mZQ1RM03STpk4SfaA",
          porque: "Igual de perdida de amor que Eliza la vez que vio a Hamilton me siento por ti, primor." },    // ✏️
        { cancion: "Our Love Is God", artista: "Heathers: The Musical", spotify: "7yxJmjusZamXwg4mZdnHxa",
          porque: "JD estaba loco, tanto como para explotar su instituto con su manifiesto de la sociedad, pero en cuanto se trataba de Veronica no había debilidad más grande que ella. Lo mismo eres para mí, mi vida." },       // ✏️
        { cancion: "Te amo y más", artista: "El Libro de la Vida", spotify: "5I0aHj2JSQpoxSQnh3XcjO",
          porque: "Te amo y más. Así de simple." },                               // ✏️
        { cancion: "Ma Belle Evangeline", artista: "La princesa y el sapo", spotify: "4i5L7KbZZ9ygJrZFNlc4hI",
          porque: "Mirar una estrella y pensar en ti." }                          // ✏️
      ] },

    /* ---------- 8 ---------- */
    { n: 8, tipo: "parejas", icono: "💞", titulo: "Parejas que nos recuerdan a nosotras",
      texto: "Estas historias de amor se parecen a la nuestra. Hay más, pero estas son las primeras:",
      parejas: PAREJAS.slice(0, 8) },

    /* ---------- 9 ---------- */
    { n: 9, tipo: "audio", icono: "🎙️", titulo: "Lo que siento por ti, parte 2",
      src: "media/audios/audio-c.mp3",
      texto: "Otro audio, también solo para ti." },

    /* ---------- 10 ---------- */
    { n: 10, tipo: "juego", juego: "quiz", icono: "❓", titulo: "¿Cuánto sabes de nosotras?",
      // "ok" = posición de la correcta (0 = la primera)
      preguntas: [
        { p: "¿Dónde nos conocimos?", o: ["En un concierto", "Por internet", "En la orquesta", "En el colegio"], ok: 2 },
        { p: "¿Qué día sentí una chispa por ti por primera vez?", o: ["El 14 de febrero", "El 7 de junio, el día de tus XV años", "El 31 de octubre", "El 24 de diciembre"], ok: 1 },
        { p: "¿Qué colores nos identifican?", o: ["Rojo y negro", "Verde y amarillo", "Azul y morado", "Rosa y blanco"], ok: 2 },
        { p: "¿Cuál es nuestro antojo favorito?", o: ["Churros", "Stroopwafles", "Brownies", "Macarons"], ok: 1 },
        { p: "¿Qué nos encanta hacer juntas?", o: ["Escuchar musicales", "Salir a correr", "Cocinar", "Jugar videojuegos"], ok: 0 },
        { p: "¿Cuál de estas parejas de la historia es de nuestras favoritas?", o: ["Romeo y Julieta", "Cleopatra y Marco Antonio", "El rey Arturo y Ginebra", "Napoleón y Josefina"], ok: 3 },
        { p: "¿Qué ciudad vio cómo renovamos nuestro amor y nos dimos cuenta de lo fuerte que era?", o: ["Roma", "Praga", "Viena", "París"], ok: 1 },
        { p: "¿Qué flores nos gustan?", o: ["Rosas y tulipanes", "Orquídeas y lirios", "Jazmines y girasoles", "Margaritas y claveles"], ok: 2 },
        { p: "¿Qué animales nos encantan?", o: ["Hámsters y pericos", "Conejos, gatos y perros", "Caballos y vacas", "Tortugas y peces"], ok: 1 },
        { p: "¿Cuál es mi equipo de béisbol favorito?", o: ["Yankees", "Red Sox", "Cubs", "Dodgers"], ok: 3 },
        { p: "¿Cuáles son mis equipos de fútbol favoritos?", o: ["Atlético Nacional y Barcelona", "Millonarios y Real Madrid", "América de Cali y Bayern", "Junior y Manchester City"], ok: 0 }
      ],
      premio: "Sea cual sea tu puntaje, ya ganaste: me tienes a mí." },

    /* ---------- 11 ---------- */
    { n: 11, tipo: "foto", icono: "🏰", titulo: "Praga",
      fotos: [
        { src: "media/fotos/praga1.jpg" },
        { src: "media/fotos/praga2.jpg" },
        { src: "media/fotos/praga3.jpg" },
        { src: "media/fotos/praga4.jpg" }
      ],
      texto: [
        "Praga vio cómo renovamos nuestro amor y nos dimos cuenta de lo fuerte que era el sentimiento para dejarnos ir.",
        "Y en la iglesia del Divino Niño le rezamos por nuestro futuro."
      ] },

    /* ---------- 12 ---------- */
    { n: 12, tipo: "playlist", icono: "💿", titulo: "Nosotros",
      playlist: "0tjSwefEl3vsVplL1H3egk",
      texto: "Año 1 de relación: “Nosotros”. Así empezamos a formar nuestra pareja." },

    /* ---------- 13 ---------- */
    { n: 13, tipo: "juego", juego: "parejas", icono: "💘", titulo: "¿Quién va con quién?",
      parejas: PAREJAS, rondas: 6,
      texto: "Une a cada personaje con su pareja. Cada vez que juegues salen otras.",
      premio: "¡Todas las parejas juntas! Ninguna como nosotras, claro." },

    /* ---------- 14 ---------- */
    { n: 14, tipo: "cartaimg", icono: "✉️", titulo: "Una carta para ti",
      imagen: "media/cartas/carta-2023.jpg",
      intro: "Esto lo escribí pensando en ti." },                            // ✏️

    /* ---------- 15 ---------- */
    { n: 15, tipo: "parejas", icono: "💞", titulo: "Más parejas",
      texto: "Y las que faltaban:",
      parejas: PAREJAS.slice(8) },

    /* ---------- 16 ---------- */
    { n: 16, tipo: "poema", icono: "🌙", titulo: "Otros universos",
      versos: "Hay historias donde dos se buscan\nentre guerras, cielos y universos,\ny siempre terminan encontrándose\nporque a algo así no se le puede escapar.\n\nYo no tuve que cruzar ningún portal.\nTe encontré en un día cualquiera\ny sin darme cuenta\nmi mundo se acomodó alrededor de ti.\n\nSi hay otros universos, que sean felices.\nEn este, el único que conozco,\nyo te elijo, Mon Cherie,\nhoy, mañana\ny en cada Navidad que venga.",
      autor: "Para ti, Mon Cherie" },

    /* ---------- 17 ---------- */
    { n: 17, tipo: "juego", juego: "clave", icono: "🎼", titulo: "Reto musical: clave de sol",
      rondas: 6,
      premio: "¡Qué oído y qué ojo! Seguimos aprendiendo juntas, nota por nota." },

    /* ---------- 18 ---------- */
    { n: 18, tipo: "audio", icono: "🎙️", titulo: "Lo que siento por ti, parte 3",
      src: "media/audios/audio-b.mp3",
      texto: "Otro audio solo para ti. Ponte cómoda." },

    /* ---------- 19 ---------- */
    { n: 19, tipo: "foto", icono: "😂", titulo: "Nosotras, tal cual",
      fotos: [
        { src: "media/fotos/manos.jpg" },
        { src: "media/fotos/selfie3.jpg" },
        { src: "media/fotos/risa1.jpg" },
        { src: "media/fotos/risa2.jpg" }
      ],
      texto: "Mi sonido favorito del mundo es tu risa." },

    /* ---------- 20 ---------- */
    { n: 20, tipo: "cancion", icono: "🎧", titulo: "Más canciones nuestras",
      lista: [
        { cancion: "Eres", artista: "Café Tacvba", spotify: "6kdCN6gTWLcLxmLXoUcwuI",
          porque: "Eres mi salvación, mi esperanza y mi fe." },                   // ✏️
        { cancion: "Love", artista: "Zoé", spotify: "5tyznRXlcIx0XlQ7S8iCMW",
          porque: "Atrapado en el mejor planeta que son tus brazos y tu corazón." },                     // ✏️
        { cancion: "Case 143", artista: "Stray Kids", spotify: "3O8G8eVrhfXTGttyQ1xVuq",
          porque: "No puedo explicar esta reacción enloquecida." },                  // ✏️
        { cancion: "I Wanna Be Yours", artista: "Arctic Monkeys", spotify: "5XeFesFbtLpXzIVDNQP22n",
          porque: "Yo también quiero pertenecerte, y que tú me pertenezcas." }                 // ✏️
      ] },

    /* ---------- 21 ---------- */
    { n: 21, tipo: "playlist", icono: "💿", titulo: "Acto dulce",
      playlist: "3oPgkMwKUfoIjClUai4ynT",
      texto: "Año 2: más amor, más pasión, como si de un campo de flores se tratara. Un acto dulce." },

    /* ---------- 22 ---------- */
    { n: 22, tipo: "vale", icono: "🎟️", titulo: "Vales para canjear",
      vales: [
        "Vale por una tarde de musicales con stroopwafles",
        "Vale por una playlist nueva hecha solo para ti",
        "Vale por una carta escrita a mano"
      ],
      texto: "Pídemelos cuando quieras. No vencen." },                    // ✏️

    /* ---------- 23 ---------- */
    { n: 23, tipo: "video", icono: "🎬", titulo: "Un momento",
      src: "media/video/video01.mp4",
      texto: "Tu mano junto a la mía, tú en mi regazo, tus labios encima de los míos, nuestros corazones latiendo al unísono. Tu amor en mí y el mío en ti." },                  // ✏️

    /* ---------- 24 ---------- */
    { n: 24, tipo: "cartaimg", icono: "🌟", titulo: "Nochebuena",
      imagen: "media/cartas/carta-mon-cherie.jpg",
      figura: "media/fotos/divino-nino.jpg",
      intro: "En Praga le pedimos al Divino Niño por nuestro futuro. Esta noche, con las luces encendidas, se lo vuelvo a pedir, y esto va para ti." },   // ✏️

    /* ---------- 25 ---------- */
    { n: 25, tipo: "final", icono: "🎄", titulo: "¡Feliz Navidad!",
      texto: [
        "Felices fiestas, mi vida. Espero que sepas que mis deseos siempre serán que tengas una vida feliz, específicamente a mi lado.",
        "Eres mi regalo preferido, la mujer que yo más amo."
      ],
      playlistsTexto: "Aquí tenemos dos playlists. La primera representa lo ajetreado que fue este año: es la playlist del 3.er año. La última es, digamos, una definitiva, y tiene un pequeño acróstico en las primeras canciones. Ojalá lo descubras.",
      playlists: ["5Q7rxgvDHB3y4vpiPQwpJn", "3RgMOjG4dgk0lwa88hhpRX"],
      textoFinal: [
        "Espero que con cada detalle te hayas sentido especial, porque es lo mínimo que necesito para ser feliz.",
        "Te amo, te adoro, te quiero, y eres lo mejor que tengo en mi vida, preciosa. Diosa mía, reina, emperatriz de mi corazón.",
        "Espero que tengas una feliz Navidad, mi amor."
      ], firma: "Melany" }
  ]
};
