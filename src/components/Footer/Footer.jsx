import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
	let date = new Date();
	let year = date.getFullYear();
	return (
		<Container fluid className="footer">
			<Row>
				<Col md="4" className="footer-copywright">
					<span>Dedicated to creating impactful solutions!</span>
				</Col>
				<Col md="4" className="footer-copywright">
					<span>Copyright © {year}</span>
				</Col>
				<Col md="4" className="footer-body">
					<ul className="footer-icons">
						<li className="social-icons">
							<a
								href="https://github.com/hidayatulnasution9?tab=repositories"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="github">
								<AiFillGithub />
							</a>
						</li>

						<li className="social-icons">
							<a
								href="https://www.linkedin.com/in/hidayatul-nasution-6317a824b/"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="linkedin">
								<FaLinkedinIn />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://wa.me/6281248119578"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="leetcode">
								<FaWhatsappSquare />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
