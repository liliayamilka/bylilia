/* ============================================================
   DATOS DEL SITIO — aquí es donde cambias textos, imágenes y videos
   - Cada imagen es una ruta dentro de assets/img/  (ej. 'boafang/think-green.webp')
   - Cada video es una ruta dentro de assets/videos/ (ej. 'partybus.mp4')
   - Una imagen o video se muestra SIEMPRE completo, sin recortes.
   - ['flow',[ [a,b], [c] ]] = una fila con columnas; cada columna apila sus imágenes.
     Los anchos se ajustan solos para que nada se corte.
   - r = proporción ancho/alto (solo reserva el espacio mientras carga; se corrige sola).
   - raw:1 = imagen ya exportada con esquinas redondeadas (no se le agrega marco).
   - Si un archivo no existe, aparece un recuadro con la ruta donde debes guardarlo.
   ============================================================ */
window.SITE = {
  behance: 'https://www.behance.net/liliacst',
  cv: '',                       // ← PEGA AQUÍ EL ENLACE DE TU CV (el ícono ya está en el home)
  img: 'assets/img/', vid: 'assets/videos/',
  projects: [
  { slug:'party-bus', name:'Party Bus', kicker:'SERVICIO PARA FIESTAS', tags:['BRANDING', 'SOCIAL MEDIA'], color:'#331a4f',
    cover:'covers/partybus.webp',
    desc:'<b>Party Bus</b>© es una marca dedicada al transporte recreativo y experiencias de entretenimiento sobre ruedas, ofreciendo una alternativa diferente para celebrar, convivir y disfrutar de cada recorrido. Sus unidades están diseñadas para convertir el traslado en parte de la fiesta.',
    blocks:[
      ['flow',[[{s:'partybus/brand-sheet.webp',r:1.0379,raw:1}]]],
      ['flow',[[{s:'partybus/cap.webp',r:1.1754,raw:1}]]],
      ['flow',[[{s:'partybus/shirt.webp',r:0.9184,raw:1}]]],
      ['concept',[['El concepto','Partimos de una idea central: la fiesta no tiene destino, comienza desde el camino. La identidad busca transmitir diversión, energía y libertad a través de un universo visual inspirado en la música, las luces de neón y la atmósfera de los clubes nocturnos. Una marca que convierte cada viaje en una experiencia memorable.'],['El sistema','Un logotipo tipográfico de carácter expresivo, con letras protagonistas, trazos dinámicos y detalles personalizados que aportan movimiento y personalidad. Una paleta vibrante de rosas, magentas y acentos amarillos crea contraste y evoca la iluminación de una pista de baile. El sistema se complementa con recursos gráficos inspirados en notas musicales, destellos y luces neón, creando una identidad llamativa y versátil, pensada para vivir en las unidades, redes sociales, publicidad y materiales promocionales.']]],
      ['flow',[[{v:'partybus.mp4',c:'#331a4f',r:1.0}]]],
      ['flow',[[{s:'partybus/contrata.webp',r:1.0}],[{s:'partybus/xv-anos.webp',r:1.0}]]],
      ['flow',[[{s:'partybus/unidades.webp',r:1.0}],[{s:'partybus/viva-mexico.webp',r:1.0}]]]
    ]},
  { slug:'boa-fang', name:'Boa Fang', kicker:'SOLUCIONES AGRÍCOLAS', homeKicker:'SERVICIO AGRÍCOLA', tags:['SOCIAL MEDIA'], color:'#036a0c',
    cover:'covers/boafang.webp',
    desc:'<b>Boa Fang</b>© es una marca enfocada en soluciones agrícolas biodegradables, diseñadas para mejorar la eficiencia en huertas y viveros con un enfoque sustentable.',
    blocks:[
      ['flow',[[{s:'boafang/easy-manual-1.webp',r:1.0},{s:'boafang/compostable-materials.webp',r:1.0}],[{s:'boafang/prevent-choking.webp',r:1.0},{s:'boafang/snake-ties.webp',r:1.0}],[{s:'boafang/think-green.webp',r:0.5625}]]],
      ['flow',[[{v:'boafang-1.mp4',c:'#036a0c',r:0.5625}],[{s:'boafang/happy-new-year.webp',r:1.0},{s:'boafang/start-saving.webp',r:1.0}],[{s:'boafang/rapidly-adjustable.webp',r:1.0},{s:'boafang/modernize.webp',r:1.0}]]],
      ['copy',['“<b>Involúcrate en el cambio</b>, tu también puedes contribuir para estar cada vez más cerca de una <b>agricultura responsable.</b>”','“La norteñita, productora más grande de manzana de Latinoamérica ya se involucró al cambio, una BOA FANG y así <b>elimina más de 2 toneladas de plástico al año</b>”','“<b>¿Te preocupa el bienestar de tu cosecha de uva?,</b> CASA MADERO cuida sus plantas de cicatrices causadas por la RAFIA. Ellos se involucran al cambio y usan BOA FANG que CUIDA tu planta.”','“Involúcrate al cambio, pide en tu supermercado que eliminen alambres y ligas en tus productos frescos, con BOA FANG <b>podemos eliminar más de 1000 toneladas de plástico, rafia y ligas utilizadas para amarre de productos de consumo.</b>”']],
      ['palette',{s:'boafang/palette.webp',r:1.2941,raw:1}],
      ['flow',[[{v:'boafang-2.mp4',c:'#036a0c',r:1.0}]]]
    ]},
  { slug:'tralgoza', name:'Tralgoza', kicker:'SERVICIO DE TRANSPORTE', tags:['BRANDING'], color:'#e8702a',
    cover:'covers/tralgoza.webp',
    desc:'<b>Tralgoza</b>© es una empresa especializada en servicios de carga pesada y transportación local y foránea, conectando empresas y negocios a lo largo de la República Mexicana.',
    blocks:[
      ['flow',[[{s:'tralgoza/truck-typography.webp',r:0.9981,raw:1}]]],
      ['concept',[['El concepto','Una identidad construida a partir del movimiento y el progreso. Tres elementos que apuntan hacia arriba representan dirección, crecimiento y la fuerza de avanzar, transmitiendo la capacidad de llevar cada carga más lejos.'],['El sistema','Un símbolo ascendente acompañado de un wordmark bold. Una combinación de naranja, negro y blanco que comunica fuerza, confianza y dinamismo, pensada para destacar en unidades de transporte, uniformes y aplicaciones corporativas']]],
      ['flow',[[{s:'tralgoza/cards-stationery.webp',r:1.0031,raw:1}]]]
    ]},
  { slug:'dra-gretel', name:'Dra. Gretel', kicker:'MARCA PERSONAL', tags:['BRANDING'], color:'#0a2ca6',
    cover:'covers/dra-gretel.webp',
    desc:'<b>Dra. Gretel Cano Zalazar</b> es una marca personal enfocada en la neurología clínica, que busca proyectar profesionalismo, confianza y cercanía a través de una identidad visual moderna y distintiva.',
    blocks:[
      ['flow',[[{s:'dra-gretel/hero.webp',r:2.1104,raw:1}]]],
      ['concept',[['El concepto','Partimos de la conexión entre ciencia y bienestar. La conceptualización se construye a partir de formas orgánicas interconectadas que evocan las sinapsis y las redes neuronales del cerebro humano. Una representación visual de la conexión, el conocimiento y los procesos que hacen posible el funcionamiento del cuerpo.'],['El sistema','Un símbolo orgánico de formas fluidas e interconectadas, acompañado de un logotipo tipográfico que transmite modernidad y profesionalismo. Una paleta dominada por azules intensos, acompañada de tonos marfil y azul profundo, que aporta confianza, equilibrio y carácter. El sistema se complementa con la tipografía Exo 2 y aplicaciones gráficas pensadas para mantener una identidad coherente en papelería clínica, uniformes y materiales de atención profesional.']]],
      ['flow',[[{s:'dra-gretel/identity.webp',r:1.1031,raw:1}]]],
      ['flow',[[{s:'dra-gretel/applications.webp',r:1.0089,raw:1}]]]
    ]},
  { slug:'yu-sushi', name:'Yu Sushi', kicker:'RESTAURANTE', tags:['SOCIAL MEDIA'], color:'#c4141c',
    cover:'covers/yusushi.webp',
    desc:'<b>YU! Sushi</b>©, una marca gastronómica especializada en sushi y comida japonesa, con presencia en Chihuahua capital y Parral. El proyecto se enfocó en crear una comunicación visual para promocionar sus productos, especialidades y ofertas, conectando con el público a través de contenido atractivo y enfocado en despertar el antojo.',
    blocks:[
      ['flow',[[{s:'yusushi/promo-3x2.webp',r:1.776}]]],
      ['flow',[[{s:'yusushi/el-mejor-sushi.webp',r:1.0004}]]],
      ['flow',[[{s:'yusushi/barbie.webp',r:1.0}],[{s:'yusushi/rollos-3x2.webp',r:1.0}]]],
      ['flow',[[{s:'yusushi/cuanto-mas-mejor.webp',r:1.0}],[{s:'yusushi/auxiliar.webp',r:1.0}]]],
      ['flow',[[{v:'yusushi.mp4',c:'#c4141c',r:1.0}]]],
      ['flow',[[{s:'yusushi/stand-1.webp',r:1.3347}]]],
      ['flow',[[{s:'yusushi/stand-2.webp',r:1.3347}]]],
      ['flow',[[{s:'yusushi/gran-dia.webp',r:1.0}],[{s:'yusushi/que-buen-rollo.webp',r:1.0}]]]
    ]},
  { slug:'los-parceros', name:'Los Parceros', kicker:'RESTAURANTE', tags:['SOCIAL MEDIA'], color:'#c4141c',
    cover:'covers/parceros.webp',
    desc:'<b>Los Parceros</b>© es un restaurante de comida colombiana y mexicana ubicado en Riverside, California, que ofrece una propuesta gastronómica que fusiona los sabores tradicionales de ambas culturas. Además de su oferta culinaria, busca crear un espacio de convivencia a través de la música latina, el entretenimiento y eventos en vivo.',
    blocks:[
      ['flow',[[{v:'parceros.mp4',c:'#c4141c',r:1.7778}]]],
      ['flow',[[{s:'parceros/michelada.webp',r:1.0}]]],
      ['flow',[[{s:'parceros/guayabo.webp',r:1.0093}],[{s:'parceros/sabado-fiesta.webp',r:1.0111}]]],
      ['flow',[[{s:'parceros/dj-en-vivo.webp',r:0.5625}],[{s:'parceros/superbowl.webp',r:0.5625}]]]
    ]}
  ]
};
