import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faLinkedinIn,
  faXing,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <Container className="mt-5">
          <Row>
            <Col md="4">
              <div className="brand my-4">
                {/* <img src="/path/to/logo.png" alt="Brand Logo" className="logo" /> */}
                <FontAwesomeIcon icon={faXing} className="logo" />
                <h5 className="brand-name footer-headings">
                  Silber Private Bank
                </h5>
              </div>
            </Col>
            <Col md="3">
              <h5 className="footer-headings">Quick Links</h5>
              <ul className="footer-list">
                <li>
                  <span>Our Bank</span>
                </li>
                <li>
                  <span>Investment Research</span>
                </li>
                <li>
                  <span>Other Products</span>
                </li>
                <li>
                  <span>Financing</span>
                </li>
                <li>
                  <span>Contack Us</span>
                </li>
              </ul>
            </Col>
            <Col md="3">
              <h5 className="footer-headings">Company</h5>
              <ul className="footer-list">
                <li>
                  <span>Terms & Condition</span>
                </li>
                <li>
                  <span>Privacy Policy</span>
                </li>
                <li>
                  <span>AML Policy</span>
                </li>
                <li>
                  <span>Latest News</span>
                </li>
              </ul>
            </Col>
            <Col md="2">
              <h5 className="footer-headings">Follow Us</h5>
              <div className="social-icons">
                <a href="https://facebook.com" className="social-icon">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://twitter.com" className="social-icon">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a href="https://twitter.com" className="social-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://twitter.com" className="social-icon">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <h5>Disclaimer:</h5>
          <div className="pb-4">
            <p>
              "Silber Bank" "Silber Private bank" and "Silber Bank Logo" are
              registered trademarks of Silber Private Bank IBC.
            </p>
            <p>
              This website is operated by Silber Private Bank with registration
              number HY01123056, 1257 Bonovo Rd, KM, which is an authorized and
              regulated international private bank, with license number
              B2023105. Opening any deposit, savings, cryptocurrency or trading
              accounts with the bank is subject to approval, know your customer,
              AML and KYT and Travel Rule procedures and registration to the
              website itself doesn't constitute account approval.
            </p>
            <p>
              We will not open accounts for residents of certain countries - for
              restricted countries, please consult our terms and conditions. Not
              all products are suitable for all kinds of investors. Information
              displayed on the website, including investment research available
              for registered users is general in nature and doesn't consider
              your personal investment objectives, your needs, or financial
              circumstances.
            </p>
            <p>
              Please make sure you fully understand all of our legal documents,
              terms and conditions and the risks involved in different products
              offered by the bank before you make any decision or action. You
              should seek independent advice.
            </p>
          </div>

          <hr />
          <div className="text-center">
            <span>
              ©Copyright 2024 Silber Private Bank | All Rights Reserved
            </span>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
