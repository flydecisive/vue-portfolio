const IMG_PATH = "/src/assets/img/";

const TOP_PROJECTS = [
  {
    id: 0,
    name: "Музыкальный плеер",
    description:
      "Проект музыкального плеера представляет собой современное и удобное веб-приложение, предназначенное для любителей музыки.",
    main_functions: [
      "Авторизация",
      "Воспроизведение треков",
      "Возможность добавлять треки в избранное",
      "Плейлисты",
      "Сквозной плеер, который работает на всех страницах",
      "Возможность поиска по названиям треков",
      "Фильтры по исполнителю, году и жанру",
      "Возможность управлять воспроизведением (пауза, воспроизведение, переключение треков, зациклить трек, перемешать треки, управление громкостью, перемтотка трека",
      "Изменение темы плеера",
    ],
    stacks: ["React", "JavaScript", "Redux"],
    source_code_link: "https://github.com/flydecisive/react-music-player",
    deploy_link: "https://flydecisive.github.io/react-music-player/",
    cover_src: `${IMG_PATH}covers/react-music-player.png`,
    images: [
      `${IMG_PATH}react-player/1.png`,
      `${IMG_PATH}react-player/2.png`,
      `${IMG_PATH}react-player/3.png`,
      `${IMG_PATH}react-player/4.png`,
      `${IMG_PATH}react-player/5.png`,
    ],
  },
  {
    id: 1,
    name: "Аналог авито",
    description:
      "skypro-avito - это платформа для продажи и покупки товаров и услуг, частично аналогичная по функционалу с Avito. Проект разработан с использованием современных инструментов и технологий, таких как React, Redux Toolkit, CSS Modules, Docker и TypeScript. Основные функции: – Регистрация и авторизация пользователей – Создание объявлений о продаже товаров и услуг с возможностью загрузки изображений",
    main_functions: [
      "Поиск товаров по названию",
      "Редактирование объявлений о продаже",
      "Возможность оставлять комментарии к товарам",
      "Возможность редактирования профиля пользователя",
      "Снятие объявлений с публикации",
      "Редактирование аватара пользователя",
      "Смена пароля пользователя",
      "Возможность просмотра профиля продавца",
      "Есть мобильная версия",
    ],
    stacks: ["React", "Redux", "TypeScript", "CSS-modules", "Docker"],
    source_code_link: "https://github.com/flydecisive/skypro-avito",
    deploy_link: "",
    cover_src: `${IMG_PATH}covers/react-avito.png`,
    images: [
      `${IMG_PATH}skypro-avito/1.png`,
      `${IMG_PATH}skypro-avito/2.png`,
      `${IMG_PATH}skypro-avito/3.png`,
      `${IMG_PATH}skypro-avito/4.png`,
    ],
  },
  {
    id: 2,
    name: "Приложение для фитнеса",
    description:
      "MVP приложения для занятия фитнесом, проект выполнен в команде.",
    main_functions: [
      "Авторизация",
      "Возможность добавить курс в профиль",
      "Просмотр видео",
      "Заполнение прогресса по тренировкам",
      "Смена пароля пользователя",
    ],
    stacks: ["React", "Redux", "Firebase", "JavaScript"],
    source_code_link:
      "https://github.com/flydecisive/fitness-app?tab=readme-ov-file",
    deploy_link: "https://resplendent-frangipane-1f3b0e.netlify.app/",
    cover_src: `${IMG_PATH}covers/react-fitness.png`,
    images: [
      `${IMG_PATH}react-fitness/1.png`,
      `${IMG_PATH}react-fitness/2.png`,
      `${IMG_PATH}react-fitness/3.png`,
    ],
  },
];

export default TOP_PROJECTS;
