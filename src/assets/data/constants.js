import vsoup from "../images/vegSoup.jpg"
import nvsoup from "../images/nonvegSoup.jpg"
import vs from "../images/paneerTikka.jpg"
import nvs from "../images/nonvegStarter.jpg"
import nvb from "../images/NVbiryani.jpg"
import vb from "../images/vegBiryani.jpg"


export const CUSINE_TYPES = ["INDIAN", "CHINESE", "TANDOOR"];
export const VEG_FOOD_TYPES = [
    "SOUPS",
    "STARTERS",
    "RK SPECIAL STARTERS",
    "TANDOORI",
    "MAIN COURSE",
    "BIRIYANI",
    "SPECIAL BIRIYANI",
    "FRIED RICE",
    "CURRIES",
    "ROTI",
];
export const NONVEG_FOOD_TYPES = [
    "SOUPS",
    "STARTERS",
    "EGG STARTERS",
    "CHICKEN STARTERS",
    "FISH STARTERS",
    "PRAWNS STARTERS",
    "RK SPECIAL STARTERS",
    "TANDOORI",
    "MAIN COURSE",
    "BIRIYANI",
    "SPECIAL BIRIYANI",
    "FRIED RICE",
    "CURRIES",
    "ROTI",
];

export const foodList = [
    {
        isveg: false,
        name: "Mutton Fry (Bone)",
        price: 300,
        type: "STARTER",
        imgurl: nvs
    },
    {
        isveg: true,
        name: "Baby Corn Manchuria",
        price: 160,
        type: "STARTER",
        imgurl: vs
    },
    {
        isveg: false,
        name: "Chicken Soup",
        price: 120,
        type: "SOPUS",
        imgurl: nvsoup
    },
    {
        isveg: true,
        name: "Baby Corn Soup",
        price: 90,
        type: "SOPUS",
        imgurl: vsoup
    },
    {
        isveg: true,
        name: "Paneer Soup",
        price: 100,
        type: "SOPUS",
        imgurl: vsoup
    },
    {
        isveg: true,
        name: "Paneer Tikka",
        price: 200,
        type: "STARTER",
        imgurl: vs
    },
    {
        isveg: false,
        name: "Chilli Chicken",
        price: 220,
        type: "STARTER",
        imgurl: nvs
    },
    {
        isveg: false,
        name: "Mutton Soup",
        price: 120,
        type: "SOPUS",
        imgurl: nvsoup
    },
    {
        isveg: true,
        name: "Mixed Veg Soup",
        price: 100,
        type: "SOPUS",
        imgurl: vsoup
    },
    {
        isveg: true,
        name: "Vegetable Biryani",
        price: 250,
        type: "MAIN_COURSE",
        imgurl: vb
    },
    {
        isveg: false,
        name: "Chicken Biryani",
        price: 300,
        type: "MAIN_COURSE",
        imgurl: nvb
    },
    // {
    //     isveg: false,
    //     name:"Mutton Biryani",
    //     price: 300,
    //     type: "MAIN_COURSE",
    //     imgurl: nvb
    // }
]

export const dataColor = {
    color: "black"
}