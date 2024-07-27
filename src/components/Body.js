import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


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
        console.log(json);
        setListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1>"Looks like youre Offline, Check your internet connection!!"</h1>
    }

     return (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-1 bg-blue-100 m-4 border-black cursor-pointer rounded-md" onClick={() => {
                        // implement the filter button and update the UI
                        console.log(searchText)

                        const filterRestaurants = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )

                        setfilteredRestaurants(filterRestaurants);
                    }}>Search</button> 
                </div>
                <div className="m-4 p-4 flex items-center">
                <button className="topRatedRestaurant px-4 py-1 border-black bg-blue-100 cursor-pointer rounded-md" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.4);
                    console.log(listOfRestaurants);
                    setListOfRestaurants(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
                </div>
            </div>
            <div className="res-container flex flex-wrap">
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