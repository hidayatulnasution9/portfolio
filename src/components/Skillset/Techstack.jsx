import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiGit } from "react-icons/di";
import { SiHtml5 } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FcElectronics } from "react-icons/fc";
import { MdElectricalServices } from "react-icons/md";

const Techstack = () => {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiHtml5 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNodejs />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMysql />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<FaPython />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostgresql />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<FaAws />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<FcElectronics />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<MdElectricalServices />
			</Col>

			<Col xs={4} md={2} className="tech-icons">
				<DiGit />
			</Col>
		</Row>
	);
};

export default Techstack;
