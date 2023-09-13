import Logo from "@/assets/LogoDaria.png";
import Icon from "@/assets/free-icon-telegram-2111646.png";

const Footer = () => {
  return (
    <footer className="bg-gray-20 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/3 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">ИП Киселева Д.Н.</p>
          <p className="my-5">© All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/3 md:mt-0">
          <h4 className="font-bold">Добро пожаловать в мой Телеграм!</h4>
    <div className="my-5" >
      {/* Гиперссылка на Телеграм */}
      <a href="https://t.me/Daria_859" target="_blank" rel="noopener noreferrer">
        <img alt ="telegram" src ={Icon} />
      </a>
    </div>
        </div>
        <div className="mt-16 basis-1/3 md:mt-0">
          <h4 className="font-bold">Мой телефон</h4>
          <p className="my-5">Звонки принимаются с 10:00 до 19:00 часов</p>
          <p>+375 (29) 283-41-06</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;