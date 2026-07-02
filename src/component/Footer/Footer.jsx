import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-column">
          <h2 className="footer-logo">
            <i className="ri-shopping-cart-2-fill"></i> ShopCart
          </h2>
          <p>
            Shop the latest fashion, electronics, groceries and much more.
            Fast delivery, secure payments and easy returns.
          </p>

          <div className="social-icons">
            <a href="#"><i className="ri-facebook-fill"></i></a>
            <a href="#"><i className="ri-instagram-line"></i></a>
            <a href="#"><i className="ri-twitter-x-line"></i></a>
            <a href="#"><i className="ri-youtube-fill"></i></a>
          </div>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h5>Company</h5>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">Press</a>
        </div>

        {/* Help */}
        <div className="footer-column">
          <h5>Help</h5>
          <a href="#">Contact Us</a>
          <a href="#">FAQs</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
        </div>

        {/* Policy */}
        <div className="footer-column">
          <h5>Policies</h5>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Refund Policy</a>
          <a href="#">Cookie Policy</a>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h5>Contact</h5>

          <p>
            <i className="ri-map-pin-line"></i>
            New Delhi, India
          </p>

          <p>
            <i className="ri-mail-line"></i>
            support@shopcart.com
          </p>

          <p>
            <i className="ri-phone-line"></i>
            +91 000-000-00
          </p>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        © 2026 ShopCart. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;