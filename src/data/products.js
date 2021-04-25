
import strato from './../assets/images/strato.jpg'
import strato2 from './../assets/images/strato2.jpg'
import pua from './../assets/images/pua.webp'
import ampli from './../assets/images/ampli.jpg'
import gib from './../assets/images/gib.jpg'
import gibacustic from './../assets/images/gibacustic.jpg'
import gibanez from './../assets/images/gibanez.jpg'

const products =[
    {
        id:1,
        title:'Gibson LesPaul',
        category:'guitar',
        description:'Como modelo insignia de Gibson Custom Shop, la Les Paul Custom está a la altura de los altos estándares establecidos por su arquetipo de la década de 1950 mientras evoluciona a un nivel de tono y rendimiento más adecuado a las demandas musicales de hoy. Debajo de las capas de sus detalles de "esmoquin" se encuentra la voz nítida y vanguardista de un juego de humbucker 490/498 combinado, un diapasón de ébano sólido, una espiga de mástil larga para un sustain máximo y una tapa de arce de dos piezas sobre un cuerpo de caoba sólido que agrega la cantidad perfecta de mordida sónica para todo, desde jazz hasta hard rock. Suena tan bien como parece, ¡y se ve tan bien como suena!',
        price:19999,
        pictureUrl:gib,
        stock:10
    },
    {
       
        id: 2,
        title:'Pua Ernie Ball',         
        description:'Las puas Ernie Ball Prodigy cuentan con un material delrin altamente duradero para una superficie antideslizante más segura. El borde biselado mecanizado y las puntas afiladas permiten menos arrastre, mayor articulación y control preciso durante la reproducción. Esta forma de escudo grande de 1,5 mm es nueva para 2019',
        category:'accesorios',
        price:500,
        pictureUrl:pua,
        stock:0
    },
    {
        id: 3,
        title:'Fender Stratocaster',
        category:'guitar',
        description:'La serie American Ultra de guitarras y bajos es la más avanzada para músicos exigentes que exigen lo último en precisión, rendimiento y tono. La American Ultra Stratocaster presenta un exclusivo perfil de mástil de " D moderna” con bordes de diapasón redondeados para horas de comodidad, y la forma del talón del mástil permite un fácil acceso al registro más alto. Un veloz diapasón de radio compuesto de 10 "a 14" con 22 trastes medium jumbo para solos precisos y sin esfuerzo, mientras que las pastillas Ultra Noiseless ™ y las opciones avanzadas de cableado brindan infinitas posibilidades de sonido: sin zumbidos. Este versátil instrumento de última generación te inspirará a llevar tu interpretación a nuevas alturas. Otras características incluyen clavijeros de bloqueo sellados, herrajes cromados y cejilla de hueso. Incluye estuche rígido moldeado de primera calidad.',
        price:19999,
        pictureUrl:[{url:strato,color:'black' },{url:strato2,color:'#00B2D2'}],
        stock:5
    },
    {
        id: 4,
        title:'Amplificador  Peavey Envoy 110 40 Rms',
        category:'amplificadores',
        description:' La exclusiva tecnología TransTube® de Peavey realmente crea el sonido, la calidez y el "retroceso" de un amplificador de válvulas a través de su diseño patentado de estado sólido. Los componentes básicos del sonido TransTube® son los diseños exclusivos del preamplificador y el amplificador de potencia. Los sastres de la sección de preamplificador ganan para satisfacer la necesidad de cualquier cantidad de unidad, desde el cristalino hasta el sostenido grueso y suave. El amplificador de potencia reacciona como una sección de salida de tubo al responder al preamplificador con una compresión natural que aumenta a medida que el amplificador se vuelve más fuerte. Con TransTube®, obtienes un amplificador asesino con una dinámica muy variada y un "grano" natural, ¡como un amplificador de válvulas!',
        price:19999,
        pictureUrl:ampli,
        stock:5
    },
    {
        id: 5,
        title:'Gibson Acustic J-45 ',
        description:'Como modelo insignia de Gibson Custom Shop, la Les Paul Custom está a la altura de los altos estándares establecidos por su arquetipo de la década de 1950 mientras evoluciona a un nivel de tono y rendimiento más adecuado a las demandas musicales de hoy. Debajo de las capas de sus detalles de "esmoquin" se encuentra la voz nítida y vanguardista de un juego de humbucker 490/498 combinado, un diapasón de ébano sólido, una espiga de mástil larga para un sustain máximo y una tapa de arce de dos piezas sobre un cuerpo de caoba sólido que agrega la cantidad perfecta de mordida sónica para todo, desde jazz hasta hard rock. Suena tan bien como parece, ¡y se ve tan bien como suena!',
        category:'guitar',
        price:19999,
        pictureUrl:gibacustic,
        stock:5
    },
    {
        id: 6,
        title:'Fender Stratocaster',
        category:'guitar',
        description:'La serie American Ultra de guitarras y bajos es la más avanzada para músicos exigentes que exigen lo último en precisión, rendimiento y tono. La American Ultra Stratocaster presenta un exclusivo perfil de mástil de " D moderna” con bordes de diapasón redondeados para horas de comodidad, y la forma del talón del mástil permite un fácil acceso al registro más alto. Un veloz diapasón de radio compuesto de 10 "a 14" con 22 trastes medium jumbo para solos precisos y sin esfuerzo, mientras que las pastillas Ultra Noiseless ™ y las opciones avanzadas de cableado brindan infinitas posibilidades de sonido: sin zumbidos. Este versátil instrumento de última generación te inspirará a llevar tu interpretación a nuevas alturas. Otras características incluyen clavijeros de bloqueo sellados, herrajes cromados y cejilla de hueso. Incluye estuche rígido moldeado de primera calidad.',
        price:19999,
        pictureUrl:strato,
        stock:5
    },
    {
        id: 7,
        title:'Fender Stratocaster',
        category:'guitar',
        description:'La serie American Ultra de guitarras y bajos es la más avanzada para músicos exigentes que exigen lo último en precisión, rendimiento y tono. La American Ultra Stratocaster presenta un exclusivo perfil de mástil de " D moderna” con bordes de diapasón redondeados para horas de comodidad, y la forma del talón del mástil permite un fácil acceso al registro más alto. Un veloz diapasón de radio compuesto de 10 "a 14" con 22 trastes medium jumbo para solos precisos y sin esfuerzo, mientras que las pastillas Ultra Noiseless ™ y las opciones avanzadas de cableado brindan infinitas posibilidades de sonido: sin zumbidos. Este versátil instrumento de última generación te inspirará a llevar tu interpretación a nuevas alturas. Otras características incluyen clavijeros de bloqueo sellados, herrajes cromados y cejilla de hueso. Incluye estuche rígido moldeado de primera calidad.',
        price:19999,
        pictureUrl:strato,
        stock:5
    },
    {
        id:8,
        title:'Fender Stratocaster',
        category:'guitar',
        description:'La serie American Ultra de guitarras y bajos es la más avanzada para músicos exigentes que exigen lo último en precisión, rendimiento y tono. La American Ultra Stratocaster presenta un exclusivo perfil de mástil de " D moderna” con bordes de diapasón redondeados para horas de comodidad, y la forma del talón del mástil permite un fácil acceso al registro más alto. Un veloz diapasón de radio compuesto de 10 "a 14" con 22 trastes medium jumbo para solos precisos y sin esfuerzo, mientras que las pastillas Ultra Noiseless ™ y las opciones avanzadas de cableado brindan infinitas posibilidades de sonido: sin zumbidos. Este versátil instrumento de última generación te inspirará a llevar tu interpretación a nuevas alturas. Otras características incluyen clavijeros de bloqueo sellados, herrajes cromados y cejilla de hueso. Incluye estuche rígido moldeado de primera calidad.',
        price:19999,
        pictureUrl:strato,
        stock:0
    },
    {
      
        id: 9,
        title:'Pua Ernie Ball',
        description:'Las puas Ernie Ball Prodigy cuentan con un material delrin altamente duradero para una superficie antideslizante más segura. El borde biselado mecanizado y las puntas afiladas permiten menos arrastre, mayor articulación y control preciso durante la reproducción. Esta forma de escudo grande de 1,5 mm es nueva para 2019',
        category:'accesorios',
        price:500,
        pictureUrl:pua,
        stock:3
    },
    {
        id: 10,
        title:'Amplificador  Peavey Envoy 110 40 Rms',
        category:'amplificadores',
        description:'La exclusiva tecnología TransTube® de Peavey realmente crea el sonido, la calidez y el "retroceso" de un amplificador de válvulas a través de su diseño patentado de estado sólido. Los componentes básicos del sonido TransTube® son los diseños exclusivos del preamplificador y el amplificador de potencia. Los sastres de la sección de preamplificador ganan para satisfacer la necesidad de cualquier cantidad de unidad, desde el cristalino hasta el sostenido grueso y suave. El amplificador de potencia reacciona como una sección de salida de tubo al responder al preamplificador con una compresión natural que aumenta a medida que el amplificador se vuelve más fuerte. Con TransTube®, obtienes un amplificador asesino con una dinámica muy variada y un "grano" natural, ¡como un amplificador de válvulas!',
        price:19999,
        pictureUrl:ampli,
        stock:2
    },
    {
       
        id: 11,
        title:'Pua Ernie Ball',
        description:'Las puas Ernie Ball Prodigy cuentan con un material delrin altamente duradero para una superficie antideslizante más segura. El borde biselado mecanizado y las puntas afiladas permiten menos arrastre, mayor articulación y control preciso durante la reproducción. Esta forma de escudo grande de 1,5 mm es nueva para 2019',
        category:'accesorios',
        price:500,
        pictureUrl:pua,
        stock:3
    },
    {
        id: 12,
        title:'Fender Stratocaster',
        category:'guitar',
        description:'La serie American Ultra de guitarras y bajos es la más avanzada para músicos exigentes que exigen lo último en precisión, rendimiento y tono. La American Ultra Stratocaster presenta un exclusivo perfil de mástil de " D moderna” con bordes de diapasón redondeados para horas de comodidad, y la forma del talón del mástil permite un fácil acceso al registro más alto. Un veloz diapasón de radio compuesto de 10 "a 14" con 22 trastes medium jumbo para solos precisos y sin esfuerzo, mientras que las pastillas Ultra Noiseless ™ y las opciones avanzadas de cableado brindan infinitas posibilidades de sonido: sin zumbidos. Este versátil instrumento de última generación te inspirará a llevar tu interpretación a nuevas alturas. Otras características incluyen clavijeros de bloqueo sellados, herrajes cromados y cejilla de hueso. Incluye estuche rígido moldeado de primera calidad.',
        price:19999,
        pictureUrl:strato,
        stock:7
    },
    {
        id: Date.now(),
        title:'Ibanez Js100',
        category:'guitar',
        description:' JScuerpo: tiloMástil: laminado de 3 ps, arce/bubingaConstrucción de mástil: AtornilladoPerfil de cuello: JSGrosor en el traste 1 (mm): 20Grosor en el traste 12 (mm): 22,3Diapasón: Palo de rosaescala en mm: 648Rradio de diapasón en pulgadas: 9,8Número de trastes: 22formato de trastes: JumboIncrustaciones de diapasón: PuntoMaterial de cejilla: Silleta Lockingancho de silleta en mm: 42Grosor en el último traste (mm): 57pastilla: HHFabricante de pastilla: Ibanez & DiMarzioPastilla de cuello: IBZ AH1 HumbuckerPastilla de puente: IBZ AH2 Humbuckerpastilla Piezo: NoPastillas activas: NoCoil-Splitting: SíConmutador: 3 víascontrol: Vol, Tone (Push/Pull)Puente: Ibanez Edge Pro TremoloMecánica: ModernaHardware: CromoGrosor de cuerda de fábrica: .009 - .042Afinación de fábrica: Standard Eacabado: Brillo intensodenominación de color: Blacknúmero de cuerda',
        price:19999,
        pictureUrl:gibanez,
        stock:0
    },
    {
        id: Date.now(),
        title:'Fender Stratocaster',
        category:'guitar',
        description:'La serie American Ultra de guitarras y bajos es la más avanzada para músicos exigentes que exigen lo último en precisión, rendimiento y tono. La American Ultra Stratocaster presenta un exclusivo perfil de mástil de " D moderna” con bordes de diapasón redondeados para horas de comodidad, y la forma del talón del mástil permite un fácil acceso al registro más alto. Un veloz diapasón de radio compuesto de 10 "a 14" con 22 trastes medium jumbo para solos precisos y sin esfuerzo, mientras que las pastillas Ultra Noiseless ™ y las opciones avanzadas de cableado brindan infinitas posibilidades de sonido: sin zumbidos. Este versátil instrumento de última generación te inspirará a llevar tu interpretación a nuevas alturas. Otras características incluyen clavijeros de bloqueo sellados, herrajes cromados y cejilla de hueso. Incluye estuche rígido moldeado de primera calidad.',
        price:19999,
        pictureUrl:strato,
        stock:0
    },
    {
        id: Date.now(),
        title:'Fender Stratocaster',
        category:'guitar',
        description:'La serie American Ultra de guitarras y bajos es la más avanzada para músicos exigentes que exigen lo último en precisión, rendimiento y tono. La American Ultra Stratocaster presenta un exclusivo perfil de mástil de " D moderna” con bordes de diapasón redondeados para horas de comodidad, y la forma del talón del mástil permite un fácil acceso al registro más alto. Un veloz diapasón de radio compuesto de 10 "a 14" con 22 trastes medium jumbo para solos precisos y sin esfuerzo, mientras que las pastillas Ultra Noiseless ™ y las opciones avanzadas de cableado brindan infinitas posibilidades de sonido: sin zumbidos. Este versátil instrumento de última generación te inspirará a llevar tu interpretación a nuevas alturas. Otras características incluyen clavijeros de bloqueo sellados, herrajes cromados y cejilla de hueso. Incluye estuche rígido moldeado de primera calidad.',
        price:19999,
        pictureUrl:strato,
        stock:0
    },
    {
        id: Date.now(),
        title:'Pua Ernie Ball',
        description:'Las puas Ernie Ball Prodigy cuentan con un material delrin altamente duradero para una superficie antideslizante más segura. El borde biselado mecanizado y las puntas afiladas permiten menos arrastre, mayor articulación y control preciso durante la reproducción. Esta forma de escudo grande de 1,5 mm es nueva para 2019',
        category:'accesorios',
        price:500,
        pictureUrl:pua,
        stock:3
    },
    {
        
        id: Date.now(),
        title:'Pua Ernie Ball',
        description:'Las puas Ernie Ball Prodigy cuentan con un material delrin altamente duradero para una superficie antideslizante más segura. El borde biselado mecanizado y las puntas afiladas permiten menos arrastre, mayor articulación y control preciso durante la reproducción. Esta forma de escudo grande de 1,5 mm es nueva para 2019',
        category:'accesorios',
        price:500,
        pictureUrl:pua,
        stock:3
    },
    {
        id: Date.now(),
        title:'Amplificador  Peavey Envoy 110 40 Rms',
        category:'amplificadores',
        description:'La exclusiva tecnología TransTube® de Peavey realmente crea el sonido, la calidez y el "retroceso" de un amplificador de válvulas a través de su diseño patentado de estado sólido. Los componentes básicos del sonido TransTube® son los diseños exclusivos del preamplificador y el amplificador de potencia. Los sastres de la sección de preamplificador ganan para satisfacer la necesidad de cualquier cantidad de unidad, desde el cristalino hasta el sostenido grueso y suave. El amplificador de potencia reacciona como una sección de salida de tubo al responder al preamplificador con una compresión natural que aumenta a medida que el amplificador se vuelve más fuerte. Con TransTube®, obtienes un amplificador asesino con una dinámica muy variada y un "grano" natural, ¡como un amplificador de válvulas!',
        price:19999,
        pictureUrl:ampli,
        stock:9
    },
    {
     
        id: Date.now(),
        title:'Pua Ernie Ball',
        description:'Las puas Ernie Ball Prodigy cuentan con un material delrin altamente duradero para una superficie antideslizante más segura. El borde biselado mecanizado y las puntas afiladas permiten menos arrastre, mayor articulación y control preciso durante la reproducción. Esta forma de escudo grande de 1,5 mm es nueva para 2019',
        category:'accesorios',
        price:500,
        pictureUrl:pua,
        stock:3
    },
    {
        id: Date.now(),
        title:'Fender Stratocaster',
        category:'guitar',
        description:'La serie American Ultra de guitarras y bajos es la más avanzada para músicos exigentes que exigen lo último en precisión, rendimiento y tono. La American Ultra Stratocaster presenta un exclusivo perfil de mástil de " D moderna” con bordes de diapasón redondeados para horas de comodidad, y la forma del talón del mástil permite un fácil acceso al registro más alto. Un veloz diapasón de radio compuesto de 10 "a 14" con 22 trastes medium jumbo para solos precisos y sin esfuerzo, mientras que las pastillas Ultra Noiseless ™ y las opciones avanzadas de cableado brindan infinitas posibilidades de sonido: sin zumbidos. Este versátil instrumento de última generación te inspirará a llevar tu interpretación a nuevas alturas. Otras características incluyen clavijeros de bloqueo sellados, herrajes cromados y cejilla de hueso. Incluye estuche rígido moldeado de primera calidad.',
        price:19999,
        pictureUrl:strato,
        stock:2
    },
    {
        id: Date.now(),
        title:'Fender Stratocaster',
        category:'guitar',
        description:'La serie American Ultra de guitarras y bajos es la más avanzada para músicos exigentes que exigen lo último en precisión, rendimiento y tono. La American Ultra Stratocaster presenta un exclusivo perfil de mástil de " D moderna” con bordes de diapasón redondeados para horas de comodidad, y la forma del talón del mástil permite un fácil acceso al registro más alto. Un veloz diapasón de radio compuesto de 10 "a 14" con 22 trastes medium jumbo para solos precisos y sin esfuerzo, mientras que las pastillas Ultra Noiseless ™ y las opciones avanzadas de cableado brindan infinitas posibilidades de sonido: sin zumbidos. Este versátil instrumento de última generación te inspirará a llevar tu interpretación a nuevas alturas. Otras características incluyen clavijeros de bloqueo sellados, herrajes cromados y cejilla de hueso. Incluye estuche rígido moldeado de primera calidad.',
        price:19999,
        pictureUrl:strato,
        stock:2
    },
    {
        id: Date.now(),
        title:'Amplificador  Peavey Envoy 110 40 Rms',
        category:'amplificadores',
        description:'La exclusiva tecnología TransTube® de Peavey realmente crea el sonido, la calidez y el "retroceso" de un amplificador de válvulas a través de su diseño patentado de estado sólido. Los componentes básicos del sonido TransTube® son los diseños exclusivos del preamplificador y el amplificador de potencia. Los sastres de la sección de preamplificador ganan para satisfacer la necesidad de cualquier cantidad de unidad, desde el cristalino hasta el sostenido grueso y suave. El amplificador de potencia reacciona como una sección de salida de tubo al responder al preamplificador con una compresión natural que aumenta a medida que el amplificador se vuelve más fuerte. Con TransTube®, obtienes un amplificador asesino con una dinámica muy variada y un "grano" natural, ¡como un amplificador de válvulas!',
        price:19999,
        pictureUrl:ampli,
        stock:9
    },

]


export default products