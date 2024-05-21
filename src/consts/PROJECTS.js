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
    description: "Аналог авито на React",
    stacks: ["React"],
    source_code_link: "",
    deploy_link: "",
    cover_src: "src/assets/img/covers/react-avito.png",
  },
  {
    id: 2,
    name: "Приложение для фитнеса",
    description: "Фитнес приложение на React",
    stacks: ["React", "JavaScript", "Redux"],
    source_code_link: "",
    deploy_link: "",
    cover_src: "src/assets/img/covers/react-fitness.png",
  },
];

export default PROJECTS;
