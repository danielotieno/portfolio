import React from 'react';
import styled from 'styled-components';
import Icon from '../Ui/Icon/Icon.js';
import Project from './Project/Project.js';
import { Element } from 'react-scroll';

import react from '../../assets/technologies/re.svg';
import js from '../../assets/technologies/js.svg';
import html from '../../assets/technologies/html-5.svg';
import python from '../../assets/technologies/py.svg';
import node from '../../assets/technologies/node.svg';
import gatsby from '../../assets/technologies/gatsby-colored.svg';
import graph from '../../assets/technologies/graph.svg';

const StyledProjects = styled.div`
  max-width: 700px;
  margin: 0 auto 20px auto;
  display: flex;
  flex-wrap: wrap;
`;

const Projects = () => (
  <Element name='projects'>
    <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>
      Projects
    </h1>
    <StyledProjects>
      <Project
        title='Real Estate App'
        description='The Real Estate app is a Django application that enables user to search for estates and be able to contact realtors for inquiry'
        github='https://github.com/danielotieno/real-estate-app'
        live='https://do-realestate.herokuapp.com/'>
        <Icon src={js} height='50px' width='50px' />
        <Icon src={html} height='50px' width='50px' />
        <Icon src={python} height='50px' width='50px' />
      </Project>

      <Project
        title='Contact Manager'
        description='A simple MERN app that enables user to store his/her contacts and be able to perform the CRUD functionality.'
        github='https://github.com/danielotieno/contact-manager-api'
        live='https://store-contacts-app.herokuapp.com/'>
        <Icon src={html} height='50px' width='50px' />
        <Icon src={js} height='50px' width='50px' />
        <Icon src={node} height='50px' width='50px' />
      </Project>

      <Project
        title='GitHub Finder'
        description='GitHub Finder is a React app that help user to search GitHub Profiles. It uses GitHub REST API.'
        github='https://github.com/danielotieno/github-finder-app'
        live='https://github-finder-site.netlify.com'>
        <Icon src={js} height='50px' width='50px' />
        <Icon src={react} height='50px' width='50px' />
      </Project>

      <Project
        title='KeSpice'
        description='KeSpice is an amazing product design to help people save time at restaurants.'
        github='https://github.com/danielotieno/kespice-website'
        live='https://www.kespice.com/'>
        <Icon src={js} height='50px' width='50px' />
        <Icon src={gatsby} height='50px' width='50px' />
        <Icon src={graph} height='50px' width='50px' />
      </Project>
    </StyledProjects>
  </Element>
);

export default Projects;
