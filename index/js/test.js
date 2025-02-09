function main_add (name) {
    click_list = JSON.parse(localStorage.getItem('click_list'));
    const temp = Number(click_list[name])+1
    click_list.splice(name, 1, temp)
    console.log(click_list)
    save()
}

const cart = document.getElementById('cart');
const add_onshop = document.querySelectorAll('.add_onshop');
const totalElement = document.getElementById('total'); 
const totalElement_2 = document.getElementById('true_total'); 
const selectedItems = {};
var click_list = [0,  0, 0, 0, 0, 0,  0, 0, 0, 0, 0,  0, 0, 0, 0];

function handleCardClick(event) {
    const check = event.currentTarget;
    const itemId = String(check.id) +'_0';
    const content = document.getElementById(itemId);
    const itemName = content.querySelector('h4').textContent;
    const itemPrice = parseFloat(content.querySelector('.price').textContent); 
    const name = String(content.getAttribute("name"))

    const temp = Number(click_list[name])+1
    click_list.splice(name, 1, temp)
    if (selectedItems[itemId]) {
        selectedItems[itemId].count++;
    } else {
        selectedItems[itemId] = {
            name: itemName,
            price: itemPrice,
            count: 1,
        };
    }
        updateCart();
    }

function restore_click() {
    click_list = JSON.parse(localStorage.getItem('click_list'));
    perm_list = JSON.parse(localStorage.getItem('click_list'));
    return perm_list
}

