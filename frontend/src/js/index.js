import ProductModel from "./Product/ProductModel.js";

const REFERENCE = {
    product: {        
        productWrapSelector: '#productWrapper',
    },
    
    progress: {
        progressWrapSelector: '',
    },

    wallet: {
        walletWrapSelector: '',    
    },
};

new ProductModel(REFERENCE.product).init();