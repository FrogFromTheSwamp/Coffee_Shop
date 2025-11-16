import { v4 as uuidv4 } from "uuid";

const links = {
  state: {
    footer: {
      id: uuidv4(),
      link: "/",
      icon: "Logo_black.svg",
      className: "footer__item",
    },
    header: {
      id: uuidv4(),
      link: "/",
      icon: "Logo.svg",
      className: "header__item",
    },
    other: [
      {
        id: uuidv4(),
        text: "Our coffee",
        link: "/our-coffee",
        className: "header__item",
      },
      {
        id: uuidv4(),
        text: "For your pleasure",
        link: "/goods-page",
        className: "header__item",
      },
      {
        id: uuidv4(),
        text: "Contact us",
        link: "/contacts",
        className: "header__item",
      },
    ],
  },

  getters: {
    getHeaderLinks(state) {
      return { header: state.header, other: state.other };
    },

    getFooterLinks(state) {
      return { footer: state.footer, other: state.other };
    },
  },
};

export default links;
