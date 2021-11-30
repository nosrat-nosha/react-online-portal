import Button from "@restart/ui/esm/Button";
import React from "react";
import {
	Card,
	Col,
	Container,
	Form,
	FormControl,
	Nav,
	Navbar,
	NavDropdown,
	Row,
} from "react-bootstrap";
import "./MainSection.css";
import img1 from "../../images/plant.jpg";
import user1 from "../../images/user1.jpg";
import user2 from "../../images/user2.jpg";
import user3 from "../../images/user3.jpg";
const MainSection = () => {
	return (
		<div>
			{/* navbar for desktop view  */}
			<Navbar
				className="
				desktopNav-hidden
			"
				bg="light"
				expand="lg"
			>
				<Container>
					<Navbar.Brand className="border-bottom " href="#">
						All Posts(32)
					</Navbar.Brand>

					<Navbar.Toggle
						aria-controls="navbarScroll 
					"
					/>
					<Navbar.Collapse id="navbarScroll nav-collaps ">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll
						>
							<Nav.Link href="#action1">Active</Nav.Link>
							<Nav.Link href="#action2">Event</Nav.Link>
							<Nav.Link href="#action2">Education</Nav.Link>
							<Nav.Link href="#action2">Job</Nav.Link>
						</Nav>
						<Form className="d-flex">
							<Button className="btn btn-post me-3">
								write a post <i className="fas fa-caret-down"></i>
							</Button>

							<Button className="btn btn-group  ">
								<i className="fas fa-users m-1"></i>{" "}
								<span className="join-group ">join group</span>
							</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
				<hr />
			</Navbar>
			{/* navbar for mobile view */}
			<Navbar className="mobileNav-hidden">
				<Container>
					<Navbar.Brand href="#home">Post (368)</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>
							<Button className="btn btn-post mobileNav-button me-3">
								Filter : All <i className="fas fa-caret-down"></i>
							</Button>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			{/* col-lg-6 col-sm-12 flex */}
			{/* post  */}
			<div className="container">
				<Row className="">
					<Col className="">
						<>
							{/*ARTICLE card 1 */}
							<Card className="card">
								<Card.Img
									variant="top"
									src={img1}
									className="card-img img-fluid"
								/>
								<Card.Body>
									<Card.Title>
										<i className="far fa-edit article"></i> Article
									</Card.Title>
									<Card.Text>
										<Row>
											<Col className="col-10">
												<span className="card-title">
													What if famous brands had regular fonts? Meet
													RegulaBrands!
												</span>
											</Col>
											<Col className="col-2">
												<i
													className="fas fa-ellipsis-h 
												 ellipssis"
												></i>
											</Col>
										</Row>
									</Card.Text>
									<Card.Text>
										<p className="text-secondary card-subTitle">
											I’ve worked in UX for the better part of a decade. From
											now on, I plan to rei…
										</p>
									</Card.Text>
									<Card.Text className="">
										<Row>
											<Col className="col-8">
												<div className="">
													<img
														className="img-fluid cardUser-img"
														src={user1}
														alt=""
													/>
													<span className="userName ">Sarthak Kamar</span>
													<p className="Dviews">1.4K views</p>
												</div>
											</Col>
											<Col className="col-4">
												<i className="far fa-eye Kviews"></i>{" "}
												<span
													className="
												Kviews"
												>
													1.4K views
												</span>
												<span className="share">
													<i className="fas fa-share-alt"> </i>
												</span>
												<Button
													className="btn w-100  btn-post share-button
													
												"
												>
													<i className="fas fa-share-alt p-1"></i>share
												</Button>
											</Col>
										</Row>
									</Card.Text>
								</Card.Body>
							</Card>
							<br />
							{/* EDUCATION card-2  */}
							<Card className="card education-card">
								<Card.Img
									variant="top"
									src={img1}
									className="card-img img-fluid"
								/>
								<Card.Body>
									<Card.Title>
										<i className="far fa-edit article"></i> Education
									</Card.Title>
									<Card.Text>
										<Row>
											<Col className="col-10">
												<span className="card-title">
													Tax Benefits for Investment under National Pension
													Scheme launched by Government
												</span>
											</Col>
											<Col className="col-2">
												<i
													className="fas fa-ellipsis-h 
												"
												></i>
											</Col>
										</Row>
									</Card.Text>
									<Card.Text>
										<p className="text-secondary card-subTitle">
											I’ve worked in UX for the better part of a decade. From
											now on, I plan to rei…
										</p>
									</Card.Text>
									<Card.Text className="">
										<Row>
											<Col className="col-8">
												<div className="">
													<img
														className="img-fluid cardUser-img"
														src={user2}
														alt=""
													/>
													<span className="userName ">Sarah West</span>
													<p className="Dviews">1.4K views</p>
												</div>
											</Col>
											<Col className="col-4">
												<i className="far fa-eye Kviews"></i>{" "}
												<span
													className="
												Kviews"
												>
													1.4K views
												</span>
												<span className="share">
													<i className="fas fa-share-alt"> </i>
												</span>
												<Button
													className="btn w-100  btn-post share-button
													
												"
												>
													<i className="fas fa-share-alt p-1"></i>share
												</Button>
											</Col>
										</Row>
									</Card.Text>
								</Card.Body>
							</Card>
							<br />
							{/* MEET UP card-3  */}
							<Card className="card meetup-card">
								<Card.Img
									variant="top"
									src={img1}
									className="card-img img-fluid"
								/>
								<Card.Body>
									<Card.Title>
										<i className="far fa-edit article"></i> Meetup
									</Card.Title>
									<Card.Text>
										<Row>
											<Col className="col-10">
												<span className="card-title">
													Finance & Investment Elite Social Mixer @Lujiazui
												</span>
											</Col>
											<Col className="col-2">
												<div className="dropdown1 ">
													{/* <Button className="">
														
													</Button> */}
													<div
														className="dropbtn fas fa-ellipsis-h 
														 text-center "
														style={{ float: "right" }}
													></div>
													<div className="dropdown-content">
														<a href="#">Edit</a>
														<a href="#">Report</a>
														<a href="#">Link 3</a>
													</div>
												</div>
											</Col>
										</Row>
									</Card.Text>
									<Card.Text>
										<Row>
											<Col className="col-lg-4 col-sm-6 date-name">
												<i class="fas fa-calendar-day"></i>
												<span> Fri, 12 Oct, 2018</span>
											</Col>
											<Col className="col-lg-4 col-sm-6">
												<i class="fas fa-map-marker-alt"></i>
												<span> Ahmedabad,India</span>
											</Col>
										</Row>
									</Card.Text>
									<Card.Text>
										<Row>
											<Col className="col-12">
												<div class="d-grid gap-2">
													<button
														className="btn btn-outline-secondary button-meetUp"
														type="button"
													>
														Visit Website
													</button>
												</div>
											</Col>
										</Row>
									</Card.Text>
									<Card.Text className="">
										<Row>
											<Col className="col-8">
												<div className="">
													<img
														className="img-fluid cardUser-img"
														src={user3}
														alt=""
													/>
													<span className="userName ">Ronal Jones</span>
													<p className="Dviews">1.4K views</p>
												</div>
											</Col>
											<Col className="col-4">
												<i className="far fa-eye Kviews"></i>{" "}
												<span
													className="
												Kviews"
												>
													1.4K views
												</span>
												<span className="share">
													<i className="fas fa-share-alt"> </i>
												</span>
												<Button
													className="btn w-100  btn-post share-button
													
												"
												>
													<i className="fas fa-share-alt p-1"></i>share
												</Button>
											</Col>
										</Row>
									</Card.Text>
								</Card.Body>
							</Card>
							<br />
							{/* JOB card-4  */}
							<Card className="orinary-card">
								<Card.Body>
									<Card.Title>
										<i className="far fa-edit article"></i> Job
									</Card.Title>
									<Card.Text>
										<Row>
											<Col className="col-10">
												<span className="card-title">Software Developer</span>
											</Col>
											<Col className="col-2">
												<i
													className="fas fa-ellipsis-h 
												"
												></i>
											</Col>
										</Row>
									</Card.Text>
									<Card.Text>
										<Row>
											<Col className="col-lg-4 col-sm-6">
												<i class="fas fa-briefcase"></i>
												<span> Innovaccer Analytics Private Ltd.</span>
											</Col>
											<Col className="col-lg-4 col-sm-6">
												<i class="fas fa-map-marker-alt"></i>
												<span> Ahmedabad,India</span>
											</Col>
										</Row>
									</Card.Text>
									<Card.Text>
										<Row>
											<Col className="col-12">
												<div class="d-grid gap-2">
													<button
														className="btn btn-outline-secondary button-job"
														type="button "
													>
														Apply on TimesJobs
													</button>
												</div>
											</Col>
										</Row>
									</Card.Text>
									<Card.Text className="">
										<Row>
											<Col className="col-8">
												<div className="">
													<img
														className="img-fluid cardUser-img"
														src={user3}
														alt=""
													/>
													<span className="userName ">Ronal Jones</span>
													<p className="Dviews">1.4K views</p>
												</div>
											</Col>
											<Col className="col-4">
												<i className="far fa-eye Kviews"></i>{" "}
												<span
													className="
												Kviews"
												>
													1.4K views
												</span>
												<span className="share">
													<i className="fas fa-share-alt"> </i>
												</span>
												<Button
													className="btn w-100  btn-post share-button
													
												"
												>
													<i className="fas fa-share-alt p-1"></i>share
												</Button>
											</Col>
										</Row>
									</Card.Text>
								</Card.Body>
							</Card>
						</>
					</Col>
					{/* Second column */}
					<Col className="second-column">
						<Form className="">
							<div className="location-input">
								<div className="input-icons">
									<i className="fas fa-map-marker-alt icon " placeholder="">
										<span className="text-secondary"> Nodia, India</span>
									</i>
									<i class="fas fa-pen icon2"></i>
									<input
										placeholder="
										"
										className="input-field form-control border-top-0 border-end-0 border-start-0"
										type="text"
									/>
								</div>
							</div>
						</Form>
						<div className="d-inline-block">
							<span>
								<i class="fas fa-exclamation-circle error-icon mt-3"></i>
							</span>
						</div>
						<div className="error-text d-inline-block ">
							<span className="">
								Your location will help us serve better <br /> and extend a
								personalised experience.
							</span>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default MainSection;
