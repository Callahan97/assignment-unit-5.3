console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

myCollection = [];
 
function addToCollection(collection, title, artist, yearPublished){
const newAlbum = {
  title: title,
  artist: artist,
  yearPublished: yearPublished
};

  collection.push(newAlbum);
   
  return newAlbum;
}

let albumOne = addToCollection(myCollection, "Days Of Future Passed", "The Moody Blues", "1967");
let albumTwo = addToCollection(myCollection, "Morning View", "Incubus", "2001");
let albumThree = addToCollection(myCollection, "Planet Piano", "DR.GABBA", "2022");
let albumFour = addToCollection(myCollection, "The Richest Man In Babylon", "Thievery Corporation", "2003");
let albumFive = addToCollection(myCollection, "Brasilian Skies", "Masayoshi Takanaka", "1978");
let albumSix = addToCollection(myCollection, "2", "Mac Demarco", "2012");

console.log(albumOne);
console.log(albumTwo);
console.log(albumThree);
console.log(albumFour);
console.log(albumFive);
console.log(albumSix);

console.log(myCollection);

function showCollection(collection) {
  for(let i = 0; i < collection.length; i++){
    const album = collection[i];
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
};

showCollection(myCollection);





// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
