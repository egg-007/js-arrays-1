const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];

const newdata1 = []

function ex1 (){
    const newdata = data.reduce((a,b)=>a*b)
    let total = data[0]
    for(let i = 1; i < data.length; i++)
    {
        total *= data[i]
    }
    console.log(newdata)
    console.log(total)
}
/////////////////////////////////////////////
function ex2 (){
    const reversedata = data.sort((a,b)=>a-b)
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
    console.log(Number.parseInt(reversedata.length / 2))
    console.log(Number.parseInt(data.length / 2))
}
////////////////////////////////////////////////:::
function ex3 (){
    //TODO WITH REDUCE 
    let old = 0
    for(let i = 0; i < data.length; i++)
    {
        data[i] += old
        old = data[i]
    }
    console.log(data)
}
////////////////////////////////////////////
function ex4 (){
    const reversedata = Array.from(new Set(data)).sort((a,b)=>a-b)
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
    for(let f = 0; f < data.length; f++)
    {
        if(data[f] != data[f - 1])
            newdata.push(data[f])
    }
    console.log(newdata)
    console.log(reversedata)

}
///////////////////////////////////////////////
function ex5 (){
    //TODO
    // let small = []
    // let big = []
    // data.reduce((first,z)=>{
    //     if(first < 50)
    //         small.push(first)
    //     if(first >= 50)
    //         big.push(first)

    // }) 
    let oldsmall = []
    let oldbig = []
    for(let i = 0; i < data.length; i++)
    {
        if(data[i] < 50)
            oldsmall.push(data[i])
        else
            oldbig.push(data[i])
    }
    // console.log(small)
    console.log(oldsmall)
    // console.log(big)
    console.log(oldbig)
}
///////////////////////////
function ex6 (){
    const newdata = data.sort((a,b)=>b-a).slice(0,3)
    for(let i = 0; i < 3; i++)
    {
        let big = 0
        let indixOfBig = 0
        for(let f = 0; f < data.length; f++)
        {
            if(data[i] > big)
            {
                big = data[i]
                indixOfBig = i
            }
        }
        newdata1[i] = big
        data[indixOfBig] = 0
    }
    console.log(newdata)
    console.log(newdata1)
}
////////////////////////////////////////////
function ex7 (){
    const newdata = data.sort((a,b)=>a-b).slice(0,3)
    for(let i = 0; i < 3; i++)
    {
        let min = data[0]
        let indixOfmin = 0
        for(let f = 0; f < data.length; f++)
        {
            if(data[i] < min)
            {
                min = data[i]
                indixOfmin = i
            }
        }
        newdata1[i] = min
        data[indixOfmin] = 999999
    }
    console.log(newdata)
    console.log(newdata1)
}
//////////////////////////////////////////////
function ex8 (){
    //TODO WITH REDUCE
    const even = []
    const odd = []
    let total = 0
    for(let i = 0; i < data.length; i++)
    {
        if(data[i] % 2 == 1)
            odd.push(data[i])
        else
            even.push(data[i])
        total += data[i]
    }
    console.log(even)
    console.log(odd)
    console.log(total)
}
//////////////////////////////////////////////////
function ex9 (){
const newdata = data.map((v,i)=>v*i)
for(let i = 0; i < data.length; i++)
{
    data[i] *= i
}
console.log(newdata)
console.log(data)
}
///////////////////////////////////////////////
function ex10 (){
const newdata = data.map((v,i)=>{
    if(v < 10)
        return 0
    return v
})
for(let i = 0; i < data.length; i++)
{
    if(data[i] < 10)
        data[i] = 0
}
console.log(newdata)
console.log(data)
}
////////////////////////////////////////
function ex10 (){
const newdata = data.map((v,i)=>{
    if(v < 10)
        return 0
    return v
})
for(let i = 0; i < data.length; i++)
{
    if(data[i] < 10)
        data[i] = 0
}
console.log(newdata)
console.log(data)
}
///////////////////////////////////////////////////
// TODO EX11
//////////////////////////////////////////////////
function ex12(){
    let max
    let min
    let total = 0 
    let moyenne
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
    for(let t = 0; t < data.length; t++)
        total += data[t]
    max = data[data.length - 1]
    min = data[0]
    moyenne = data[Number.parseInt(data.length / 2)]
    console.log(max)
    console.log(min)
    console.log(moyenne)
    console.log(total)
}
ex12()