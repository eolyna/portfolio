import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';


export const Footer = () =>{
    return(
        <footer className = "footer">
            <Container>
                <Row className="align-item-center">
                <Col sm ={6}>
                <img src ={logo} alt ="logo"></img>
                </Col>
                <Col sm ={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href ="https://www.linkedin.com/in/julie-aubert-014225248/"><img src= {navIcon1}/></a>
                        <a href ="https://github.com/eolyna"><img src= {navIcon2}/></a>
                    </div>
                    <p>CopyRight 2022.All Right Reserved </p>
                </Col>
                </Row>
            </Container>
        </footer>
    )

}