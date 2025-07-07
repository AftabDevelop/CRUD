const mongoose = require('mongoose');

async function main() {
    await mongoose.connect("DB string");
}

module.exports = main;
