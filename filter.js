const data =[
    {
        id:1,
        name:`imex 44 mm Navi XL Dive Automatic Watch`,
        img:"https://m.media-amazon.com/images/I/71p0zDv-5+L._AC_SY675_.jpg",
        price:475,
        cat:`Luxury`
    },
    {
        id:2,
        name:`Timex UFC Men's Beast 51mm Watch`,
        img:"https://m.media-amazon.com/images/I/81fUqQq1uUL._AC_SX679_.jpg",
        price:875,
        cat:`Luxury`
    },
    {
        id:3,
        name:`Timex Men's Chicago Day-Date 45mm Watch`,
        img:"https://m.media-amazon.com/images/I/81-CkuXJmgL._AC_SX679_.jpg",
        price:275,
        cat:`Casual`
    },
    {
        id:4,
        name:`Timex UFC Men's Champ 42mm Watch - Black Strap Black Dial Gold-Tone Case`,
        img:"https://m.media-amazon.com/images/I/71Hwh5anUML._AC_SX679_.jpg",
        price:2275,
        cat:`Sport`
    },
    {
        id:5,
        name:`Timex Men's Command Encounter 54mm Watch`,
        img:"https://m.media-amazon.com/images/I/71UIt5SBJML._AC_SY741_.jpg",
        price:175,
        cat:`Casual`
    },
    {
        id:6,
        name:`Timex Men's DGTL Rugged 46mm Watch`,
        img:"https://m.media-amazon.com/images/I/81wXuEQH9TS._AC_SX679_.jpg",
        price:144,
        cat:`Dress`
    },
    {
        id:7,
        name:`Casio Men's Classic Dive Style Watch, 200 M WR, Screw Down Crown and Case Back, MDV106 Series`,
        img:"https://m.media-amazon.com/images/I/61nHUVwR65L._AC_SY741_.jpg",
        price:144,
        cat:`Dress`
    },
    {
        id:8,
        name:`Nine West Women's Crystal Accented Bracelet Watch`,
        img:"https://m.media-amazon.com/images/I/81-HbGIsxVL._AC_SY741_.jpg",
        price:1220,
        cat:`Casual`
    },
    {
        id:9,
        name:`Fossil Dean Men's Dress Watch with Chronograph Display and Stainless Steel Bracelet Band`,
        img:"https://m.media-amazon.com/images/I/81q-86EVPBL._AC_SX679_.jpg",
        price:1444,
        cat:`Luxury`
    },
];


let products=document.querySelector(".products");

let index=0;

let showProducts =(findex) => {

    products.innerHTML=findex.map(product =>

            `<div class="product">
            <img src=${product.img} alt="">
            <span class="name">${product.name}</span>
            <span class="priceText">${product.price}</span>


    </div>
  
</div>`


    ).join("");



}

showProducts(data);

let searchInput=document.querySelector(".search");

let categories=document.querySelector(".cats")

searchInput.addEventListener("keyup", (evt)=> {

    let value=evt.target.value.toLowerCase();
    

    

       

            if(value){
                showProducts(data.filter(item => item.name.toLowerCase().indexOf(value) !== -1))
            }
        

    
    else{
        showProducts(data);
    }
})

let categoriesContainer=document.querySelector(".cats");

let setCategories =() =>{
    let allCats =data.map((item) => item.cat);

    let categories =["All",...allCats.filter((item,i) => {
        return allCats.indexOf(item) === i
    }),
    ]

    

  categoriesContainer.innerHTML= categories.map(cat => 
    `<span class="cat">${cat}</span>`
  ).join("")
}


setCategories();


categoriesContainer.addEventListener("click",(e)=> {
let selectedCat =e.target.textContent;

    if(selectedCat === "All"){
        showProducts(data);
    }
    else{
        showProducts(data.filter(item => item.cat===selectedCat))
    }



})

let priceRange=document.querySelector(".priceRange")
let priceValue=document.querySelector(".priceValue")

let setPrices =() => {
    let priceList= data.map((item) => item.price)
   
    let minPrice=Math.min(...priceList)
    let maxPrice=Math.max(...priceList);
   

    priceRange.min=minPrice;
    priceRange.max=maxPrice;
    priceRange.value=maxPrice;
   
    priceValue.textContent="$"+maxPrice;


    priceRange.addEventListener("input",(e)=> {
        priceValue.textContent="$"+e.target.value;
        showProducts(data.filter((item) => item.price <= e.target.value))
    })
}

setPrices();









