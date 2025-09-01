import Product from "../components/Product";
import { Element } from "react-scroll";

// Shoes product pictures
// import shoe1 from "/assets/images/shoe1.jpg";
// import women_shoe from "/assets/images/women-shoe.jpg";
// import shoe3 from "/assets/images/shoe3.jpg";
// import woman_black_shoe from "/assets/images/woman-black-shoe.jpg";

const Home = () => {
  return (
    <>
        <div className="d-flex flex-row gap-3 ms-5 align-items-center mt-5 flex-wrap flex-sm-nowrap justify-content-center">
            <Product name="Blue shoe" price={1500} description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dolor, amet eligendi ipsa porro error cupiditate officiis repudiandae quis, aliquid debitis explicabo!" image={process.env.PUBLIC_URL + "/assets/images/shoe1.jpg"} />

            <Product name="Women shoe" price={1300} description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dolor, amet eligendi ipsa porro error cupiditate officiis repudiandae quis, aliquid debitis explicabo!" image={process.env.PUBLIC_URL + "/assets/images/women-shoe.jpg"} />

            <Product name="Brown shoe" price={3000} description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dolor, amet eligendi ipsa porro error cupiditate officiis repudiandae quis, aliquid debitis explicabo!" image={process.env.PUBLIC_URL + "/assets/images/shoe3.jpg"} />

            <Product name="W black shoe" price={3100} description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dolor, amet eligendi ipsa porro error cupiditate officiis repudiandae quis, aliquid debitis explicabo!" image={process.env.PUBLIC_URL + "/assets/images/woman-black-shoe.jpg"} />
        </div>

        <br />

        <Element className="d-flex flex-column gap-3 align-items-center justify-content center mt-4" name="about">
          <h3>About the project</h3>

          <p className="text-center w-75">
            This project is a simple shopping cart built with HTML, CSS, JS, the UI framework Bootstrap, and the JS framework React. In this project, the modern, fast, and easy-to-use JS state management library Zustand is used to manage global states. Additionally, all this information is stored in local storage and then loaded from local storage into the global states. This project is completely demonstrative and static, and it does not include any API.
          </p>

          <img alt="My Skills" src="https://skillicons.dev/icons?i=html,css,js,bootstrap,react" />

        </Element>

        <br />
    </>
  )
}

export default Home;