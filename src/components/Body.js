import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const[filteredRestaurants, setfilteredRestaurants] = useState([]);



    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const info = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.596605200441022&lng=73.89823459088804&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await info.json();

        setListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // if (isLoading) {
    //     return <Shimmer />;
    // }

    return listOfRestaurants.length === 0 ? ( 
    <Shimmer /> 
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={() => {
                        // implement the filter button and update the UI
                        console.log(searchText)

                        const filterRestaurants = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )

                        setfilteredRestaurants(filterRestaurants);
                    }}>Search</button> 
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.4);
                    console.log(listOfRestaurants);
                    setListOfRestaurants(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                  filteredRestaurants.map((restaurant) => (
                <Link 
                  key={restaurant.info.id} 
                  to={"/restaurants/" + restaurant.info.id}>
                    <RestaurantCard resData = {restaurant} />
                </Link>))
                }     
            </div>
        </div>
    )
}

export default Body;