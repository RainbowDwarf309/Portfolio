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
                Меня зовут Никита и я Junior Python разработчик специализирующийся на создании веб-приложений на Django.
                Я имею 2 года опыта работы в данной области. Кроме основных навыков в Python и Django, я также владею
                HTML, CSS и JavaScript (React), что позволяет мне создавать красивые и интерактивные пользовательские
                интерфейсы для веб-приложений. Имеется опыт работы с Redis и Celery, которые позволяют решать задачи с
                очередями и кешированием.
                У меня также есть базовые знания контейнеризации Docker, что позволяет создавать и развертывать
                приложения с помощью контейнеров. Я постоянно стремлюсь к самообразованию и изучению новых технологий.
                Готов применить свои знания и опыт в работе над новыми проектами и внести свой вклад в команду
                разработчиков. Буду рад принять новые вызовы и продолжать развиваться как специалист.

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
