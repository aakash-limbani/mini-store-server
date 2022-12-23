const { connect } = require('mongoose');
require('dotenv').config();

module.exports = () => {
    return connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
}