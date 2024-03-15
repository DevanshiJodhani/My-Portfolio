import styled from "styled-components";

const Header = (props) => {
    return(
        <Container>
            <Content>
                <Logo>
                    <a href="#home">
                        <img src="./images/my.jpg" alt="" />
                    </a>
                </Logo>
                <Navbar>
                    <li>
                        <img src="./images/home.png" alt="" />
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <img src="./images/about.png" alt="" />
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <img src="./images/skill.png" alt="" />
                        <a href="#skill">Skills</a>
                    </li>
                    <li>
                        <img src="./images/project.png" alt="" />
                        <a href="#project">Project</a>
                    </li>
                    <li>
                        <img src="./images/contact.png" alt="" />
                        <a href="#contact">Contact</a>
                    </li>
                </Navbar>
                <SoicalIcon>
                    <li>
                        <a href="https://www.linkedin.com/in/devanshi-jodhani-5a31b324b/" target="_blank">
                            <img src="./images/linkedin.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/devanshi_4505" target="_blank">
                            <img src="./images/x.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/DevanshiJodhani" target="_blank">
                            <img src="./images/github.png" alt="" />
                        </a>
                    </li>
                </SoicalIcon>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    
    `;

const Content = styled.div`
    border-right: 1px solid #ffffff44;
    position: fixed;
    padding: 80px 100px;
    top:0;
    left: 0;
    max-width: 130px;
    height: 100vh;

    @media (max-width: 850px) {
        padding: 40px 20px;   
        width: 100px;
    }
    
    @media (max-width: 550px) {
        padding: 40px 5px;   
        width: 55px;
    }
`;

const Logo = styled.div`
    font-size: 25px;
    width: 180px;
    height: 180px;
    background-color: #ffffff44;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    a{
        width: 160px;
        height: 160px;
        background-color: #fff;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

    }
    
    img{
        object-position: center;
        object-fit: contain;
        width: 100%;
    }

    @media (max-width: 850px) {
        width: 90px;
        height: 90px;

        a{
            width: 80px;
            height: 80px;
        }
    }

    @media (max-width: 550px) {
        width: 50px;
        height: 50px;

        a{
            width: 40px;
            height: 40px;
        }
    }
`;

const Navbar = styled.div`
    position: fixed;
    margin-top: 100px;
    li{
        list-style: none;

        display: flex;
        align-items: center;
        margin-bottom: 15px;
        padding: 10px 16px;
        cursor: pointer;
        border-radius: 15px;

        &:hover{
            background-color: #ffffff25;
        }

        a{
            font-weight: 600;
            color: #fff;
            text-decoration: none;
            margin-left: 10px;
            font-size: 20px;
        }

        img{
            width: 30px;
        }
        @media (max-width: 850px) {
            a{
                font-size: 14px;
            }
            img{
                width: 20px;
            }
        }
    }


    @media (max-width: 550px) {
        margin-top: 30px;
        
        &::before{
        content: '';
        position: absolute;
        width: 70px;
        height: 1px;
        background: #ffffff44;
        bottom:0;
        left: -10px;
    }
            a {
                display: none;
            }
            img{
                width: 18px;
            }

            
        }
`;

const SoicalIcon = styled.div`
    
    margin-top: 500px;
    display: flex;
    align-items: center;
    justify-content: center;

    li{
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;
        padding: 10px 16px;
        cursor: pointer;
        border-radius: 15px;

        &:hover{
            background-color: #ffffff25;
        }
    }
    img{

        width: 25px;
    }

    @media (max-width: 850px) {
        margin-top: 380px;
        display: flex;
        flex-direction: column;
    }
`;

export default Header;