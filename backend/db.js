import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.connect("mongodb+srv://kartikshrimali62:KARTIK19111@cluster0.d3rhb.mongodb.net/User");

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim : true
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: [6, 'Username should be of atleast 6 letters!!'],

    }

})

const User = mongoose.model('User', UserSchema);

module.exports = {
    User
}