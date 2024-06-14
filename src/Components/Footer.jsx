import styled from 'styled-components';

const Footer = (props) => {
  return (
    <Container>
      <Text>
        <p>Copyright &copy; 2024 by Devanshi Jodhani | All Rights Reserved.</p>
      </Text>
      <Icon>
        <a href="#home">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </Icon>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 9%;

  @media (max-width: 990px) {
    padding: 10px 4%;
  }
`;

const Text = styled.div`
  p {
    font-size: 18px;
  }
  @media (max-width: 500px){
    p{
        font-size: 14px;
    }
  }
`;

const Icon = styled.div`
  a {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    background: #00abf0;
    border: 2px solid #00abf0;
    border-radius: 10px;
    z-index: 1;
    overflow: hidden;
    text-decoration: none;

    i {
      font-size: 25px;
      color: #081b29;
      transition: 0.5s;
    }
  }

  a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #112e42;
    z-index: -1;
    transition: 0.5s;
  }
  a:hover::before {
    width: 100%;
  }
  a:hover{
    i{
        color: #00abf0;
    }
  }

  @media (max-width: 500px) {
    margin-top: 10px;
    a{
        padding: 8px;

        i{
            font-size: 18px;
        }
    }
  }
`;

export default Footer;
