const list = document.querySelector('.list')
const item = document.querySelector('.item')

const baseUrl = 'https://fakestoreapi.com/products'

// function getProducts() {
//     fetch(baseUrl)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             showProducts(data)

//         })
// }
getProducts()
//async await
async function getProducts(){
    try{
        const response=await fetch(baseUrl)
         const data=await response.json()
         console.log(data,' new data');
         showProducts(data)
     }catch(arr){
        console.log(arr);
        
     }
}

function showProducts(arr) {
    for (const product of arr) {
        list.innerHTML += `
        <div class="item">
        <img class="img" src=${product.image} alt="photo"/>
        <li>
        <span>${product.title}</span>
        <p>${product.description}</p>
        </li>
        </div>`
    }
}