import React from "react";
import Products from "./Products";
import './all-products.css'
const AllProducts = () => {

    return(

        <div className="all-products">
            <Products id={1} quantite={4} image="src/assets/camera.webp" title="Camera 24h/24h with solar energie" price={69} />
            <Products id={2} quantite={4} image="src/assets/projector.webp" title="Projector" price={190} />
            <Products id={3} quantite={4} image="src/assets/water-heater.jpg" title="best water heater" price={79} />
            <Products id={4} quantite={4} image="src/assets/best-solar-water-pump.webp" title="best solar pump" price={33} />
        
        </div>
    );


}

export default AllProducts