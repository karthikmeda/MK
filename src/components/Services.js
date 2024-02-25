/* eslint-disable jsx-a11y/img-redundant-alt */
import Card from "./Card";
const myImage1 = require('../img/printerimg.jpg');
const myImage2 = require('../img/fancyimg.jpg');
const myImage3 = require('../img/mobileimg.jpg');

function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">OUR SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <img src={myImage1} alt="image" />

                        <Card title="Printing Service" text= 
"In our esteemed store, we offer a premier printing service that prides itself on quality and excellence. From printing cherished memories captured on your mobile device to bringing to life any image sourced from the internet, our printing facility stands ready to fulfill your every need with precision and care." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <img src={myImage2}  alt="image" />

                    <Card title="Fancy Items"  text= "In our store, we offer an exquisite collection of fancy items catering to children, girls, and women. From elegant bangles to charming hair clips and much more, discover the perfect adornments to elevate any outfit and occasion." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <img src={myImage3} alt="image" />

                    <Card
  title="Recharges"
  text={
    <div>
      In our store, we offer recharges for all types of mobile SIM cards. Stay
      connected effortlessly with our convenient recharge services. Whether
      it's for your phone, family, or business, we've got you covered.
      Experience seamless top-ups and never run out of talk time or data again.
      <br />
      Visit us today and keep your communication flowing!
    </div>
  }
/>

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
