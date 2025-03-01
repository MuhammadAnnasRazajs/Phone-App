const phones = [
    {
      brand: "Samsung",
      model: "Galaxy S21",
      ram: 8,
      rom: 128,
      camera: "64 megapixel",
      price: 799,
      image: "./assets/samsung-gs21.jpg"
    },
    {
      brand: "Apple",
      model: "iPhone 13",
      ram: 4,
      rom: 128,
      camera: "12 megapixel",
      price: 799,
      image: "./assets/iphone-13.png"
    },
    {
      brand: "OnePlus",
      model: "9",
      ram: 12,
      rom: 256,
      camera: "48 megapixel",
      price: 729,
      image: "./assets/oneplus-9.png"
    },
    {
      brand: "Google",
      model: "Pixel 6",
      ram: 8,
      rom: 128,
      camera: "50 megapixel",
      price: 599,
      image: "./assets/google-p6.jpg"
    },
    {
      brand: "Xiaomi",
      model: "Mi 11",
      ram: 8,
      rom: 256,
      camera: "108 megapixel",
      price: 749,
      image: "./assets/xiaomi-mi11.png"
    },
    {
      brand: "Sony",
      model: "Xperia 1 III",
      ram: 12,
      rom: 256,
      camera: "12 megapixel",
      price: 1299,
      image: "./assets/sony-x1.jpg"
    },
    {
      brand: "Oppo",
      model: "Find X3 Pro",
      ram: 12,
      rom: 256,
      camera: "50 megapixel",
      price: 1149,
      image: "./assets/oppo-fx3-pro.jpg"
    },
    {
      brand: "Vivo",
      model: "X60 Pro",
      ram: 12,
      rom: 256,
      camera: "48 megapixel",
      price: 999,
      image: "./assets/vivo-x60-pro.png"
    },
    {
      brand: "Nokia",
      model: "G50",
      ram: 4,
      rom: 128,
      camera: "48 megapixel",
      price: 299,
      image: "./assets/nokia-g50.jpg"
    },
    {
      brand: "Motorola",
      model: "Edge 20",
      ram: 8,
      rom: 256,
      camera: "108 megapixel",
      price: 599,
      image: "./assets/motorola-e20.jpg"
    },
    {
      brand: "Realme",
      model: "GT",
      ram: 12,
      rom: 256,
      camera: "64 megapixel",
      price: 499,
      image: "./assets/realme-gt.avif"
    },
    {
      brand: "Asus",
      model: "ROG Phone 5",
      ram: 16,
      rom: 512,
      camera: "64 megapixel",
      price: 999,
      image: "./assets/asus-rog5.jpg"
    },
    {
      brand: "HTC",
      model: "Desire 21 Pro",
      ram: 8,
      rom: 128,
      camera: "48 megapixel",
      price: 399,
      image: "./assets/HTCDesire21Pro.jpg"
    },
    {
      brand: "Huawei",
      model: "P40 Pro",
      ram: 8,
      rom: 256,
      camera: "50 megapixel",
      price: 899,
      image: "./assets/huawei-p40-pro.jpg"
    },
    {
      brand: "LG",
      model: "Wing",
      ram: 8,
      rom: 256,
      camera: "64 megapixel",
      price: 999,
      image: "./assets/lg-wing.avif"
    },
    {
      brand: "ZTE",
      model: "Axon 20",
      ram: 8,
      rom: 128,
      camera: "64 megapixel",
      price: 399,
      image: "./assets/zte-axon20.jpg"
    },
    {
      brand: "BlackBerry",
      model: "KEY2",
      ram: 6,
      rom: 64,
      camera: "12 megapixel",
      price: 649,
      image: "./assets/blackberry-key2.png"
    },
    {
      brand: "Lenovo",
      model: "Legion Duel",
      ram: 16,
      rom: 512,
      camera: "64 megapixel",
      price: 999,
      image: "./assets/lenovo-ld2.jpg"
    },
    {
      brand: "Alcatel",
      model: "3L",
      ram: 4,
      rom: 64,
      camera: "48 megapixel",
      price: 199,
      image: "./assets/alcatel-3l.png"
    },
    {
      brand: "TCL",
      model: "10 Pro",
      ram: 6,
      rom: 128,
      camera: "64 megapixel",
      price: 449,
      image: "./assets/tcl-10-pro.jpg"
    },
];

var output = document.querySelector(".container");
phones.map((item , index) => {
    output.innerHTML +=`
    <div id = "card">
    <img src = "${item.image}" width="100px">
    <br>
    <h3>${item.brand} ${item.model}</h3>
    <h4>Storage: ${item.ram} / ${item.rom}</h4>
    <h4>Camera: ${item.camera}</h4>
    <h4>Price: <span class="price-span">$${item.price}</span></h4>
    <button class = "btn addToCart-btn" onclick = "addCart(${index})">Add to Cart</button> <br> </div>`
})

let cart;
const checkData = JSON.parse(localStorage.getItem("mobile"));
if (checkData === null){
    cart = []
}
else{
    cart = [...checkData]
}

function addCart(index){
  const checkIndex = cart.findIndex(item => item.brand === phones[index].brand && item.model === phones[index].model);    
  if (checkIndex === -1){
        phones[index].quantity = 1
        cart.push(phones[index])
    }
    else{
        cart[checkIndex].quantity += 1
    }
    Swal.fire({
        // position: "top-end",
        icon: "success",
        title: "Item added to Cart successfully!",
        timer: 1500
      });
}

function checkoutBtn() {
    const convertArray = JSON.stringify(cart);
    localStorage.setItem("mobile" , convertArray)
    window.location = "./cart.html"
}