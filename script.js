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
// var list=document.querySelectorAll("li:nth-child(odd)");
// for(i=0;i<list.length;i++)
// {
//  list[i].style.backgroundColor="green";
// }
// var col=document.querySelector("li:nth-child(2)");
// col.style.color="green";

// tRAVERSING THE DOM  
// var itemlist=document.querySelector("#items");
//Parent node property
// console.log(itemlist.parentNode);
// console.log(itemlist.parentNode.parentNode);
// console.log(itemlist.parentNode.parentNode.parentNode);
// itemlist.parentElement.style.backgroundColor="#fcfcfc";

// Parent Element
//  console.log(itemlist.parentElement);
// console.log(itemlist.parentNode.parentElement);
// console.log(itemlist.parentNode.parentNode.parentElement);

// Child Node 
// console.log(itemlist.childNodes);
// console.log(itemlist.children[2].style.color="white");
// console.log(itemlist.firstChild);
// console.log(itemlist.lastChild);
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.innerHTML="Nishant";


// Siblings 
// console.log(itemlist.nextElementSibling);
// console.log(itemlist.nextSibling);

// // Previous sibling 
// console.log(itemlist.previousSibling); 
// console.log(itemlist.previousElementSibling); 

// Create Element and insert  

// var ndiv=document.createElement("div");
// ndiv.className="Hello";
// ndiv.id="hello1";
// ndiv.setAttribute("title","Hello div");


// // Creating text node 
// var newdivtxt=document.createTextNode("Hello");
// ndiv.appendChild(newdivtxt);
// console.log(ndiv);

// // Insert into HTML 
// var container=document.querySelector("header .container");
// var h1=document.querySelector("header h1");
// container.insertBefore(ndiv,h1);
// ndiv.style.fontSize="30px";


// Working on the application
var form=document.getElementById("addForm");

// Filter 
var filter=document.getElementById("filter");


var itemList=document.getElementById("items");
// Delete Event 
itemList.addEventListener('click',deleList);
// Submit and Adding list Event 
form.addEventListener('submit',addItem);


// Filter Event 
filter.addEventListener('keyup',filteritems)
// Add item 
function addItem(e)
{
  e.preventDefault();
  var newItem=document.getElementById("item").value;

// Saving to the text 
var text = document.getElementById("item").value;
    var blob = new Blob([text], {type: "text/plain"});
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    

//   Creating List
var li=document.createElement("li");
li.className="list-group-item";
li.appendChild(document.createTextNode(newItem));
// Creating delete button

var del=document.createElement("button");
// Add class 
del.className="btn btn-danger btn-sm float-right delete";
// Append the text node 
del.appendChild(document.createTextNode("X"));
li.appendChild(del);
var txt=li.innerText;

    itemList.appendChild(li);
document.getElementById("item").innerHTML="";
}


// Remove Item 
function deleList(e)
{
  if(e.target.classList.contains('delete'))
  {
   if(confirm("Are you sure?"))
   {
    var li1=e.target.parentElement;
    itemList.removeChild(li1);
   }
  }
}

function filteritems(e)
{
    //convert 
    var text1=e.target.value.toLowerCase();
   var items=itemList.getElementsByTagName('li');
//    Convert it to array 
Array.from(items).forEach(function(item){
var itemName=item.firstChild.textContent;
if(itemName.toLocaleLowerCase().indexOf(text1)!=-1)
{
item.style.display="block";
}
else{
    item.style.display="none";
}
});

}