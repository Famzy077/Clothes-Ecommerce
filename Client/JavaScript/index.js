let userName = 'Jovinco'
let dateYear = new Date().getFullYear()
let footer = document.getElementById('footer')

let slideIndex = 0;
let slide = document.querySelectorAll('.slides')


let slidesIcon = () =>{
    for(let i = 0; i < slide.length; i++){
        slide[i].style.display = 'none';
    }
    
    slideIndex++;
    if(slideIndex > slide.length) {slideIndex = 1}
    slide[slideIndex-1].style.display = 'block';
    setTimeout(slidesIcon, 3000);
}
slidesIcon()

let contactBox = document.querySelector('.contactBox')
let divAnimation = document.querySelectorAll('div')
window.onscroll = () => {
    divAnimation.forEach(animate => {
        let top = window.scrollY;
        let offset = animate.offsetTop - 180;
        let height = animate.offsetHeight;

        if(top >= offset && top < offset + height){
            animate.classList.add('show-animation')
        }else{
            animate.classList.remove('show-animation')
        }

        top >= offset && top < offset + height
            contactBox.classList.add('call')
            contactBox.style.display = 'block'
        
    })
}

let menu = document.getElementById('menu')
let icons = document.getElementById('icons')
Menu.addEventListener('click', () =>{
    menu.classList.toggle('menu')
    if(icons.onclick){
        icons.style.display = 'none'
    }
})
footer.innerHTML = `Copy ${dateYear} All right reserved ${userName}`

const soapProducts = document.querySelectorAll('.checkIndex');

let prod_1 = document.getElementById('prod_1')
prod_1.addEventListener('click', (e) => {
    e.preventDefault()

        soapProducts.forEach((product) => {
        const productName = product.textContent;
        if (productName.includes('Viva')) {
            product.style.display = 'block';
        }
         else {
            product.style.display = 'none';
        }
        });
})

let product_2 = document.getElementById('product_2')
let products_3 = document.getElementById('products_3')
product_2.addEventListener('click', () => {
    soapProducts.forEach((product) => {
        const productName = product.textContent;
        if(productName.includes('Soap')){
            product.style.display = 'block';
        }else{
            product.style.display = 'none';
        }
    })
})

products_3.addEventListener('click', () => {
    soapProducts.forEach((product) => {
        const productName = product.textContent;
        if(productName.includes('Fizz')){
            product.style.display = 'block'
        }else{
            product.style.display = 'none'
        }
    })
})

let searchInput = document.getElementById('searchInput')
let btnSearch = document.getElementById('btnSearch') // Define btnSearch
let searchResult = document.getElementById('searchResult')

// Get the products
let products = document.querySelectorAll('.checkIndex')

btnSearch.addEventListener('click', (e) => {
    e.preventDefault()
    let searchValue = searchInput.value.toLowerCase()
    products.forEach((product) => {
      let productName = product.querySelector('h3').textContent.toLowerCase()
  
      if(productName.includes(searchValue)){
        product.style.display = 'block'
        searchResult.style.color = 'black'
        searchResult.innerHTML = 'Product available, click to see details '
      } else {
        product.style.display = 'block'
        searchResult.style.color = 'red'
        searchResult.innerHTML = 'Product couldn\'t be found. Click to see available products'
      }
    })
  })


// getProduct()
// let contain = document.querySelector('.contain')
// let loader = document.getElementById('loader')
// const FetchData = () => {
//     let xhr = new XMLHttpRequest()
//         xhr.open('GET','http://localhost:5000/product', true)
//         xhr.onload = function(){
//             if(xhr.status === 200){
//                 let products = JSON.parse(this.response)
//                 // console.log(products)
//                 products.forEach(productKey => {
//                     let {Viva_Plus, Price, Categories} = productKey
//                     // console.log(productKey)
//                     // console.log(Viva_Plus)
//                     // console.log(Categories)
//                     // console.log(Price)

//                     let productName = document.createElement('p')
//                     let productdecription = document.createElement('b')
//                     let productPrice = document.createElement('p')

//                     productName.innerHTML = (`${Viva_Plus}`)
//                     productdecription.innerHTML = (`${Categories}`)
//                     productPrice.innerHTML = (`Price: ${Price}`)

//                     loader.style.display = 'block'
//                     setTimeout(() => {
//                         loader.style.display = 'none'
//                         contain.append(productName,productdecription, productPrice)
//                     }, 2000);
//                 })
//             }
//         }
//     xhr.send()
// }

// FetchData()

let displayCart = document.getElementById('displayCart')
let displayCart2 = document.getElementById('displayCart2')
let likes = [];

let addCart = () => {
    // Get the current cart value
    let currentValue = parseInt(displayCart.value);
    let currentValue2 = parseInt(displayCart2.value);

    // Increment the cart value
    currentValue++;
    currentValue2++;
   
    // Update the display values
    displayCart.value = currentValue;
    displayCart2.value = currentValue2;

    // Add the item to the cart array
    likes.push({ /* item details, e.g., id, name, price */ });

    // Store the cart in localStorage
    localStorage.setItem('likes', JSON.stringify(likes));
}

let storedCart = localStorage.getItem('likes');
if (storedCart) {
    likes = JSON.parse(storedCart);
    // Update the display values
    displayCart.value = likes.length;
    displayCart2.value = likes.length;
}
// <div class="soap checkIndex">
//             <div class="soap_img animate">
//                 <img src="Images/tops.jpg" alt="JoyVinco Detergent Distributor" title="JoyVinco Detergent Distributor">
//             </div>
//             <div class="soap_box">
//                 <h3>Viva Green</h3>
//                 <p>Viva Plus washing powder cleanses your clothes!</p>
//                 <div class="check">
//                     <strong>₦9600 <strike>₦1200</strike></strong>
//                     <button onclick="addCart()">Wish<i class="fa-solid fa-heart"></i></button>
//                 </div>
//             </div>
//         </div>

const FetchData = () => {
    let url = '../product.json';
    fetch(url)
    .then(res =>  res.json())
    .then(data => data.forEach((getData) => {
        let {id} = getData;     
        console.log(id)
        let productBox = document.createElement('div');
        const displayItems = document.getElementById('displayItems')
        console.log(getData.image)
        productBox.innerHTML = `
            <div class='soap checkIndex'>
                <div class='soap_img '>
                    <img src=${getData.image} title='${getData.title}'/>
                </div>
                <div class="soap_box">
                    <h3>${getData.title}</h3>
                    <p>${getData.description}</p>
                    <div class="check">
                        <strong>₦${getData.price} <strike>${getData.priceBefore}</strike></strong>
                        <button onclick='addCart()'>Wish <i class="fa-solid fa-heart"></i></button>
                    </div>
                </div>
            </div>
        `
        displayItems.append(productBox)
    }))
    
}
FetchData()