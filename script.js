let num = 11;
if(num >= 10) {
    console.log('Suurem kui kümme!');
} else if (num === 10) {
    console.log('Võrdne kümmega!');
} else {
    console.log('Väiksem kui kümme!');
}

let day = new Date('2025-10-11').getDay();
console.log(day);
if(day === 1) {
    console.log('Esmaspäev');
} else if(day === 2) {
    console.log('Teisipäev');
} else if(day === 3) {  
    console.log('Kolmapäev');
} else if (day === 4) {
    console.log('Neljapäev');
} else if(day === 5 ||  day === 6) {
    console.log('Reede');
} else if(day === 6) {
    console.log('Laupäev');
} else if(day === 0) {
        console.log('Pühapäev');
} else {
    console.log('imelikpäev');
}

switch (day) {
    case 1:
        console.log('Esmaspäev');    
        break;
    case 2:
        console.log('Teisipäev');    
        break;
    case 3:
        console.log('Kolmpäev');    
        break;
    case 4:
        console.log('Neljapäev');    
        break;
    case 5:
    case 6:
        console.log('Pidupäev');    
        break;
    case 0:
        console.log('Pühapäev');    
        break;
    default:
        console.log('Imelikpäev');         
}