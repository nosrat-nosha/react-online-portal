import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
	return (
		<div className="banner">
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
