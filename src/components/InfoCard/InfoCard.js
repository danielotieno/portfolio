import React from "react";
import styled from "styled-components";
import profilePic from "../../assets/profile-picture.png";
import { SocialIcon } from "react-social-icons";

const StyledInfoCard = styled.div`
  h1,
  h2 {
    color: #ffffff;
  }
  margin: 10px auto 10px auto;
  position: relative;
  width: 100%;
  max-width: 700px;
  height: 700px;
  background: #ff9700;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(115, 7, 16, 0.2);
  @media (min-width: 470px) {
    max-height: 400px;
  }
`;
const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ff9700;
  border-radius: 2px;
  @media (min-width: 470px) {
    mix-blend-mode: overlay;
  }
`;
const StyledAvatar = styled.aside`
  background: url(${profilePic}) no-repeat top center/cover;
  filter: grayscale(70%);
  width: 100%;
  height: 50%;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 100%);
  @media (min-width: 470px) {
    width: 50%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);
  }
`;
const StyledInfo = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
  text-align: center;
  width: 100%;
  height: 50%;

  @media (min-width: 470px) {
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    width: 56.25%;
  }
`;
const SocialWrapper = styled.div`
  display: flex;
  margin-top: 5px;
  a {
    margin: 5px;
    background: none;
    margin-right: 5px;
    opacity: 0.8;
    transition: all 0.4s ease 0s;
    &:hover {
      transition: all 0.4s ease 0s;
      transform: scale(1.1);
      opacity: 1;
    }
  }
`;

const InfoCard = () => (
  <StyledInfoCard>
    <StyledBackground />
    <StyledAvatar />
    <StyledInfo>
      <h1>Daniel</h1>
      <h1>Otieno</h1>
      <h2>Software Developer</h2>
      <h2>Mombasa, Kenya 🇰🇪</h2>
      <SocialWrapper>
        <SocialIcon url="https://twitter.com/danielotienoke" />
        <SocialIcon url="https://medium.com/@danotty" />
        <SocialIcon url="https://github.com/danielotieno" />
        <SocialIcon url="https://stackoverflow.com/users/9635966/daniel-otieno?tab=profile" />
      </SocialWrapper>
    </StyledInfo>
  </StyledInfoCard>
);

export default InfoCard;
