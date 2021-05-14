const sequelize = require("../config/connection");
const { Truck } = require("../models")



const truck_data = [{
    name: "Randizzles",
    rating: "Good",
    phone: "1-991-224-8256 x361",
    email:"Emmett9@hotmail.com",
    website:"https://ashtyn.info",
    category: "",
    //create multiple truck and a review object
},
{
    name: "The Chicken Coupe",
    rating: "Good",
    phone: "560.782.4833",
    email:"Anthony.Ferry@gmail.com",
    website:"http://chris.name",
    category: "",
},
{
    name: "Feednix Tacos",
    rating: "Good",
    phone: "493.713.1051 x10481",
    email:"Clarissa.Feeney11@example.org",
    website: "http://duncan.net",
    category: "",
},
{
    name: "Waffle Crush",
    rating: "Good",
    phone: "(994) 918-5272",
    email:"Tess_Jacobi@hotmail.com",
    website:"https://anita.biz",
    category: "",
},
{
    name: "First Place Coffee",
    rating: "Good",
    phone: "1-688-638-3336 x81709",
    email:"Brigitte.Marquardt86@yahoo.com",
    website:"https://abe.info",
    category: "",
},
{
    name: "Phoenix Coqui'",
    rating: "Good",
    phone: "(792) 372-1834 x26644",
    email:"Ryann.Pagac@gmail.com",
    website:"http://fredrick.org",
    category: "",
},
{
    name: "Morning Kick",
    rating: "Good",
    phone: "(415) 845-7835 x7126",
    email:"Tevin.Parisian@yahoo.com",
    website:"https://cora.com",
    category: "",
},
{
    name: "Flippin Rice",
    rating: "Good",
    phone: "(721) 600-1107",
    email:"Imelda.Davis@yahoo.com",
    website:"https://savion.info",
    category: "",
},
{
    name: "Saffron Jack",
    rating: "Good",
    phone: "275-722-5868 x5763",
    email:"Diana_Wisoky@gmail.com",
    website:"https://chanel.net",
    category: "",
},
{
    name: "Chinoz Grill",
    rating: "Good",
    phone: "(262) 391-5424 x3666",
    email:"Lesley48@yahoo.com",
    website:"Barney_Tillman@gmail.com",
    category: "",
},
]

// const seedingData = async () => {
//     await sequelize.sync({
//         force: true
//     })
//     const users = await User.bulkCreate(user_data,{individualHooks: true, returning: true,})
//     process.exit(0)
// }



// seedingData()

const seedTruck = () => Post.bulkCreate(postdata);

module.exports = seedTruck;