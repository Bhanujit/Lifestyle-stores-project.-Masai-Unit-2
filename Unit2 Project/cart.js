var cartArr = JSON.parse(localStorage.getItem("CartItems"))
// console.log(cartArr)
 cartArr.map(function(data){

     var div = document.createElement("div");
     div.setAttribute("Id","flex")
    var div1 = document.createElement("div");
    div1.setAttribute("Id","id1")
     var image = document.createElement("img");
     image.setAttribute("src",data.img_url);
     div1.append(image)

     var div2 = document.createElement("div");
     div2.setAttribute("Id","id2")
     var name = document.createElement("p")
     name.textContent = data.name
     var color = document.createElement("p")
     color.textContent = ` color  ${data.color}`;
    // color = ' color ${color}'
     div2.append(name,color)
     var div3 = document.createElement("div");
     div3.setAttribute("Id","id3")
     var price2 = document.createElement("p");
     price2.textContent = `₹ ${data.stprice}`;
     var price = document.createElement("p");
     price.textContent = `₹ ${data.price}`;
     div3.append(price2,price)

     div.append(div1,div2,div3)

     document.querySelector("#container").append(div);

 });
 var cartTotal  = cartArr.reduce(function(ac,cv){
     return ac + Number(cv.price)
 },0);
 

 document.querySelector("#total").textContent =`₹ ${cartTotal}`;
 document.querySelector("#num").textContent = cartArr.length;
 document.querySelector("#crtdiv").textContent = `Your Shopping Basket (${cartArr.length} Item)`
 
 document.querySelector("#myform").addEventListener("submit", submitPromo);
 document.querySelector("#amt").textContent = `₹ ${cartTotal}`;
 
 function submitPromo(event){
     event.preventDefault();
     var pcode = document.getElementById("inp").value // MASAI30
         
         if(pcode=="MASAI30"){
             console.log(cartTotal)
             var disc = (cartTotal*70)/100
             localStorage.setItem("Disc",disc)
             alert("Discount successfull added")
         }
         else{
             disc = cartTotal;
             localStorage.setItem("Disc",disc)
             alert("Not valid code")  
         } 
         document.querySelector("#amt").textContent = `₹ ${disc}`;

     }