import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaWhatsappSquare } from "react-icons/fa";
import "./Social.css";

const Social = () => {
	return (
		<Container style={{ padding: "30px" }}>
			<Row>
				<Col md={12} className="contact-social">
					<div className="contact-text">
						<h1>FIND ME ON</h1>
						<p>
							Please don't hesitate to reach out to me and{" "}
							<span className="yellow">connect.</span>
						</p>
					</div>
					<ul className="contact-social-links">
						<li className="contact-icons">
							<a
								href="https://github.com/hidayatulnasution9"
								target="_blank"
								rel="noreferrer"
								className="icon-color  contact-social-icons">
								<AiFillGithub />
							</a>
						</li>

						<li className="contact-icons">
							<a
								href="https://www.linkedin.com/in/hidayatul-nasution-6317a824b/"
								target="_blank"
								rel="noreferrer"
								className="icon-color  contact-social-icons">
								<FaLinkedinIn />
							</a>
						</li>
						<li className="contact-icons">
							<a
								href="https://wa.me/6281248119578"
								target="_blank"
								rel="noreferrer"
								className="icon-color contact-social-icons">
								<FaWhatsappSquare />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default Social;
