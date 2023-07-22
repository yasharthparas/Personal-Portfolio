/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm";
import linkedin from "../assets/img/nav-icon1.svg";
import facebook from "../assets/img/nav-icon2.svg";
import instagram from "../assets/img/nav-icon3.svg";
import github from '../assets/img/github.png'
import logo1 from '../assets/img/code.png'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/*<MailchimpForm />*/}
          <Col size={12} sm={3}>
            <img src={logo1} alt="Logo" />
          </Col>
          <Col size={12} sm={6}>
            <div  className="quote">
            <h1>“ In order to be irreplaceable, one must always be different ”</h1>
            <p>– Coco Chanel</p>
            </div>
          </Col>
          <Col size={12} sm={3} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yasharth-sharma"><img src={linkedin} alt="Icon" /></a>
              <a href="https://www.facebook.com/yasharthparas.sharma"><img src={facebook} alt="Icon" /></a>
              <a href="https://www.instagram.com/shre_yash_1202"><img src={instagram} alt="Icon" /></a>
              <a href="https://github.com/yasharthparas"><img src={github} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}