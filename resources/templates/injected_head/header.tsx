import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
    return (
    <>
    <section className="header-wrapper style-two">
		<div className="container">
			<div className="row">
				<div className="col-lg-2 col-md-12 text-left">
					<a href="index.html" className="logo"><img src="images/logo.png" alt="logo"/></a>
					<a href="#" className="menu-click"><span></span><span></span><span></span></a>
				</div>
				<div className="col-lg-8 col-md-12">
					<nav id="main-menu" className="text-center">
						<ul>
							<li><a href="index.html">Home</a>
								<ul className="level-two">
									<li><a href="home-v2.html">Home 1</a></li>
									<li><a href="home-v3.html">Home 2</a></li>
									<li><a href="home-v4.html">Home 3</a></li>
									<li><a href="home-v5.html">Home 4</a></li>
									<li><a href="home-v6.html">Home 5</a></li>
									<li><a href="home-v7.html">Home 6</a></li>
									<li><a href="home-v8.html">Home 7</a></li>
									<li><a href="home-v9.html">Home 8</a></li>
									<li><a href="home-v10.html">Home 9</a></li>
									<li><a href="home-v12.html">Home 11</a></li>
									<li className="dots"><a href="home-v13.html">Home 12</a>
										<ul className="level-three">
											<li><a href="home-v14.html">Style 1</a></li>
											<li><a href="home-v15.html">Style 2</a></li>
											<li><a href="home-v16.html">Style 3</a></li>
											<li><a href="home-v17.html">Style 4</a></li>
										</ul>
									</li>
									<li><a href="home-v18.html">Home 13</a></li>
									<li><a href="home-v19.html">Home 14</a></li>
									<li><a href="home-v20.html">Home 15</a></li>
								</ul> 
							</li>
							<li><a href="category.html">Category</a></li>
							<li><a href="#">Pages</a>
								<ul className="level-two">
									<li className="dots"><a href="#">Single Blog</a>
										<ul className="level-three">
											<li><a href="single-v1.html">Single 1</a></li>
											<li><a href="single-v2.html">Single 2</a></li>
											<li><a href="single-v3.html">Single 3</a></li>
											<li><a href="single-v4.html">Single 4</a></li>
											<li><a href="single-v5.html">Single 5</a></li>
										</ul>
									</li>
									<li className="dots"><a href="#">Shop</a>
										<ul className="level-three">
											<li><a href="shop.html">Shop List</a></li>
											<li><a href="product-details.html">Single Product</a></li>
											<li><a href="cart.html">Cart</a></li>
											<li><a href="checkout.html">Checkout</a></li>
										</ul>
									</li>
									<li><a href="about-v2.html">About 2</a></li>
									<li><a href="contact-v2.html">Contact 2</a></li>
									<li><a href="404.html">404 page</a></li>
								</ul>
							</li>
							<li><a href="about.html">About</a></li>
							<li><a href="contact.html">Contact</a></li>
						</ul>
					</nav>
				</div>
				<div className="col-lg-2 col-md-4 text-right">
					<ul className="soical-icon-font list-inline pt-2 pb-0">
						<li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fa fa-linkedin"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fa fa-heart"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
	</section>
 </>
 );
    }

export default Header;