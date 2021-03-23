import _ from "../util.js";
import { fetchData } from "../dataUtil.js";
import ProductItem from "./ProductItem.js";

class ProductView {
    constructor(productWrapSelector) {
        this.productViewWrapper = _.$(productWrapSelector);
    };

    init = () => {
        this.createProductAllItems(this.productViewWrapper);
    };

    createProductAllItems = async (productViewWrapper) => {
        const productItems = await this.getProductAllItems();

        productItems.data.forEach((data) => {
            const html = new ProductItem(data).html;
            productViewWrapper.insertAdjacentHTML('beforeend', html);
        });
    };

    getProductAllItems = async () => {
        try {
            const url = '/api/getProductAllItems';
            return await fetchData(url);
        } catch (error) {
            console.error(error);
        }
    };
}

export default ProductView;