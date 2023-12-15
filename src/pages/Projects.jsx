import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.png";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const Projects = () => {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					Recent Top <strong className="yellow">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={lift}
							isBlog={false}
							title="Pancong Lumer"
							description="The Product Services sharing platform has a responsive front-end design built using React and Tailwind. Users can easily view the various products offered. Contemporary snacks whose melts are addictive. Pancong Lumer is a traditional snack that tastes sweet and savory. We give pleasure to your taste buds 😉."
							ghLink="https://github.com/panconglumer/Pancong_Lumer"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={project}
							isBlog={false}
							title="Pelayanan Pendidikan Yayasan Fadli Fahmi Batam"
							description="This platform has a responsive interface built with Reactjs and Python(Flask), allowing users to Manage their Profiles, Manage Learning Materials, Activity Agendas, Student Assessments, System Usage Surveys, Report Systems easily through CRUD activities. The option to follow other users and interact with their posts (like or dislike) is also available, with suggestions for new users to follow. The backend is supported by Railway and Python(Flask) servers, while PostgreSQL is used as the database."
							ghLink="https://github.com/panconglumer/backend_tk"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={kickstart}
							isBlog={false}
							title="Calculate Optimize Routing"
							description="a service that can help users plan optimal routes for travel or deliveries. This can include applications in various industries such as logistics, freight forwarding and personal travel. Using sophisticated routing algorithms, such services attempt to optimize routes by considering factors such as distance, time, fuel costs, and perhaps special constraints such as weight restrictions or vehicle type."
							ghLink="https://github.com/hidayatulnasution9/master_react"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default Projects;
