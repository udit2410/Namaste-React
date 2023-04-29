import React from "react";
import ReactDOM from "react-dom/client";
/*const heading=React.createElement('div',{
    id:"parent"
},
[React.createElement('div',{
    id:"child"
},
[React.createElement('h1',{},"Hello! i am learning react"),React.createElement('h1',{},"Hello! i am learning react from As")]),
React.createElement('div',{
    id:"child2"
},
[React.createElement('h1',{},"Hello! i am learning react"),React.createElement('h1',{},"Hello! i am learning react from As")])
]
);
const jsxheading=<h1 className="heading">Rendering using jsx ! Namaste React</h1>;
const Rcomponent1=()=>(<div>
    <h1>I came here from another react component</h1>
</div>);
const Rcomponent=()=>(
       
      <>
      <></>
      {heading}
      <h1>I am inside a react compnonent</h1>
      {Rcomponent1()}
      </>
      
);
root.render(<Rcomponent />);
console.log(heading);*/

const Resobj={
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "148470",
        "name": "Madan Sweets and Restaurant",
        "uuid": "d47912d8-6c8e-4a2b-b046-a595bc9572a5",
        "city": "24",
        "area": "Nehru Nagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "sh9bbczncvembcm7ewa3",
        "cuisines": [
          "North Indian",
          "Desserts",
          "Sweets"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "slaString": "36 MINS",
        "lastMileTravel": 1.7999999523162842,
        "slugs": {
          "restaurant": "madan-sweets-and-restaurant-nehru-nagar-raj-nagar",
          "city": "noida"
        },
        "cityState": "24",
        "address": "Near Vaishnav Mandir, 23, 3rd, Rakesh Marg, K Block, Nehru Nagar, Ghaziabad, Uttar Pradesh 201001",
        "locality": "Rakesh Marg",
        "parentId": 15320,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "FREE DEL",
          "subHeader": "",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "148470",
          "deliveryTime": 36,
          "minDeliveryTime": 36,
          "maxDeliveryTime": 36,
          "lastMileTravel": 1.7999999523162842,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  }
const Header=()=>{
    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://icon-library.com/images/food-app-icon/food-app-icon-0.jpg" alt="" />
        </div>
        <div className="nav-list">
            <ul className="list">
                <li><a>Home</a> </li>
                <li><a className="contact-us">Contact us</a> </li>
                <li><a className="about-us">About us</a> </li>
                <li><a className="cart">Cart</a> </li>
            </ul>
        </div>
        </div>
    )
}

const Restaurant=(props)=>{
    const {resData}=props;
    return (
        <div className="resCard" style={{
            backgroundColor:"beige",
        }}>
            <img 
            src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+resData.data.data.cloudinaryImageId
            }
             alt="" className="res-logo" />
             <h3 className="res-name">{resData.data.data.name}</h3>
             <h4>{resData.data.data.avgRating} Stars {resData.data.data.sla.deliveryTime} mins</h4>
             <h4>{resData.data.data.cuisines.join(", ")}</h4>
             
        </div>
    )
}

const Body=()=>{
    return ( 
        <div className="body">
        
            <div className="search-bar">
                <input id="search" type="text" />
                <label htmlFor="search"> <button>Search</button> </label>
            </div>
            <div className="rest-container">
                 <Restaurant resData={Resobj} />
                


            </div>
        </div>
    )
}



const App=()=>{
    return (
        <div className="App">
            <Header />
            <Body />
            

        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);





