import React from 'react';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <div className="content">
                <h1 className="homepage-title">Welcome to MK Mart</h1>
                <p className="homepage-text">Where happiness meets health! Shop for your favorite groceries and essentials with us.</p>
                <p className="homepage-text">Explore our wide range of categories:</p>
                
            </div>
            <div className="listofprod">

            <ul className="grocery-categories">
                    <li>Dairy & Eggs</li>
                    <li>Bakery</li>
                    <li>Pantry Staples</li>
                    <li>Frozen Foods</li>
                    <li>Beverages</li>
                    <li>Snacks</li>
                    <li>Condiments & Sauces</li>
                    <li>Canned Goods</li>
                    <li>Pasta & Grains</li>
                    <li>Fancy items</li>
                </ul>

            </div>
            
        </div>
        
    );
}

export default HomePage;
