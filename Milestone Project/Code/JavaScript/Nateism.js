

function nateismIncrement(num, text){
    //Manage the number
    var element = document.getElementById(num);
    var count = parseInt(element.innerText) + 1;
    element.innerText = count;

    //Manage the text
    var textElement = document.getElementById(text);
    var saying = getNateism(count);
    textElement.innerText = saying;
}

function nateismDecrement(num, text){
    
    //set up the number
    var element = document.getElementById(num);
    var count = parseInt(element.innerText);

    //Manage the text
    var textElement = document.getElementById(text);

    //check if greater than zero
    if(count > 0){
        count -= 1;
        element.innerText = count;
        var saying = getNateism(count);
        textElement.innerText = saying;
    }
}

function getNateism(index){
    if(index >11){
        return "I say a lot of things. Some of it is hot air. Some of it is combustible. All of it is a Nateism."
    }
    switch(index){
        case 0:
            return "No Nateisms to speak of.";
            break;
        case 1:
            return "Walls are bad for one's health.";
            break;
        case 2:
            return "You may not want my two cents, but it beats having no sense.";
            break;
        case 3:
            return "The ergonomics of this unicorn are surprisingly efficient.";
            break;
        case 4:
            return "Sharks are just really big noses.";
            break;
        case 5:
            return "I didn't trip, there was just a gravitational anomaly where I was standing.";
            break;
        case 6:
            return "Numbers are easy on paper, life makes them hard.";
            break;
        case 7:
            return "I wuv woo moo.";
            break;
        case 8:
            return "My knives may be sharp, but my tongue has the edge of a butter knife.";
            break;
        case 9:
            return "Not all who wander are lost, but if you see me wandering, I am probably lost.";
            break;
        case 10:
            return "If you know yourself, you will win half of your battles. If you know your enemy, you will win half of your battles. If you know nether yourself nor your enemy you will lose all of your battles. If you know yourself and your enemy you will win all of your battles. -Tsun Tsu";
            break;
        case 11:
            return "No man needs a vacation nearly as much as the man who just had one. -Elbert Hubbard";
            break;
        default:
            return "I say a lot of things. Some of it is hot air. Some of it is combustible. All of it is a Nateism."
            break;
    }

}