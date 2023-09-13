export enum SelectedPage {
    Home = "home",
    BenefitType = "Benefits",
    OurClasses = "ourclasses",
    ContactUs = "контакты",
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }