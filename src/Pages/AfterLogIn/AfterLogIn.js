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
import googleIcon from "../../images/google.png";
import modalPic from "../../images/shopping.png";

import img1 from "../../images/plant.jpg";
import user1 from "../../images/user1.jpg";
import user2 from "../../images/user2.jpg";
import user3 from "../../images/user3.jpg";
import "./AfterLogIn.css";
const AfterLogIn = () => {
	return (
		<div>
			{/* main nav  */}
			<div className="container-fluid">
				<Navbar expand="lg">
					<Container fluid>
						<Navbar.Brand>
							{" "}
							<span className="text-green">ATG.</span> <span>W</span>{" "}
							<span>
								<i className="fas fa-bahai text-green"></i>
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
								<Form className="d-flex search-box">
									<div className="search-input">
										<div className="input-icons">
											<i className="fas fa-search icon-menu"></i>
											<input
												placeholder="search for your favorite groups in ATG"
												className="input-field form-control rounded-pill"
												type="text"
											/>
										</div>
									</div>
								</Form>
							</Nav>
							<Nav.Link className="text-dark">
								<img className="img-nav" src={user1} alt="" />
								Siddharth Goyal
							</Nav.Link>
							<div className="modal-div">
								<NavDropdown
									className="text-dark
									"
									title="
								"
									id="navbarScrollingDropdown"
								>
									<button
										className="btn btn-primary"
										data-bs-toggle="modal"
										data-bs-target="#staticBackdrop"
									>
										sign up
									</button>
									{/* modal  */}
									<div
										className="modal fade signIn-modal"
										id="staticBackdrop"
										data-bs-backdrop="static"
										data-bs-keyboard="false"
										tabindex="-1"
										aria-labelledby="staticBackdropLabel"
										aria-hidden="true"
									>
										<div className="modal-dialog ">
											<div className="modal-content">
												<div className="modal-body">
													<div className=" modal-firstTitle">
														<button
															type="button"
															class="btn-close"
															data-bs-dismiss="modal"
															aria-label="Close"
														></button>{" "}
														Let's learn, share & inspire each other with our
														passion for computer engineering. Sign up now 🤘🏼
													</div>
													<div className="modal-title">Create Account</div>

													<Row>
														<Col
															className="
												  col-6 modal-desk"
														>
															<div class="input-group">
																<input
																	type="text"
																	placeholder="First name"
																	aria-label="First name"
																	class="form-control"
																/>
																<input
																	type="text"
																	placeholder="Last name"
																	aria-label="Last name"
																	class="form-control"
																/>
															</div>
															<input
																class="form-control"
																type="Email"
																placeholder="Email"
																aria-label=" input example"
															/>
															<input
																class="form-control"
																type="Email"
																placeholder="Password"
																aria-label=" input example"
															/>
															<div class="d-grid gap-2 mt-3">
																<button
																	class="btn btn-primary rounded-pill"
																	type="button"
																>
																	Sign In
																</button>
															</div>
															<div class="d-grid gap-2 mt-3">
																<button
																	class="btn btn-outline-light text-dark "
																	type="button"
																>
																	<i class="fab fa-facebook-square facebook-icon me-3"></i>
																	Sign in with Facebook
																</button>
															</div>
															<div class="d-grid gap-2 mt-3">
																<button
																	class="btn btn-outline-light text-dark "
																	type="button"
																>
																	<img
																		className="google-icon me-4"
																		src={googleIcon}
																		alt=""
																	/>
																	Sign in with Google
																</button>
															</div>
														</Col>
														{/* mobile  */}
														<Col
															className="
												  col-12 modal-mobile "
														>
															<div class="input-group">
																<input
																	type="text"
																	placeholder="First name"
																	aria-label="First name"
																	class="form-control"
																/>
																<input
																	type="text"
																	placeholder="Last name"
																	aria-label="Last name"
																	class="form-control"
																/>
															</div>
															<input
																class="form-control"
																type="Email"
																placeholder="Email"
																aria-label=" input example"
															/>
															<input
																class="form-control"
																type="Email"
																placeholder="Password"
																aria-label=" input example"
															/>
															<div class="d-grid gap-2 mt-3">
																<button
																	class="btn btn-primary rounded-pill"
																	type="button"
																>
																	Create Account
																</button>
															</div>
															<div class="d-grid gap-2 mt-3">
																<button
																	class="btn btn-outline-light text-dark "
																	type="button"
																>
																	<i class="fab fa-facebook-square facebook-icon me-3"></i>
																	Sign in with Facebook
																</button>
															</div>
															<div class="d-grid gap-2 mt-3">
																<button
																	class="btn btn-outline-light text-dark "
																	type="button"
																>
																	<img
																		className="google-icon me-4"
																		src={googleIcon}
																		alt=""
																	/>
																	Sign in with Google
																</button>
															</div>
														</Col>
														<Col className="col-6 modal-col">
															<p>
																Already have an account ?{" "}
																<span className="text-primary">Sign In</span>{" "}
															</p>
															<div className="">
																<img
																	className="modal-img"
																	src={modalPic}
																	alt=""
																/>
															</div>
														</Col>
													</Row>
												</div>
											</div>
										</div>
									</div>
									<NavDropdown.Divider />
									{/* modal for sign in   */}
									<button
										className="btn btn-primary"
										data-bs-toggle="modal"
										data-bs-target="#staticBackdrop"
									>
										sign in
									</button>
									{/* modal  */}
									<div
										className="modal fade signIn-modal"
										id="staticBackdrop"
										data-bs-backdrop="static"
										data-bs-keyboard="false"
										// tabindex="-1"
										// aria-labelledby="staticBackdropLabel"
										aria-hidden="true"
									>
										<div className="modal-dialog ">
											<button
												type="button"
												className="btn-close modal-close"
												data-bs-dismiss="modal"
												aria-label="Close"
											></button>
											<div className="modal-content">
												<div className="modal-body">
													<div className=" modal-firstTitle">
														{" "}
														Let's learn, share & inspire each other with our
														passion for computer engineering. Sign up now 🤘🏼
													</div>
													<div className="modal-title">Sign In</div>
													<Row>
														<Col
															className="
												  col-6 modal-desk"
														>
															<input
																class="form-control"
																type="Email"
																placeholder="Email"
																aria-label=" input example"
															/>
															<input
																class="form-control"
																type="Email"
																placeholder="Password"
																aria-label=" input example"
															/>
															<div class="d-grid gap-2 mt-3">
																<button
																	class="btn btn-primary rounded-pill"
																	type="button"
																>
																	Sign In
																</button>
															</div>
															<div class="d-grid gap-2 mt-3">
																<button
																	class="btn btn-outline-light text-dark "
																	type="button"
																>
																	<i class="fab fa-facebook-square facebook-icon me-3"></i>
																	Sign in with Facebook
																</button>
															</div>
															<div class="d-grid gap-2 mt-3">
																<button
																	class="btn btn-outline-light text-dark "
																	type="button"
																>
																	<img
																		className="google-icon me-4"
																		src={googleIcon}
																		alt=""
																	/>
																	Sign in with Google
																</button>
															</div>
															<p className="ms-3">Forgot Password</p>
														</Col>
														{/* mobile  */}
														<Col
															className="
												  col-12 modal-mobile "
														>
															<input
																class="form-control"
																type="Email"
																placeholder="Email"
																aria-label=" input example"
															/>
															<input
																class="form-control"
																type="Email"
																placeholder="Password"
																aria-label=" input example"
															/>
															<div class="d-grid gap-2 mt-3">
																<button
																	class="btn btn-primary rounded-pill"
																	type="button"
																>
																	Sign In
																</button>
															</div>
															<div class="d-grid gap-2 mt-3">
																<button
																	class="btn btn-outline-light text-dark "
																	type="button"
																>
																	<i class="fab fa-facebook-square facebook-icon me-3"></i>
																	Sign in with Facebook
																</button>
															</div>
															<div class="d-grid gap-2 mt-3">
																<button
																	class="btn btn-outline-light text-dark "
																	type="button"
																>
																	<img
																		className="google-icon me-4"
																		src={googleIcon}
																		alt=""
																	/>
																	Sign in with Google
																</button>
															</div>
															<p className="ms-3">Forgot Password</p>
														</Col>
														<Col className="col-6 modal-col">
															<p>
																Don’t have an account yet?{" "}
																<span className="text-primary">
																	Create new for free!
																</span>{" "}
															</p>
															<div className="">
																<img
																	className="modal-img"
																	src={modalPic}
																	alt=""
																/>
															</div>
														</Col>
													</Row>
												</div>
											</div>
										</div>
									</div>
								</NavDropdown>
							</div>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				{/* ============================================= */}
			</div>
			<hr />
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

							<Button className="btn btn-outline-secondary  ">
								<i class="fas fa-sign-out-alt m-1"></i>{" "}
								<span className="join-group ">Leave Group</span>
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
						</>
					</Col>
					{/* Second column */}
					<Col className="second-column">
						<Form className="">
							<div className="location-input">
								<div className="input-icons">
									<i className="fas fa-map-marker-alt icon " placeholder="">
										<span className="text-secondary"> Enter your location</span>
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
						<div className="mb-5">
							<i class="fas fa-thumbs-up me-2 mt-5"></i>
							<span>RECOMMENDED GROUPS</span>
						</div>
						<div className="mt-4">
							<div className="">
								<img className="cardUser-img" src={user1} alt="" />
								<span className="follow-name">Philosophy</span>
								<button className="btn button-follow">follow</button>
							</div>
						</div>
						<div className="mt-4">
							<div className="">
								<img className="cardUser-img" src={user1} alt="" />
								<span className="follow-name">Philosophy</span>
								<button className="btn button-follow">follow</button>
							</div>
						</div>
						<div className="mt-4">
							<div className="">
								<img className="cardUser-img" src={user1} alt="" />
								<span className="follow-name">Philosophy</span>
								<button className="btn button-follow">follow</button>
							</div>
						</div>
						<div className="mt-4">
							<div className="">
								<img className="cardUser-img" src={user1} alt="" />
								<span className="follow-name">Philosophy</span>
								<button className="btn button-follow">follow</button>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default AfterLogIn;
