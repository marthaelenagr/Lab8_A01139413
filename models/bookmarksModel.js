const mongoose = require('mongoose');

const bookmarksSchema = mongoose.Schema({
    id : {
        type : String,
        required : true,
        unique : true
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    url : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        required : true
    }
});

const bookmarksCollection = mongoose.model( 'bookmarks', bookmarksSchema );

const Bookmarks = {
    createBookmark : function( newBookmark ){
        return bookmarksCollection
            .create(newBookmark)
            .then(createdBookmark => {
                return createdBookmark;
            })
            .catch(err => {
                return err;
            });
    },
    getAllBookmarks : function(){
        return bookmarksCollection
            .find()
            .then(allBookmarks => {
                return allBookmarks;
            })
            .catch(err => {
                return err;
            });
    },
    getBookmark : function(title){
        return bookmarksCollection
            .find({title: title})
            .then(allBookmarks => {
                return allBookmarks;
            })
            .catch(err => {
                return err;
            });
    },
    deleteBookmark : function(id){
        return bookmarksCollection
            .find({id: id})
            .remove()
            .then(allBookmarks => {
                return allBookmarks;
            })
            .catch(err => {
                return err;
            });
    },
    updateBookmark : function(id,updates){
        return bookmarksCollection
            .findOneAndUpdate({id: id}, {$set: updates}, { new: true })
            .then(allBookmarks => {
                return allBookmarks;
            })
            .catch(err => {
                return err;
            });
    }
}

module.exports = { Bookmarks };