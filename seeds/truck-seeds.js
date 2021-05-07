const sequelize = require("../config/connection");
//const {User,Truck,Review} = require("../models")

const user_data = [{
    username: 'feednix',
    password: 'password1',
},
{
    username: 'feednix2',
    password: 'password1',
},
{
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    password: 'password123'
  },
  {
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password123'
  },
  {
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'djiri4',
    email: 'gmidgley4@weather.com',
    password: 'password123'
  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'password123'
  },
  {
    username: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    password: 'password123'
  },
  {
    username: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    password: 'password123'
  },
  {
    username: 'msabbins8',
    email: 'lmongain8@google.ru',
    password: 'password123'
  },
  {
    username: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    password: 'password123'
  }
];

const truck_data = [{
    name: "Randizzles",
    rating: "Good",
    //create multiple truck and a review object
},
{
    name: "The Chicken Coupe",
    rating: "Good",
},
{
    name: "Feednix Tacos",
    rating: "Good",
},
{
    name: "Waffle Crush",
    rating: "Good",
},
{
    name: "First Place Coffee",
    rating: "Good",
},
{
    name: "Phoenix Coqui'",
    rating: "Good",
},
{
    name: "Morning Kick",
    rating: "Good",
},
{
    name: "Flippin Rice",
    rating: "Good",
},
{
    name: "Saffron Jack",
    rating: "Good",
},
{
    name: "Chinoz Grill",
    rating: "Good",
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