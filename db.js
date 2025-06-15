const mongoose = require('mongoose');

async function main() {
    await mongoose.connect("mongodb+srv://sayyedaftab565:aftab1459@aftab.0noevq9.mongodb.net/insta");
}

module.exports = main;