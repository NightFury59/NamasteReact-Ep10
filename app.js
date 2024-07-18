import React from 'react';
import ReactDOM from 'react-dom/client';

/**
* Header 
*   - Logo
*   - Nav Items
* Body 
*   - Search
*   - RestaurantContainer
*       - RestaurantCard
*           - Image
*           - Name of Res, Star Ratings, Cuisines, delivery time.
* Footer
*   - Copyright
*   - Links
*   - Address
*   - Contact
**/

const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=restaurant-food&sf=&txt_keyword=All"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Contact us</li>
                <li>About</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

const RestaurantCard = (props) => {
  const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
    const { deliveryTime } = resData?.info.sla;
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img
            className="res-logo" 
            alt="res-logo" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime + " mins"}</h4>
        </div>
    )
}

const resList = [{
        info: {
          id: 284809,
          name: "Starbucks Coffee",
          cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/3/72a3ec5b-3f98-4801-9003-649ce284df04_284809.JPG",
          locality: "Koregaon Park",
          areaName: "Koregaon Park",
          costForTwo: "₹400 for two",
          cuisines: [
            "Beverages",
            "Cafe",
            "Snacks",
            "Desserts",
            "Bakery",
            "Ice Cream"
          ],
          avgRating: 4.4,
          parentId: 195515,
          avgRatingString: "4.4",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 38,
            lastMileTravel: 8.6,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "8.6 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2024-07-18 23:00:00",
            opened: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                description: "Delivery!"
              }
            ]
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "Delivery!",
                      imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                    }
                  }
                ]
              },
              textBased: {},
              textExtendedBadges: {}
            }
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL"
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
            }
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: 4.5,
              ratingCount: "5K+"
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        },{
          info: {
            id: 60832,
            name: "Irani Cafe",
            cloudinaryImageId: "lrgeojzdbhhwe2cqjz2n",
            locality: "North Avenue Road",
            areaName: "Kalyani Nagar",
            costForTwo: "₹200 for two",
            cuisines: [
              "Bakery",
              "Snacks",
              "Fast Food",
              "Desserts",
              "Beverages",
              "Street Food",
              "Indian"
            ],
            avgRating: 4.6,
            parentId: 4057,
            avgRatingString: "4.6",
            totalRatingsString: "10K+",
            sla: {
              deliveryTime: 33,
              lastMileTravel: 7.5,
              serviceability: "SERVICEABLE",
              slaString: "30-35 mins",
              lastMileTravelString: "7.5 km",
              iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
              nextCloseTime: "2024-07-18 23:59:00",
              opened: true
            },
            badges: {
              imageBadges: [
                {
                  imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                  description: "Delivery!"
                },
                {
                  imageId: "Rxawards/_CATEGORY-Snacks.png",
                  description: "Delivery!"
                }
              ]
            },
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {
                  badgeObject: [
                    {
                      attributes: {
                        description: "Delivery!",
                        imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                      }
                    },
                    {
                      attributes: {
                        description: "Delivery!",
                        imageId: "Rxawards/_CATEGORY-Snacks.png"
                      }
                    }
                  ]
                },
                textBased: {},
                textExtendedBadges: {}
              }
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
              }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
              aggregatedRating: {
                rating: "--"
              }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          } 
        }, {
                info: {
                  id: "13906",
                  name: "Wadeshwar",
                  cloudinaryImageId: "ee51fzavw0jgsryxkavp",
                  locality: "Kalyani Nagar",
                  areaName: "Kalyani Nagar",
                  costForTwo: "₹350 for two",
                  cuisines: [
                    "South Indian",
                    "North Indian",
                    "Chinese",
                    "Street Food",
                    "Desserts",
                    "Beverages"
                  ],
                  avgRating: 4.3,
                  parentId: "1770",
                  avgRatingString: "4.3",
                  totalRatingsString: "10K+",
                  sla: {
                    deliveryTime: 37,
                    lastMileTravel: 7.1,
                    serviceability: "SERVICEABLE",
                    slaString: "35-40 mins",
                    lastMileTravelString: "7.1 km",
                    iconType: "ICON_TYPE_EMPTY"
                  },
                  availability: {
                    nextCloseTime: "2024-07-18 22:55:00",
                    opened: true
                  },
                  badges: {
                    imageBadges: [
                      {
                        imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                        description: "Delivery!"
                      }
                    ]
                  },
                  isOpen: true,
                  aggregatedDiscountInfoV2: {},
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {
                        badgeObject: [
                          {
                            attributes: {
                              description: "Delivery!",
                              imageId: "Rxawards/_CATEGORY-South%20Indian.png"
                            }
                          }
                        ]
                      },
                      textBased: {},
                      textExtendedBadges: {}
                    }
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {}
                    }
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                  externalRatings: {
                    aggregatedRating: {
                      rating: "4.0",
                      ratingCount: "5K+"
                    },
                    source: "GOOGLE",
                    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
                  },
                  ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                }
        }, {
                info: {
                    id: "427775",
                    name: "Chaayos Chai+Snacks=Relax",
                    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_427775.JPG",
                    locality: "Bhawani Nagar",
                    areaName: "Kharadi",
                    costForTwo: "₹250 for two",
                    cuisines: [
                      "Bakery",
                      "Beverages",
                      "Chaat",
                      "Desserts",
                      "Home Food",
                      "Italian",
                      "Maharashtrian",
                      "Snacks",
                      "Street Food",
                      "Sweets"
                    ],
                    avgRating: 4.4,
                    parentId: "281782",
                    avgRatingString: "4.4",
                    totalRatingsString: "1K+",
                    sla: {
                      deliveryTime: 49,
                      lastMileTravel: 9.3,
                      serviceability: "SERVICEABLE",
                      slaString: "45-50 mins",
                      lastMileTravelString: "9.3 km",
                      iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                      nextCloseTime: "2024-07-19 04:00:00",
                      opened: true
                    },
                    badges: {
                      textExtendedBadges: [
                        {
                          iconId: "guiltfree/GF_Logo_android_3x",
                          shortDescription: "options available",
                          fontColor: "#7E808C"
                        }
                      ]
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "",
                                fontColor: "#7E808C",
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available"
                              }
                            }
                          ]
                        }
                      }
                    },
                    aggregatedDiscountInfoV3: {
                      header: "₹125 OFF",
                      subHeader: "ABOVE ₹199",
                      discountTag: "FLAT DEAL"
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {}
                      }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--"
                      }
                    },
                    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  }
        }, {
                    info: {
                      id: "696825",
                      name: "Blue Tokai Coffee Roasters",
                      cloudinaryImageId: "1a0521375f07155eda2f1ed263206831",
                      locality: "Kalyani Nagar",
                      areaName: "Kalyani Nagar",
                      costForTwo: "₹600 for two",
                      cuisines: [
                        "Cafe",
                        "Coffee",
                        "Beverages"
                      ],
                      avgRating: 4.7,
                      parentId: "2682",
                      avgRatingString: "4.7",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 35,
                        lastMileTravel: 7.5,
                        serviceability: "SERVICEABLE",
                        slaString: "35-40 mins",
                        lastMileTravelString: "7.5 km",
                        iconType: "ICON_TYPE_EMPTY"
                      },
                      availability: {
                        nextCloseTime: "2024-07-18 23:00:00",
                        opened: true
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "v1669879258/GFF_logo_new_xbycg6.png",
                            description: "gourmet"
                          }
                        ]
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "gourmet",
                                  imageId: "v1669879258/GFF_logo_new_xbycg6.png"
                                }
                              }
                            ]
                          },
                          textBased: {},
                          textExtendedBadges: {}
                        }
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹299"
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {}
                        }
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.4",
                          ratingCount: "100+"
                        },
                        source: "GOOGLE",
                        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
                      },
                      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    }
        }, {
                        info: {
                          id: "507940",
                          name: "EatFit",
                          cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/2/b83bc9a8-67dd-4e65-8738-47d72a7d9507_507940.JPG",
                          locality: "Ghole Road",
                          areaName: "Shivajinagar",
                          costForTwo: "₹270 for two",
                          cuisines: [
                            "Chinese",
                            "Healthy Food",
                            "Tandoor",
                            "Pizzas",
                            "North Indian",
                            "Thalis",
                            "Biryani"
                          ],
                          avgRating: 4.3,
                          parentId: "76139",
                          avgRatingString: "4.3",
                          totalRatingsString: "1K+",
                          sla: {
                            deliveryTime: 47,
                            lastMileTravel: 13.6,
                            serviceability: "SERVICEABLE",
                            slaString: "45-50 mins",
                            lastMileTravelString: "13.6 km",
                            iconType: "ICON_TYPE_EMPTY"
                          },
                          availability: {
                            nextCloseTime: "2024-07-18 23:40:00",
                            opened: true
                          },
                          badges: {
                            imageBadges: [
                              {
                                imageId: "Rxawards/_CATEGORY-Guiltfree.png",
                                description: "Delivery!"
                              }
                            ]
                          },
                          isOpen: true,
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {
                                badgeObject: [
                                  {
                                    attributes: {
                                      description: "Delivery!",
                                      imageId: "Rxawards/_CATEGORY-Guiltfree.png"
                                    }
                                  }
                                ]
                              },
                              textBased: {},
                              textExtendedBadges: {}
                            }
                          },
                          aggregatedDiscountInfoV3: {
                            header: "₹125 OFF",
                            subHeader: "ABOVE ₹199",
                            discountTag: "FLAT DEAL"
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {}
                            }
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                          externalRatings: {
                            aggregatedRating: {
                              rating: "--"
                            }
                          },
                          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        }
        }, {
                        info: {
                            id: "623598",
                            name: "Great Indian Khichdi by EatFit",
                            cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
                            locality: "Baif Road",
                            areaName: "Wagholi",
                            costForTwo: "₹200 for two",
                            cuisines: [
                              "Indian",
                              "Home Food",
                              "Healthy Food",
                              "Snacks"
                            ],
                            avgRating: 4.3,
                            veg: true,
                            parentId: "319582",
                            avgRatingString: "4.3",
                            totalRatingsString: "500+",
                            sla: {
                              deliveryTime: 46,
                              lastMileTravel: 10.2,
                              serviceability: "SERVICEABLE",
                              slaString: "45-50 mins",
                              lastMileTravelString: "10.2 km",
                              iconType: "ICON_TYPE_EMPTY"
                            },
                            availability: {
                              nextCloseTime: "2024-07-18 23:40:00",
                              opened: true
                            },
                            badges: {
                              imageBadges: [
                                {
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                  description: "pureveg"
                                }
                              ],
                              textExtendedBadges: [
                                {
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "brand",
                                  fontColor: "#7E808C"
                                }
                              ]
                            },
                            isOpen: true,
                            type: "F",
                            badgesV2: {
                              entityBadges: {
                                imageBased: {
                                  badgeObject: [
                                    {
                                      attributes: {
                                        description: "pureveg",
                                        imageId: "v1695133679/badges/Pure_Veg111.png"
                                      }
                                    }
                                  ]
                                },
                                textBased: {},
                                textExtendedBadges: {
                                  badgeObject: [
                                    {
                                      attributes: {
                                        description: "",
                                        fontColor: "#7E808C",
                                        iconId: "guiltfree/GF_Logo_android_3x",
                                        shortDescription: "brand"
                                      }
                                    }
                                  ]
                                }
                              }
                            },
                            aggregatedDiscountInfoV3: {
                              header: "₹125 OFF",
                              subHeader: "ABOVE ₹199",
                              discountTag: "FLAT DEAL"
                            },
                            differentiatedUi: {
                              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              differentiatedUiMediaDetails: {
                                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                                lottie: {},
                                video: {}
                              }
                            },
                            reviewsSummary: {},
                            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            restaurantOfferPresentationInfo: {},
                            externalRatings: {
                              aggregatedRating: {
                                rating: "--"
                              }
                            },
                            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          }
        }, {
                            info: {
                              id: "623601",
                              name: "HRX by EatFit",
                              cloudinaryImageId: "d8d85afa5c5e92461d30ff2ca867a587",
                              locality: "Baif Road",
                              areaName: "Wagholi",
                              costForTwo: "₹450 for two",
                              cuisines: [
                                "Healthy Food",
                                "Salads",
                                "Keto",
                                "Pastas"
                              ],
                              avgRating: 4.6,
                              parentId: "335529",
                              avgRatingString: "4.6",
                              totalRatingsString: "100+",
                              sla: {
                                deliveryTime: 49,
                                lastMileTravel: 10.2,
                                serviceability: "SERVICEABLE",
                                slaString: "45-50 mins",
                                lastMileTravelString: "10.2 km",
                                iconType: "ICON_TYPE_EMPTY"
                              },
                              availability: {
                                nextCloseTime: "2024-07-18 23:40:00",
                                opened: true
                              },
                              badges: {
                                textExtendedBadges: [
                                  {
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "brand",
                                    fontColor: "#7E808C"
                                  }
                                ]
                              },
                              isOpen: true,
                              type: "F",
                              badgesV2: {
                                entityBadges: {
                                  imageBased: {},
                                  textBased: {},
                                  textExtendedBadges: {
                                    badgeObject: [
                                      {
                                        attributes: {
                                          description: "",
                                          fontColor: "#7E808C",
                                          iconId: "guiltfree/GF_Logo_android_3x",
                                          shortDescription: "brand"
                                        }
                                      }
                                    ]
                                  }
                                }
                              },
                              aggregatedDiscountInfoV3: {
                                header: "₹125 OFF",
                                subHeader: "ABOVE ₹199",
                                discountTag: "FLAT DEAL"
                              },
                              differentiatedUi: {
                                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                differentiatedUiMediaDetails: {
                                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                                  lottie: {},
                                  video: {}
                                }
                              },
                              reviewsSummary: {},
                              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                              restaurantOfferPresentationInfo: {},
                              externalRatings: {
                                aggregatedRating: {
                                  rating: "--"
                                }
                              },
                              ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                            }
        }, {
                            info: {
                              id: "636808",
                              name: "The Flour Works",
                              cloudinaryImageId: "hplcewcwkijykcovzuph",
                              locality: "Kalyani Nagar",
                              areaName: "Kalyani Nagar",
                              costForTwo: "₹1000 for two",
                              cuisines: [
                                "Beverages",
                                "Italian",
                                "Bakery",
                                "Fast Food",
                                "European",
                                "Pizzas",
                                "Desserts"
                              ],
                              avgRating: 4.5,
                              parentId: "208292",
                              avgRatingString: "4.5",
                              totalRatingsString: "100+",
                              sla: {
                                deliveryTime: 49,
                                lastMileTravel: 7.5,
                                serviceability: "SERVICEABLE",
                                slaString: "45-50 mins",
                                lastMileTravelString: "7.5 km",
                                iconType: "ICON_TYPE_EMPTY"
                              },
                              availability: {
                                nextCloseTime: "2024-07-18 23:00:00",
                                opened: true
                              },
                              badges: {
                                imageBadges: [
                                  {
                                    imageId: "v1669879258/GFF_logo_new_xbycg6.png",
                                    description: "gourmet"
                                  }
                                ]
                              },
                              isOpen: true,
                              type: "F",
                              badgesV2: {
                                entityBadges: {
                                  imageBased: {
                                    badgeObject: [
                                      {
                                        attributes: {
                                          description: "gourmet",
                                          imageId: "v1669879258/GFF_logo_new_xbycg6.png"
                                        }
                                      }
                                    ]
                                  },
                                  textBased: {},
                                  textExtendedBadges: {}
                                }
                              },
                              aggregatedDiscountInfoV3: {
                                header: "₹125 OFF",
                                subHeader: "ABOVE ₹199",
                                discountTag: "FLAT DEAL"
                              },
                              differentiatedUi: {
                                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                differentiatedUiMediaDetails: {
                                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                                  lottie: {},
                                  video: {}
                                }
                              },
                              reviewsSummary: {},
                              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                              restaurantOfferPresentationInfo: {},
                              externalRatings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "5K+"
                                },
                                source: "GOOGLE",
                                sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
                              },
                              ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                            }
        }, {
                            info: {
                              id: "507945",
                              name: "Cheat Treats by Eatfit",
                              cloudinaryImageId: "e975b355e30661b40e3522641689cede",
                              locality: "Ghole Road",
                              areaName: "JM Road",
                              costForTwo: "₹250 for two",
                              cuisines: [
                                "Pizzas",
                                "Pastas",
                                "Burgers",
                                "Chinese",
                                "Italian",
                                "Desserts",
                                "Beverages"
                              ],
                              avgRating: 4.2,
                              parentId: "504312",
                              avgRatingString: "4.2",
                              totalRatingsString: "500+",
                              sla: {
                                deliveryTime: 53,
                                lastMileTravel: 13.5,
                                serviceability: "SERVICEABLE",
                                slaString: "50-55 mins",
                                lastMileTravelString: "13.5 km",
                                iconType: "ICON_TYPE_EMPTY"
                              },
                              availability: {
                                nextCloseTime: "2024-07-18 23:40:00",
                                opened: true
                              },
                              badges: {
                                textExtendedBadges: [
                                  {
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available",
                                    fontColor: "#7E808C"
                                  }
                                ]
                              },
                              isOpen: true,
                              type: "F",
                              badgesV2: {
                                entityBadges: {
                                  imageBased: {},
                                  textBased: {},
                                  textExtendedBadges: {
                                    badgeObject: [
                                      {
                                        attributes: {
                                          description: "",
                                          fontColor: "#7E808C",
                                          iconId: "guiltfree/GF_Logo_android_3x",
                                          shortDescription: "options available"
                                        }
                                      }
                                    ]
                                  }
                                }
                              },
                              aggregatedDiscountInfoV3: {
                                header: "₹125 OFF",
                                subHeader: "ABOVE ₹199",
                                discountTag: "FLAT DEAL"
                              },
                              differentiatedUi: {
                                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                differentiatedUiMediaDetails: {
                                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                                  lottie: {},
                                  video: {}
                                }
                              },
                              reviewsSummary: {},
                              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                              restaurantOfferPresentationInfo: {},
                              externalRatings: {
                                aggregatedRating: {
                                  rating: "--"
                                }
                              },
                              ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                            }
        }, {
                            info: {
                              id: "661121",
                              name: "HRX Beverages - Juices, Coffee & Kombucha",
                              cloudinaryImageId: "3aed4be19affeb4bba136c953ba7283c",
                              locality: "Ghole Road",
                              areaName: "SHIVAJINAGAR",
                              costForTwo: "₹270 for two",
                              cuisines: [
                                "Beverages",
                                "Juices",
                                "Healthy Food",
                                "Desserts"
                              ],
                              avgRating: 4.9,
                              veg: true,
                              parentId: "509799",
                              avgRatingString: "4.9",
                              totalRatingsString: "7",
                              sla: {
                                deliveryTime: 60,
                                lastMileTravel: 13.5,
                                serviceability: "SERVICEABLE",
                                slaString: "60-65 mins",
                                lastMileTravelString: "13.5 km",
                                iconType: "ICON_TYPE_EMPTY"
                              },
                              availability: {
                                nextCloseTime: "2024-07-18 23:40:00",
                                opened: true
                              },
                              badges: {},
                              isOpen: true,
                              type: "F",
                              badgesV2: {
                                entityBadges: {
                                  imageBased: {},
                                  textBased: {},
                                  textExtendedBadges: {}
                                }
                              },
                              aggregatedDiscountInfoV3: {
                                header: "₹125 OFF",
                                subHeader: "ABOVE ₹199",
                                discountTag: "FLAT DEAL"
                              },
                              differentiatedUi: {
                                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                differentiatedUiMediaDetails: {
                                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                                  lottie: {},
                                  video: {}
                                }
                              },
                              reviewsSummary: {},
                              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                              restaurantOfferPresentationInfo: {},
                              externalRatings: {
                                aggregatedRating: {
                                  rating: "--"
                                }
                              },
                              ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                            }
        }, {
                            info: {
                              id: "605369",
                              name: "Jain Meals by EatFit",
                              cloudinaryImageId: "3ce186c44356aa7bbd661678985b9674",
                              locality: "Ghole Road",
                              areaName: "Shivajinagar",
                              costForTwo: "₹270 for two",
                              cuisines: [
                                "Healthy Food",
                                "Pizzas",
                                "North Indian",
                                "Thalis",
                                "Biryani",
                                "Chinese"
                              ],
                              avgRating: 3.7,
                              veg: true,
                              parentId: "512428",
                              avgRatingString: "3.7",
                              totalRatingsString: "2",
                              sla: {
                                deliveryTime: 60,
                                lastMileTravel: 13.5,
                                serviceability: "SERVICEABLE",
                                slaString: "60-65 mins",
                                lastMileTravelString: "13.5 km",
                                iconType: "ICON_TYPE_EMPTY"
                              },
                              availability: {
                                nextCloseTime: "2024-07-18 23:00:00",
                                opened: true
                              },
                              badges: {
                                imageBadges: [
                                  {
                                    imageId: "v1695133679/badges/Pure_Veg111.png",
                                    description: "pureveg"
                                  }
                                ]
                              },
                              isOpen: true,
                              type: "F",
                              badgesV2: {
                                entityBadges: {
                                  imageBased: {
                                    badgeObject: [
                                      {
                                        attributes: {
                                          description: "pureveg",
                                          imageId: "v1695133679/badges/Pure_Veg111.png"
                                        }
                                      }
                                    ]
                                  },
                                  textBased: {},
                                  textExtendedBadges: {}
                                }
                              },
                              aggregatedDiscountInfoV3: {
                                header: "₹125 OFF",
                                subHeader: "ABOVE ₹199",
                                discountTag: "FLAT DEAL"
                              },
                              differentiatedUi: {
                                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                differentiatedUiMediaDetails: {
                                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                                  lottie: {},
                                  video: {}
                                }
                              },
                              reviewsSummary: {},
                              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                              restaurantOfferPresentationInfo: {},
                              externalRatings: {
                                aggregatedRating: {
                                  rating: "--"
                                }
                              },
                              ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                            }
        }, {
                            info: {
                              id: "594052",
                              name: "Baskin Robbins Happyness Shakes",
                              cloudinaryImageId: "d36754ff8880c5e096905d74d5f047ff",
                              locality: "ASHIYANA PARK",
                              areaName: "Koregaon Park",
                              costForTwo: "₹250 for two",
                              cuisines: [
                                "Desserts",
                                "Ice Cream"
                              ],
                              veg: true,
                              parentId: "322848",
                              avgRatingString: "--",
                              sla: {
                                deliveryTime: 42,
                                lastMileTravel: 8.8,
                                serviceability: "SERVICEABLE",
                                slaString: "40-45 mins",
                                lastMileTravelString: "8.8 km",
                                iconType: "ICON_TYPE_EMPTY"
                              },
                              availability: {
                                nextCloseTime: "2024-07-19 00:00:00",
                                opened: true
                              },
                              badges: {},
                              isOpen: true,
                              type: "F",
                              badgesV2: {
                                entityBadges: {
                                  imageBased: {},
                                  textBased: {},
                                  textExtendedBadges: {}
                                }
                              },
                              aggregatedDiscountInfoV3: {
                                header: "ITEMS",
                                subHeader: "AT ₹169"
                              },
                              differentiatedUi: {
                                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                differentiatedUiMediaDetails: {
                                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                                  lottie: {},
                                  video: {}
                                }
                              },
                              reviewsSummary: {},
                              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                              restaurantOfferPresentationInfo: {},
                              externalRatings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "3"
                                },
                                source: "GOOGLE",
                                sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
                              },
                              ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_EXTERNAL"
                            }
        }, {
                            info: {
                              id: "272388",
                              name: "Conrad Pune",
                              cloudinaryImageId: "awwkesgyug741tegue3b",
                              locality: "Dhole Patil Road",
                              areaName: "Bund Garden Road",
                              costForTwo: "₹2000 for two",
                              cuisines: [
                                "Indian",
                                "Asian"
                              ],
                              avgRating: 4,
                              parentId: "12204",
                              avgRatingString: "4.0",
                              totalRatingsString: "100+",
                              sla: {
                                deliveryTime: 67,
                                lastMileTravel: 9.3,
                                serviceability: "SERVICEABLE",
                                slaString: "65-70 mins",
                                lastMileTravelString: "9.3 km",
                                iconType: "ICON_TYPE_EMPTY"
                              },
                              availability: {
                                nextCloseTime: "2024-07-18 23:00:00",
                                opened: true
                              },
                              badges: {
                                imageBadges: [
                                  {
                                    imageId: "v1669879258/GFF_logo_new_xbycg6.png",
                                    description: "gourmet"
                                  }
                                ]
                              },
                              isOpen: true,
                              type: "F",
                              badgesV2: {
                                entityBadges: {
                                  imageBased: {
                                    badgeObject: [
                                      {
                                        attributes: {
                                          description: "gourmet",
                                          imageId: "v1669879258/GFF_logo_new_xbycg6.png"
                                        }
                                      }
                                    ]
                                  },
                                  textBased: {},
                                  textExtendedBadges: {}
                                }
                              },
                              aggregatedDiscountInfoV3: {
                                header: "₹125 OFF",
                                subHeader: "ABOVE ₹199",
                                discountTag: "FLAT DEAL"
                              },
                              differentiatedUi: {
                                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                differentiatedUiMediaDetails: {
                                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                                  lottie: {},
                                  video: {}
                                }
                              },
                              reviewsSummary: {},
                              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                              restaurantOfferPresentationInfo: {},
                              externalRatings: {
                                aggregatedRating: {
                                  rating: "--"
                                }
                              },
                              ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                            }
        }                                                                                                                                                                                          
    ];

// Below in RestaurantCard Component, resData is the prop, resObj is the argument.
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                  resList.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData = {restaurant} />))
                }     
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
