type Service = {
  title: string;
  description: string;
  icon: string;
};

type GalleryItem = {
  src: string;
  alt: string;
};

type Advantage = {
  value: string;
  label: string;
};

type ContactInfo = {
  phone: string;
  email: string;
  address: string;
  workingHours: string;
};

type LandingData = {
  companyName: string;
  heroTitle: string;
  heroSubtitle: string;
  services: Service[];
  gallery: GalleryItem[];
  advantages: Advantage[];
  aboutText: string[];
  contacts: ContactInfo;
};

export const LANDING_DATA: LandingData = {
  companyName: "КровлиСтрой",

  heroTitle: "Кровля и купола любой сложности",
  heroSubtitle:
    "Профессиональное изготовление куполов для храмов и церквей, кровельные работы и поставка куполов по всей России",

  services: [
    {
      title: "Купола для храмов и церквей",
      description:
        "Проектирование и изготовление куполов для православных храмов, церквей и часовен. Работаем с нитрид-титановым покрытием, сусальным золотом и медью.",
      icon: "dome",
    },
    {
      title: "Кровельные работы",
      description:
        "Монтаж и ремонт кровли любой сложности: металлочерепица, фальцевая кровля, мягкая кровля. Гарантия на все виды работ.",
      icon: "roof",
    },
    {
      title: "Изготовление и поставка куполов",
      description:
        "Производство куполов на заказ с доставкой в любой регион России. Индивидуальный проект под ваши размеры и требования.",
      icon: "delivery",
    },
    {
      title: "Реставрация",
      description:
        "Реставрация исторических куполов и кровель с сохранением архитектурного облика. Опыт работы с объектами культурного наследия.",
      icon: "restore",
    },
  ],

  gallery: [
    { src: "/images/gallery/project-1.jpg", alt: "Купол храма — проект 1" },
    {
      src: "/images/gallery/project-2.jpg",
      alt: "Кровельные работы — проект 2",
    },
    { src: "/images/gallery/project-3.jpg", alt: "Купол церкви — проект 3" },
    {
      src: "/images/gallery/project-4.jpg",
      alt: "Фальцевая кровля — проект 4",
    },
    {
      src: "/images/gallery/project-5.jpg",
      alt: "Реставрация купола — проект 5",
    },
    { src: "/images/gallery/project-6.jpg", alt: "Монтаж кровли — проект 6" },
  ],

  advantages: [
    { value: "15+", label: "лет опыта" },
    { value: "200+", label: "выполненных проектов" },
    { value: "50+", label: "городов России" },
    { value: "100%", label: "гарантия качества" },
  ],

  aboutText: [
    "Наша компания специализируется на изготовлении куполов для храмов и церквей, а также выполняет полный спектр кровельных работ.",
    "За годы работы мы накопили уникальный опыт, который позволяет нам браться за проекты любой сложности — от небольших часовен до крупных соборов.",
    "Мы работаем по всей России: изготавливаем купола на собственном производстве и доставляем в любой регион страны. Каждый проект разрабатывается индивидуально с учётом архитектурных особенностей и пожеланий заказчика.",
  ],

  contacts: {
    phone: "+7 (XXX) XXX-XX-XX",
    email: "info@example.com",
    address: "Россия, г. Город, ул. Улица, д. 0",
    workingHours: "Пн–Пт: 9:00–18:00",
  },
};
