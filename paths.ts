import products from "@framework/api/catalog/products";

export default {
    search: '/search',

    products(product: {id: string}) {
        return {
            href: '/product/[id]',
            as: `/product/${id}`
        }
    }
}