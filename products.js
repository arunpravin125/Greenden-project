// first selecting side nav bar,menu icon

let sidenav = document.getElementById("sidenav");
let menuicon = document.getElementById("menuicon");
let closenav = document.getElementById("closenav");

menuicon.addEventListener("click", function () {
  sidenav.style.right = "0";
});
closenav.addEventListener("click", function () {
  sidenav.style.right = "-60% ";
});
// products search container
let productContainer = document.getElementById("product-container");
let searchProducts = document.getElementById("search-products");
let productList = productContainer.querySelectorAll("div")
console.log(productList)

searchProducts.addEventListener("keyup",function(){
    let enterValue=event.target.value
    console.log(enterValue)
    
    for(count=0;count<productList.length;count=count+1){

        let productName=productList[count].querySelector("h1").textContent//product name
        console.log(productName)

        if(productName.indexOf(enterValue)<0){
            productList[count].style.display="none"
        }
        else{
            productList[count].style.display="block"

        }
    }
})


