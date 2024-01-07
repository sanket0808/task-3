let ep = fetch("https://jsonplaceholder.typicode.com/posts");

const container=document.querySelector(".container");

ep.then((value1)=>{
    return value1.json();
}).then((value2)=>{
    for(let i=0;i<value2.length;i++){
        const card = document.createElement('div');
        card.classList.add('card');
        const title =document.createElement('h5');
        title.textContent=(i+1)+"  ::  "+value2[i].body;
        card.appendChild(title);
        container.appendChild(card);
    }
})

































// value2.forEach(item => {
    
    //     const title =document.createElement('h5');
    //     title.textContent=item.title;
    //     document.body.appendChild(title);
    //     });
    // console.log(value2);
    // const result = document.createElement('h5');
    // result.textContent = JSON.stringify(value2);
    // document.body.appendChild(result);