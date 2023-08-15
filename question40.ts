//make function make_album



function makeAlbum(artistName:string, titleName:string):object{
     let musicAlbumn = {
        artistName1:artistName,
         titleName1:titleName
        }
    return musicAlbumn
    
 }

let MusicAlbum = makeAlbum("Janisar","Never see the past")
let MusicAlbum2 = makeAlbum("farhan","Good attitude");
let MusicAlbum3 = makeAlbum("Saqi","fitness most important")

console.log(MusicAlbum);
console.log(MusicAlbum2);
console.log(MusicAlbum3);
