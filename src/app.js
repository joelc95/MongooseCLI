// Get and run the connection.js file
require("./db/connections");
// Get 'mongoose' node module
const mongoose = require("mongoose");
// Get 'yargs' node module
const yargs = require("yargs");
// Get the { functions } from our functions.js files
const { addMovie, list, update, remove } = require('./movie/functions');
const { addShow, listShow, updateShow, removeShow } = require('./show/functions');

const app = async (yargsObj) => {
    try {
        if (yargsObj.addMovie) {
            // Add a movie
            console.log(await addMovie(yargsObj));
        } else if (yargsObj.addShow) {
            // Add a show
            console.log(await addShow(yargsObj));
        } else if (yargsObj.list) {
            // List a specific movie, filter by actor, or all movies (if no argument given)
            console.log(await list(yargsObj));
            console.log(await listShow(yargsObj));
        } else if (yargsObj.update) {
            // Update a specific movie entry
            await update(yargsObj);
            await updateShow(yargsObj);
        } else if (yargsObj.delete) {
            // Delete a specific movie entry
            console.log(await remove(yargsObj));
            console.log(await removeShow(yargsObj));
        } else if (yargsObj.helpMe) {
            // Show commands to user
            console.log("Commands: \n\n--addMovie REQUIRED: --title=\<title\> OPTIONAL: --actor:\<actor\>")
            console.log("--addShow REQUIRED: --title=\<title\> OPTIONAL: --actor:\<actor\>")
            console.log("--list OPTIONAL FILTER: --actor\<actor\>")
            console.log("--update ENTRY TO UPDATE: --title=\<title\> NEW INFO: --actor=\<actor\>");
            console.log("--delete REQUIRED: --title=\<title\>")
            console.log("--helpMe LIST ALL COMMANDS\n")
            
        } else {
            console.log("invalid command")
        }
        console.log("Disconnecting...")
        await mongoose.disconnect();
    } catch (error) {
        console.log(error)
    }
}

app(yargs.argv)