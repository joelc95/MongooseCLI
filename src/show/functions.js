const Show = require("./model");

exports.addShow = async (obj) => {
    try {
        await Show.create({title: obj.title, actor: obj.actor});
        return `Successfully added ${obj.title}`;
    } catch (error) {
        return `OOPS, there was an error: ${error}`
    }
}

exports.listShow = async (obj=null) => {
    try {
        if (obj.title) {
            return await Show.find({title: obj.title});
        } else if (obj.actor) {
            console.log(`Finding Shows with actor ${obj.actor}`)
            return await Show.find({actor: obj.actor})
        } else {
            console.log("Fetching all Shows...")
            return await Show.find({});
        }
    } catch (error) {
        return console.log(error);
    }
}

exports.updateShow = async (obj) => {
    try {
        const query = { title: obj.title }
        return await Show.findOneAndUpdate( query, {actor: obj.actor} )
    } catch (error) {
        return console.log(error);
    }
}

exports.removeShow = async (obj) => {
    try {
        if (obj.title) {
            await Show.findOneAndDelete({title: obj.title});
            return `${obj.title} has been deleted from the database.`
        }
    } catch (error) {
        return console.log(error);
    }
}