var names=["Christ Raj","Devi","Apoorva","Roshan"];

var images=[
    "ChristRaj.jpg","Devi.jpeg","Apoorva.jpeg","Roshan.jpeg"
];

var i=0;
function update(){
    i++;
    var numbers_of_family_member_in_array=3;
    if(i>numbers_of_family_member_in_array){
        i=0;
    }
    var updatedImage=images[i];
    var updatedNames=names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedNames;
}