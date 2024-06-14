import styled from 'styled-components';

const About = (props) => {
  return (
    <Container id="about">
      <Heading>
        <h2>
          About <span>Me</span>
        </h2>
      </Heading>
      <Img>
        <img src="./images/about.jpg" alt="" />
        <Circle>
          <span></span>
        </Circle>
      </Img>
      <Content>
        <h3>Frontend Developer!</h3>
        <p>
        As a dedicated and passionate full stack developer, I specialize in crafting dynamic and responsive web applications. With a robust skill set that includes React, Vitest testing, Firebase, Appwrite, JavaScript, Tailwind CSS, HTML, CSS, and Node.js, I bring a diverse range of expertise to the table. My journey in web development has allowed me to work on numerous projects, honing my skills and broadening my understanding of modern web technologies. Notable projects include a Disney clone, JioCinema clone, and LinkedIn clone using Firebase, as well as a blog app using Appwrite, all leveraging React for seamless user experiences. Additionally, I've developed several JavaScript applications such as a country information app, a dictionary app, a weather app, and a bookstore application. Each project highlights my ability to create interactive, user-friendly interfaces with responsive and visually appealing designs. With a keen eye for detail and a commitment to delivering high-quality work, I continually strive to enhance my skills and stay updated with the latest trends in web development, ensuring I can tackle complex problems and implement effective solutions.
        </p>
        <BtnBox>
          <a href="#">Read More</a>
        </BtnBox>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 80px 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background: #081b29;

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

const Img = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    border: 0.2rem solid #00abf0;
  }
  @media (max-width: 450px) {
    width: 200px;
    height: 200px;
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 0.2rem solid #00abf0;
    border-left-color: transparent;
    border-right-color: transparent;
    animation: rotate 6s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

const Content = styled.div`
  text-align: center;
  h3 {
    font-size: 30px;
  }
  p {
    text-align: left;
    font-size: 18px;
    margin: 20px 0 20px;
    line-height: 1.5;
  }
  @media (max-width: 450px) {
    p {
      font-size: 16px;
    }
  }
`;

const BtnBox = styled.div`
  display: inline-block;
  padding: 16px 30px;
  background: #00abf0;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.5s;
  a {
    text-decoration: none;
    font-size: 16px;
    color: #112e42;
    font-weight: 600;
    transition: 0.5s;
  }
  &:hover {
    background: #288db5;
    a {
      color: #fff;
    }
  }
`;

export default About;
