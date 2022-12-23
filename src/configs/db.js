const { connect } = require('mongoose');
require('dotenv').config();

module.exports = () => {
    return connect('mongodb://127.0.0.1:27017/mini-store', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
}