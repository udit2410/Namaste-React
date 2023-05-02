import React, { useState } from "react";
import Restaurant from "./Restaurant";

    import { useEffect } from "react";


const Body=()=>{
    let [filterResobj,setfilterResobj]=useState([]);
    let [AllResobj,setAllResobj]=useState([]);
   const [searchText,setsearchText]=useState("");
   const filterRes=(searchText,filterResobj)=>{
          return filterResobj.filter((Restaurant)=>{
            return Restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase());
           });

   }
   
   useEffect(()=>{
         getRestaurants();  
   },[]);


   async function getRestaurants(){
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6643697&lng=77.43864289999999&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING");
    const json= await data.json();
    console.log(json);
    setfilterResobj(json.data.cards[2].data.data.cards);
    setAllResobj(json.data.cards[2].data.data.cards);
   }
   console.log("render");
   if(filterResobj.length===0){
    return <h1>No such Restaurant Found</h1>;
   }

    return ( 
        <div className="body">
        
            <div className="search-bar">
               <input type="text" className="searchButton" value={searchText} onChange={(e)=>{
                    setsearchText(e.target.value);
               }} />

               <button className="searchButton" onClick={()=>{
                const data=filterRes(searchText,AllResobj);
                setfilterResobj(data);
               }}>search</button>

              










                <button className="filter-btn" onClick={()=>{
                   const filtered=filterResobj.filter((restaurant)=>{
                        return restaurant.data.avgRating>=4;
                    })
                    setfilterResobj(filtered);
                    

                }}>See Top Rated Restaurants</button>
        
            </div>
            <div className="rest-container">
                    
                 {
                    filterResobj.map((restaurant)=>(
                        <Restaurant key={restaurant.data.id} resData={restaurant} />
                        
                    ))
                 };
                


            </div>
        </div>
    )
}
export default Body;