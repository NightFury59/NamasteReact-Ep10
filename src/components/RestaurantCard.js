// Below in RestaurantCard Component, resData is the prop, resObj is the argument.

import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
      const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;
      const { deliveryTime } = resData?.info.sla;
      return (
          <div className="p-4 m-4 w-52 rounded-md bg-gray-100 hover:bg-gray-200">
              <img
              className="rounded-sm" 
              alt="res-logo" 
              src={CDN_URL + cloudinaryImageId} />
              <h3 className="font-bold py-2 text-lg">{name}</h3>
              <h4 className="">{cuisines.join(", ")}</h4>
              <h4 className="">{avgRating}</h4>
              <h4 className="">{costForTwo}</h4>
              <h4 className="">{sla?.slaString}</h4>
          </div>
      )
  }

export default RestaurantCard;