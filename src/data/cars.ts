import { Car } from '@/types/car';

// Helper function to generate 8 image variations from a single URL
const generateImages = (baseUrl: string): string[] => {
  return [
    baseUrl,
    `${baseUrl}&brightness=5`,
    `${baseUrl}&contrast=10`,
    `${baseUrl}&sat=-20`,
    `${baseUrl}&q=90`,
    `${baseUrl}&auto=format`,
    `${baseUrl}&dpr=2`,
    `${baseUrl}&fm=jpg`
  ];
};

export const cars: Car[] = [
  {
    id: '1',
    name: 'BMW X6 XDRIVE 40i',
    year: 2022,
    category: 'SUV',
    price: 1250000,
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE AGENCIA (DOS DUEÑOS)',
      keys: '2 LLAVES',
      kilometers: '84,790 KMS',
      engine: 'MOTOR 6 CILINDROS TWIN POWER TURBO',
      features: [
        'IMPECABLES CONDICIONES',
        'MANDOS AL VOLANTE',
        'BOTON DE ENCENDIDO',
        'PANTALLA LCD',
        'CLIMATIZADOR BIZONA',
        'LUCES DIURNAS LED',
        'FAROS DE NIEBLA',
        'SENSORES DE PROXIMIDAD DELANTEROS Y TRASEROS',
        'PALETAS DE CAMBIOS',
        'SISTEMA DE NAVEGACION',
        'ASIENTOS DE PIEL',
        'DOBLE ESCAPE CROMADO',
        'ANTENA TIPO ALETA DE TIBURON',
        'PAQUETE M SPORT'
      ]
    }
  },
  {
    id: '2',
    name: 'ACURA RDX TECH',
    year: 2021,
    category: 'SUV',
    price: 579000,
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE AGENCIA (UNICO DUEÑO)',
      keys: '2 LLAVES',
      kilometers: '45,349 KMS',
      engine: 'MOTOR 4 CILINDROS 2.0 T',
      features: [
        'IMPECABLES CONDICIONES',
        'MANDOS AL VOLANTE',
        'TECHO PANORAMICO',
        'BOTON DE ENCENDIDO',
        'PANTALLA LCD A COLOR',
        'FRENO DE MANO ELECTRONICO',
        'SISTEMA START-STOP',
        'PALETAS DE CAMBIOS',
        'SISTEMA DE NAVEGACION',
        'ASIENTOS DE PIEL',
        'ANTENA TIPO ALETA DE TIBURON',
        'SENSORES DE PROXIMIDAD',
        'CAMARA DE VISION'
      ]
    }
  },
  {
    id: '3',
    name: 'VOLKSWAGEN TERAMONT TRENDLINE',
    year: 2025,
    category: 'SUV',
    price: 850000,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE AGENCIA (UNICO DUEÑO)',
      keys: '2 LLAVES',
      kilometers: '8,209 KMS',
      engine: 'MOTOR 4 CILINDROS 2.0 T',
      features: [
        'EXCELENTES CONDICIONES',
        'MANDOS AL VOLANTE',
        'LUCES DIURNAS LED',
        'RIELES EN TECHO',
        'PANTALLA LCD',
        'PANTALLA DE INSTRUMENTOS DIGITAL',
        'DOBLE ESCAPE CROMADO',
        'ANTENA TIPO ALETA DE TIBURON',
        'PUERTOS USB/C',
        'SISTEMA DE NAVEGACION',
        'SISTEMA DE AUDIO CON CONECTIVIDAD BLUETOOTH',
        '3 FILAS DE ASIENTOS'
      ]
    }
  },
  {
    id: '4',
    name: 'FORD LOBO PLATINUM',
    year: 2019,
    category: 'Pick Up',
    price: 690000,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE AGENCIA',
      keys: '2 LLAVES',
      kilometers: '111,100 KMS',
      engine: 'MOTOR V6 DE 3.5 L ECOBOOST 4X4',
      features: [
        'EXCELENTES CONDICIONES',
        'MANDOS AL VOLANTE',
        'FAROS DE NIEBLA',
        'LUCES DIURNAS LED',
        'GANCHOS DE SUJECION',
        'FRENO DE MANO ELECTRONICO',
        'BOTON DE ENCENDIDO',
        'PANTALLA LCD',
        'CLIMATIZADOR DUAL',
        'ASIENTOS DE PIEL',
        'TECHO PANORAMICO',
        'SENSOR DE PROXIMIDAD',
        'CAMARA DE VISION'
      ]
    }
  },
  {
    id: '5',
    name: 'HONDA PILOT TOURING',
    year: 2021,
    category: 'SUV',
    price: 585000,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE SEMINUEVOS CON SU CONSECUTIVO DE AGENCIA',
      keys: '2 LLAVES',
      kilometers: '59,679 KMS',
      engine: 'MOTOR V6 DE 3.5L',
      features: [
        'EXCELENTES CONDICIONES',
        'MANDOS AL VOLANTE',
        'BOTON DE ENCENDIDO',
        'PANTALLA LCD',
        '3 FILAS DE ASIENTOS',
        'FAROS DE NIEBLA',
        'LUCES DIURNAS LED',
        'RIELES EN TECHO',
        'ASIENTOS DE PIEL',
        'ANTENA TIPO ALETA DE TIBURON',
        'PUERTOS USB',
        'SISTEMA DE NAVEGACION',
        'SISTEMA DE SONIDO CON CONECTIVIDAD BLUETOOTH'
      ]
    }
  },
  {
    id: '6',
    name: 'MERCEDES BENZ CLA250',
    year: 2017,
    category: 'Sedan',
    price: 350000,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE AGENCIA (UNICO DUEÑO)',
      keys: '2 LLAVES',
      kilometers: '53,000 KMS',
      engine: 'MOTOR 4 CILINDROS',
      features: [
        'EXCELENTES CONDICIONES',
        'MANDOS AL VOLANTE',
        'BOTON DE ENCENDIDO',
        'PANTALLA LCD',
        'CLIMATIZADOR BIZONA',
        'SISTEMA DE NAVEGACION',
        'LUCES DIURNAS LED',
        'SENSORES DE PROXIMIDAD DELANTEROS Y TRASEROS',
        'ANTENA TIPO TIBURON',
        'DOBLE ESCAPE CROMADO',
        'FRENO DE MANO ELECTRONICO',
        'SISTEMA DE AUDIO CON CONECTIVIDAD BLUETOOTH'
      ]
    }
  },
  {
    id: '7',
    name: 'CHEVROLET CHEYENNE LT',
    year: 2023,
    category: 'Pick Up',
    price: 820000,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE AGENCIA (UNICO DUEÑO)',
      keys: '2 LLAVES',
      kilometers: '9,088 KMS',
      engine: 'MOTOR V8 DE 5.3 L',
      features: [
        'COMO NUEVA IMPECABLES CONDICIONES',
        '355 HP',
        'MANDOS AL VOLANTE',
        'PANTALLA LCD TOUCH',
        'CLIMATIZADOR BIZONA',
        'FRENO DE MANO ELECTRICO',
        'LUCES DIURNAS LED',
        'ANTENA TIPO TIBURON',
        'GANCHOS DE ARRASTRE',
        'ESTRIBOS',
        'BOTON DE ENCENDIDO',
        'SENSORES DE PROXIMIDAD',
        'AUTO START-STOP',
        'SISTEMA DE NAVEGACION'
      ]
    }
  },
  {
    id: '8',
    name: 'FORD LOBO PLATINUM',
    year: 2022,
    category: 'Pick Up',
    price: 1000000,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE AGENCIA (UNICO DUEÑO)',
      keys: '2 LLAVES',
      kilometers: '54,796 KMS',
      engine: 'MOTOR V6 3.5L TWINTURBO ECOBOOST',
      features: [
        'EXCELENTES CONDICIONES',
        'MANDOS AL VOLANTE',
        'FAROS DE NIEBLA',
        'LUCES DIURNAS LED',
        'PANTALLA LCD A COLOR',
        'CLIMATIZADOR BIZONA',
        'TABLERO DE INSTRUMENTOS DIGITAL',
        'TECHO PANORAMICO',
        'ASIENTOS DE PIEL',
        'SENSORES DE PROXIMIDAD DELANTEROS Y TRASEROS',
        'CAMARA DE VISION',
        'SISTEMA DE NAVEGACION',
        'PUERTOS USB/C'
      ]
    }
  },
  {
    id: '9',
    name: 'VOLKSWAGEN AMAROK TDI',
    year: 2017,
    category: 'Pick Up',
    price: 399000,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE EMPRESA CON SU CONSECUTIVO DE AGENCIA',
      keys: '2 LLAVES',
      kilometers: '149,110 KMS',
      engine: 'MOTOR 4 CILINDROS 2.0 TDI 4X4',
      features: [
        'EXCELENTES CONDICIONES',
        'MANDOS AL VOLANTE',
        'PANTALLA LCD',
        'ASIENTOS DE PIEL',
        'SISTEMA DE SONIDO CON CONEXION BLUETOOTH',
        'SISTEMA DE NAVEGACION',
        'COMPUTADORA DE VIAJE DIGITAL',
        'PUERTOS USB',
        'FAROS DE NIEBLA',
        'ESTRIBOS'
      ]
    }
  },
  {
    id: '10',
    name: 'CUPRA FORMENTOR VZ',
    year: 2023,
    category: 'Deportivo',
    price: 720000,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE AGENCIA (UNICO DUEÑO)',
      keys: '2 LLAVES',
      kilometers: '45,870 KMS',
      engine: 'MOTOR 4 CILINDROS 2.0 TURBO',
      features: [
        'IMPECABLES CONDICIONES',
        'MANDOS AL VOLANTE',
        'BOTON DE ENCENDIDO',
        'PANTALLA LCD A COLOR',
        'SENSORES DE PROXIMIDAD',
        'LUCES DIURNAS LED',
        'RIELES EN TECHO',
        'TECHO PANORAMICO',
        'PALETAS DE CAMBIOS',
        'ANTENA TIPO TIBURON',
        'FAROS DE NIEBLA',
        'SISTEMA DE SONIDO BEATS AUDIO',
        'ILUMINACION AMBIENTAL',
        'RENDIMIENTO DE 12.9 KM/L'
      ]
    }
  },
  {
    id: '11',
    name: 'MERCEDES BENZ E250',
    year: 2019,
    category: 'Sedan',
    price: 649000,
    image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE AGENCIA (UNICO DUEÑO)',
      keys: '2 LLAVES',
      kilometers: '135,493 KMS',
      engine: 'MOTOR 4 CILINDROS 2.0 TURBO',
      features: [
        'IMPECABLES CONDICIONES',
        'MANDOS AL VOLANTE',
        'PANTALLA LCD',
        'LUCES DIURNAS LED',
        'SISTEMA DE NAVEGACION',
        'PANEL DE INSTRUMENTOS DIGITAL',
        'FRENO DE MANO ELECTRICO',
        'CLIMATIZADOR BIZONA',
        'ASIENTOS E INTERIORES DE PIEL',
        'SENSORES DE PROXIMIDAD',
        'SISTEMA AUTO START-STOP'
      ]
    }
  },
  {
    id: '12',
    name: 'DODGE RAM LIMITED 1500 MILD-HYBRID',
    year: 2022,
    category: 'Pick Up',
    price: 1050000,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE AGENCIA (UNICO DUEÑO)',
      keys: '2 LLAVES',
      kilometers: '64,418 KMS',
      engine: 'MOTOR V8 DE 5.7 L MILD - HYBRID 4X4',
      features: [
        'EXCELENTES CONDICIONES',
        'MANDOS AL VOLANTE',
        'PANTALLA LCD A COLOR',
        'FRENO DE MANO ELECTRONICO',
        'BOTON DE ENCENDIDO',
        'CLIMATIZADOR BIZONA',
        'SISTEMA DE NAVEGACION',
        'PUERTOS USB / C',
        'ASIENTOS DE PIEL',
        'ANTENA TIPO TIBURON',
        'DOBLE ESCAPE CROMADO',
        'SENSORES DE PROXIMIDAD',
        'CAMARA DE VISION',
        'TRANSMISION AUTOMATICA DE 8 VELOCIDADES',
        'FAROS DE NIEBLA',
        'GANCHOS DE SUJECION'
      ]
    }
  },
  {
    id: '13',
    name: 'LAND ROVER SPORT SVR',
    year: 2017,
    category: 'SUV',
    price: 1100000,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE AGENCIA (UNICO DUEÑO)',
      keys: '2 LLAVES',
      kilometers: '73,978 KMS',
      engine: 'MOTOR V8 5.0 SUPERCHARGED',
      features: [
        'EXCELENTES CONDICIONES',
        'MANDOS AL VOLANTE',
        'PANTALLA LCD',
        'TECHO PANORAMICO',
        'LUCES DIURNAS LED',
        'ASIENTOS DE PIEL',
        'PALETAS DE CAMBIOS',
        'COMPUTADORA DE VIAJE DIGITAL',
        'SENSORES DE PROXIMIDAD',
        'CAMARA DE VISION',
        'ANTENA ALETA TIBURON',
        'SISTEMA DE SONIDO PREMIUM',
        'SISTEMA DE NAVEGACION Y CONECTIVIDAD BLUETOOTH'
      ]
    }
  },
  {
    id: '14',
    name: 'RAM 1500 BIGHORN',
    year: 2023,
    category: 'Pick Up',
    price: 740000,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE AGENCIA (UNICO DUEÑO)',
      keys: '2 LLAVES',
      kilometers: '45,093 KMS',
      engine: 'MOTOR V6 PENTASTAR 4X4',
      features: [
        'EXCELENTES CONDICIONES',
        'MANDOS AL VOLANTE',
        'BOTON DE ENCENDIDO',
        'PANTALLA LCD',
        'FAROS DE NIEBLA',
        'GANCHOS DE SUJECION',
        'CONECTIVIDAD BLUETOOTH',
        'SISTEMA DE NAVEGACION',
        'ESTRIBOS',
        'SISTEMA AUTO START-STOP',
        'FRENO DE MANO ELECTRONICO'
      ]
    }
  },
  {
    id: '15',
    name: 'GMC YUKON DENALI',
    year: 2021,
    category: 'SUV',
    price: 1090000,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE AGENCIA (UNICO DUEÑO)',
      keys: '2 LLAVES',
      kilometers: '70,000 KMS',
      engine: 'MOTOR V6 DE 6.2 L',
      features: [
        'EXCELENTES CONDICIONES',
        '3 FILAS (7 PASAJEROS)',
        'MANDOS AL VOLANTE',
        'BOTON DE ENCENDIDO',
        'PANTALLA TACTIL',
        'SISTEMA DE SONIDO',
        'CLIMATIZADOR BIZONA',
        'ASIENTOS DE PIEL',
        'FAROS DE NIEBLA Y FAROS LED',
        'SENSORES DE PROXIMIDAD DELANTEROS Y TRASEROS',
        'CAMARA DE VISIBILIDAD',
        'CUATRO ESCAPES CROMADOS',
        'ANTENA DE TIBURON'
      ]
    }
  },
  {
    id: '16',
    name: 'VOLKSWAGEN JETTA R LINE',
    year: 2019,
    category: 'Sedan',
    price: 295000,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE SEMINUEVOS CON SU CONSECUTIVO DE AGENCIA',
      keys: '2 LLAVES',
      kilometers: '131,395 KMS',
      engine: 'MOTOR 4 CILINDROS 1.4 L TURBO',
      features: [
        'EXCELENTES CONDICIONES',
        'MANDOS AL VOLANTE',
        'BOTON DE ENCENDIDO',
        'QUEMACOCOS',
        'PANTALLA TACTIL',
        'FAROS DE NIEBLA',
        'CONECTIVIDAD BLUETOOTH',
        'ASIENTOS DE PIEL',
        'PUERTO USB',
        'CLIMATIZADOR BIZONA',
        'PANTALLA DE INSTRUMENTOS DIGITAL'
      ]
    }
  },
  {
    id: '17',
    name: 'CHEVROLET SUBURBAN HIGH COUNTRY',
    year: 2021,
    category: 'SUV',
    price: 1190000,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE AGENCIA (UNICO DUEÑO)',
      keys: '2 LLAVES',
      kilometers: '75,000 KMS',
      engine: 'MOTOR V8 6.2 L ECO TEC 4X4',
      features: [
        'EXCELENTES CONDICIONES',
        '420 HP',
        'MANDOS AL VOLANTE',
        'PANTALLA TACTIL',
        'SISTEMA DE SONIDO MARCA BOSE',
        'ESTRIBOS LATERALES RETRACTILES',
        'ASIENTOS DE PIEL',
        'TERCERA FILA',
        'LUCES DIURNAS',
        'SENSORES DE PROXIMIDAD',
        'CAMARA DE VISION',
        'SISTEMA DE NAVEGACION'
      ]
    }
  },
  {
    id: '18',
    name: 'MAZDA 3 SPORT HB',
    year: 2020,
    category: 'Sedan',
    price: 300000,
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE AGENCIA (UNICO DUEÑO)',
      keys: '2 LLAVES',
      kilometers: '85,000 KMS',
      engine: 'MOTOR 4 CILINDROS',
      features: [
        'EXCELENTES CONDICIONES',
        'MANDOS AL VOLANTE',
        'BOTON DE ENCENDIDO',
        'PANTALLA TACTIL',
        'CAMARA DE REVERSA',
        'FAROS LED',
        'SENSORES DE PROXIMIDAD',
        'FRENO DE MANO ELECTRONICO',
        'COMPUTADORA DE VIAJE DIGITAL',
        'SISTEMA DE NAVEGACION'
      ]
    }
  },
  {
    id: '19',
    name: 'NISSAN X-TRAIL ADVANCE',
    year: 2020,
    category: 'SUV',
    price: 320000,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE EMPRESA CON SU CONSECUTIVO DE AGENCIA',
      keys: '2 LLAVES',
      kilometers: '79,801 KMS',
      engine: 'MOTOR 4 CILINDROS',
      features: [
        'EXCELENTES CONDICIONES',
        'MANDOS AL VOLANTE',
        'SISTEMA DE SONIDO CON CONECTIVIDAD BLUETOOTH',
        'PANTALLA LCD',
        'COMPUTADORA DE VIAJE DIGITAL',
        'ANTENA TIPO TIBURON',
        'LUCES DIURNAS LED'
      ]
    }
  },
  {
    id: '20',
    name: 'AUDI S5 COUPE',
    year: 2018,
    category: 'Deportivo',
    price: 685000,
    image: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6b9?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1603386329225-868f9b1ee6b9?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE EMPRESA CON SU CONSECUTIVO DE AGENCIA',
      keys: '2 LLAVES',
      kilometers: '91,049 KMS',
      engine: 'MOTOR V6 3.0 TURBO',
      features: [
        'EXCELENTES CONDICIONES',
        'MANDOS AL VOLANTE',
        'PANTALLA TACTIL',
        'ASIENTOS DEPORTIVOS S',
        'LUCES DIURNAS LED',
        'ASIENTOS DE PIEL',
        'CAMARA DE REVERSA',
        'SENSORES DE PROXIMIDAD',
        'ANTENA TIPO TIBURON',
        'FRENO DE MANO ELECTRICO',
        'CLIMATIZADOR BIZONA',
        'SISTEMA DE NAVEGACION',
        'SISTEMA DE CONECTIVIDAD BLUETOOTH'
      ]
    }
  },
  {
    id: '21',
    name: 'VOLKSWAGEN JETTA GLI',
    year: 2023,
    category: 'Deportivo',
    price: 505000,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE AGENCIA (UNICO DUEÑO)',
      keys: '2 LLAVES',
      kilometers: '83,789 KMS',
      engine: 'MOTOR 4 CILINDROS 2.0 TURBO',
      features: [
        'EXCELENTES CONDICIONES',
        'MANDOS AL VOLANTE',
        'PANTALLA TACTIL DE 10"',
        'TRANSMISION AUTOMATICA DE 7 VELOCIDADES',
        'LUCES DIURNAS LED',
        'SENSORES DE PROXIMIDAD',
        'CLIMATIZADOR DUAL',
        'ASIENTOS DE PIEL',
        'DOBLE ESCAPE CROMADO'
      ]
    }
  },
  {
    id: '22',
    name: 'FORD LOBO RAPTOR',
    year: 2018,
    category: 'Pick Up',
    price: 820000,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE SEMINUEVOS CON SU CONSECUTIVO DE AGENCIA',
      keys: '2 LLAVES',
      kilometers: '95,000 KMS',
      engine: 'MOTOR V6 DE 3.5 L TURBO 4X4',
      features: [
        'IMPECABLES CONDICIONES',
        '450 HP',
        'MANDOS AL VOLANTE',
        'TECHO PANORAMICO',
        'ASIENTOS DE PIEL',
        'PANTALLA LCD A COLOR',
        'PALETAS DE CAMBIOS',
        'CAMARA DE REVERSA',
        'SISTEMA DE AUDIO COMPATIBLE CON APPLE CARPLAY Y ANDROID AUTO',
        'SISTEMA DE NAVEGACION',
        'LUCES DIRUNAS LED',
        'FAROS LED',
        'GANCHOS DE SUJECION DELANTEROS Y TRASEROS',
        'CLIMATIZADOR DUAL',
        'SENSORES DE PROXIMIDAD',
        'TRANSMISION DE 10 VELOCIDADES'
      ]
    }
  },
  {
    id: '23',
    name: 'FORD LOBO LIMITED',
    year: 2023,
    category: 'Pick Up',
    price: 1250000,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE EMPRESA CON SU CONSECUTIVO DE AGENCIA',
      keys: '2 LLAVES',
      kilometers: '35,000 KMS',
      engine: 'MOTOR V6 DE 3.5 POWERBOOST HEV 4X4',
      features: [
        'EXCELENTES CONDICIONES',
        'MANDOS AL VOLANTE',
        'BOTON DE ENCENDIDO',
        'PANTALLA LCD A COLOR',
        'CLIMATIZADOR DUAL',
        'LUCES DIURNAS LED',
        'FAROS DE NIEBLA',
        'ASIENTOS DE PIEL',
        'SENSORES DE PROXIMIDAD DELANTEROS Y TRASEROS',
        'CAMARA DE VISION',
        'SISTEMA DE NAVEGACION',
        'BLUETOOTH'
      ]
    }
  },
  {
    id: '24',
    name: 'FORD LOBO RAPTOR',
    year: 2018,
    category: 'Pick Up',
    price: 810000,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE AGENCIA (UNICO DUEÑO)',
      keys: '2 LLAVES',
      kilometers: '75,931 KMS',
      engine: 'MOTOR V6 DE 3.5 L TURBO 4X4',
      features: [
        'IMPECABLES CONDICIONES',
        '450 HP',
        'MANDOS AL VOLANTE',
        'TECHO PANORAMICO',
        'ASIENTOS DE PIEL',
        'PANTALLA LCD A COLOR',
        'PALETAS DE CAMBIOS',
        'CAMARA DE REVERSA',
        'SISTEMA DE AUDIO COMPATIBLE CON APPLE CARPLAY Y ANDROID AUTO',
        'SISTEMA DE NAVEGACION',
        'LUCES DIRUNAS LED',
        'FAROS LED',
        'GANCHOS DE SUJECION DELANTEROS Y TRASEROS',
        'CLIMATIZADOR DUAL',
        'SENSORES DE PROXIMIDAD',
        'TRANSMISION DE 10 VELOCIDADES'
      ]
    }
  },
  {
    id: '25',
    name: 'PORSCHE MACAN T',
    year: 2025,
    category: 'SUV',
    price: 1650000,
    image: 'https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE AGENCIA (UNICO DUEÑO)',
      keys: '2 LLAVES',
      kilometers: '15,462 KMS',
      engine: 'MOTOR 4 CILINDROS 2.0 TURBO',
      features: [
        'EXCELENTES CONDICIONES',
        '265 HP',
        'MANDOS AL VOLANTE',
        'PANTALLA HD',
        'RINES 21" RS SPYDER DESIGN',
        'COLOR CRAYON',
        'LUCES DIURNAS LED',
        'PALETAS DE CAMBIOS',
        'CLIMATIZADOR BIZONA',
        'FRENO DE MANO ELECTRONICO',
        'TECHO PANORAMICO',
        'SENSORES DE PROXIMIDAD',
        'SISTEMA DE NAVEGACION',
        'CAMARA DE VISION'
      ]
    }
  },
  {
    id: '26',
    name: 'CHEVROLET COLORADO ZR2',
    year: 2024,
    category: 'Pick Up',
    price: 980000,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE AGENCIA (UNICO DUEÑO)',
      keys: '2 LLAVES',
      kilometers: '58,307 KMS',
      engine: 'MOTOR 4 CILINDROS 2.7 L TURBO PLUS',
      features: [
        'EXCELENTES CONDICIONES',
        'GARANTIA DE AGENCIA',
        '310 HP',
        '4 MODOS DE MANEJO',
        'TRANSMISION AUTOMATICA DE 8 VELOCIDADES',
        'MANDOS AL VOLANTE',
        'PANTALLA HD DE 11.3"',
        'LUCES DIURNAS LED',
        'BOTON DE ENCENDIDO',
        'CLIMATIZADOR BIZONA',
        'SENSORES DE PROXIMIDAD',
        'CAMARA DE VISION'
      ]
    }
  },
  {
    id: '27',
    name: 'GMC YUKON DENALI',
    year: 2022,
    category: 'SUV',
    price: 1430000,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE SEMINUEVOS CON SU CONSECUTIVO DE AGENCIA',
      keys: '2 LLAVES',
      kilometers: '76,824 KMS',
      engine: 'MOTOR V8 DE 6.2 CILINDROS',
      features: [
        'IMPECABLES CONDICIONES',
        'MANDOS AL VOLANTE',
        '2 PANTALLAS TRASERAS TOUCHSCREEN DE 12.6"',
        'FAROS DE NIEBLA',
        'LUCES DIURNAS LED',
        'RIELES EN TECHO',
        'ANTENA TIPO TIBURON',
        'TECHO PANORAMICO',
        'TRES FILAS DE ASIENTOS',
        'PANTALLA LCD',
        'COMPUTADORA DE VIAJE DIGITAL',
        'CLIMATIZADOR BIZONA',
        'SENSORES DE PROXIMIDAD',
        'CAMARA DE VISION'
      ]
    }
  },
  {
    id: '28',
    name: 'MERCEDES BENZ GLE 53 AMG',
    year: 2021,
    category: 'SUV',
    price: 1320000,
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE AGENCIA (UNICO DUEÑO)',
      keys: '2 LLAVES',
      kilometers: '52,424 KMS',
      engine: 'MOTOR V6 DE 3.0 TURBO MILDHYBRID',
      features: [
        'IMPECABLES CONDICIONES',
        'MANDOS AL VOLANTE',
        'SISTEMA DE ILUMINACION AMBIENTAL',
        'TRACCION INTEGRAL AMG 4MATIC',
        'LUCES DIURNAS LED',
        'PANTALLA LCD A COLOR',
        'ASIENTOS DE PIEL',
        'SISTEMA DE NAVEGACION',
        'SENSORES DE PROXIMIDAD',
        'TECHO PANORAMICO',
        'CLIMATIZADOR BIZONA',
        'FRENO DE MANO ELECTRONICO',
        'BOTON DE ENCENDIDO',
        'PALETAS DE CAMBIOS'
      ]
    }
  },
  {
    id: '29',
    name: 'BMW X5',
    year: 2016,
    category: 'SUV',
    price: 415000,
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE EMPRESA CON SU CONSECUTIVO DE AGENCIA',
      keys: '2 LLAVES',
      kilometers: '115,545 KMS',
      engine: 'MOTOR 6 CILINDROS',
      features: [
        'EXCELENTES CONDICIONES',
        'MANDOS AL VOLANTE',
        'BOTON DE ENCENDIDO',
        'PANTALLA LCD',
        'CLIMATIZADOR BIZONA',
        'SISTEMA DE NAVEGACION',
        'CONECTIVIDAD BLUETOOTH',
        'ASIENTOS DE PIEL',
        'TECHO PANORAMICO',
        'DOBLE ESCAPE CROMADO',
        'SENSORES DE PROXIMIDAD',
        'CAMARA DE VISION',
        'FAROS DE NIEBLA',
        'LUCES DIURNAS LED'
      ]
    }
  },
  {
    id: '30',
    name: 'VOLKSWAGEN VENTO STARLINE',
    year: 2017,
    category: 'Sedan',
    price: 165000,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop',
    images: generateImages('https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop'),
    details: {
      condition: 'FACTURA DE AGENCIA',
      keys: '2 LLAVES',
      kilometers: '168,860 KMS',
      engine: 'MOTOR 4 CILINDROS TRANSMISION MANUAL',
      features: [
        'MUY BUENAS CONDICIONES GENERALES',
        '105 CABALLOS DE FUERZA',
        'MANDOS AL VOLANTE',
        'SISTEMA ANTIBLOQUEO DE FRENOS ABS',
        'BOLSAS DE AIRE FRONTALES',
        'AIRE ACONDICIONADO',
        'SISTEMA DE SONIDO CON BLUETOOTH',
        'USB',
        'MP3'
      ]
    }
  }
];
