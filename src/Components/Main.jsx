import styled from "styled-components";
import Header from "./Header";

const Home = (props) => {
    return (
        <Container>
            <Background>
                <Square>
                    <span style={{ "--i": 11 }}></span>
                    <span style={{ "--i": 12 }}></span>
                    <span style={{ "--i": 24 }}></span>
                    <span style={{ "--i": 10 }}></span>
                    <span style={{ "--i": 14 }}></span>
                    <span style={{ "--i": 23 }}></span>
                    <span style={{ "--i": 18 }}></span>
                    <span style={{ "--i": 16 }}></span>
                    <span style={{ "--i": 19 }}></span>
                    <span style={{ "--i": 20 }}></span>
                    <span style={{ "--i": 22 }}></span>
                    <span style={{ "--i": 25 }}></span>
                    <span style={{ "--i": 18 }}></span>
                    <span style={{ "--i": 29 }}></span>
                    <span style={{ "--i": 14 }}></span>
                    <span style={{ "--i": 13 }}></span>
                    <span style={{ "--i": 22 }}></span>
                    <span style={{ "--i": 15 }}></span>
                    <span style={{ "--i": 10 }}></span>
                    <span style={{ "--i": 19 }}></span>
                    <span style={{ "--i": 23 }}></span>
                    <span style={{ "--i": 26 }}></span>
                    <span style={{ "--i": 12 }}></span>
                    <span style={{ "--i": 18 }}></span>
                    <span style={{ "--i": 25 }}></span>
                    <span style={{ "--i": 19 }}></span>
                    <span style={{ "--i": 28 }}></span>
                    <span style={{ "--i": 30 }}></span>
                    <span style={{ "--i": 14 }}></span>
                    <span style={{ "--i": 16 }}></span>
                    <span style={{ "--i": 10 }}></span>
                    <span style={{ "--i": 25 }}></span>
                    <span style={{ "--i": 13 }}></span>
                    <span style={{ "--i": 18 }}></span>
                    <span style={{ "--i": 22 }}></span>
                    <span style={{ "--i": 10 }}></span>
                    <span style={{ "--i": 27 }}></span>
                    <span style={{ "--i": 11 }}></span>
                    <span style={{ "--i": 12 }}></span>
                    <span style={{ "--i": 24 }}></span>
                    <span style={{ "--i": 10 }}></span>
                    <span style={{ "--i": 14 }}></span>
                    <span style={{ "--i": 23 }}></span>
                    <span style={{ "--i": 18 }}></span>
                    <span style={{ "--i": 16 }}></span>
                    <span style={{ "--i": 19 }}></span>
                    <span style={{ "--i": 20 }}></span>
                    <span style={{ "--i": 22 }}></span>
                    <span style={{ "--i": 25 }}></span>
                    <span style={{ "--i": 18 }}></span>
                    <span style={{ "--i": 29 }}></span>
                    <span style={{ "--i": 14 }}></span>
                    <span style={{ "--i": 13 }}></span>
                    <span style={{ "--i": 22 }}></span>
                    <span style={{ "--i": 15 }}></span>
                    <span style={{ "--i": 10 }}></span>
                    <span style={{ "--i": 19 }}></span>
                    <span style={{ "--i": 23 }}></span>
                    <span style={{ "--i": 26 }}></span>
                    <span style={{ "--i": 12 }}></span>
                    <span style={{ "--i": 18 }}></span>
                    <span style={{ "--i": 25 }}></span>
                    <span style={{ "--i": 19 }}></span>
                    <span style={{ "--i": 28 }}></span>
                    <span style={{ "--i": 30 }}></span>
                    <span style={{ "--i": 14 }}></span>
                    <span style={{ "--i": 16 }}></span>
                    <span style={{ "--i": 10 }}></span>
                    <span style={{ "--i": 25 }}></span>
                    <span style={{ "--i": 13 }}></span>
                    <span style={{ "--i": 18 }}></span>
                    <span style={{ "--i": 22 }}></span>
                    <span style={{ "--i": 10 }}></span>
                    <span style={{ "--i": 27 }}></span>
                    <span style={{ "--i": 23 }}></span>
                    <span style={{ "--i": 26 }}></span>
                    <span style={{ "--i": 12 }}></span>
                    <span style={{ "--i": 18 }}></span>
                    <span style={{ "--i": 25 }}></span>
                    <span style={{ "--i": 19 }}></span>
                    <span style={{ "--i": 28 }}></span>
                    <span style={{ "--i": 30 }}></span>
                </Square>
            </Background>
            <Header />
            
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
`;

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

const Square = styled.div`
    position: relative;
    display: flex;

    span{
        position: relative;
        min-width: 15px;
        height: 15px;
        background: #ffffff;
        border-radius: 4px;
        margin: 0 4px;
        box-shadow: 0 0 10px #ffffff44, 0 0 20px #ffffff, 0 0 40px #ffffff;
        animation: animate 15s linear infinite;
        animation-duration: calc(50s / var(--i));
    }

`;

const Section = styled.section`
    margin: 280px 10px;
    display: flex;
    justify-content: space-between;
`;

const Content = styled.div``;



export default Home;