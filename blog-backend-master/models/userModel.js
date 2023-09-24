const mongoose = require('mongoose');
const request = require('./requestSchema');

const userSchema = new mongoose.Schema({
    username: {
        type : String ,
        unique : true
    },
    password: String,
    college: String,
    isAdmin: Boolean,
    requests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'request',
    }]
});

userSchema.add({
    requests: [request.schema], 
});

userSchema.pre('save', function (next) { 
    if (this.isAdmin) {
        this.requests = [
            {
                name : "project X",
                username: "syedjavith14@gmail.com",
                isApproved: false,
                request: "some request",
                domain: "aiml",
                college : "rec",
                link: "www.github.com/Syed-Javith"
            },
            {
                name : "project Y",
                username: "syedjavith14@gmail.com",
                isApproved: false,
                request: "some request",
                domain: "aiml",
                college : "rec",
                link: "www.github.com/Syed-Javith"
            }
        ];
    }
    next();
});

const user = mongoose.model('user', userSchema);

module.exports = user;
