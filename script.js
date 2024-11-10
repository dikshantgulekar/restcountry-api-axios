
function get_val(cuurTag){

    console.log(cuurTag.innerHTML);
    var firstLetter = cuurTag.innerHTML
    getDataWithLetter(firstLetter)
}


function getDataWithLetter(countname){

    console.log(countname)

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; 

    axios.get(`https://restcountries.com/v3.1/name/${countname}`)
    .then(response =>{
        var result = response.data;

        const filteredCountries = result.filter((country) =>
            country.name.common.startsWith(countname)
        );
        
        filteredCountries.forEach((obj)=>{
            const card = document.createElement('div');
            card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4'); 

            card.innerHTML = `
                <div class="card h-100">
                    <img src="${obj.flags.png}" class="card-img-top" alt="img">
                    <div class="card-body">
                        <h5 class="card-title">${obj.name.common}</h5>
                        
                    </div>
                </div>
            `;
            
            productContainer.appendChild(card);
        })

    })

}

function getDataWithName(countname){
    console.log(countname)

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; 

    axios.get(`https://restcountries.com/v3.1/name/${countname}`)
    .then(response =>{
        var result = response.data;

        result.forEach((obj)=>{
            const card = document.createElement('div');
                card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4'); 

                card.innerHTML = `
                    <div class="card h-100">
                        <img src="${obj.flags.png}" class="card-img-top" alt="img">
                        <div class="card-body">
                            <h5 class="card-title">${obj.name.common}</h5>
                            
                        </div>
                    </div>
                `;
                
                productContainer.appendChild(card);
        })
    })
}

document.getElementById('search').onclick = function(ev){
    ev.preventDefault();
    console.log('TEST');
    var txtdata = document.getElementById('countryName').value;

    console.log(txtdata);
    getDataWithName(txtdata)

    document.getElementById('countryName').value = '';

}

function getAllData(){
    // console.log()

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; 

    axios.get(`https://restcountries.com/v3.1/all`)
    .then(response =>{
        var result = response.data;
        console.log(result);

        result.forEach((obj)=>{

            const card = document.createElement('div');
                card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4'); 

                card.innerHTML = `
                    <div class="card h-100">
                        <img src="${obj.flags.png}" class="card-img-top" alt="img">
                        <div class="card-body">
                            <h5 class="card-title">${obj.name.common}</h5>
                            
                        </div>
                    </div>
                `;
                
                productContainer.appendChild(card);
        })
    })
}


document.getElementById('allCountries').onclick = function(ev){
    ev.preventDefault();
    console.log('test');
    getAllData();
}