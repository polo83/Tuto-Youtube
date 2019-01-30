module.exports = async(client) => {

    client.user.setPresence({
        game: {
            name: "!help --> Affiche l'aide !"
        }
    });

};
