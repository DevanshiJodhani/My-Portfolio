import styled from "styled-components";

const Home = (props) => {
    return(
        <Container>
            <Content>
                <Info>
                    <span>Hello...</span>
                    <h1>I'm Devanshi Jodhani,
                        <h4>Front-End Develper</h4>
                    </h1>
                    <p>
                        Hello everyone, My Name is Devnahis JOdhani and I'm frontend developer ith skills react.js, tailwind css, Java script, html and css and also i know some backend skill also like firebase authentication and storage use and also i have knowlage about appwrite.
                    </p>
                    <Button>
                        <li>
                            <a href="#">
                                <p>Contact Me</p>
                                <img src="./images/arrow.png" alt="" />    
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <p>Downlaod CV</p>
                                <img src="./images/download.png" alt="" />    
                            </a>
                        </li>
                    </Button>
                </Info>
                <Img>
                    <img src="./images/home-page.png" alt="" />
                </Img>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    position:fixed;
    margin-left: 500px; 
    align-items: center;
    margin-top: 200px;
    width: 1200px;
    height: auto;
    backdrop-filter: blur(10px);
    padding: 40px;

    @media (max-width: 850px) {
        margin-left: 150px;
        display: flex;
        flex-direction: column;
        width: 500px;
        margin-top: 50px;
    }
    @media (max-width: 550px){
        margin-left: 75px;
        width: 300px;
    }
`;

const Content = styled.div`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    gap: 250px;

    @media (max-width: 850px) {
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 45px;
    }
    

`;

const Info = styled.div`
    margin-top: 25px;
    span{
        font-size: 20px;
        letter-spacing: 1.5px;
        color: #7bff00;
    }
    h1{
        margin-top: 10px;
        font-size: 30px;
        line-height: 1.5;

        h4{
            font-size: 50px;
            color: #0ef;
        }
    }
    p{
        margin-top: 5px;
        line-height: 1.5;
    }
    @media (max-width: 850px){
        margin-top: 0px;
        p{
            font-size: 14px;
        }
    }
    @media (max-width: 550px){
        margin-top: 0px;
        h1{
            font-size: 20px;
            line-height: 1.2;

            h4{
                font-size: 30px;
            }
        }
        p{
            font-size: 12px;
        }
    }
`;

const Button = styled.div`
    display: flex;

    li{
        margin-top: 35px;
        list-style: none;
        display: flex;
        justify-content: flex-start;
        padding: 10px;

        a{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 16px 30px;
            border: 1px solid #ffffff44;
            text-decoration: none;
            color: #ffffff99;
            border-radius: 15px;
            transition: 0.3s ease-in-out;
            
            &:hover{
                background: #ffffff10;
                color: #ffffff;
            }
        }

        img{
            margin-left: 15px;
            background-color: #ffffff10;
            padding:8px;
            border-radius: 50%;
        }

    }

    @media (max-width: 550px){
        li{
            margin-top: 15px;
            padding: 5px;

            a{
                padding: 8px 12px;
            }

            img{
                margin-left: 8px;
                padding: 5px;
            }
        }
    }
`;

const Img = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 350px;
        animation: rotate 15s linear infinite; 
    }
    @media (max-width: 850px) {
        img{
            width: 280px;
        }
    }
    @media (max-width: 450px){
        img{
            width: 150px;
        }
    }
`;


export default Home;