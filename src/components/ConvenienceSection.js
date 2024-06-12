import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Button,
} from "reactstrap";

import imgWealth from "../assets/images/cards/Firefly Wealth Management, money, asset 967.jpg";
import imgVirtualAssets from "../assets/images/cards/Firefly International Corporate Banking 29939.jpg";
import imgPrivateBanking from "../assets/images/cards/Firefly banking, financing 967.jpg";

function ConvenienceSection() {
  const cardsData = [
    {
      image: imgWealth,
      title: "Wealth Management",
      description:
        "Best way to grow your wealth, thru estate management, personalised strategies tailored to your financial goals.",
    },
    {
      image: imgVirtualAssets,
      title: "Virtual Assets Services",
      description:
        "We are able to offer vast array of virtual asset services to our clients. Including wallet and exchange services.",
    },
    {
      image: imgPrivateBanking,
      title: "Exclusive Private Banking",
      description:
        "Bespoke dedicated client services and privileged access to specialised financial services catering to your unique needs.",
    },
  ];

  return (
    <div className="w-75 mx-auto py-5 convenience-section">
      <div className="text-center">
        <Button className="convenience-btn primary-bg">
          Ready to Create An Account?
        </Button>
      </div>
      <h1 className="text-center my-5">
        Get Convenience & Security With Our <br /> Smart Banking System
      </h1>
      <Container>
        <Row className="convenience-card-container">
          {cardsData.map((card, index) => (
            <Col key={index} className="convenience-custom-card-col">
              <Card className="convenience-custom-card">
                <CardImg
                  top
                  width="100%"
                  src={card.image}
                  alt="Card image cap"
                />
                <CardBody className="text-center p-4">
                  <CardTitle tag="h5">{card.title}</CardTitle>
                  <hr className="convenience-card-divider" />
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

export default ConvenienceSection;
