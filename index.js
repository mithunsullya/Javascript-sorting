const products = [
    {
        id: '1',
        name: 'Chair',
        price: 5,
        rating: 4,
        image: 'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?cs=srgb&dl=pexels-dmitry-zvolskiy-2082090.jpg&fm=jpg',
    },
    {
        id: '2',
        name: 'Table',
        price: 10,
        rating: 3,
        image: 'https://images.pexels.com/photos/276651/pexels-photo-276651.jpeg?cs=srgb&dl=pexels-pixabay-276651.jpg&fm=jpg',
    },
    {
        id: '3',
        name: 'Sofa Sets',
        price: 11,
        rating: 9,
        image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-1866149.jpg&fm=jpg',
    },
    {
        id: '4',
        name: 'Dining Table',
        price: 12,
        rating: 5,
        image: 'https://images.pexels.com/photos/373530/pexels-photo-373530.jpeg?cs=srgb&dl=pexels-pixabay-373530.jpg&fm=jpg',
    },
    {
        id: '5',
        name: 'Vases',
        price: 7,
        rating: 6,
        image: 'https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?cs=srgb&dl=pexels-sammsara-luxury-modern-home-1099816.jpg&fm=jpg',
    },
    {
        id: '5',
        name: 'Showcase Glass',
        price: 7,
        rating: 6,
        image: 'https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?cs=srgb&dl=pexels-sammsara-luxury-modern-home-1099816.jpg&fm=jpg',
    },
];

function sorting( sortorder, products) {
    switch(sortorder) {
        case 'rating': products.sort(function(a,b) {
                            return b[sortorder] - a[sortorder];
                        })
                        break;
        case 'name': 
            products.sort(function(a, b) {
                let productA = a.name.toUpperCase(); // ignore upper and lowercase
                let productB = b.name.toUpperCase(); // ignore upper and lowercase
                if (productA < productB) {
                return -1;
                }
                if (productA > productB) {
                return 1;
                }
            
                // names must be equal
                return 0;
            });
            break;

        default: products.sort(function(a,b) {
            return a[sortorder] - b[sortorder];
        })
    }

    return products;
}

function displayResult(products) {
    let div = "<div class='products'>";
    for (let i=0; i<products.length; i++) {
        div += "<div class='product-item'>";
        div += `<img src=${products[i].image}/>`
        div += "<h3>";
        div += products[i].name ;
        div += "</h3>";
        div += `<h4>Price: ${products[i].price}$</h4>`;
        div += `<div class="rating"> Rating: ${products[i].rating}</div>`;
        div += "</div>";
    }
    div += "</div>";
    document.getElementById('result').innerHTML = div;
}

const selectElement = document.querySelector('#sort');

window.addEventListener('load', (event) => {
    sortedProducts = sorting('rating', products);
    displayResult(sortedProducts);
});

selectElement.addEventListener('change', (event) => {
    sortOrder = event.target.value;
    sortedProducts = sorting(sortOrder, products);
    displayResult(sortedProducts);
})

// https://mega.nz/folder/Ji5xXLKR#umvMLZnVTA7bZ-H_ox6FRg

