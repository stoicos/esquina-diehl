import pediatra from '../assets/IMG_20240305_153402.jpg';
import psicologo from '../assets/IMG_20240305_153748.jpg';
import salaDeEspera from '../assets/IMG_20240305_1532522.jpg';
import pediatraImg from '../assets/pediatra.webp';
import nutricionistaImg from '../assets/nutricionista.webp';

export const LINKS = [
    {
      name: "Servicios",
      link: "#services",
    },
    {
      name: "Reseñas",
      link: "#resenas",
    },
    {
      name: "Contacto",
      link: "#contact",
    },
  ];
  
export const SERVICES_CONTENT = [
  {
    title: "Equipo para pediatras",
    description:
      "Un consultorio con camilla y balanza preparada para recibir pacientes. Con la comodidad de un escritorio amplio con sillas cómodas y ventana al exterior.",
    image: pediatra,
    alt: "Consoltorio de pediatra",
  },
  {
    title: "Consultorios para Psicología",
    description:
      "Un consultorio con cómodo sofá y sillón preparado para recibir pacientes. Con ventana al exterior, decoración amena y bien iluminado.",
    image: psicologo,
    alt: "Consultorio de psicologo",
  },
  {
    title: "Sala de espera equipada",
    description:
      "Una sala de espera con todas las comodidades. Con servicio de agua fria y caliente. Aire acondicionado. Juguetes para los niños. Cómodo sofá y revistas para esperar el próximo turno.",
    image: salaDeEspera,
    alt: "Sala de espera",
  },
];

export const REVIEWS = {
  text: "Escuche lo que nuestros clientes tienen para decir sobre sus experiencias con Esquina Diehl. Nos enorgullecemos de nuestro trabajo y estamos comprometidos a brindar servicios de consultorios de primer nivel.",
  reviews: [
    {
      name: "Juan Calvi",
      title: "Pediatra",
      review:
        "Esquina Diehl es un excelente lugar para atender a mis pacientes",
      image: pediatraImg,
    },
    {
      name: "Nombre y apellido",
      title: "Nutricionista",
      review:
        "Tengo todo lo que necesito y estoy satisfecha con el lugar",
      image: nutricionistaImg,
    }
  ],
};

export const CONTACT_INFO = {
  text: "¿Tiene preguntas o necesita más información? Póngase en contacto con nosotros, y estaremos felices de ayudarle.",
  phone: {
    label: "Teléfono",
    value: "11 4445-5351",
  },
  email: {
    label: "Email",
    value: "marioanavia@hotmail.com",
  },
  address: {
    label: "Dirección",
    value: "Carlos Diehl 1116, esquina Saenz Peña. Longchamps",
  },
};