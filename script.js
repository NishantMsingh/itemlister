// var list=document.getElementsByTagName("li");
// list[3].style.backgroundColor="green";

// var vis=document.querySelector(".list-group-item:nth-child(3)");
// var col=document.querySelector(".list-group-item:nth-child(2)");
// col.style.color="green";
// vis.style.display="none";

// for (var i = 0; i < list.length; i++) {
//     // Change the font weight to bold
//     list[i].style.fontWeight = "bold";
//   }

// Using Query Selector All
var list=document.querySelectorAll("li:nth-child(odd)");
for(i=0;i<list.length;i++)
{
 list[i].style.backgroundColor="green";
}
var col=document.querySelector("li:nth-child(2)");
col.style.color="green";