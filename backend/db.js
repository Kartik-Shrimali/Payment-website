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
        trim : true
    },
    lastname: {
        type: String,
        required: true,
        trim : true
    },
    password: {
        type: String,
        required: true,
        min: [6, 'Username should be of atleast 6 letters!!'],

    }

})

const AccountSchema = new Schema({
    Userid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
})

const User = mongoose.model('User', UserSchema);
const Account = mongoose.model('Account' , AccountSchema);
module.exports = {
    User,
    Account
}