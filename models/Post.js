const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    author: {
        type: String,

    },
    description: {
        type: String,
    },
    title: {
        type: String,

    },
    journal: {
        type: String,

    },
    year: {
        type: String,

    },
    volume: {
        type: Number,

    },
    number: {
        type: Number,

    },
    pages: {
        type: String,

    },
    month: {
        type: String,

    },
    url: {
        type: String,

    },
    DOI: {
        type: String,
    },

    claim: {
        type: String,
    },
    strength_of_evidence: {
        type: String,
    },

    se_practice: {
        type: String
    }
})

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;