import Button from "@restart/ui/esm/Button";
import React from "react";
import {
	Col,
	Container,
	Form,
	FormControl,
	Nav,
	Navbar,
	NavDropdown,
	Row,
} from "react-bootstrap";
import "./MenuBar.css";
import googleIcon from "../../images/google.png";
import modalPic from "../../images/shopping.png";
const Menubar = () => {
	return (
		<div className="container">
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
						<Nav.Link className="text-dark">Create account</Nav.Link>
						<div className="modal-div">
							<NavDropdown title="It's free" id="navbarScrollingDropdown">
								<button
									className="btn btn-primary ms-2"
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
									className="btn btn-primary ms-2"
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
	);
};

export default Menubar;
