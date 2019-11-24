var cartItemData = [
    {
        pname : 'India today woman fashion shoot',
        Centimeters : '15.73 * 10.40',
        Pixcel : '594 * 393',
        FILESIZE :  '1.13',
        Size : 'small',
        DPL : '96',
        price : '800',
        image : 'img/img.jpg'
    },
    {
        pname : 'Conclave',
        Centimeters : '15.73 * 10.40',
        Pixcel : '594 * 393',
        FILESIZE :  '1.13',
        Size : 'small',
        DPL : '96',
        price : '1000',
        image : 'img/img.jpg'
    },
    {
        pname : 'Aajtak Sahitya',
        Centimeters : '15.73 * 10.40',
        Pixcel : '594 * 393',
        FILESIZE :  '1.13',
        Size : 'small',
        DPL : '96',
        price : '1200',
        image : 'img/img.jpg'
    }
]

var cartBox = document.querySelector(".order-sub-panel");
var totalItem = document.querySelector("#orderCount");
var removeBtn = document.querySelectorAll(".removeBtn");
var subTotal = document.getElementById("tprice");
var allTotal = document.getElementById("allTotal");
var pmcode = parseInt(document.getElementById("pmcode").innerHTML);
var tax = parseInt(document.getElementById("tax").innerHTML);
var total = 0;
function initItem(){
    totalItem.innerHTML = cartItemData.length;
    cartItemData.map(function(item, index){
        item.updatedPrice = item.price;
        total += parseInt(item.price);
        cartBox.innerHTML += '<div class="order-items"><div class="col-md-10 mrt"><div class="col-md-2"><img src="'+ item.image +'" alt="image not loaded"></div><div class="col-md-10"><div class="orders-head-conteiner"> <h2>'+ item.pname +'</h2><div class="fl-column"><div class="cenCount merzeCols">Centimeters <span>15.73 * 10.40</span></div><div class="pixCount merzeCols">Pixcel <span>594 * 393 pxcel</span></div><div class="clear"></div><div class="flsize merzeCols">FILESIZE <span>1.13 MB</span></div><div class="fsize merzeCols">Size: <span>small</span></div><div class="dpl merzeCols">DPL <span>96 dpx</span></div><div class="clear"></div></div></div></div><div class="clear"></div><div class="quantityBox"><div class="quaBox col-md-6 text-rigth"><span class="text-small">Quantity</span> <select class="selectBox" onchange="changeQnty(event)"><option>1</option><option>2</option><option>3</option></select></div><div class="priceBox col-md-6 "><div class="price"><span>price</span> <i class="fa fa-inr"></i><span class="mrp">'+ item.price +'</span>/-</div></div><div class="clear"></div></div><div></div></div><div class="col-md-2 position mob-del"><div class="border-left"><div class="btn"><button class="removeBtn" id="rmvItems" onclick="removeItem(event)"><span>Remove</span></button></div></div></div><div class="clear"></div><hr></div>';
    });
    subTotal.innerHTML = total;
    allTotal.innerHTML = total + tax - pmcode;
}

initItem();

function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}

function updatePrice(){
    total = 0;
    totalItem.innerHTML = cartItemData.length;
    cartItemData.forEach((item)=>total += parseInt(item.updatedPrice))
    subTotal.innerHTML = total;
    allTotal.innerHTML = total + tax - pmcode;
}

function removeItem(e){
    var items = document.getElementsByClassName("order-items");
    var itemIndex = Array.prototype.indexOf.call(items, findAncestor(e.target, "order-items"));
    findAncestor(items[0], "order-sub-panel").removeChild(items[itemIndex]); 
    cartItemData.splice(itemIndex, 1);
    updatePrice();
}

function changeQnty(e){
    var items = document.getElementsByClassName("order-items");
    var itemIndex = Array.prototype.indexOf.call(items, findAncestor(e.target, "order-items"));
    var updatedPrice = cartItemData[itemIndex].price * e.target.value;
    e.target.parentNode.nextElementSibling.children[0].children[2].innerHTML= updatedPrice;
    cartItemData[itemIndex].updatedPrice = updatedPrice;
    updatePrice();
}








