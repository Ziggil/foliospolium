// js/data.js

// 1. БАЗА ДАННЫХ КНИГ (50 штук)
const booksData = [
    // --- Классика ---
    { id: 1, title: "Мастер и Маргарита", author: "Михаил Булгаков", totalPages: 480, isRead: false },
    { id: 2, title: "Преступление и наказание", author: "Фёдор Достоевский", totalPages: 672, isRead: false },
    { id: 3, title: "Война и мир", author: "Лев Толстой", totalPages: 1300, isRead: false },
    { id: 4, title: "Портрет Дориана Грея", author: "Оскар Уайльд", totalPages: 320, isRead: false },
    { id: 5, title: "Маленький принц", author: "Антуан де Сент-Экзюпери", totalPages: 112, isRead: false },
    { id: 6, title: "Три товарища", author: "Эрих Мария Ремарк", totalPages: 480, isRead: false },
    { id: 7, title: "1984", author: "Джордж Оруэлл", totalPages: 320, isRead: false },
    { id: 8, title: "451° по Фаренгейту", author: "Рэй Брэдбери", totalPages: 256, isRead: false },
    { id: 9, title: "Трудно быть богом", author: "Аркадий и Борис Стругацкие", totalPages: 288, isRead: false },
    { id: 10, title: "Шерлок Холмс: Собака Баскервилей", author: "Артур Конан Дойл", totalPages: 256, isRead: false },
    { id: 11, title: "Отцы и дети", author: "Иван Тургенев", totalPages: 288, isRead: false },
    { id: 12, title: "Герой нашего времени", author: "Михаил Лермонтов", totalPages: 224, isRead: false },
    { id: 13, title: "Мёртвые души", author: "Николай Гоголь", totalPages: 352, isRead: false },
    { id: 14, title: "Тихий Дон", author: "Михаил Шолохов", totalPages: 1600, isRead: false },
    { id: 15, title: "Доктор Живаго", author: "Борис Пастернак", totalPages: 512, isRead: false },
    { id: 16, title: "Собачье сердце", author: "Михаил Булгаков", totalPages: 160, isRead: false },
    { id: 17, title: "Анна Каренина", author: "Лев Толстой", totalPages: 864, isRead: false },
    { id: 18, title: "Идиот", author: "Фёдор Достоевский", totalPages: 640, isRead: false },
    { id: 19, title: "Горе от ума", author: "Александр Грибоедов", totalPages: 128, isRead: false },
    { id: 20, title: "Евгений Онегин", author: "Александр Пушкин", totalPages: 224, isRead: false },

    // --- Фэнтези и Фантастика 90-х / 2000-х ---
    { id: 21, title: "Темный эльф", author: "Роберт Сальваторе", totalPages: 384, isRead: false },
    { id: 22, title: "Dragonlance: Драконы осенних сумерек", author: "Маргарет Уэйс, Трейси Хикмэн", totalPages: 448, isRead: false },
    { id: 23, title: "Дюна", author: "Фрэнк Герберт", totalPages: 640, isRead: false },
    { id: 24, title: "Автостопом по Галактике", author: "Дуглас Адамс", totalPages: 208, isRead: false },
    { id: 25, title: "Гарри Поттер и философский камень", author: "Джоан Роулинг", totalPages: 432, isRead: false },
    { id: 26, title: "Властелин колец: Братство Кольца", author: "Джон Р. Р. Толкин", totalPages: 576, isRead: false },
    { id: 27, title: "Игра престолов", author: "Джордж Р. Р. Мартин", totalPages: 800, isRead: false },
    { id: 28, title: "Ведьмак: Последнее желание", author: "Анджей Сапковский", totalPages: 288, isRead: false },
    { id: 29, title: "Хроники Амбера: Девять принцев Амбера", author: "Роджер Желязны", totalPages: 320, isRead: false },
    { id: 30, title: "Основание", author: "Айзек Азимов", totalPages: 256, isRead: false },
    { id: 31, title: "Метро 2033", author: "Дмитрий Глуховский", totalPages: 384, isRead: false },
    { id: 32, title: "Ночной дозор", author: "Сергей Лукьяненко", totalPages: 448, isRead: false },
    { id: 33, title: "Тёмная башня: Стрелок", author: "Стивен Кинг", totalPages: 224, isRead: false },
    { id: 34, title: "Оно", author: "Стивен Кинг", totalPages: 1248, isRead: false },
    { id: 35, title: "Цветы для Элджернона", author: "Дэниел Киз", totalPages: 320, isRead: false },
    { id: 36, title: "Дозоры (Ночной/Дневной/Сумеречный)", author: "Сергей Лукьяненко", totalPages: 800, isRead: false }, // Сборник
    { id: 37, title: "Обитаемый остров", author: "Аркадий и Борис Стругацкие", totalPages: 384, isRead: false },
    { id: 38, title: "Пикник на обочине", author: "Аркадий и Борис Стругацкие", totalPages: 256, isRead: false },
    { id: 39, title: "Марсианин", author: "Энди Вейер", totalPages: 384, isRead: false },
    { id: 40, title: "Задача трёх тел", author: "Лю Цысинь", totalPages: 576, isRead: false },
    { id: 41, title: "Криптономикон", author: "Нил Стивенсон", totalPages: 912, isRead: false },
    { id: 42, title: "Американские боги", author: "Нил Гейман", totalPages: 640, isRead: false },
    { id: 43, title: "Никогде", author: "Нил Гейман", totalPages: 448, isRead: false },
    { id: 44, title: "Алхимик", author: "Пауло Коэльо", totalPages: 192, isRead: false },
    { id: 45, title: "Шантарам", author: "Грегори Дэвид Робертс", totalPages: 864, isRead: false },
    { id: 46, title: "Марсианские хроники", author: "Рэй Брэдбери", totalPages: 320, isRead: false },
    { id: 47, title: "Вино из одуванчиков", author: "Рэй Брэдбери", totalPages: 288, isRead: false },
    { id: 48, title: "Разрушенное королевство", author: "Стивен Эриксон", totalPages: 800, isRead: false }, // Из серии "Малазанская книга павших"
    { id: 49, title: "Черный отряд", author: "Глен Кук", totalPages: 384, isRead: false },
    { id: 50, title: "Сказания о Конане", author: "Роберт Говард", totalPages: 400, isRead: false }
];

