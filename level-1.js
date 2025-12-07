const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];
const newdata2 = []

function ex1 (){
    const newdata = data.filter(numbers => numbers % 2 == 0)
    for(let i = 0; i < data.length; i++)
    {
        if(data[i] % 2 == 0)
            newdata2.push(data[i])
    }
}

/////////////////////////////////////////////////
function ex2 (){
const newdata1 = data.filter(numbers => numbers % 2 == 1)
for(let i = 0; i < data.length; i++)
{
    if(data[i] % 2 == 1)
        newdata2.push(data[i])
}
}
/////////////////////////////////////////
function ex3 (){
const mapdata1 = data.map(numbers => numbers * 2)
for(let i = 0; i < data.length; i++)
{
    newdata2.push(data[i]*2)
}
}
///////////////////////////////////////////
function ex4 (){
    const max = Math.max(...data)
    let maxnumber = data[0]
    for(let i = 0; i < data.length; i++)
    {
        if(data[i] > maxnumber)
            maxnumber = data[i]
    }
    console.log(maxnumber)
}
/////////////////////////////////////////////////////
function ex5 (){
    const min = Math.min(...data)
    let minnumber = data[0]
    for(let i = 0; i < data.length; i++)
    {
        if(data[i] < minnumber)
            minnumber = data[i]
    }
    console.log(min)
}
////////////////////////////////////////////////
function ex6 (){
    const total = data.reduce((a,b)=> a + b ,0)
    let totalnumber = 0
    for(let i = 0; i < data.length; i++)
    {
        totalnumber += data[i]
    }
    console.log(totalnumber)
}
//////////////////////////////////////////////
function ex7 (){
    const total = data.reduce((a,b)=> a + b ,0)
    let totalnumber = 0
    for(let i = 0; i < data.length; i++)
    {
        totalnumber += data[i]
    }
    const moyenne = total/data.length
    const moyennenumber = totalnumber/data.length
}
/////////////////////////////////////////////////
function ex8 (){
    const total = data.find(nb=> nb == 77)
    console.log(total)
    for(let i = 0; i < data.length; i++)
    {
        if(data[i] == 77){
            console.log(data[i])
            return data[i]
        }
    }
}
////////////////////////////////////////////////////
function ex9 (){
const newdata1 = data.filter(numbers => numbers > 20)
for(let i = 0; i < data.length; i++)
{
    if(data[i] > 20)
        newdata2.push(data[i])
}
console.log(newdata1)
console.log(newdata2)
}
///////////////////////////////////////
function ex10 (){
const newdata1 = data.every(numbers => numbers > 0)
if(newdata1 == true){
    console.log("let's goooooooo")
    return
}
for(let i = 0; i < data.length; i++)
{
    if(data[i] < 0){
        console.log("nuuuuh")
        return
    }
}
}
////////////////////////////////////////////////////
function ex11 (){
const newdata1 = data.some(numbers => numbers > 100)
if(newdata1 == true){
    console.log("let's goooooooo ITS BIGGER THAN 100")
}
for(let i = 0; i < data.length; i++)
{
    if(data[i] > 100){
        console.log("let's goooooooo ITS BIGGER THAN 100")
        return
    }
}
}
///////////////////////////////////////////////////////////
function ex12 (){
const ne = data.filter(numbers => numbers > 50).length
let big = 0
for(let i = 0; i < data.length; i++)
{
    if(data[i] > 50)
        big++
}
console.log(ne)
console.log(big)
}
