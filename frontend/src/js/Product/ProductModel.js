import ProductView from "./ProductView.js";

class ProductModel {
    constructor(productReference) {
        const {productWrapSelector} = productReference;

        this.productWrapSelector = productWrapSelector;
    }

    init = () => {
        this.setProductView(this.productWrapSelector);
    };

    setProductView = (productWrapSelector) => new ProductView(productWrapSelector).init();
}

export default ProductModel;