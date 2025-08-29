import Product from "../components/Product";

// Shoes product pictures
import shoe1 from "/assets/images/shoe1.jpg";
import women_shoe from "/assets/images/women-shoe.jpg";
import shoe3 from "/assets/images/shoe3.jpg";
import woman_black_shoe from "/assets/images/woman-black-shoe.jpg";

const Home = () => {
  return (
    <>
        <div className="d-flex flex-row gap-3 ms-5 align-items-center mt-5">
            <Product name="Blue shoe" price={1500} description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dolor, amet eligendi ipsa porro error cupiditate officiis repudiandae quis, aliquid debitis explicabo!" image={shoe1} />

            <Product name="Women shoe" price={1300} description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dolor, amet eligendi ipsa porro error cupiditate officiis repudiandae quis, aliquid debitis explicabo!" image={women_shoe} />

            <Product name="Brown shoe" price={3000} description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dolor, amet eligendi ipsa porro error cupiditate officiis repudiandae quis, aliquid debitis explicabo!" image={shoe3} />

            <Product name="W black shoe" price={3100} description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dolor, amet eligendi ipsa porro error cupiditate officiis repudiandae quis, aliquid debitis explicabo!" image={woman_black_shoe} />
        </div>

        <br />
    </>
  )
}

export default Home;