// 2. КАРТОЧКИ "Я ПРОЧИТАЛ КНИГУ" (Гарантированный трофей за завершение)
// Генерируем их автоматически на основе массива книг (по одному на каждую)
const bookCompletionCards = booksData.map(book => ({
    id: 1000 + book.id,
    bookId: book.id,
    title: `Прочитал: ${book.title}`,
    image: `url_book_${book.id}`,
    rarity: book.totalPages > 600 ? "legendary" : (book.totalPages > 300 ? "epic" : "common")
}));

// 3. КАРТОЧКИ ПЕРСОНАЖЕЙ (Рандомный дроп из пула книги)
// Я добавил по 3-4 персонажа для самых популярных новых книг
const characterCards = [
    // Мастер и Маргарита (bookId: 1)
    { id: 2001, bookId: 1, name: "Кот Бегемот", rarity: "legendary", image: "url_char_1" },
    { id: 2002, bookId: 1, name: "Воланд", rarity: "legendary", image: "url_char_2" },
    { id: 2003, bookId: 1, name: "Маргарита", rarity: "epic", image: "url_char_3" },
    
    // Война и мир (bookId: 3)
    { id: 2004, bookId: 3, name: "Андрей Болконский", rarity: "epic", image: "url_char_4" },
    { id: 2005, bookId: 3, name: "Пьер Безухов", rarity: "common", image: "url_char_5" },
    { id: 2006, bookId: 3, name: "Наташа Ростова", rarity: "legendary", image: "url_char_6" },

    // Портрет Дориана Грея (bookId: 4)
    { id: 2007, bookId: 4, name: "Дориан Грей", rarity: "legendary", image: "url_char_7" },
    { id: 2008, bookId: 4, name: "Лорд Генри", rarity: "epic", image: "url_char_8" },
    { id: 2009, bookId: 4, name: "Бэзил Холлуорд", rarity: "common", image: "url_char_9" },

    // 1984 (bookId: 7)
    { id: 2010, bookId: 7, name: "Уинстон Смит", rarity: "common", image: "url_char_10" },
    { id: 2011, bookId: 7, name: "Большой Брат", rarity: "legendary", image: "url_char_11" },
    { id: 2012, bookId: 7, name: "Джулия", rarity: "epic", image: "url_char_12" },

    // 451° по Фаренгейту (bookId: 8)
    { id: 2013, bookId: 8, name: "Гай Монтэг", rarity: "epic", image: "url_char_13" },
    { id: 2014, bookId: 8, name: "Капитан Битти", rarity: "common", image: "url_char_14" },

    // Темный эльф (bookId: 21)
    { id: 2015, bookId: 21, name: "Дриззт До'Урден", rarity: "legendary", image: "url_char_15" },
    { id: 2016, bookId: 21, name: "Гвенвивар", rarity: "epic", image: "url_char_16" },
    { id: 2017, bookId: 21, name: "Джарлаксл", rarity: "common", image: "url_char_17" },

    // Dragonlance (bookId: 22)
    { id: 2018, bookId: 22, name: "Тассельхоф Непоседа", rarity: "epic", image: "url_char_18" },
    { id: 2019, bookId: 22, name: "Рейстлин Маджере", rarity: "legendary", image: "url_char_19" },
    { id: 2020, bookId: 22, name: "Карамон Маджере", rarity: "common", image: "url_char_20" },

    // Дюна (bookId: 23)
    { id: 2021, bookId: 23, name: "Пол Атрейдес", rarity: "legendary", image: "url_char_21" },
    { id: 2022, bookId: 23, name: "Барон Харконнен", rarity: "epic", image: "url_char_22" },
    { id: 2023, bookId: 23, name: "Чани", rarity: "common", image: "url_char_23" },

    // Автостопом по Галактике (bookId: 24)
    { id: 2024, bookId: 24, name: "Форд Префект", rarity: "epic", image: "url_char_24" },
    { id: 2025, bookId: 24, name: "Артур Дент", rarity: "common", image: "url_char_25" },
    { id: 2026, bookId: 24, name: "Марвин (робот)", rarity: "legendary", image: "url_char_26" },

    // Гарри Поттер (bookId: 25)
    { id: 2027, bookId: 25, name: "Гарри Поттер", rarity: "epic", image: "url_char_27" },
    { id: 2028, bookId: 25, name: "Гермиона Грейнджер", rarity: "legendary", image: "url_char_28" },
    { id: 2029, bookId: 25, name: "Рон Уизли", rarity: "common", image: "url_char_29" },

    // Властелин колец (bookId: 26)
    { id: 2030, bookId: 26, name: "Фродо Бэггинс", rarity: "epic", image: "url_char_30" },
    { id: 2031, bookId: 26, name: "Гэндальф", rarity: "legendary", image: "url_char_31" },
    { id: 2032, bookId: 26, name: "Арагорн", rarity: "epic", image: "url_char_32" },
    { id: 2033, bookId: 26, name: "Голлум", rarity: "common", image: "url_char_33" },

    // Игра престолов (bookId: 27)
    { id: 2034, bookId: 27, name: "Тирион Ланнистер", rarity: "legendary", image: "url_char_34" },
    { id: 2035, bookId: 27, name: "Дейенерис Таргариен", rarity: "legendary", image: "url_char_35" },
    { id: 2036, bookId: 27, name: "Джон Сноу", rarity: "epic", image: "url_char_36" },

    // Ведьмак (bookId: 28)
    { id: 2037, bookId: 28, name: "Геральт из Ривии", rarity: "legendary", image: "url_char_37" },
    { id: 2038, bookId: 28, name: "Йеннифэр", rarity: "epic", image: "url_char_38" },
    { id: 2039, bookId: 28, name: "Лютик", rarity: "common", image: "url_char_39" },

    // Хроники Амбера (bookId: 29)
    { id: 2040, bookId: 29, name: "Корвин", rarity: "epic", image: "url_char_40" },
    { id: 2041, bookId: 29, name: "Оберон", rarity: "legendary", image: "url_char_41" },

    // Основание (bookId: 30)
    { id: 2042, bookId: 30, name: "Хари Селдон", rarity: "legendary", image: "url_char_42" },
    { id: 2043, bookId: 30, name: "Сальвор Хардин", rarity: "common", image: "url_char_43" },

    // Метро 2033 (bookId: 31)
    { id: 2044, bookId: 31, name: "Артём", rarity: "epic", image: "url_char_44" },
    { id: 2045, bookId: 31, name: "Хантер", rarity: "legendary", image: "url_char_45" },

    // Ночной дозор (bookId: 32)
    { id: 2046, bookId: 32, name: "Антон Городецкий", rarity: "epic", image: "url_char_46" },
    { id: 2047, bookId: 32, name: "Гесер", rarity: "legendary", image: "url_char_47" },
    { id: 2048, bookId: 32, name: "Завулон", rarity: "epic", image: "url_char_48" },

    // Тёмная башня (bookId: 33)
    { id: 2049, bookId: 33, name: "Роланд Дискейн", rarity: "legendary", image: "url_char_49" },
    { id: 2050, bookId: 33, name: "Человек в чёрном", rarity: "epic", image: "url_char_50" },

    // Оно (bookId: 34)
    { id: 2051, bookId: 34, name: "Пеннивайз", rarity: "legendary", image: "url_char_51" },
    { id: 2052, bookId: 34, name: "Билл Денбро", rarity: "epic", image: "url_char_52" },

    // Трудно быть богом (bookId: 9)
    { id: 2053, bookId: 9, name: "Антон (Румата)", rarity: "epic", image: "url_char_53" },
    { id: 2054, bookId: 9, name: "Дон Рэба", rarity: "common", image: "url_char_54" },

    // Пикник на обочине (bookId: 38)
    { id: 2055, bookId: 38, name: "Рэдрик Шухарт", rarity: "legendary", image: "url_char_55" },
    { id: 2056, bookId: 38, name: "Барбридж", rarity: "common", image: "url_char_56" }
];

