
const { filmModel } = require("../models");

const ObjectId = require('mongoose').Types.ObjectId;


module.exports.getFilms = async( ) => {
    try {
        let films = await filmModel.find({});;
        return films;    
    } catch (error) {
        return error
    }
};

module.exports.getFilmById = async( film_id ) => {
    try {
        let film = await filmModel.findById(ObjectId(film_id));
        return film;    
    } catch (error) {
        return error
    }
};

module.exports.createFilm = async function( params ){
    try {
        let newFilm = new filmModel( params );
        const filmAdded = await newFilm.save();
        return filmAdded;
    } catch (error) {
        return error;
    }
}

module.exports.updateFilm = async function(id, params){
    try {
        let updatedFilm = await filmModel.updateOne({_id: ObjectId(id)}, {$set: params});
        return updatedFilm;
    } catch (error) {
        return error;
    }
}

module.exports.deleteFilm = async function(id){
    try {
        let deletedFilm = await filmModel.updateOne({_id: ObjectId(id)}, {$set: {is_deleted: true}});
        return deletedFilm;
    } catch (error) {
        return error;
    }
}