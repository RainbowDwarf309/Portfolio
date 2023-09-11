import {
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    docker,
    meta,
    shopify,
    carrent,
    jobit,
    tripguide,
    mongodb,
    nodejs,
    figma,
    tgbot,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "Обо мне",
    },
    {
        id: "experience",
        title: "Опыт работы",
    },
    {
        id: "skill",
        title: "Навыки",
    },
    {
        id: "work",
        title: "Проекты",
    },
    {
        id: "contact",
        title: "Связаться",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML",
        icon: html,
    },
    {
        name: "CSS",
        icon: css,
    },
    {
        name: "Python",
        icon: redux,
    },
    {
        name: "Django",
        icon: figma,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Redis",
        icon: mongodb,
    },
    {
        name: "Celery",
        icon: nodejs,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Лаборант",
        company_name: "НИИ Физики Полупроводников",
        icon: shopify,
        iconBg: "#E6DEDD",
        date: "Июль 2021 — Июнь 2023",
        points: [
            "Разработка электрических схем.",
            "Программирование микроконтроллеров с целью разработки генераторов импульсов наносекундного диапазона с гибкой настройкой.",
            "Разработка и сбор вакуумных и лазерных систем.",
            "Обработка осциллограмм, визуализация данных с помощью Pandas, NumPy, SciPy и matplotlib.",
            "Также за время работы были написаны и опубликованы научные работы посвященные газовым разрядам."
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Стартап CrazyDIS.com",
        icon: meta,
        iconBg: "#383E56",
        date: "Январь 2022 - Июнь 2023",
        points: [
            "Реализация функционала для Frontend и Backend.",
            "Разработка пользовательских интерфейсов (CSS, HTML, JS).",
            "Написание парсеров для сбора данных.",
            "Занимался сбором статистики пользователей, в последствии были добавлены страницы с собранной статистикой в личные кабинеты пользователей.",
            "Разработка и поддержка телеграм-бота; для поддержания стабильной работы бота было разработано NoSQL(Redis) решение с очередью задач (Celery).",
            "Разработка API сайта.",
            "Покрытие кода тестами."
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "CrazyDIS",
        description:
            "CrazyDIS - это платформа на основе Django, где пользователи могут найти скидочные купоны для различных магазинов. Большой выбор купонов обеспечивает возможность найти скидки на любой товар, а пользователи могут быть уверены, что получат только актуальные и действительные купоны. Кроме того, имеется телеграмм бот, который ежедневно присылает новые купоны.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Django",
                color: "green-text-gradient",
            },
            {
                name: "Redis & Celery",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/Graceas/coupons-site",
        site_link: "https://crazydis.com/",
    },
    {
        name: "Django Blog",
        description:
            "DjangoBlog - это сайт блога, разработанный с использованием веб-фреймворка Django. Сочетая в себе стильный дизайн и простоту использования, Django Blog предлагает полноценное пространство для выражения своих мыслей, идей и интересов. Основная составляющая Django Blog - это страницы категорий и постов, где пользователи могут удобно организовывать свои публикации по темам.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Django",
                color: "green-text-gradient",
            },
            {
                name: "Redis & Celery",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/RainbowDwarf309/DjangoBlog",
        site_link: "https://ngdjangoblog.vercel.app/",
    },
    {
        name: "Django Weather",
        description:
            "DjangoWeather - это интерактивный и легко доступный веб-сайт, разработанный на основе мощного веб-фреймворка Django. Сайт предоставляет пользователям удобную возможность узнать текущую погоду в любом городе по всему миру. Благодаря интеграции с надежными сервисами прогноза погоды, Django Weather обеспечивает точные и актуальные данные о погодных условиях в режиме реального времени.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Django",
                color: "green-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/RainbowDwarf309/DjangoWeather",
        site_link: "https://ngdjangoweather.vercel.app/",
    },
    {
        name: "Budget&Finance",
        description:
            "Budget&Finance - Telegram бот для учёта личных расходов и ведения бюджета.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Aiogram",
                color: "green-text-gradient",
            },
        ],
        image: tgbot,
        source_code_link: "https://github.com/RainbowDwarf309/Budget-Finance",
        site_link: "#",
    },
];

export {services, technologies, experiences, testimonials, projects};
