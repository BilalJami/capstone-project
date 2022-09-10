const mongoose = require('mongoose');

const Connectdb = async (DATABASE_URL) => {
    try {
        // const DB_OPTIONS = {
        //     DATABASE_NAME : "ANY_NAME"
        // };
        await mongoose.connect(DATABASE_URL);
        console.log("Connected to database Successfully");
    } catch (error) {
        console.log(error)
    }
};

// modules.exports = Connectdb;
module.exports = Connectdb;