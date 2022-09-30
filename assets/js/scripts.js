fetch("https://restcountries.com/v3.1/lang/eng")
.then(res=>{
    return res.json();
})
.then(json=> {
    for(let i=0; i < json.length; i++){
        document.querySelector("#container").innerHTML += `
        <div class='countryDiv'>
            <img width='100%' src='${json[i].flags.png}'>
            <span>${json[i].name.common}</span>
        </div>`;
    }
})
.catch(err=> {
    console.log('Faied: ', err);
});
