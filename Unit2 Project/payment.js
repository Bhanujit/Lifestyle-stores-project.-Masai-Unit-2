var cartArr = JSON.parse(localStorage.getItem("CartItems"))
// console.log(cartArr)
 cartArr.map(function(data){

     var div = document.createElement("div");
     div.setAttribute("Id","flex")
    var div1 = document.createElement("div");
    div1.setAttribute("Id","id1")
     var image = document.createElement("img");
     image.setAttribute("src",data.img_url);
     image.setAttribute("id","iMG")
     div1.append(image)

     var div2 = document.createElement("div");
     div2.setAttribute("Id","id2")
     var div3 = document.createElement("div");
     div3.setAttribute("Id","id3")
     var name = document.createElement("p")
     name.textContent =` LIFESTYLE :
      ${data.name}`;
     var color = document.createElement("p")
     color.textContent = ` Color : ${data.color}`;
    // color = ' color ${color}'
     div3.append(name,color)
     var div4 = document.createElement("div");
     div4.setAttribute("Id","id4")
     var price = document.createElement("p");
     price.textContent = `Price :₹ ${data.price}`;
     div3.append(price)
     div2.append(div3,div4)
     div.append(div1,div2)

     document.querySelector("#lsdiv1").append(div);

 });
 var cartTotal  = cartArr.reduce(function(ac,cv){
     return ac + Number(cv.price)
 },0);
 
var divA= document.createElement("div");
divA.setAttribute("Id", "A");
var hA= document.createElement("h3");
hA.textContent = "Qnty"
var hB= document.createElement("h3");
hB.textContent= `${cartArr.length} Item`;
divA.append(hA,hB)
 var divT= document.createElement("div");
 divT.setAttribute("Id","B");
 var ht= document.createElement("h2");
 ht.textContent = "Total Amt";
 var hk =document.createElement("h2");
hk.textContent = `₹ ${cartTotal}`;
 divT.append(ht,hk);

document.querySelector("#lsdiv1").append(divA,divT);
     
 
var disc = localStorage.getItem("Disc");    
  var divP= document.createElement("div");
 divP.setAttribute("Id","C");
 var hp= document.createElement("h2");
 hp.textContent = "Pay Amt";
 var hq =document.createElement("h2");
hq.textContent = `₹ ${disc}`;
 divP.append(hp,hq);
         document.querySelector("#lsdiv1").append(divP)

         document.querySelector("form").addEventListener("submit", proceed);
 function proceed(event){
     event.preventDefault();
     alert("Proceeding to payment");
     window.location.href = "pay.html";
 }