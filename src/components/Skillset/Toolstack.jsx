import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiVisualstudiocode,
	SiPostman,
	SiHeroku,
	SiVercel,
	SiNetlify,
} from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiRailway } from "react-icons/si";
import { SiPycharm } from "react-icons/si";
import { SiWebstorm } from "react-icons/si";
import { VscTools } from "react-icons/vsc";

const Toolstack = () => {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudiocode />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostman />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiVercel />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiRailway />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiFirebase />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPycharm />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiWebstorm />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<VscTools />
			</Col>
		</Row>
	);
};

export default Toolstack;
