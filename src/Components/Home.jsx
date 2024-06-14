import styled from 'styled-components';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';

const Home = (props) => {

  

  return (
    <HomeBox>
      <Container id="home">
        <Content>
          <h1>
            Hi, I'm <span>Devanshi Jodhani</span>
          </h1>
          <Animate>
            <h3>Frontend Developer</h3>
          </Animate>
          <p>
          As a frontend developer skilled in React, Vitest testing, Firebase, Appwrite, JavaScript, Tailwind CSS, HTML, and CSS, I have created numerous projects showcasing my expertise. My portfolio includes a Disney clone, JioCinema, LinkedIn clone, and a blog app using Appwrite. Additionally, I have developed various applications using JavaScript, such as a country information app, dictionary app, weather app, and bookstore application. While I specialize in frontend development, I also possess full-stack development skills, including proficiency in Node.js.
          </p>
          <BtnBox>
            <a href="#" className="btn">
              Let's Talk
            </a>
          </BtnBox>
          <SocialLinks>
            <a href="https://github.com/DevanshiJodhani" target='_blank'>
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://x.com/devanshi_4505" target='_blank'>
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/devanshi-jodhani-5a31b324b/" target='_blank'>
              <i className="bx bxl-linkedin"></i>
            </a>
          </SocialLinks>
        </Content>
        <HomeContainer>
          <img src="./images/my.jpg" alt="" />
        </HomeContainer>
      </Container>
      <Project />
      <About />
      <Contact />
      <Footer />
    </HomeBox>
  );
};

const HomeBox = styled.div`
  width: 100%;
`;

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 30px 150px 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 990px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 550px) {
    padding: 80px 50px 90px;
  }
`;

const HomeContainer = styled.div`
  width: 500px;
  height: 500px;
  overflow: hidden;
  border-radius: 50%;
  border: 5px solid #00abf0;
  transition: 0.5s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  &:hover {
    background: #081b29;
    opacity: 0.8;
  }
  @media (max-width: 990px) {
    display: none;
  }
`;

const Content = styled.div`
  width: 50%;

  p {
    margin-top: 10px;
    line-height: 1.3;
  }
  @media (max-width: 990px) {
    width: 100%;
  }
  @media (max-width: 550px) {
    h1 {
    }
    p {
      font-size: 14px;
    }
  }
`;

const Animate = styled.div`
  position: relative;
  margin-top: 10px;

  h3 {
    font-size: 3.5rem;
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke: 0.7px #00abf0;

    @media (max-width: 550px) {
      font-size: 25px;
    }
  }
`;
const BtnBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 385px;
  height: 50px;
  margin-top: 30px;

  a {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 100%;
    background: #00abf0;
    border: 2px solid #00abf0;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 1px;
    color: #081b29;
    z-index: 1;
    overflow: hidden;
    transition: 0.5s;
    text-decoration: none;

    background: transparent;
    color: #ededed;

    &:hover {
      color: #081b29;
      &::before {
        width: 100%;
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: #00abf0;
      z-index: -1;
      transition: 0.5s;
    }
  }

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 50px;
    gap: 10px;
  }
`;

const SocialLinks = styled.div`
  position: absolute;
  bottom: 150px;
  width: 170px;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background: transparent;
    border: 0.2rem solid #00abf0;
    border-radius: 50%;
    font-size: 20px;
    color: #00abf0;
    z-index: 1;
    overflow: hidden;
    transition: 0.5s;

    &:hover {
      color: #081b29;
    }
  }
  a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #00abf0;
    z-index: -1;
    transition: 0.5s;
  }

  a:hover:before {
    width: 100%;
  }
  @media (max-width: 550px) {
    bottom: 30px;
    a {
      width: 40px;
      height: 40px;
    }
  }
`;

export default Home;
