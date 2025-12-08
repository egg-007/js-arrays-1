const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];
const newdata = []
const newdata1 = []

function ex1 (){
    const reversedata = data.reverse()
    for(let i = 0; i < data.length / 2; i++)
    {
        let swap = data[i]
        data[i] = data[data.length - 1 - i]
        data[data.length - 1 - i] = swap
    }
    console.log(reversedata)
    console.log(data)
}
//////////////////////////////////////////
function ex2 (){
    const reversedata = data.sort((a,b)=>a-b)
    for(let i = 0; i < data.length; i++)
    {
        for(let j = 0; j < data.length; j++)
        {
            if(data[i] < data[j]){
                let swap = data[i]
                data[i] = data[j]
                data[j] = swap
            }
        }
    }
    console.log(reversedata)
    console.log(data)
}
/////////////////////////////////////////////
function ex3 (){
    const reversedata = data.sort((a,b)=>b-a)
    for(let i = 0; i < data.length; i++)
    {
        for(let j = 0; j < data.length; j++)
        {
            if(data[i] > data[j]){
                let swap = data[i]
                data[i] = data[j]
                data[j] = swap
            }
        }
    }
    console.log(reversedata)
    console.log(data)
}
//////////////////////////////////////////
function ex4 (){
    const reversedata = data.map(String)
    for(let i = 0; i < data.length; i++)
    {
        data[i] = String(data[i])
    }
    console.log(data)
    console.log(reversedata)
}
//////////////////////////////
function ex5 (){
    const reversedata = data.filter((v,i)=>i%2===0)
    for(let i = 0; i < data.length; i++)
    {
        if(i % 2 == 0)
            newdata.push(data[i]);
    }
    console.log(newdata)
    console.log(reversedata)
}
////////////////////////////////////////////////
function ex6 (){
    const reversedata = data.findIndex(nb => nb == 28)
    for(let i = 0; i < data.length; i++)
    {
        if(data[i] == 28)
            console.log(i)
    }
    console.log(reversedata)
}
/////////////////////////////////////
function ex7 (){
    data.sort((a,b)=>a-b)
    const reversedata = new Set(data)
    for(let i = 0; i < data.length; i++)
    {
        if(data[i] != data[i - 1])
            newdata.push(data[i])
    }
    console.log(newdata)
    console.log(reversedata)
}
/////////////////////////////////////////////////////////////
function ex8 (){
    const filtered1 = data.filter(nb => nb % 2 == 0)
    const filtered2 = data.filter(nb => nb % 2 == 1)
    for(let i = 0; i < data.length; i++)
    {
        if(data[i] % 2 == 0)
            newdata.push(data[i])
        else
            newdata1.push(data[i])
    }
    console.log(filtered1)
    console.log(filtered2)
    console.log(newdata)
    console.log(newdata1)
}
///////////////////////////////////
function ex9 (){
    const reversedata = data.slice(0,5)
    for(let i = 0; i < 5; i++)
    {
        newdata.push(data[i])
    }
    console.log(newdata)
    console.log(reversedata)
}
///////////////////////////////////
function ex10 (){
    const reversedata = data.slice(-5)
    for(let i = data.length - 1; i > data.length - 6; i--)
    {
        newdata.unshift(data[i])
    }
    console.log(newdata)
    console.log(reversedata)
}
//////////////////////////////
function ex11 (){
    const reversedata = data.map(n=>n*n)
    for(let i = 0; i < data.length; i++)
    {
        newdata.push(data[i] * data[i])
    }
    console.log(newdata)
    console.log(reversedata)
}
//////////////////////////////////////////
function ex12 (){
    const reversedata = data.filter(n=>n>10)
    for(let i = 0; i < data.length; i++)
    {
        if(data[i] > 10)
            newdata.push(data[i])
    }
    console.log(newdata)
    console.log(reversedata)
}
ex12 ()
