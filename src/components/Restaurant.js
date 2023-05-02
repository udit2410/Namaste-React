import React from "react";
const Restaurant=(props)=>{
    const {resData}=props;
    return (
        <div className="resCard" style={{
            backgroundColor:"beige",
        }}>
            <img 
            src=
                {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+resData.data.cloudinaryImageId}
    
             alt="" className="res-logo" />
             <h3 className="res-name">{resData.data.name}</h3>
             <h4>{resData.data.avgRating} Stars {resData.data.sla.deliveryTime} mins</h4>
             <h4>{resData.data.cuisines.join(", ")}</h4>
             
        </div>
    )
}
export default Restaurant;