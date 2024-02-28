let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

function addCategory(products, category){

    createCategory = products.map((product) =>{
        
        product.category = category;
        
        return product;
    });

    return createCategory;
}

addCategory(kitchenProducts, 'kitchen');
addCategory(devicesProducts, 'devices');
addCategory(cosmeticsProducts, 'cosmetics');


function Product(category, type, price) {
    this.category = category,
    this.type = type,
    this.price = price;
}

Product.prototype.render = function() {
    return `<tr>
                <td><img src="images/${this.category}/${this.type}.svg" alt="${this.type}" width="50" height="50"></td>
                <td>${this.type}</td>
                <td>${this.price} USD</td>
            </tr>`;    
}

let allProductGroup = [...kitchenProducts, ...cosmeticsProducts, ...devicesProducts];

function createTable() {
    const table = document.createElement('table');
    table.style.border = '1px solid #000000';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headerCellImage = document.createElement('th');
    headerCellImage.textContent = 'Images';
    const headerCellName = document.createElement('th');
    headerCellName.textContent = 'Name';
    const headerCellPrice = document.createElement('th');
    headerCellPrice.textContent = 'Price';
    headerRow.append(headerCellImage);
    headerRow.append(headerCellName);
    headerRow.append(headerCellPrice);
    thead.append(headerRow);

    table.append(thead);


    const tbody = document.createElement('tbody');

    const allProducts = allProductGroup.map((product) => {

        const newProduct = new Product(product.category, product.type, product.price);

        return newProduct;
    });

    
    allProducts.forEach(product => {
        const row = document.createElement('tr');
        
        row.innerHTML = product.render();
        
        tbody.append(row);
    });

    table.append(tbody);

    document.body.append(table);
}

createTable();