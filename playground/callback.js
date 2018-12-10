var getUser = (id, callback) => {
    var user = {
        id,
        name: "shashank"
    }
    callback(user);
}

getUser(31,(userObj) => {
    console.log(userObj)
})