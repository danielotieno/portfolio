import React from "react";
import styled from "styled-components";
import Icon from "../Ui/Icon/Icon.js";
import Project from "./Project/Project.js";
import { Element } from "react-scroll";

import react from "../../assets/technologies/react-colored.svg";
import firebase from "../../assets/technologies/firebase-colored.svg";
import js from "../../assets/technologies/javascript-colored.svg";
import html from "../../assets/technologies/html.svg";

const StyledProjects = styled.div`
  max-width: 700px;
  margin: 0 auto 20px auto;
  display: flex;
  flex-wrap: wrap;
`;

const Projects = () => (
  <Element name="projects">
    <h1 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>
      Projects
    </h1>
    <StyledProjects>
      <Project
        title="Memory Game"
        description="The Memory Game Project is a complete browser-based card matching game (also known as Concentration)"
        github="https://github.com/danielotieno/fend-project-memory-game"
        live="https://danielotieno.github.io/fend-project-memory-game/"
      >
        <Icon src={js} height="50px" width="50px" />
      </Project>
      <Project
        title="Weight Converter"
        description="A simple weight converter app using JavaScript and Bootstrap. It will convert pounds to grams, kilograms and ounces."
        github="https://github.com/d-ivashchuk/ivashchuk-blog/"
        live="https://danielotieno.github.io/weight-converter/"
      >
        <Icon src={html} height="50px" width="50px" />
        <Icon src={js} height="50px" width="50px" />
      </Project>

      <Project
        title="This portfolio"
        description="The code for the portfolio you are currently browsing!"
        github="https://github.com/danielotieno/portfolio"
        live="#"
      >
        <Icon src={react} height="50px" width="50px" />
      </Project>
    </StyledProjects>
  </Element>
);

export default Projects;
