import React from "react";
import Tilt from "react-parallax-tilt";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {services} from "../constants";
import {SectionWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";

const ServiceCard = ({index, title, icon}) => (
    <Tilt className='xs:w-[250px] w-full' options={{
        max: 45,
        scale: 1,
        speed: 450,
    }}>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div

                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <img
                    src={icon}
                    alt='web-development'
                    className='w-16 h-16 object-contain'
                />

                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>Общая информация</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                Меня зовут Никита и я Junior Python разработчик. За 2 года работы в качестве Junior разработчика
                специализировался на создании веб-приложений на Django. За данное время приобрел навыки работы с базами
                данных (PostgreSQL) и веб-фреймворком Django, познакомился с его архитектурой, научился работать с его
                моделями, "представлениями", формами и шаблонизаторами. За исключением основных навыков Python и Django,
                освоил также HTML, CSS и JavaScript. Наработанный опыт позволяет мне создавать красивые и интерактивные
                пользовательские интерфейсы для веб-приложений. За время работы с телеграмм ботом в проекте были решены
                задачи с высокой нагрузкой бота при помощи Redis и очередей задач Celery, что позволило наладить
                стабильную работу бота. У меня также есть базовые знания контейнеризации Docker, что позволяет создавать
                и развертывать приложения с помощью контейнеров.

            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
