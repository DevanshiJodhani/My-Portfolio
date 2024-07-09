import styled from 'styled-components';

const Project = (props) => {
  return (
    <Container id="project">
      <Heading>
        <h2>
          My <span>Projects</span>
        </h2>
      </Heading>
      <Content>
        <Box>
          <Wrap>
            <ImgBox>
              <img src="./images/Natours.png" alt="Tour Booking Application" />
            </ImgBox>
            <Description>
              I have created a Tour Booking app using Node.js with MongoDB,
              Mongoose, REST APIs, and NoSQL database.
            </Description>
          </Wrap>
          <Btn>
            <a
              href="https://github.com/DevanshiJodhani/Natours"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        <Box>
          <Wrap>
            <ImgBox>
              <img src="./images/Disney.png" alt="Disney + Clone" />
            </ImgBox>
            <Description>
              I have created a Disney Clone using React.js, Firebase, and Styled
              Components.
            </Description>
          </Wrap>
          <Btn>
            <a
              href="https://github.com/DevanshiJodhani/Disney-Clone"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        <Box>
          <Wrap>
            <ImgBox>
              <img src="./images/Twitter.png" alt="Twitter Clone" />
            </ImgBox>
            <Description>
              I have created a Twitter Clone using React.js, Firebase, Styled
              Components, and Redux.
            </Description>
          </Wrap>
          <Btn>
            <a
              href="https://github.com/DevanshiJodhani/Twitter"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        <Box>
          <Wrap>
            <ImgBox>
              <img src="./images/Linkedin.png" alt="LinkedIn Clone" />
            </ImgBox>
            <Description>
            I have created a LinkedIn clone Using React.js, firebase, styled components and redux.
            </Description>
          </Wrap>
          <Btn>
            <a
              href="https://github.com/DevanshiJodhani/LinkedIn-Clone"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        <Box>
          <Wrap>
            <ImgBox>
              <img src="./images/Jio-cinema.png" alt="Jio Cinema Clone" />
            </ImgBox>
            <Description>
            I have created a Jio Cinema clone using React.js with the Vite framework, Firebase, and styled-components.
            </Description>
          </Wrap>
          <Btn>
            <a
              href="https://github.com/DevanshiJodhani/Jio-Cinema"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        <Box>
          <Wrap>
            <ImgBox>
              <img src="./images/Blog.png" alt="Blog App" />
            </ImgBox>
            <Description>
            I have created a Blog App using React.js with the Vite framework, Appwrite, and Tailwind CSS.
            </Description>
          </Wrap>
          <Btn>
            <a
              href="https://github.com/DevanshiJodhani/Blog-App"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        <Box>
          <Wrap>
            <ImgBox>
              <img src="./images/Dictonary.png" alt="Dictionary App" />
            </ImgBox>
            <Description>
            I have created a Dictionary App using HTML, CSS, and JavaScript.
            </Description>
          </Wrap>
          <Btn>
            <a
              href="https://github.com/DevanshiJodhani/Dictionary-App"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        <Box>
          <Wrap>
            <ImgBox>
              <img src="./images/Country.png" alt="Country Information App" />
            </ImgBox>
            <Description>
            I have created a Country Information App using HTML, CSS, and JavaScript with API integration.
            </Description>
          </Wrap>
          <Btn>
            <a
              href="https://github.com/DevanshiJodhani/Country-Information-App"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        <Box>
          <Wrap>
            <ImgBox>
              <img src="./images/Weather.png" alt="Weather App" />
            </ImgBox>
            <Description>
            I have created a Weather App using HTML, CSS and JavaScript with API integration.
            </Description>
          </Wrap>
          <Btn>
            <a
              href="https://github.com/DevanshiJodhani/Weather-App"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        <Box>
          <Wrap>
            <ImgBox>
              <img src="./images/FastNews.png" alt="Weather App" />
            </ImgBox>
            <Description>
            I have created a small news website using React.js with vite frame work, Node.js.
            </Description>
          </Wrap>
          <Btn>
            <a
              href="https://github.com/DevanshiJodhani/FastNews-newsApp"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
      </Content>
      
    </Container>
  );
};

const Container = styled.div`
  padding: 100px 20px;
  background: #112e42;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 990px) {
    padding: 50px 20px;
  }
`;

const Heading = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 1px;

  span {
    color: #00abf0;
  }
  @media (max-width: 450px) {
    font-size: 20px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 25px;
  gap: 50px; 

  @media (max-width: 990px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Box = styled.div`
  width: 500px;
  height: auto;

  @media (max-width: 550px) {
    width: 450px;
  }
  @media (max-width: 400px) {
    width: 300px;
  }
`;

const Wrap = styled.div`
  width: 500px;
  height: 300px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 1px solid rgba(249, 249, 249, 0.1);
    cursor: pointer;
    transition: 0.5s ease;

    &:hover{
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
  @media (max-width: 550px) {
    width: 450px;
  }
  @media (max-width: 450px) {
    width: 300px;
    height: 280px;
  }
`;

const ImgBox = styled.div`
  width: 500px;
  height: 240px;
  overflow: hidden;
  background-color: #fff;
  border-bottom: 1px solid #aaa;

  img{
    width: 100%;
    height: 100%;
  }

  @media (max-width: 400px) {
    width: 300px;
    height: 200px;
  }
`;

const Description = styled.p`
  padding: 10px;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 600;

  @media (max-width: 400px) {
    padding:10px
  }
`;

const Btn = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    margin-left: 10px;
    width: 50px;
    height: 50px;
    border: 2px solid #00abf0;
    border-radius: 12px;
    background: transparent;
    font-size: 20px;
    color: #00abf0;
    z-index: 1;
    overflow: hidden;
    text-decoration: none;
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


export default Project;
