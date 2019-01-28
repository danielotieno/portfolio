import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

const StyledAbout = styled.div`
  h1 {
    color: rgba(0, 0, 0, 0.65);
  }
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 660px;
  padding: 20px;
  background: white;
  margin: 0 auto 10px auto;
  p {
    color: rgba(80, 89, 113, 0.7);
    line-height: 140%;
  }
  a {
    color: #007acc !important;
    text-decoration: none;
    font-size: 18px;
    cursor: pointer;
    background: linear-gradient(to bottom, transparent 62%, #ffeb3b 0) center
      center/0% 75% no-repeat;
    cursor: pointer;
    color: rgba(80, 89, 113, 0.7);
    transition: all 0.4s ease;
    &:hover {
      color: #007acc;
      background-size: 100% 100%;
      transition: all 0.4s ease;
    }
  }
`;

const StyledHr = styled.hr`
  border: 0;
  height: 1px;
  margin: 5px auto 20px auto;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.65),
    rgba(0, 0, 0, 0)
  );
  width: 50%;
`;

const About = () => (
  <Element name="about">
    <StyledAbout>
      <h1>About</h1>
      <StyledHr />
      <div>
        <p>
          I am 🔥 Software Developer from Kenya🇰🇪 who loves to learn new
          technologies and enjoy adapting to shifts in the industry. My
          developer ethos: always be learning and always be coding.
        </p>
        <br />
        <p>
          I am happy to share my knowledge with the community | I am Learning
          Community Ambassador for ALC | Lead Organiser for Nairuby
          Mombasa(Rubyists User Group).
        </p>
      </div>
    </StyledAbout>
  </Element>
);

export default About;
