const myImage1 = require('../img/aboutimg.jpg');
function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={myImage1} width={400}  />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">About Our Shop</h2>
            <div >
  <p>
    Welcome to MK mart, serving customers since 2005. Our shop is owned by Mr.
    Naga Raju and Ms. Sridevi.
    <br></br>
    <br></br>
     Located in YS Jayamma Colony, Pulivendula,
    516390, we take pride in providing exceptional service to our customers.
    Check the below details to contact us.
  </p>
  <p>
    At our store, we offer a wide range of products to meet your needs. From
    groceries to household essentials, you'll find everything you're looking
    for under one roof. Our friendly staff is dedicated to ensuring that your
    shopping experience is convenient and enjoyable.
  </p>
  <p>
    We believe in building strong relationships with our customers and
    community. That's why we go above and beyond to provide personalized
    service and support local initiatives. When you shop with us, you're not
    just a customer  you're part of our family.
  </p>
  <p>
    Visit us today and experience the difference at our shop. We look forward
    to serving you and exceeding your expectations.
  </p>
</div>

          </div>
        </div>
      </div>
    </>
  );
}
export default About;
