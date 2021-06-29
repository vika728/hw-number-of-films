
let name = prompt('enter u name');
let numberOfFilms = prompt('How many films did u watch?');
let moviePersonal = prompt('One of the Latest movie thats u had watch?');
let chekOut = prompt('How u chek that?');


let personalMovieDB = {
    count : numberOfFilms,
    movies : {
        [moviePersonal] : chekOut
    },
    actors : {},
    genres: [],
    privat: false
}

for (i = 0; i < 1; i++) {
    if(name != '' && moviePersonal != '' && chekOut != '' && name != null && moviePersonal != null && chekOut != null && moviePersonal.length < 50) {
        personalMovieDB.movies[moviePersonal] = chekOut;
        alert(`${name}, thanks `);
    }else{
        console.log('error');;
        i--;
    }
}

if (personalMovieDB.count<10){
    alert(`${name}, Too less`)
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    alert(`${name}, U a normal`)
} else if (personalMovieDB.count > 30) {
    alert(`${name}, U a cinemalover`)
} else {
    alert(`${name}, error`)
}
console.log(personalMovieDB);

function showMyDB (privat) {
    if (privat != true){
        console.log(personalMovieDB);
    }
}
showMyDB(prompt('enter the bollean:'))

function writeYourGenres(){
    for (i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Write ur favorite film number ${i}`);   
    }
}
writeYourGenres()
console.log(personalMovieDB.genres);