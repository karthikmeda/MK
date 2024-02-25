/* eslint-disable jsx-a11y/img-redundant-alt */
const myImage1 = require('../img/groceryimg.jpg');
const myImage2 = require('../img/groceryimg2.jpg');

function Header() {
  return (
    <header>
      <div className="image-container">
        <img src={myImage1} alt="image" className="image" />
        <img src={myImage2} alt="image" className="image" />
        <div className="text-overlay">
          <h3 className="quote">
            Bringing Freshness to Your Doorstep 
                            - Welcome to MK Mart</h3>
        </div>
      </div>
      <div className="headerbg"></div>
    </header>
  );
}

export default Header;
