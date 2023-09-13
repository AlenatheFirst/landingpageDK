import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/imgPrice1.png";
import image2 from "@/assets/img5.png";
import image3 from "@/assets/imgPriceGr.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Индивидуальное занятие",
    description:
      "60 минут 25 бел. рублей",
    image: image1,
  },
  {
    name: "Индивидуальное занятие",
    description:
    "80 минут 30 бел.рублей",
    image: image2,
  },
  {
    name: "Занятия в парах",
    description:
      "Выгодное предложение минус 20%",
    image: image3,
  },
  
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="тарифы" className="mx-auto bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-5/6">
            <HText>ТАРИФЫ</HText>
            <p className="py-5 text-center">
             Выбирайте тарифы на свой вкус
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto w-5/6 py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {classes.map((item: ClassType, index) => (
            <Class
            key={`${item.name}-${index}`}
            name={item.name}
            description={item.description}
            image={item.image}
          />
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default OurClasses;