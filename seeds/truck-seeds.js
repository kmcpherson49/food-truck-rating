const sequelize = require("../config/connection");
//const {User,Truck,Review} = require("../models")

const user_data = [{
    username: 'feednix',
    password: 'password1',
},{
    username: 'feednix2',
    password: 'password1',
}]

const truck_data = [{
    name: "",
    rating: "",
    //create multiple truck and a review object
}]

const seedingData = async () => {
    await sequelize.sync({
        force: true
    })
    const users = await User.bulkCreate(user_data,{individualHooks: true, returning: true,})
    process.exit(0)
}



seedingData()