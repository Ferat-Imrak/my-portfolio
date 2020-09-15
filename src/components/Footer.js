import React from 'react'
import '../assets/style/Footer.css'

const Footer = () => {
    return (
        <footer>
		<div className="container-fluid padding">
			<div className="row text-center">
				<div className="col-6">
					<p><h3>Phone Number</h3>(312) 778-3321</p>
				</div>
				<div className="col-6">
					<p><h3>Email Address</h3>feratimrak1@gmail.com</p>
				</div>
				<div className="col-12">
					<hr className="light-100" />
					<h5>&copy; feratimrak.com</h5>
				</div>
			</div>
		</div>
	</footer>
    )
}

export default Footer;