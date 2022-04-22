/*Function that changes the image*/


//function to turn on candle
function light(sw) {
  var pic;
  if (sw == 0) {
    pic = "candlen.jpeg"
  } else {
    pic = "https://media.giphy.com/media/j7N0GKEWqZxNC/giphy.gif"
  }
  document.getElementById('myImage').src = pic;
}



/*Function that shows the Prayer*/
const prayer1 = [`'Hail Mary, full of grace, the Lord is with thee; blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus.`,` Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.`]
let index = 0;

function pray(){
  document.getElementById('displayprayer').innerHTML = prayer1[index++];
  index = index % prayer1.length;

}



function pray2(){
  var prayer2 = 'Remember, O most gracious Virgin Mary,that never was it known that anyone who fled to your protection, implored your help, or sought your intercession, was left unaided. Inspired by this confidence, I fly unto you, O Virgin of virgins, my Mother.To you do I come, before you I stand, sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in your mercy, hear and answer me. Amen.';
  
  document.getElementById('displayprayer2').innerHTML = prayer2;
}



function pray3(){
if (document.getElementById("demo").innerHTML== "lets pray"){
  document.getElementById("demo").innerHTML="Hail, holy Queen, Mother of mercy, hail, our life, our sweetness and our hope. ";
}else if (document.getElementById("demo").innerHTML=="Hail, holy Queen, Mother of mercy, hail, our life, our sweetness and our hope. "){
  document.getElementById("demo").innerHTML="To thee do we cry, poor banished children of Eve: to thee do we send up our sighs, mourning and weeping in this vale of tears.";
} else if(document.getElementById("demo").innerHTML== "To thee do we cry, poor banished children of Eve: to thee do we send up our sighs, mourning and weeping in this vale of tears."){
  document.getElementById("demo").innerHTML="Turn then, most gracious Advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus, O merciful, O loving, O sweet Virgin Mary! Amen.";
}else if (document.getElementById("demo").innerHTML=="Turn then, most gracious Advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus, O merciful, O loving, O sweet Virgin Mary! Amen.r"){
  (document.getElementById("demo").innerHTML=="Lord");
}else{
  document.getElementById("demo").innerHTML="lets pray";
}
}


