


// Tourist data for all categories
let touristData = {

wildlife: [
{ name:"Jim Corbett", state:"Uttarakhand",image:"https://th.bing.com/th/id/OIP.cBzJhU2-c0kfnZzEa5CffgHaEr?w=242&h=180&c=7&r=0&o=7&pid=1.7&rm=3", rating:4.7 },
{ name:"Kaziranga", state:"Assam", image:"https://th.bing.com/th/id/OIP.z0-lpkUPCtTfpWAdXB-EBgHaLH?w=126&h=187&c=7&r=0&o=7&pid=1.7&rm=3", rating:4.8 },
{ name:"Gir National Park", state:"Gujarat",image: "https://th.bing.com/th/id/OIP._yZIkr6vK7RpBc5R6qeIOQHaEv?w=269&h=180&c=7&r=0&o=7&pid=1.7&rm=3", rating:4.6 }
],

hill: [
{ name:"Ooty", state:"Tamil Nadu", image: "https://th.bing.com/th/id/OIP.RBxCBPYO7YjS_1XXh5T5zwHaEK?w=313&h=180&c=7&r=0&o=7&pid=1.7&rm=3", rating:4.8 },
{ name:"Manali", state:"Himachal Pradesh",image:"https://th.bing.com/th/id/OIP.PTvd1sSdXth4Gh3sRYz9DwHaDw?w=305&h=180&c=7&r=0&o=7&pid=1.7&rm=3", rating:4.7 },
{ name:"Shimla", state:"Himachal Pradesh",image:"https://th.bing.com/th/id/OIP.YyO9NGhp8iylHLQnLht4GgHaEo?w=245&h=180&c=7&r=0&o=7&pid=1.7&rm=3", rating:4.6 }
],

pilgrimage: [
{ name:"Tirupati", state:"Andhra Pradesh",image:"https://th.bing.com/th/id/OIP.qWVFRAf7rME4YdC04bVjwgHaFj?w=225&h=180&c=7&r=0&o=7&pid=1.7&rm=3", rating:5.0 },
{ name:"Varanasi", state:"Uttar Pradesh",image:"https://th.bing.com/th/id/OIP.qfh_GRMDwav66dAsi53qdAHaFj?w=196&h=180&c=7&r=0&o=7&pid=1.7&rm=3", rating:4.9 },
{ name:"Kedarnath", state:"Uttarakhand",image:"https://th.bing.com/th/id/OIP.YQj2Themksw6bpGPlkLShQHaFw?w=247&h=192&c=7&r=0&o=7&pid=1.7&rm=3", rating:4.8 }
],

beach: [
{ name:"Goa Beach", state:"Goa",image:"https://th.bing.com/th/id/OIP.n5G4z2sZ-D3DZEdrpwP2jQHaFj?w=280&h=180&c=7&r=0&o=7&pid=1.7&rm=3", rating:4.8 },
{ name:"Kovalam Beach", state:"Kerala",image:"https://th.bing.com/th/id/OIP.IKn8OBvLJGnupciQvkdiiwHaFj?w=240&h=180&c=7&r=0&o=7&pid=1.7&rm=3", rating:4.6 },
{ name:"Andaman Beach", state:"Andaman",image:"https://th.bing.com/th/id/OIP.n8jF5SxPmiFvGtwR5RCzFQHaFj?w=232&h=180&c=7&r=0&o=7&pid=1.7&rm=3", rating:4.7 }
],

adventure: [
{ name:"Rishikesh Rafting", state:"Uttarakhand",image:"https://th.bing.com/th/id/OIP.YAUCrD1MpJ34Pg-DS1U3WQHaEE?w=243&h=180&c=7&r=0&o=7&pid=1.7&rm=3", rating:4.9 },
{ name:"Ladakh Biking", state:"Ladakh",image:"https://th.bing.com/th/id/OIP.1SaYFvGx-pjqC7HnGk_J5gHaE8?w=286&h=191&c=7&r=0&o=7&pid=1.7&rm=3", rating:4.8 },
{ name:"Manali Trekking", state:"Himachal Pradesh",image:"https://th.bing.com/th/id/OIP.jRbVRio9K_2VbmvfmgYNvAHaE8?w=288&h=192&c=7&r=0&o=7&pid=1.7&rm=3", rating:4.7 }
]

};


// 1️⃣ Show places (Array Traversal)
function showPlaces(category){

let places = touristData[category];
let output = document.getElementById("output");

output.innerHTML="";

for(let i=0;i<places.length;i++){

output.innerHTML += `
<div class="place-card">
<h3>${places[i].name}</h3>
<p><b>State:</b> ${places[i].state}</p>
<p><b>Rating:</b> ${places[i].rating}</p>
<img src="${places[i].image}" alt="${places[i].name}">
</div>
`;

}

}


// 2️⃣ Linear Search (Search by name)
function linearSearch(category){

let searchValue =
document.getElementById("searchInput").value.toLowerCase();

let places = touristData[category];
let output = document.getElementById("output");

output.innerHTML="";

for(let i=0;i<places.length;i++){

if(places[i].name.toLowerCase().includes(searchValue)){

output.innerHTML = `
<div class="place-card">
<h3>${places[i].name}</h3>
<p><b>State:</b> ${places[i].state}</p>
<p><b>Rating:</b> ${places[i].rating}</p>
<img src="${places[i].image}">
</div>
`;

return;

}

}

output.innerHTML="Place not found";

}


// 3️⃣ Bubble Sort (Sort by rating)
function bubbleSort(category){

let places = touristData[category];

for(let i=0;i<places.length-1;i++){

for(let j=0;j<places.length-i-1;j++){

if(places[j].rating < places[j+1].rating){

let temp = places[j];
places[j] = places[j+1];
places[j+1] = temp;

}

}

}

showPlaces(category);

}


// 4️⃣ Binary Search (Search by rating)
function binarySearch(category){

let target=parseFloat(document.getElementById("ratingInput").value);

let places=touristData[category];

places.sort((a,b)=>a.rating-b.rating);

let low=0;
let high=places.length-1;

while(low<=high){

let mid=Math.floor((low+high)/2);

if(places[mid].rating===target){

document.getElementById("output").innerHTML = `
<div class="place-card">
<h3>${places[mid].name}</h3>
<p><b>State:</b> ${places[mid].state}</p>
<p><b>Rating:</b> ${places[mid].rating}</p>
<img src="${places[mid].image}">
</div>
`;

return;

}

else if(places[mid].rating<target)
low=mid+1;

else
high=mid-1;

}

document.getElementById("output").innerHTML="Rating not found";

}

// 5️⃣ Stack for recently viewed places
let stack = [];

function viewPlace(placeName){

stack.push(placeName);

document.getElementById("output").innerHTML =
"<p>Viewing: <b>"+placeName+"</b></p>";

}


// 6️⃣ Go back using stack
function goBack(){

if(stack.length === 0){

document.getElementById("output").innerHTML =
"No previous places";

return;

}

let currentViewed = stack.pop();

if(stack.length === 0){

document.getElementById("output").innerHTML =
"<p> Reached start from :<b> "+currentViewed+"</b></p>";

}

else{

let lastViewed = stack[stack.length-1];

document.getElementById("output").innerHTML =
"<p> Back to :<b>"+lastViewed+"</b></p>";

}

}