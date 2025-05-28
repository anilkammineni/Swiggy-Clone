import React from "react";
import ReactDOM from 'react-dom/client';

/*
** Header
*   - Logo
*   - Nav Items
** Body
*   - Search Bar
*   - Card Container
*   - Restaurant Container
*   - Restaurant Cards
        - Image
        - name of restaurant, start rating, cuisine, delivery time
** Footer
*   - CopyRight
*   - Links
*   - Address
*   - Contact
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZlDHCIogBXot4s5IsEKtxfgPXnKe8O7pHKg&s" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

const RestaurantCard = (props) => {

    const {resData} = props;

    console.log(props);

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData;

    console.log("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + resData.cloudinaryImageId);

    return (
        <div className="res-card">
            <img
            className="res-logo"
            //src="https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?semt=ais_hybrid&w=740
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + 
            cloudinaryImageId
            }
            />
            <h3 style={{fontStyle: "italic"}}>
                {name}
            </h3>
            <h4>
                {cuisines.join(", ")}
            </h4>
            <h4>
                {avgRating} Stars
            </h4>
            <h4>
                ₹{costForTwo / 100} FOR TWO 
            </h4>
        </div>
    )
}

const resaurantObj = {
    "id": "495772",
    "name": "Cafe Niloufer",
    "city": "3",
    "slugs": {
      "restaurant": "café-niloufer-himayath-nagar-himayath-nagar",
      "city": "hyderabad"
    },
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/19/b56332d3-d749-4b94-b9f3-7e575b8d0ca5_495772.jpg",
    "address": "M/S. ABR CAFE AND BAKERS PRIVATE LIMITED, 3-5-900, Old MLA Quarters Road, HimayathNagar, Hyderabad-Central Zone, Telangana-500029.",
    "locality": "Old Mla Quarters Road",
    "areaName": "Himayatnagar",
    "costForTwo": "40000",
    "costForTwoMessage": "₹400 FOR TWO",
    "cuisines": [
      "Bakery",
      "Beverages",
      "Snacks",
      "Desserts"
    ],
    "avgRating": 4.7,
    "feeDetails": {

    },
    "deliveryTime": 20,
    "avgRatingString": "4.7",
    "totalRatingsString": "26K+",
    "sla": {
      "minDeliveryTime": 15,
      "maxDeliveryTime": 20,
      "lastMileTravel": 1.5,
      "serviceability": "SERVICEABLE",
      "rainMode": "RAIN_MODE_NONE",
      "slaString": "15-20 MINS",
      "lastMileTravelString": "1.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "opened": true,
      "restaurantClosedMeta": {

      }
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Ratnesh_Badges/Rx_Awards_2025/Local%20Gems.png",
          "description": "Delivery!"
        }
      ]
    },
    "aggregatedDiscountInfoV3": {
      "header": "10% OFF",
      "subHeader": "ABOVE ₹3000",
      "discountTag": "FLAT DEAL",
      "logoCtx": {
        "text": "BENEFITS"
      }
    },
    "ratingSlab": "RATING_SLAB_5",
    "orderabilityCommunication": {
      "title": {

      },
      "subTitle": {

      },
      "message": {

      },
      "customIcon": {

      },
      "commsStyling": {

      }
    },
    "cartOrderabilityNudgeBanner": {
      "parameters": {

      },
      "presentation": {

      }
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "featuredSectionInfo": {
      "sectionTitle": "More"
    }
  }

const restaurants = [
    {
        id: "1005081",
        name: "Boba Bhai",
        city: "3",
        slugs: {
        restaurant: "boba-bhai-banjara-hills-masab-tank",
        city: "hyderabad"
        },
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/360a3ca1-afc5-4b59-9f30-f83d6aaa7713_1005081.jpg",
        address: "8-2-693/2/17, Plot No.17, Road No. 12, Mithila Nagar, Banjara Hills, Hyderabad, Telangana 500034",
        locality: "Banjara Hills",
        areaName: "Mithila Nagar",
        costForTwo: "20000",
        costForTwoMessage: "₹200 FOR TWO",
        cuisines: [
        "Bubble Tea",
        "Burger",
        "Korean",
        "Beverages",
        "Fast Food",
        "Juice and shake"
        ],
        avgRating: 4.3,
        feeDetails: { },
        avgRatingString: "4.3",
        totalRatingsString: "315",
        promoted: true,
        adTrackingId: "cid=29494159~p=0~adgrpid=29494159#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1005081~plpr=SEARCH#RESTAURANT~st=rolls~eid=7b511f4a-0c20-4a2c-acae-435aba380d81~srvts=1748403987957",
        sla: {
        deliveryTime: 43,
        minDeliveryTime: 40,
        maxDeliveryTime: 45,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "40-45 MINS",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        opened: true,
        restaurantClosedMeta: { }
        },
        badges: { },
        aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
        logoCtx: {
        text: "BENEFITS"
        }
        },
        ratingSlab: "RATING_SLAB_5",
        orderabilityCommunication: {
        title: { },
        subTitle: { },
        message: { },
        customIcon: { },
        commsStyling: { }
        },
        cartOrderabilityNudgeBanner: {
        parameters: { },
        presentation: { }
        },
        externalRatings: {
        aggregatedRating: {
        rating: "--"
        }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        featuredSectionInfo: {
        sectionTitle: "More"
        },
        campaignId: "29494159"
    },
    {
        id: "233050",
        name: "Faasos - Wraps, Rolls & Shawarma",
        city: "3",
        slugs: {
        restaurant: "faasos-abids-nampally",
        city: "hyderabad"
        },
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/68413230-9dc2-459a-91ac-c3950de16632_233050.JPG",
        address: "Above HDFC bank J.D Arcade building, 2nd floor beside Little flower Primary school, Abids, Hyderabad- 500001",
        locality: "Beside Little Flower Primary school",
        areaName: "Abids",
        costForTwo: "20000",
        costForTwoMessage: "₹200 FOR TWO",
        cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages"
        ],
        avgRating: 4,
        feeDetails: { },
        avgRatingString: "4.0",
        totalRatingsString: "4.8K+",
        sla: {
        deliveryTime: 25,
        minDeliveryTime: 20,
        maxDeliveryTime: 25,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "20-25 MINS",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        opened: true,
        restaurantClosedMeta: { }
        },
        badges: {
        imageBadges: [
        {
        imageId: "Rxawards/_CATEGORY-Rolls.png",
        description: "Delivery!"
        }
        ]
        },
        aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹89",
        footerText: "10 DEALS LEFT",
        secondaryHeaderType: "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER"
        },
        ratingSlab: "RATING_SLAB_4",
        orderabilityCommunication: {
        title: { },
        subTitle: { },
        message: { },
        customIcon: { },
        commsStyling: { }
        },
        cartOrderabilityNudgeBanner: {
        parameters: { },
        presentation: { }
        },
        externalRatings: {
        aggregatedRating: {
        rating: "--"
        }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        featuredSectionInfo: {
        sectionTitle: "More"
        }
    },
    {
        id: "1005082",
        name: "Seoul Burgers & Shakes",
        city: "3",
        slugs: {
        restaurant: "seoul-burgers-shakes-banjara-hills-masab-tank",
        city: "hyderabad"
        },
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/b49d6e4f-3282-424a-b868-8db3e00c796e_1005082.jpg",
        address: "8-2-693/2/17, Plot No.17, Road No. 12, Mithila Nagar, Banjara Hills, Hyderabad, Telangana 500034",
        locality: "Banjara Hills",
        areaName: "Mithila Nagar",
        costForTwo: "20000",
        costForTwoMessage: "₹200 FOR TWO",
        cuisines: [
        "Burger",
        "Bubble Tea",
        "Fast Food",
        "Beverages",
        "Juice and shake"
        ],
        avgRating: 4.3,
        feeDetails: { },
        avgRatingString: "4.3",
        totalRatingsString: "155",
        promoted: true,
        adTrackingId: "cid=29494323~p=2~adgrpid=29494323#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1005082~plpr=SEARCH#RESTAURANT~st=rolls~eid=80a1e66f-7d2a-4134-bacc-4a7885c8e94e~srvts=1748403987957",
        sla: {
        deliveryTime: 48,
        minDeliveryTime: 45,
        maxDeliveryTime: 50,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "45-50 MINS",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        opened: true,
        restaurantClosedMeta: { }
        },
        badges: { },
        aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
        logoCtx: {
        text: "BENEFITS"
        }
        },
        ratingSlab: "RATING_SLAB_5",
        orderabilityCommunication: {
        title: { },
        subTitle: { },
        message: { },
        customIcon: { },
        commsStyling: { }
        },
        cartOrderabilityNudgeBanner: {
        parameters: { },
        presentation: { }
        },
        externalRatings: {
        aggregatedRating: {
        rating: "--"
        }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        featuredSectionInfo: {
        sectionTitle: "More"
        },
        campaignId: "29494323"
    },
    {
        id: "495772",
        name: "Cafe Niloufer",
        city: "3",
        slugs: {
        restaurant: "café-niloufer-himayath-nagar-himayath-nagar",
        city: "hyderabad"
        },
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/19/b56332d3-d749-4b94-b9f3-7e575b8d0ca5_495772.jpg",
        address: "M/S. ABR CAFE AND BAKERS PRIVATE LIMITED, 3-5-900, Old MLA Quarters Road, HimayathNagar, Hyderabad-Central Zone, Telangana-500029.",
        locality: "Old Mla Quarters Road",
        areaName: "Himayatnagar",
        costForTwo: "40000",
        costForTwoMessage: "₹400 FOR TWO",
        cuisines: [
        "Bakery",
        "Beverages",
        "Snacks",
        "Desserts"
        ],
        avgRating: 4.7,
        feeDetails: { },
        avgRatingString: "4.7",
        totalRatingsString: "26K+",
        sla: {
        deliveryTime: 19,
        minDeliveryTime: 15,
        maxDeliveryTime: 20,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "15-20 MINS",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        opened: true,
        restaurantClosedMeta: { }
        },
        badges: {
        imageBadges: [
        {
        imageId: "Ratnesh_Badges/Rx_Awards_2025/Local%20Gems.png",
        description: "Delivery!"
        }
        ]
        },
        aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹3000",
        discountTag: "FLAT DEAL",
        logoCtx: {
        text: "BENEFITS"
        }
        },
        ratingSlab: "RATING_SLAB_5",
        orderabilityCommunication: {
        title: { },
        subTitle: { },
        message: { },
        customIcon: { },
        commsStyling: { }
        },
        cartOrderabilityNudgeBanner: {
        parameters: { },
        presentation: { }
        },
        externalRatings: {
        aggregatedRating: {
        rating: "--"
        }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        featuredSectionInfo: {
        sectionTitle: "More"
        }
    },
    {
        id: "56171",
        name: "G.Pulla Reddy - Pure Ghee Sweets",
        city: "3",
        slugs: {
        restaurant: "g-pulla-reddy-sweets-karkhana-kharkhana-trimulgherry",
        city: "hyderabad"
        },
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/27/7918fe4a-af59-4e9b-be48-eb444eef03b0_56171.jpg",
        address: "S No. 54, Rajiv Gandhi Rahadari Road, Vasavi Nagar, Karkhana,, Secunderabad, Telangana 500015",
        locality: "Kharkhana",
        areaName: "Kharkhana",
        costForTwo: "30000",
        costForTwoMessage: "₹300 FOR TWO",
        cuisines: [
        "Sweets",
        "Desserts",
        "Snacks"
        ],
        avgRating: 4.6,
        feeDetails: { },
        avgRatingString: "4.6",
        totalRatingsString: "10K+",
        promoted: true,
        adTrackingId: "cid=557e4813-633f-4088-8877-8c7196a3b974~p=3~adgrpid=557e4813-633f-4088-8877-8c7196a3b974#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=56171~plpr=SEARCH#RESTAURANT~st=rolls~eid=f90e4b16-509e-4531-9722-9b79436b308c~srvts=1748403987957",
        sla: {
        deliveryTime: 34,
        minDeliveryTime: 30,
        maxDeliveryTime: 35,
        lastMileTravel: 6.8,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "30-35 MINS",
        lastMileTravelString: "6.8 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        opened: true,
        restaurantClosedMeta: { }
        },
        aggregatedDiscountInfo: {
        visible: true
        },
        badges: {
        imageBadges: [
        {
        imageId: "v1695133679/badges/Pure_Veg111.png",
        description: "pureveg"
        }
        ]
        },
        aggregatedDiscountInfoV2: {
        visible: true
        },
        ratingSlab: "RATING_SLAB_5",
        orderabilityCommunication: {
        title: { },
        subTitle: { },
        message: { },
        customIcon: { },
        commsStyling: { }
        },
        cartOrderabilityNudgeBanner: {
        parameters: { },
        presentation: { }
        },
        externalRatings: {
        aggregatedRating: {
        rating: "--"
        }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        featuredSectionInfo: {
        sectionTitle: "More"
        },
        campaignId: "557e4813-633f-4088-8877-8c7196a3b974"
    },
    {
        id: "569378",
        name: "Protein Chef",
        city: "3",
        slugs: {
        restaurant: "protein-chef-banjara-hills-banjara-hills",
        city: "hyderabad"
        },
        cloudinaryImageId: "c999cb12e0747d3954d7296fc3e06b83",
        address: "1ST FLOOR, H.NO. - 6-3-452/A/4, BESIDE LANE OF SWAYAMVAR, PANJAGUTTA, HYDERABAD, Khairatabad Circle No.17 , Hyderabad, Telangana - 500082",
        locality: "Panjagutta",
        areaName: "Banjara Hills",
        costForTwo: "30000",
        costForTwoMessage: "₹300 FOR TWO",
        cuisines: [
        "North Indian",
        "Healthy Food",
        "Snacks"
        ],
        avgRating: 4.4,
        feeDetails: { },
        avgRatingString: "4.4",
        totalRatingsString: "1.6K+",
        sla: {
        deliveryTime: 29,
        minDeliveryTime: 25,
        maxDeliveryTime: 30,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "25-30 MINS",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        opened: true,
        restaurantClosedMeta: { }
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
        aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179",
        logoCtx: {
        text: "BENEFITS"
        },
        footerText: "4 DEALS LEFT",
        secondaryHeaderType: "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER"
        },
        ratingSlab: "RATING_SLAB_5",
        orderabilityCommunication: {
        title: { },
        subTitle: { },
        message: { },
        customIcon: { },
        commsStyling: { }
        },
        cartOrderabilityNudgeBanner: {
        parameters: { },
        presentation: { }
        },
        externalRatings: {
        aggregatedRating: {
        rating: "--"
        }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        featuredSectionInfo: {
        sectionTitle: "More"
        }
    },
    {
        id: "228215",
        name: "Cafe Niloufer Premium Lounge",
        city: "3",
        slugs: {},
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/19/ab61bbdc-0ecd-4cd9-8ea9-4a26564d9dc6_228215.jpg",
        address: "Divine Banjara - Amn, 8-2-685/P2 & P3, Road No. 12, Venkateswara Colony, Banjara Hills, Hyderabad, Telangana 500034",
        locality: "Banjara Hills",
        areaName: "Banjara Hills",
        costForTwo: "20000",
        costForTwoMessage: "₹200 FOR TWO",
        cuisines: [],
        avgRating: 4.7,
        feeDetails: { },
        avgRatingString: "4.7",
        totalRatingsString: "47K+",
        sla: {},
        availability: {},
        badges: {},
        aggregatedDiscountInfoV3: {},
        ratingSlab: "RATING_SLAB_5",
        orderabilityCommunication: {},
        cartOrderabilityNudgeBanner: {},
        externalRatings: {},
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        featuredSectionInfo: {}
    }
]

const Body = () => {

    let rests = "";

    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard
                resData = {resaurantObj}
                />

                {restaurants.map((res) => {
                    return (
                        <RestaurantCard key = {res.id} resData = {res} />
                    )
                })}
                
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            <div className="copyright">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYqntSEG8VTvxtfHDZMqBNemqhuPRSnfox6A&s" />
            </div>
            <div className="footer-items">
                <ul>
                    <li>Contact Us</li>
                    <li>Write Review</li>
                    <li>Contact Us</li>
                    <li>Write Review</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (

        <div className="App"> 
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);