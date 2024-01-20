const mongoose = require("mongoose");
//const uri = "mongodb+srv://adminhamza:adminhamza123&@cluster0.pzcviot.mongodb.net/InventoryManagementApp?retryWrites=true&w=majority";
const uri  = "mongodb+srv://muhammadahmad788454:ZA7NO1Ro7iG8myM4@cluster0.ot4hjob.mongodb.net/invigo_WP?retryWrites=true&w=majority"

function main() {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };