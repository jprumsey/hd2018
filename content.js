// reading file into array 
//var fs = require("fs");
//fs.readFile("./mytext.txt", function(text){
//   var textByLine = text.split("\n")
//});


walk(document.body);
function walk(node) {

    var child, next;
    switch (node.nodeType) {
        case 1: // Element
        case 9: // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;
        case 3: // Text node
            handleText(node);
            break;
    }
}


function handleText(textNode) 
{
		var myDict = {"preposterous":"contrary to reason or common sense; utterly absurd or ridiculous."};
    
    /*
    var myArray = ['Donald "I don\'t want to use the word \'screwed\', but I screwed him" Trump',
        'Donald "Why doesn\'t he show his birth certificate" Trump'
    ];
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    */
    
    var v = textNode.nodeValue;
    for(var key in dict)
    {
    	var replace = key;  // all the key values looped through
      var re = new RegExp(replace,"g");
      v.replace(re, dict[key]);  // newstring = definition
    }
    
    // originally here
    // v = v.replace(/\bDonald\b/g, "");
    // v = v.replace(/\bTrump\b/g, rand);
    // v = v.replace(/\bThe 's\b/gi, rand + "'s");
    textNode.nodeValue = v;
}