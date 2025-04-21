
export interface Anime {
  id: number;
  title: string;
  image: string;
  rating: number;
  genres: string[];
  episodeCount: number;
  description: string;
  year: number;
  status: "ongoing" | "completed";
}

export const popularAnime: Anime[] = [
  {
    id: 1,
    title: "Атака титанов",
    image: "/placeholder.svg",
    rating: 9.2,
    genres: ["Экшен", "Драма", "Фэнтези"],
    episodeCount: 87,
    description: "В мире людей внезапно появились титаны — огромные существа, пожирающие людей. Остатки человечества выжили, построив высокие стены вокруг своих поселений. Но однажды титаны прорвались...",
    year: 2013,
    status: "completed"
  },
  {
    id: 2,
    title: "Клинок, рассекающий демонов",
    image: "/placeholder.svg",
    rating: 8.9,
    genres: ["Экшен", "Фэнтези", "Приключения"],
    episodeCount: 55,
    description: "Тандзиро Камадо вместе с сестрой Незуко, которая превратилась в демона, отправляется в путешествие, чтобы найти лекарство и отомстить за гибель своей семьи.",
    year: 2019,
    status: "ongoing"
  },
  {
    id: 3,
    title: "Ван Пис",
    image: "/placeholder.svg",
    rating: 8.7,
    genres: ["Экшен", "Приключения", "Комедия"],
    episodeCount: 1060,
    description: "История о пиратах, отправляющихся на поиски величайшего сокровища, оставленного легендарным пиратом Голом Д. Роджером.",
    year: 1999,
    status: "ongoing"
  },
  {
    id: 4,
    title: "Наруто",
    image: "/placeholder.svg",
    rating: 8.4,
    genres: ["Экшен", "Приключения", "Фэнтези"],
    episodeCount: 720,
    description: "Жизнь юного ниндзя Наруто Узумаки, мечтающего стать Хокаге — сильнейшим ниндзя и главой своей деревни.",
    year: 2002,
    status: "completed"
  },
  {
    id: 5,
    title: "Моя геройская академия",
    image: "/placeholder.svg",
    rating: 8.3,
    genres: ["Экшен", "Комедия", "Суперсила"],
    episodeCount: 138,
    description: "В мире, где у большинства людей есть суперспособности, Изуку Мидория родился без них. Но он по-прежнему мечтает стать героем.",
    year: 2016,
    status: "ongoing"
  },
  {
    id: 6,
    title: "Стальной алхимик: Братство",
    image: "/placeholder.svg",
    rating: 9.1,
    genres: ["Экшен", "Приключения", "Драма"],
    episodeCount: 64,
    description: "Братья Эдвард и Альфонс Элрики пытаются вернуть свои тела после неудачного алхимического эксперимента. Для этого они ищут философский камень.",
    year: 2009,
    status: "completed"
  }
];

export const newReleases: Anime[] = [
  {
    id: 7,
    title: "Человек-бензопила",
    image: "/placeholder.svg",
    rating: 8.8,
    genres: ["Экшен", "Сверхъестественное", "Ужасы"],
    episodeCount: 12,
    description: "Парень по имени Дэндзи, обремененный долгами, живет крайне бедно вместе с демоном-бензопилой по имени Почита. Однажды его предают и убивают якудза, но Почита сливается с телом Дэндзи, и тот возрождается как человек-бензопила.",
    year: 2022,
    status: "ongoing"
  },
  {
    id: 8,
    title: "Магическая битва",
    image: "/placeholder.svg",
    rating: 8.7,
    genres: ["Экшен", "Фэнтези", "Школа"],
    episodeCount: 24,
    description: "Юдзи Итадори — атлетичный старшеклассник, который случайно проглатывает проклятую реликвию — палец Сукуны. Теперь он стал вместилищем проклятия и вынужден присоединиться к организации заклинателей.",
    year: 2020,
    status: "ongoing"
  }
];
