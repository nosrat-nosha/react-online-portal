import Button from "@restart/ui/esm/Button";
import React from "react";
import {
	Container,
	Form,
	FormControl,
	Nav,
	Navbar,
	NavDropdown,
} from "react-bootstrap";
import "./MenuBar.css";

const Menubar = () => {
	return (
		<div className="container">
			<Navbar bg="light" expand="lg">
				<Container fluid>
					<Navbar.Brand href="#">
						{" "}
						<span>ATG.</span> <span>W</span>{" "}
						<span>
							<i class="fas fa-bahai"></i>
						</span>{" "}
						<span>RLD</span>{" "}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll
						>
							<Form className="d-flex">
								<div className="search-input">
									<div className="input-icons">
										<i className="fas fa-search icon"></i>
										<input
											placeholder="search for your favorite groups in ATG"
											className="input-field form-control rounded-pill"
											type="text"
										/>
									</div>
								</div>
							</Form>
						</Nav>
						<Nav.Link className="text-dark">Create account</Nav.Link>
						<NavDropdown title="It's free" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">sing Up</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action4">sign in</NavDropdown.Item>
						</NavDropdown>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Menubar;
