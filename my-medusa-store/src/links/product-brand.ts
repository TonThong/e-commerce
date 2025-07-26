import { defineLink } from "@medusajs/framework/utils";
import BRAND_MODULE from "../modules/brand";
import ProductModule from "@medusajs/medusa/product";

export default defineLink(
    {
        linkable: ProductModule.linkable.product,
        isList: true,
    },
    BRAND_MODULE.linkable.brand,
)