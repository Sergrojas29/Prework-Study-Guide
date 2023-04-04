/*var topics = "CSS";
if (topics === 'HTML') {
    console.log("Let's study HTML!")
   
 }
else if (topics === 'CSS') {
    console.log("Let's study CSS!");
    
 }
else if (topics === 'git') {
    console.log("Let's study Git!");
       
}
else if (topics === 'JavaScript') {
    console.log("let's Study JavaScript");
    
    
} else {
    console.log('Please try again!');
}
var shapes = ["triangle", "square", "pentagon", "circle"];
for (var x = 0;
    x < shapes.length;
    x++) {
        console.log(shapes[x]);
    
    }

*/
var topics = ["HTML","CSS","Git","JavaScript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

/*for (let x = 0; x < topics.length; x++) {
    console.log("Let's Study " + topics[x]+ "!");
    if (x===3) {
        console.log("Please try agian!");  
    }
    
}*/

function listtopics() {
    for (let x = 0; x < topics.length; x++) {
        console.log(topics[x]);
        
    }
    
}

function SelectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!")
       
     }
    else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
        
     }
    else if (randomTopic === 'git') {
        console.log("Let's study Git!");
           
    }
    else if (randomTopic === 'JavaScript') {
        console.log("let's Study JavaScript");
        
        
    } else {
        console.log('Please try again!');
    }
}
console.log('Here are the topic we learned through Prework:');
listtopics();
console.log('Which topic should we study first?');
SelectTopic();

