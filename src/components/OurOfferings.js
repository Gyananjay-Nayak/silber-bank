import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import building from "../assets/images/icons/buidling.svg";
import banking from "../assets/images/icons/mobile-dollar.svg";
import research from "../assets/images/icons/hand-holding-buld.svg";
import investment from "../assets/images/icons/investment.svg";

function OurOfferings() {
  const cardsDetails = [
    {
      title: "Personal Banking",
      description:
        "Wide range of services for every client. From savings to checking accounts, loans - ensuring secure and efficient management of personal finances",
      icon: building,
    },
    {
      title: "Corporate Banking",
      description:
        "Suite of services for small and medium businesses, ranging from cash management to strategic financing solutions.",
      icon: banking,
    },
    {
      title: "Research",
      description:
        "Access our first class investment research delivered straight to your client portal on daily basis, for the best investment decisions.",
      icon: research,
    },
    {
      title: "Unvestment",
      description:
        "Our clients can access large amount of different asset classes and strategies for optimal asset allocation.",
      icon: investment,
    },
  ];

  return (
    <div className="my-3">
      <h1 className="explore-heading mb-4">Explore Our Offerings...</h1>
      <Container className="py-2 w-75 mx-auto">
        <Row>
          {cardsDetails.map((card, index) => (
            <Col md="3" key={index} className="d-flex">
              <Card className="explore-custom-card">
                <CardBody className="explore-card-body">
                  <div className="explore-icon-container">
                    <img src={card.icon} alt="Icon" className="explore-icon" />
                  </div>
                  <CardTitle tag="h5">{card.title}</CardTitle>
                  <CardText>{card.description}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default OurOfferings;
