import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
	return (
		<div className="banner">
			<Row>
				<Col>
					<Navbar className="mobileNav-hidden">
						<Container>
							<Navbar.Brand href="#home">
								<i class="fas fa-arrow-left text-white"></i>
							</Navbar.Brand>
							<Navbar.Toggle />
							<Navbar.Collapse className="justify-content-end">
								<Navbar.Text>
									<Button
										className="btn text-white
									 btn-outline-dark mobileNav-button me-3"
									>
										Join Group
									</Button>
								</Navbar.Text>
							</Navbar.Collapse>
						</Container>
					</Navbar>
				</Col>
			</Row>
			<Row xs={1} md={2}>
				<Col>
					<p className="main-text">Computer Engineering</p>
					<p className="sub-text">142,765 computer Engneers Follow this</p>
				</Col>
			</Row>
		</div>
	);
};

export default Banner;
