const IMG_PATH = "/src/assets/img/";

const PROJECTS = [
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
  {
    id: 3,
    name: "Тестовое задание в компанию ITL",
    description:
      "Тестовое задание в компанию ITL представляет собой сайт со списком пользователей и их постами.",
    main_functions: [
      "Пагинация",
      "Возможность перейти в конкретного пользователя",
      "Возможность добавить пользователя в избранное или удалить из избранного",
      "Возможность посмотреть избранных пользователей",
    ],
    stacks: ["React", "TypeScript", "Vite", "Redux Toolkit", "CSS-modules"],
    source_code_link: "https://github.com/flydecisive/itl-test",
    deploy_link: "https://monumental-klepon-a6df1c.netlify.app/",
    cover_src: `${IMG_PATH}covers/itl-test.png`,
    images: [
      `${IMG_PATH}itl-test/1.png`,
      `${IMG_PATH}itl-test/2.png`,
      `${IMG_PATH}itl-test/3.png`,
    ],
  },
  {
    id: 4,
    name: "Тестовое задание в компанию Antipoff",
    description:
      "Тестовое задание в компанию Antipoff представляет собой сайт со списком пользователей.",
    main_functions: [
      "Пагинация",
      "Авторизация",
      "Регистрация",
      "Возможность перейти в конкретного пользователя",
      "Возможность добавить пользователя в избранное или удалить из избранного",
    ],
    stacks: [
      "Vite",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "CSS-modules",
      "Styled Components",
    ],
    source_code_link: "https://github.com/flydecisive/antipoff-test",
    deploy_link: "https://delicate-concha-cde732.netlify.app/",
    cover_src: `${IMG_PATH}covers/antipoff-test.png`,
    images: [
      `${IMG_PATH}antipoff-test/1.png`,
      `${IMG_PATH}antipoff-test/2.png`,
      `${IMG_PATH}antipoff-test/3.png`,
      `${IMG_PATH}antipoff-test/4.png`,
    ],
  },

  {
    id: 9,
    name: "Лента комментариев",
    description:
      "Проект «Лента комментариев» позволяет пользователям легко и быстро делиться своими мыслями и мнениями о различных событиях, продуктах или услугах. Благодаря авторизации пользователи могут контролировать свои комментарии. Возможность ставить лайки делает процесс общения ещё более интерактивным и интересным.",
    main_functions: [
      "Авторизация",
      "Возмождность ставить/убирать лайки",
      "Возможность написать комментарий",
    ],
    stacks: ["HTML", "CSS", "JavaScript"],
    source_code_link:
      "https://github.com/flydecisive/webdev-dom-homework?tab=readme-ov-file",
    deploy_link: "https://flydecisive.github.io/webdev-dom-homework/",
    cover_src: `${IMG_PATH}covers/comments-cover.png`,
    images: [
      `${IMG_PATH}comments-app/1.png`,
      `${IMG_PATH}comments-app/2.png`,
      `${IMG_PATH}comments-app/3.png`,
      `${IMG_PATH}comments-app/4.png`,
      `${IMG_PATH}comments-app/5.png`,
    ],
  },
  {
    id: 10,
    name: "Калькулятор",
    description:
      "Проект функционального калькулятора на vue3, с возможностью сменить тему и счетом сложносоставных выражений по правилам математики.",
    main_functions: [
      "Смена темы",
      "Считает сложные выражения по правилам математики",
      "Мобильная версия",
    ],
    stacks: ["Vue3", "SCSS", "JavaScript", "Vite"],
    source_code_link:
      "https://github.com/flydecisive/vue-calculator?tab=readme-ov-file",
    deploy_link: "https://vue-calculator-pied-rho.vercel.app/",
    cover_src: `${IMG_PATH}covers/vue-calculator.png`,
    images: [
      `${IMG_PATH}vue-calculator/1.png`,
      `${IMG_PATH}vue-calculator/2.png`,
    ],
  },
  {
    id: 11,
    name: "Магазин мебели",
    description:
      "Проект верстки адаптивного сайта мебельного магазина с мобильной версией.",
    main_functions: ["Мобильная версия", "Адаптив"],
    stacks: ["HTML", "SCSS"],
    source_code_link: "https://github.com/flydecisive/furniture-store",
    deploy_link: "https://flydecisive.github.io/furniture-store/",
    cover_src: `${IMG_PATH}covers/furniture-store.png`,
    images: [
      `${IMG_PATH}furniture-store/1.png`,
      `${IMG_PATH}furniture-store/2.png`,
      `${IMG_PATH}furniture-store/3.png`,
      `${IMG_PATH}furniture-store/4.png`,
      `${IMG_PATH}furniture-store/5.png`,
    ],
  },
  {
    id: 6,
    name: "Тестовое задание в компанию Магвай",
    description:
      "В тестовом задании реализована главная страница сайта Magwai.",
    main_functions: ["Мобильная версия", "Дозагрузка карточек по клику"],
    stacks: ["Vite", "HTML", "SCSS", "JavaScript"],
    source_code_link: "https://github.com/flydecisive/magwai-test-upd",
    deploy_link: "https://stellular-sunburst-fe26d7.netlify.app/",
    cover_src: `${IMG_PATH}covers/magwai-test.png`,
    images: [
      `${IMG_PATH}magwai-test/1.png`,
      `${IMG_PATH}magwai-test/2.png`,
      `${IMG_PATH}magwai-test/3.png`,
    ],
  },
  {
    id: 7,
    name: "Тестовое задание в компанию amoCRM",
    description:
      "В тестовом задании реализована главная страница сайта Welbex.",
    main_functions: ["Мобильная версия"],
    stacks: ["HTML", "SCSS"],
    source_code_link: "https://github.com/flydecisive/amoCRM-test",
    deploy_link: "https://flydecisive.github.io/amoCRM-test",
    cover_src: `${IMG_PATH}covers/amocrm-test.png`,
    images: [`${IMG_PATH}amocrm-test/1.png`],
  },
  {
    id: 8,
    name: "Угадай пару карт",
    description:
      "Проект игры «Угадай пару карт» предлагает три уровня сложности и таймер для соревнования между игроками. Таймер позволяет следить за временем и стимулирует игроков делать быстрые и точные предположения.",
    main_functions: [
      "Выбор уровня сложности",
      "Таймер",
      "Возможность начать заново тот же уровень",
    ],
    stacks: ["HTML", "SCSS", "JavaScript", "Husky", "Webpack"],
    source_code_link: "https://github.com/flydecisive/card_game",
    deploy_link: "https://flydecisive.github.io/card_game/",
    cover_src: `${IMG_PATH}covers/card-game.png`,
    images: [
      `${IMG_PATH}card-game/1.png`,
      `${IMG_PATH}card-game/2.png`,
      `${IMG_PATH}card-game/3.png`,
      `${IMG_PATH}card-game/4.png`,
      `${IMG_PATH}card-game/5.png`,
    ],
  },
  {
    id: 5,
    name: "Погодное приложение",
    description:
      "weather-app - это платформа для поиска погоды по названию города. Проект разработан с использованием современных инструментов и технологий, таких как React, Styled Components, TypeScript, Vite.",
    main_functions: [
      "Определение геолокации пользователя",
      "Поиск погоды по названию города",
      "Подсказка при вводе городов РФ",
      "Показ текущей погоды",
      "Показ погоды на ближайшие 5 дней",
      "Детализация погоды по выбранному дню",
    ],
    stacks: ["Vite", "React", "TypeScript", "Styled Components"],
    source_code_link: "https://github.com/flydecisive/weather-test",
    deploy_link: "",
    cover_src: `${IMG_PATH}covers/weather-test.png`,
    images: [
      `${IMG_PATH}weather-test/1.png`,
      `${IMG_PATH}weather-test/2.png`,
      `${IMG_PATH}weather-test/3.png`,
    ],
  },
  {
    id: 12,
    name: "Тестовое задание в компанию OscarStudio",
    description:
      "Проект верстки адаптивного сайта мебельного магазина с мобильной версией для тестового задания в компанию OscarStudio.",
    main_functions: ["Мобильная версия", "Адаптив"],
    stacks: ["HTML", "SCSS", "JavaScript"],
    source_code_link: "https://github.com/flydecisive/oscar-test",
    deploy_link: "https://flydecisive.github.io/oscar-test/",
    cover_src: `${IMG_PATH}covers/oscar-test.png`,
    images: [
      `${IMG_PATH}oscar-test/1.png`,
      `${IMG_PATH}oscar-test/2.png`,
      `${IMG_PATH}oscar-test/3.png`,
    ],
  },
];

export default PROJECTS;
