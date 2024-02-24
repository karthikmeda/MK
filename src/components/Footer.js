import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">MK mart</h1>
                <p className="footer-text">
                  Easy to Shop feels you better.
        

                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">See More</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="headerbg"
                  > Home </Link>
                  </li>
                  <li>
                  <Link to="services" spy={true} smooth={true} duration={1000} > Services </Link>
                  </li>
                  <li>
                  <Link to="about-scroll" spy={true} smooth={true} duration={1000}>About Us  </Link>
                  </li>
                  <li>
                  <Link to="contact" spy={true} smooth={true} duration={1000}> Contact  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                <li>
                    <Link to="#" > Meda karthik</Link>
                  </li>

                  <li>
                    <a href="mailto:mkarthikmeda.com" >mkarthikmeda@gmail.com</a>
                  </li>
                  
                  <li>
                    <a href='tel:+918247418559'>📞call to 8247418559</a>
                  </li>
                  <li>
                    <a href='https://maps.app.goo.gl/bFW66ww8iv91Xh4r6'>Location:K.Velamavanipalle, Andhra Pradesh 516390</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/karthik__meda/" > Instagram</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/karthik-meda/"> Linkedin</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
