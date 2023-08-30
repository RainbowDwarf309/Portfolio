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
                Я опытный Python разработчик, специализирующийся на создании веб-приложений на Django. Я имею около 2-ух
                лет опыта работы в этой области. Я уверен в своих способностях и всегда стремлюсь к совершенству в своей
                работе. Мне нравится изучать новые технологии и инструменты, чтобы улучшить свои навыки и стать еще
                более эффективным разработчиком. Кроме того, я являюсь коммуникабельным и ответственным человеком,
                который всегда готов работать в команде и помочь своим коллегам достичь общих целей. Если вы ищете
                опытного Python разработчика, то я буду рад обсудить ваш проект и предложить свои услуги. Свяжитесь со
                мной, чтобы начать работу!
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