function restore() {
    
    if (window.location.pathname === '/index/html/shop.html') {
        var firstTime = localStorage.getItem("first_time");
        if(!firstTime) {
            //is first time
            localStorage.setItem("first_time","1");
        } else {
            const perm_list = restore_click(); 
            for (let step = 0; step < perm_list[6]; step++) {
                document.getElementById('THoodie').click();
            }
            for (let step = 0; step < perm_list[10]; step++) {
                document.getElementById('Beanie').click();
            }
            for (let step = 0; step < perm_list[11]; step++) {
                document.getElementById('Hat').click();
            }
            for (let step = 0; step < perm_list[12]; step++) {
                document.getElementById('Bottle').click();
            }
            for (let step = 0; step < perm_list[13]; step++) {
                document.getElementById('Keychain').click();
            }
            for (let step = 0; step < perm_list[14]; step++) {
                document.getElementById('Tote').click();
            }
            for (let step = 0; step < perm_list[15]; step++) {
                document.getElementById('TShirt').click();
            }
            for (let step = 0; step < perm_list[16]; step++) {
                document.getElementById('TSweat').click();
            }
    
    
            for (let step = 0; step < perm_list[0]; step++) {
                document.getElementById('ERVinyl').click();
            }
            for (let step = 0; step < perm_list[3]; step++) {
                document.getElementById('ERCD').click();
            }
            for (let step = 0; step < perm_list[7]; step++) {
                document.getElementById('ERSweat').click();
            }
            for (let step = 0; step < perm_list[17]; step++) {
                document.getElementById('ERHoodie').click();
            }
    
    
            for (let step = 0; step < perm_list[1]; step++) {
                document.getElementById('CVinyl').click();
            }
            for (let step = 0; step < perm_list[4]; step++) {
                document.getElementById('CCD').click();
            }
            for (let step = 0; step < perm_list[8]; step++) {
                document.getElementById('CSweat').click();
            }
            for (let step = 0; step < perm_list[18]; step++) {
                document.getElementById('CHoodie').click();
            }
    
    
            for (let step = 0; step < perm_list[2]; step++) {
                document.getElementById('BVinyl').click();
            }
            for (let step = 0; step < perm_list[5]; step++) {
                document.getElementById('BCD').click();
            }
            for (let step = 0; step < perm_list[9]; step++) {
                document.getElementById('BSweat').click();
            }
            for (let step = 0; step < perm_list[19]; step++) {
                document.getElementById('BSweat').click();
            }
        }

        if (localStorage.total === "undefined") {
            totalElement.textContent = "Subtotal: $0.00";
        } else {
            totalElement.textContent = `Subtotal: $${localStorage.total}.00`;
        }
        click_list = perm_list

    } else if (window.location.pathname === '/index/html/checkout.html') {
        const click_list = restore_click()


        const form = document.getElementById('checkout_form');
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const data = new FormData(form);
            const action = e.target.action;
            localStorage.total = 0
            fetch(action, {
                method: 'POST',
                body: data,
            })
            .then(() => {
                window.location.replace("/index/html/purchased.html");
                clearCart()
            })
        });

            if ((click_list[6] != null) && (click_list[6] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 6))
                product_sold.setAttribute("name", "items")
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Exit Stage Right Tour Hoodie: ";
                product_price.textContent = " $52.00 - "
                product_num.textContent = click_list[6]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_6").appendChild(product_price);
                document.getElementById("append_id_6").appendChild(product_num);
            } 
            if ((click_list[10] != null) && (click_list[10] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 10))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Stage Fright Beanie: ";
                product_price.textContent = " $25.00 - "
                product_num.textContent = click_list[10]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_10").appendChild(product_price);
                document.getElementById("append_id_10").appendChild(product_num);
            } 
            if ((click_list[11] != null) && (click_list[11] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 11))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Stage Fright Hat: ";
                product_price.textContent = " $22.00 - "
                product_num.textContent = click_list[11]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_11").appendChild(product_price);
                document.getElementById("append_id_11").appendChild(product_num);
            } 
            if ((click_list[12] != null) && (click_list[12] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 12))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Stage Fright Bottle: ";
                product_price.textContent = " $31.00 - "
                product_num.textContent = click_list[12]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_12").appendChild(product_price);
                document.getElementById("append_id_12").appendChild(product_num);
            } 
            if ((click_list[13] != null) && (click_list[13] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 13))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Stage Fright Keychain: ";
                product_price.textContent = " $9.00 - "
                product_num.textContent = click_list[13]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_13").appendChild(product_price);
                document.getElementById("append_id_13").appendChild(product_num);
            } 
            if ((click_list[14] != null) && (click_list[14] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 14));
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Stage Fright Tote Bag: ";
                product_price.textContent = " $17.00 - "
                product_num.textContent = click_list[14]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_14").appendChild(product_price);
                document.getElementById("append_id_14").appendChild(product_num);
            } 
            if ((click_list[15] != null) && (click_list[15] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 15));
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Exit Stage Right Tour TShirt: ";
                product_price.textContent = " $25.00 - "
                product_num.textContent = click_list[15]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_15").appendChild(product_price);
                document.getElementById("append_id_15").appendChild(product_num);
            }
             
            if ((click_list[16] != null) && (click_list[16] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 16));
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Exit Stage Right Tour Sweatshirt: ";
                product_price.textContent = " $48.00 - "
                product_num.textContent = click_list[16]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_16").appendChild(product_price);
                document.getElementById("append_id_16").appendChild(product_num);
            }




            if ((click_list[0] != null) && (click_list[0] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 0));
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Exit Right Vinyl: ";
                product_price.textContent = " $24.00 - "
                product_num.textContent = click_list[0]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_0").appendChild(product_price);
                document.getElementById("append_id_0").appendChild(product_num);
            } 

            if ((click_list[3] != null) && (click_list[3] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 3));
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Exit Right CD: ";
                product_price.textContent = " $20.00 - "
                product_num.textContent = click_list[3]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_3").appendChild(product_price);
                document.getElementById("append_id_3").appendChild(product_num);
            } 

            if ((click_list[7] != null) && (click_list[7] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 7));
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Exit Right Sweatshirt: ";
                product_price.textContent = " $43.00 - "
                product_num.textContent = click_list[7]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_7").appendChild(product_price);
                document.getElementById("append_id_7").appendChild(product_num);
            }  
            if ((click_list[17] != null) && (click_list[17] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 17));
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Exit Right Hoodie: ";
                product_price.textContent = " $46.00 - "
                product_num.textContent = click_list[17]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_17").appendChild(product_price);
                document.getElementById("append_id_17").appendChild(product_num);
            }



            if ((click_list[1] != null) && (click_list[1] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 1))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Conquer Vinyl: ";
                product_price.textContent = "$24.00 - "
                product_num.textContent = click_list[1]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_1").appendChild(product_price);
                document.getElementById("append_id_1").appendChild(product_num);
            } 

            if ((click_list[4] != null) && (click_list[4] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 4))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Conquer CD: ";
                product_price.textContent = "$20.00 - "
                product_num.textContent = click_list[4]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_4").appendChild(product_price);
                document.getElementById("append_id_4").appendChild(product_num);
            } 

            if ((click_list[8] != null) && (click_list[8] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 8))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Conquer Sweatshirt: ";
                product_price.textContent = "$43.00 - "
                product_num.textContent = click_list[8]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_8").appendChild(product_price);
                document.getElementById("append_id_8").appendChild(product_num);
            } 

            if ((click_list[18] != null) && (click_list[18] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 18))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Conquer Hoodie: ";
                product_price.textContent = "$46.00 - "
                product_num.textContent = click_list[18]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_18").appendChild(product_price);
                document.getElementById("append_id_18").appendChild(product_num);
            } 



            if ((click_list[2] != null) && (click_list[2] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 2))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Butterflies Vinyl: ";
                product_price.textContent = "$18.00 - "
                product_num.textContent = click_list[2]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_2").appendChild(product_price);
                document.getElementById("append_id_2").appendChild(product_num);
            } 

            if ((click_list[5] != null) && (click_list[5] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 5))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Butterflies CD: ";
                product_price.textContent = "$12.00 - "
                product_num.textContent = click_list[5]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_5").appendChild(product_price);
                document.getElementById("append_id_5").appendChild(product_num);
            } 

            if ((click_list[9] != null) && (click_list[9] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 9))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Butterflies Sweatshirt: ";
                product_price.textContent = "$43.00 - "
                product_num.textContent = click_list[9]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_9").appendChild(product_price);
                document.getElementById("append_id_9").appendChild(product_num);
            } 
            if ((click_list[19] != null) && (click_list[19] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 19))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Butterflies Hoodie: ";
                product_price.textContent = "$46.00 - "
                product_num.textContent = click_list[19]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_19").appendChild(product_price);
                document.getElementById("append_id_19").appendChild(product_num);
            }
        if (localStorage.total === "undefined") {
            totalElement.textContent = "Subtotal: $0.00";
            totalElement_2.textContent = "Total: $0.00";
        } else {
            totalElement.textContent = `Subtotal: $${localStorage.total}.00`;
            totalElement_2.textContent = `Total: $${(localStorage.total * 1.0825).toFixed(2)}`
        }
    }
}

