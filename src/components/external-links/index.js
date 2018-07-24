import React from 'react';
import styled from 'styled-components';
import {Github} from 'styled-icons/fa-brands/Github';
import {Linkedin} from 'styled-icons/fa-brands/Linkedin';
import {Twitter} from 'styled-icons/fa-brands/Twitter';

const StyledNav = styled.nav``;
const StyledUl = styled.ul`
  box-sizing: border-box;
  display: flex;
  list-style: none;
  padding: 0;
`;
const StyledA = styled.a`
  color: white;
`;
const StyledLi = styled.li`
  margin: 1rem;
`;

function ExternalLinks() {
  return (
    <StyledNav>
      <StyledUl>
        {[
          {
            icon: Linkedin,
            href: 'https://www.linkedin.com/in/zoopoetics/',
          },
          {
            icon: Github,
            href: 'https://github.com/zoopoetics/',
          },
          {
            icon: Twitter,
            href: 'https://twitter.com/zoopoetics',
          },
        ].map((link, index) => (
          <StyledLi key={link.href}>
            <StyledA href={link.href} target={'_blank'}>
              <link.icon size={'4em'} />
            </StyledA>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledNav>
  );
}

export default ExternalLinks;
