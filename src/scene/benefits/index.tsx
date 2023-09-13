import ActionButton from "@/shared/Action.Button";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
    LightBulbIcon,
    UserGroupIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/ENGBooks.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <AcademicCapIcon className="h-8 w-8" />,
    title: "Образование",
    description:
      "ГрГУ им. Янки Купалы. Дипломированный лингвист. Преподаватель английского и немецкого языков",
  },
  {
    icon: <UserGroupIcon className="h-8 w-8" />,
    title: "Профессиональный опыт",
    description:
      "Преподавание английского языка на протяжении более чем 10 лет как онлайн так и оффлайн",
  },


  {
    icon: <LightBulbIcon  className="h-8 w-8" />,
    title: "Методика преподавания",
    description:
      "Вместе с Вами мы определяем цели изучения языка и планомерно двигаемся к ним.",
  },
];


const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="почемуименноя" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.BenefitType)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}

        >
          <HText>Почему выбирают именно меня?</HText>
         
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div id= "как мы будем работать" className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="books-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    КАК МЫ БУДЕМ РАБОТАТЬ{" "}
                    <span className="text-primary-500">С ВАМИ</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
              <span className="text-primary-500">Знакомство.</span> Встречаемся онлайн: определяем Ваш уровень языка и цель обучения
              </p>
              <p className="mb-5">
              <span className="text-primary-500">Пробное занятие.</span> Естественно бесплатно
              </p>
              <p className="my-5">
              <span className="text-primary-500">Тариф.</span> Выбор тарифа и времени занятия
              </p>
              <p className="mb-5">
              <span className="text-primary-500">WELCOME!</span> Начинаем нашу совместную работу
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Присоединяйся!
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;