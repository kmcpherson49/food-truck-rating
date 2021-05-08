const sequelize = require("../config/connection");
//const {User,Truck,Post} = require("../models")



const truck_data = [{
    name: "Randizzles",
    rating: "Good",
    phone: "",
    email:"",
    website:"",
    category: "",
    //create multiple truck and a review object
},
{
    name: "The Chicken Coupe",
    rating: "Good",
    rating: "Good",
    phone: "",
    email:"",
    website:"",
    category: "",
},
{
    name: "Feednix Tacos",
    rating: "Good",
    rating: "Good",
    phone: "",
    email:"",
    website:"",
    category: "",
},
{
    name: "Waffle Crush",
    rating: "Good",
    phone: "",
    email:"",
    website:"",
    category: "",
},
{
    name: "First Place Coffee",
    rating: "Good",
    phone: "",
    email:"",
    website:"",
    category: "",
},
{
    name: "Phoenix Coqui'",
    rating: "Good",
    phone: "",
    email:"",
    website:"",
    category: "",
},
{
    name: "Morning Kick",
    rating: "Good",
    phone: "",
    email:"",
    website:"",
    category: "",
},
{
    name: "Flippin Rice",
    rating: "Good",
    phone: "",
    email:"",
    website:"",
    category: "",
},
{
    name: "Saffron Jack",
    rating: "Good",
    phone: "",
    email:"",
    website:"",
    category: "",
},
{
    name: "Chinoz Grill",
    rating: "Good",
    phone: "",
    email:"",
    website:"",
    category: "",
},
]

const seedingData = async () => {
    await sequelize.sync({
        force: true
    })
    const users = await User.bulkCreate(user_data,{individualHooks: true, returning: true,})
    process.exit(0)
}



seedingData()