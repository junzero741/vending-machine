class ProductItem {
    constructor(productData) {
        this.html = '';
        this.init(productData);
    };

    init = (productData) => {
        this.html = this.createHtml(productData);
    };

    createHtml = (data) => {
        const {name, price, imgurl} = data;
        const html = `
        <li class="product-item-container">
            <div class="product-item-img-container">
                <img src=${imgurl} width="200px"/>
            </div>
            <button class="btn btn-secondary m-auto">
                <span>${name}</span>
            </button>
            <span class="item-price">${price}</span>
        </li>
        `;
        return html;
    };
}

export default ProductItem;
