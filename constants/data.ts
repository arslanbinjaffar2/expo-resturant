import { BeefBurger,cheesecake,brownie,italianpizza,pasta } from "./image";


export const DimmymenuList=[
    {
        name:"Beef Burger",
        description:"Juicy beef patty, crisp lettuce, ripe tomatoes, melted cheddar…",
        price:12.99,
        img:BeefBurger,
        category:"maincourse"
    },
    {
        name:"Italian Pizza",
        description:"Thin, crispy crust topped with zesty tomato sauce, fresh mozzarella",
        price:24.6,
        img:italianpizza,
        category:"maincourse"
    },
    {
        name:"Pasta (White sauce)",
        description:"Al dente pasta tossed with rich marinara sauce, fresh basil.",
        price:15.64,
        img:pasta,
        category:"maincourse"
    },
    {
        name:"Brownie",
        description:"Juicy beef patty, crisp lettuce, ripe tomatoes, melted cheddar…",
        price: 12.6,
        img:brownie,
        category:"desert"
    },
    {
        name:"Cheesecake",
        description:"Juicy beef patty, crisp lettuce, ripe tomatoes, melted cheddar…",
        price:24.6,
        img:cheesecake,
       category:"desert"
    },
   

]


export const DimmyFilters=["Appetizers","Salads","Soups",
    "Main Courses", "Side Dishes", "Desserts Side", "Dishes Desserts", "Beverages", "Sandwiches" ,"Burgers", "Pizzas" ,"Pasta Dishes", "Seafood", "Vegetarian"]



    export const generalaccountList=[
        {
            name:"Favoruites",
            icon:"Icoheart",
            route:"/(favoruites)",
        },
        {
            name:"Rewards",
            icon:"IcoTrophy",
            route:"/(rewards)",
        },
        {
            name:"Vouchers",
            icon:"Icovoucher",
            route:"/(vouchers)",
        },
        {
            name:"Feedback",
            icon:"Icoreviews",
            route:"/(feedback)",
        },
        {
            name:"About us",
            icon:"Icoinfo",
            route:"/(contactus)",
            as:"",
        },
        {
            name:"Terms & policies",
            icon:"Icoassignment",
            route:"/(termsandpolicies)",
        },
    ]


    export const  rewardsDetailAboutList=[
        {
            title:"How to complete",
            descripition:"Place four orders according to instructions",
            icon:"Icolocalmallbag",
            id:"Icolocalmallbag"
        },
        {
            title:"More rewards",
            descripition:"Win vouchers and points",
            icon:"IcoTrophy",
            id:"IcoTrophy"
        },
        {
            title:"Time remaining",
            descripition:"4 Days",
            icon:"Icoschedule",
            id:"Icoschedule"
        },
    ]