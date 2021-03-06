import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from './Image';

const H2 = styled.h2`
  height: 200px;
  line-height: 200px;
  text-align: center;
  font-size: 30px;
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: line-height 0.3s, padding 0.3s;

  @media screen and (min-width: 768px) {
    line-height: 350px;
  }

  @media screen and (min-width: 1241px) {
    line-height: 550px;
  }
`;

const P = styled.p`
  position: absolute;
  top: 70%;
  bottom: 0;
  left: 50px;
  right: 50px;
  transition: opacity 0.3s;
  opacity: 0;
  text-align: center;
  transition: opacity 0.3s, top 0.3s;
  font-size: 16px;
  line-height: 22px;
`;

const StyledLink = styled.a`
  display: block;
  height: 200px;
  position: relative;
  background-color: ${props => props.colour};
  color: white;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    height: 350px;
  }

  @media screen and (min-width: 1241px) {
    height: 550px;
  }

  &:hover {
    ${Image} {
      opacity: 0;
    }

    ${H2} {
      line-height: 30px;
      padding-top: 30px;

      @media screen and (min-width: 1241px) {
        line-height: 250px;
      }
    }

    ${P} {
      opacity: 1;
      top: 40%;

      @media screen and (min-width: 768px) {
        top: 25%;
      }

      @media screen and (min-width: 1241px) {
        top: 40%;
      }
    }
  }
`;

const Wrapper = styled.li`
  @media screen and (min-width: 768px) {
    width: 33.33vw;
    display: inline-block;
  }
`;

const StyledCallToActions = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const CallToAction = ({link, title, deck, image, colour}) => (
  <Wrapper key={title}>
    <Link href={link}>
      <StyledLink colour={colour}>
        <Image url={image} />
        <H2>{title}</H2>
        <P>{deck}</P>
      </StyledLink>
    </Link>
  </Wrapper>
);

const CallToActions = ({cta}) => (
  <StyledCallToActions>{cta.map(CallToAction)}</StyledCallToActions>
);

export default CallToActions;
