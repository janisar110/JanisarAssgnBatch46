//make function make_album
function makeAlbum(artistName, titleName) {
    var musicAlbumn = {
        artistName1: artistName,
        titleName1: titleName
    };
    return musicAlbumn;
}
var MusicAlbum = makeAlbum("Janisar", "Never see the past");
var MusicAlbum2 = makeAlbum("farhan", "Good attitude");
var MusicAlbum3 = makeAlbum("Saqi", "fitness most important");
console.log(MusicAlbum);
console.log(MusicAlbum2);
console.log(MusicAlbum3);