window.onbeforeunload = save;
    
function save() {
    const num_click = JSON.stringify(click_list);

    localStorage.setItem(
        "click_list", 
        num_click
    );
}

function updateCart() {
    cart.innerHTML = '';
    localStorage.cart = cart.innerHTML;
    localStorage.total = 0; 

    for (const itemId in selectedItems) {
        const item = selectedItems[itemId];
        const listItem = document.createElement('li');
        const quantityContainer = document.createElement('div'); 
        const quantityText = document.createElement('span'); 
        quantityText.setAttribute("id", "num_need_" + itemId); 
        const addButton = document.createElement('button');
        addButton.setAttribute("class", "add_sub")
        const subtractButton = document.createElement('button');
        subtractButton.setAttribute("class", "add_sub")


        addButton.textContent = '+';
        subtractButton.textContent = '-';

        quantityText.textContent = item.count; 

        addButton.addEventListener('click', () => {
            addItem(itemId);
        });

        subtractButton.addEventListener('click', () => {
            removeItem(itemId);
        });

        const hr = document.createElement('hr');

        quantityContainer.appendChild(subtractButton); 
        quantityContainer.appendChild(quantityText); 
        quantityContainer.appendChild(addButton); 
        quantityContainer.appendChild(hr); 

        listItem.textContent = `${item.name} - $${item.price}`;
        listItem.appendChild(quantityContainer); 
        cart.appendChild(listItem);

        localStorage.total = parseFloat(localStorage.total) + item.price * item.count; 
    }
    if (localStorage.total === "undefined") {
        totalElement.textContent = "Subtotal: $0.00";
    } else {
        totalElement.textContent = `Subtotal: $${localStorage.total}.00`;
    }
}

function addItem(itemId) {
    if (selectedItems[itemId]) {
        selectedItems[itemId].count++;
    }
    const temp_name = document.getElementById(itemId)
    const name = String(temp_name.getAttribute("name"))
    const temp = Number(click_list[name])+1
    click_list.splice(name, 1, temp)

    updateCart();
}

function removeItem(itemId) {
    if (selectedItems[itemId]) {
        selectedItems[itemId].count--;
        if (selectedItems[itemId].count <= 0) {
            delete selectedItems[itemId];
        }
    }
    const temp_name = document.getElementById(itemId)
    const name = String(temp_name.getAttribute("name"))
    const temp = Number(click_list[name])-1
    click_list.splice(name, 1, temp)

    updateCart();
}

add_onshop.forEach((card) => {
    card.addEventListener('click', handleCardClick);
});



function clearCart() {
    click_list = [0,  0, 0, 0, 0, 0,  0, 0, 0, 0, 0,  0, 0, 0, 0];
    for (const index in click_list) {
        let temp = document.getElementsByName(index);
        let temp_2 = temp.item(0)
        let id_needed = temp_2.getAttribute("id");
        delete selectedItems[id_needed];
        updateCart();
    }
}

function openCart() {
    document.getElementById("shopping_cart").style.width = "100%";
    document.getElementById("shopping_cart").style.display = "block";
}
function closeCart() {
    document.getElementById("shopping_cart").style.width = "0%";
    document.getElementById("shopping_cart").style.display = "none";
}