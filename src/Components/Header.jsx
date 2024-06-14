import React, { useEffect } from 'react';
import styled from 'styled-components';

const Header = (props) => {
  useEffect(() => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    const handleMenuClick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };

    menuIcon.addEventListener('click', handleMenuClick);

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav a');
      const top = window.scrollY;

      sections.forEach((sec) => {
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
          });
          const activeNavLink = document.querySelector(`nav a[href*='${id}']`);
          if (activeNavLink) {
            activeNavLink.classList.add('active');
          }
        }
      });

      const header = document.querySelector('header');
      header.classList.toggle('sticky', top > 100);

      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      menuIcon.removeEventListener('click', handleMenuClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <Logo>
        <a href="#">Devanshi.</a>
      </Logo>

      <MenuIcon className="bx bx-menu" id="menu-icon"></MenuIcon>

      <Navbar className="navbar">
        <NavLink href="#home" className="active">
          Home
        </NavLink>
        <NavLink href="#project">Project</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Navbar>
    </Container>
  );
};

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 80px;
  background: #081b29;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &.sticky {
    background: #081b29;
  }

  @media (max-width: 1300px) {
    html {
      font-size: 62%;
    }
  }

  @media (max-width: 990px) {
    padding: 32px 20px; 
  }

  @media (max-width: 768px) {
    background: #081b29;
    padding: 20px;
  }
`;

const Logo = styled.div`
  a {
    font-size: 30px;
    color: #ededed;
    font-weight: 600;
    text-decoration: none;
  }

  @media (max-width: 990px) {
    a {
      font-size: 20px;
    }
  }
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 100%;
    left: -100%;
    width: 100%;
    padding: 16px 64px;
    background: #112e42;
    z-index: 1;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transition: 0.3s ease;
    transition-delay: 0.3s;

    &.active {
      left: 0;
    }
  }
`;

const NavLink = styled.a`
  font-size: 20px;
  color: #ededed;
  font-weight: 600;
  margin-left: 50px;
  transition: all 0.3s ease;
  text-decoration: none;

  @media (max-width: 768px) {
    text-align: right;
    display: block;
    font-size: 18px;
    margin: 20px 0;
    transform: translateX(0);
    transition: 0.3s ease;
    transition-delay: 0s;
  }
`;

const MenuIcon = styled.div`
  font-size: 35px;
  color: #ededed;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default Header;
