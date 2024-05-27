const IMG_PATH = "/src/assets/img/";

const TOP_PROJECTS = [
  {
    id: 13,
    name: "Онкологика",
    description:
      "Сервис помощи взрослым онкопациентам (проверка гипотезы компании)",
    main_functions: [
      "Аутентификация",
      "Главная страница с боковым меню",
      "Страница и система уведомлений",
      "Блок с календарем: календарь ближайших мероприятий с фильтрами, страницы с онлайн и офлайн-мероприятиями (интеграция с сервисом DaData)",
      "Страница списка всех ведущих мероприятий и страница отдельного ведущего",
      "Блок Профиля: меню профиля, личная информация пользователя, документы пользователя, медицинская информация пользователя, верификация пользователя по номеру телефона (интеграция с сервисом CallGate)",
    ],
    stacks: ["NextJS", "React", "TypeScript", "Material UI", "Redux"],
    source_code_link: "",
    deploy_link: "",
    cover_src: "/covers/oncologica.png",
    images: [
      "/oncologica/1.png",
      "/oncologica/2.png",
      "/oncologica/3.png",
      "/oncologica/4.png",
      "/oncologica/5.png",
      "/oncologica/6.png",
      "/oncologica/7.png",
      "/oncologica/8.png",
      "/oncologica/9.png",
      "/oncologica/10.png",
    ],
  },
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
    cover_src: `/covers/react-music-player.png`,
    images: [
      `/react-player/1.png`,
      `/react-player/2.png`,
      `/react-player/3.png`,
      `/react-player/4.png`,
      `/react-player/5.png`,
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
    cover_src: `/covers/react-fitness.png`,
    images: [
      `/react-fitness/1.png`,
      `/react-fitness/2.png`,
      `/react-fitness/3.png`,
    ],
  },
];

export default TOP_PROJECTS;
