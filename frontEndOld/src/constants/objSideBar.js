  
export const objSideBar = [
  {
    id : '1',
    title: "Bicicleta",
    //Si es true, es un icono de la libreria ionic, si es false, es de fontAwesome
    isReactIcon : true,
    icon: 'bicycle-outline',
    dropdown: [
      {
        id: 1,
        icon: 'golf-outline',
        text: "Montaña",
      },
      {
        id: 2,
        icon: 'golf-outline',
        text: "Urbana",
      },
      {
        id: 3,
        icon: 'golf-outline',
        text: "Ruta",
      }
    ]
  },
  {
    id : '2',
    title: "Ropa",
    isReactIcon : true,
    icon: 'shirt-outline',
    dropdown: [
      {
        id: 8,
        icon: 'shirt-outline',
        text: "Masculino",
      },
      {
        id: 7,
        icon: 'shirt-outline',
        text: "Femenino",
      }
    ]
  },
  {
    id : '3',
    title: "Accesorios",
    isReactIcon : true,
    icon: 'bicycle-outline',
    dropdown: [
      {
        id: 4,
        icon: 'shirt-outline',
        text: "Cascos",
      },
      {
        id: 6,
        icon: 'shirt-outline',
        text: "Luces",
      },
      {
        id: 5,
        icon: 'shirt-outline',
        text: "Guantes",
      },
      {
        id: 9,
        icon: 'shirt-outline',
        text: "Seguridad",
      }
    ]
  }
];

//OBJETO PARA LAS ULTIMAS OPCIONES DEL SLIDE

export const lastOPtion = [
  {
    id: 1,
    text: 'Sobre Nosotros',
    isReactIcon : true,
    icon: 'people-outline',
    url: 'http://localhost:5173/about'
  },
  {
    id: 2,
    text: 'Contactanos',
    isReactIcon : true,
    icon: 'call-outline',
    url: 'http://localhost:5173/contact'
  }
]

export const userOptions = [
  {
    id: 1,
    text: 'Sobre Nosotros',
    isReactIcon : true,
    icon: 'people-outline',
    url: 'http://localhost:5173/about'
  },
  {
    id: 2,
    text: 'Contactanos',
    isReactIcon : true,
    icon: 'call-outline',
    url: 'http://localhost:5173/contact'
  },
  {
    id: 3,
    text: 'Blog',
    isReactIcon : true,
    icon: 'chatbubbles-outline'
  }
]
