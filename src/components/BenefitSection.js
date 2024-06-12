import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

function BenefitSection() {
  const benefits = [
    {
      icon: "fas fa-mobile-screen-button",
      title: "Online Banking",
      description:
        "Access your account anytime, anywhere, with our advanced online banking application without compromising security.",
    },
    {
      icon: "fas fa-money-bill-transfer",
      title: "Treasury Management",
      description:
        "Services and solutions that optimise an organisations liquidity, manage its financials risks and handle its operations for cash and investments.",
    },
    {
      icon: "fab fa-creative-commons-nc",
      title: "No Account Opening Fees",
      description:
        "We don't charge any fees for personal account opening, and maintenance of any of our accounts is free to charge as well, as long as you meet minimum deposit standards.",
    },
    {
      icon: "far fa-credit-card",
      title: "Get Debit Card",
      description:
        "For our private banking clients, we are working on option to have a debit card associated with their account.",
    },
    {
      icon: "fas fa-file-invoice-dollar",
      title: "Term Deposits",
      description:
        "Earn interest on your funds deposited with our bank. We offer very attractive yield on both short term and long term term deposits.",
    },
    {
      icon: "far fa-file-lines",
      title: "Custodial Services",
      description:
        "Secure storage, safekeeping and management of financial assets, including securities, precious metals, virtual assets for individuals and institutions.",
    },
  ];
  return (
    <div className="benefit-section my-4">
      <h1 className="benefit-heading">Benefits Of Banking With Silber Private Bank</h1>
      <Container className="my-5 w-75">
        <Row>
          {benefits.map((benefit, index) => (
            <Col
              key={index}
              xs={12}
              md={6}
              className="mb-4 d-flex align-items-center"
            >
              <div className="benefit-icon-container d-flex align-items-center justify-content-center me-3">
                <i className={`${benefit.icon} fa-2x`}></i>
              </div>
              <div>
                <h5 className="benefit-title">{benefit.title}</h5>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="d-flex justify-content-center mb-5">
        <Button size="lg" className="me-4 benefit-btn primary-bg">Contact Us</Button>
        <Button size="lg" outline className="benefit-btn primary-outlined">Get Started</Button>
      </div>
    </div>
  );
}

export default BenefitSection;
