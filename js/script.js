'use strict';

const numberOfFilms = +prompt('Сколько фильмов Вы смотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastMovie = prompt('Один из последних просмотренных фильмов?', '');
const movieScore = prompt('На сколько оцените его?', '');
const lastMovie2 = prompt('Один из последних просмотренных фильмов?', '');
const movieScore2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastMovie] = movieScore;
personalMovieDB.movies[lastMovie2] = movieScore2;

console.log(personalMovieDB);