// 4. КАРТОЧКИ ДОСТИЖЕНИЙ (за объем прочитанных страниц)
const achievementCards = [
    { id: 3001, title: "Первый шаг", desc: "Прочитано 100 страниц", pagesRequired: 100, image: "url_ach_1" },
    { id: 3002, title: "Книжный червь", desc: "Прочитано 500 страниц", pagesRequired: 500, image: "url_ach_2" },
    { id: 3003, title: "Марафонец", desc: "Прочитано 1000 страниц", pagesRequired: 1000, image: "url_ach_3" },
    { id: 3004, title: "Пожиратель книг", desc: "Прочитано 5000 страниц", pagesRequired: 5000, image: "url_ach_4" },
    { id: 3005, title: "Легенда чтения", desc: "Прочитано 10000 страниц", pagesRequired: 10000, image: "url_ach_5" }
];

// Инициализация LocalStorage
if (!localStorage.getItem('books')) localStorage.setItem('books', JSON.stringify(booksData));
if (!localStorage.getItem('completionCards')) localStorage.setItem('completionCards', JSON.stringify(bookCompletionCards));
if (!localStorage.getItem('characterCards')) localStorage.setItem('characterCards', JSON.stringify(characterCards));
if (!localStorage.getItem('achievementCards')) localStorage.setItem('achievementCards', JSON.stringify(achievementCards));
if (!localStorage.getItem('userCollection')) localStorage.setItem('userCollection', JSON.stringify([]));
if (!localStorage.getItem('totalPagesRead')) localStorage.setItem('totalPagesRead', JSON.stringify(0));