// product 1 fadeIn
let e1 = document.getElementById('product1');

e1.onmouseover = function() {
    document.getElementById('popup1').style.display = 'block';
    document.getElementById('popup1').style.animation = "fadeIn 1s";
}
e1.onmouseout = function() {
    document.getElementById('popup1').style.display = 'none';
}

// product 2 fadeIn
let e2 = document.getElementById('product2');

e2.onmouseover = function() {
    document.getElementById('popup2').style.display = 'block';
    document.getElementById('popup2').style.animation = "fadeIn 1s";
}
e2.onmouseout = function() {
    document.getElementById('popup2').style.display = 'none';
}


// product 3 fadeIn
let e3 = document.getElementById('product3');

e3.onmouseover = function() {
    document.getElementById('popup3').style.display = 'block';
    document.getElementById('popup3').style.animation = "fadeIn 1s";
}
e3.onmouseout = function() {
    document.getElementById('popup3').style.display = 'none';
}