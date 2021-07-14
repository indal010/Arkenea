const mongoose = require('mongoose');
const url = "mongodb+srv://indal:887821812@wy@cluster0.5blfs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/UserDetails"
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Successfully connected to database..');
    }).catch((err) => {
        console.log(err);
        console.log('could not connect to database..');
    })


