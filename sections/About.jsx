"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| О Нас" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Debateland </span>- это ваш
        источник всего необходимого для вхождения в мир дебатов. Наш сайт
        предоставляет{" "}
        <span className="font-extrabold text-white">курсы и статьи</span>
        {", "}
        которые помогут вам начать{" "}
        <span className="font-extrabold text-white">с нуля</span>
        {"."} Прекрасная помощница
        <span className="font-extrabold text-white"> Аяу</span>, будет вашим{" "}
        <span className="font-extrabold text-white">ментором </span>и надежным
        партнером в генерации топовых резолюций, обсуждении спорных аргументов и
        подборе качественных информационных ресурсов. Мы также предоставляем
        информацию о дебатных клубах города Алматы и{" "}
        <span className="font-extrabold text-white">
          рады приветствовать всех желающих
        </span>
        !
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
