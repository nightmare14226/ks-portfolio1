import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/slices/NavbarSlice";

/* Components */
import {
  HomeHero,
  HomeProject,
  HomeMotto,
  HomeSkills,
  HomeContact,
  Testimonials,
  Footer,
} from "../components";
import Transitions from "../components/Animated/Transitions";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Home"));
  }, []);

  return (
    <>
      <Transitions>
        <div className="nav_spacer"></div>
        <HomeHero />
        <HomeSkills />
        <HomeMotto/>
        <HomeContact />
        <Footer />
      </Transitions>
    </>
  );
};

export default HomePage;
