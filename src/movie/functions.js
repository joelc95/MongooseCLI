const Movie = require("./model");

exports.addMovie = async (obj) => {
    try {
        await Movie.create({title: obj.title, actor: obj.actor});
        return `Successfully added ${obj.title}`;
    } catch (error) {
        return `OOPS, there was an error: ${error}`
    }
}

exports.list = async (obj=null) => {
    try {
        if (obj.title) {
            return await Movie.find({title: obj.title});
        } else if (obj.actor) {
            console.log(`Finding movies with actor ${obj.actor}`)
            return await Movie.find({actor: obj.actor})
        } else {
            console.log("Fetching all movies...")
            return await Movie.find({});
        }
    } catch (error) {
        return console.log(error);
    }
}

exports.update = async (obj) => {
    try {
        const query = { title: obj.title }
        return await Movie.findOneAndUpdate( query, {actor: obj.actor} )
    } catch (error) {
        return console.log(error);
    }
}

exports.delete = async (obj) => {
    try {
        if (obj.title) {
            await Movie.findOneAndDelete({title: obj.title});
            return `${obj.title} has been deleted from the database.`
        }
    } catch (error) {
        return console.log(error);
    }
}