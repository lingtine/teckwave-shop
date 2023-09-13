//warehouse
export { default as formAddWarehouseSlice } from "./warehouse/form-add-warehouse-slice";
export { default as formAddCouponSlice } from "./warehouse/discount/form-add-coupon-slice";
export { default as formAddDiscountEventSlice } from "./warehouse/discount/form-add-discount-event-slice";
export { default as formAddReportSlice } from "./warehouse/report/form-add-report-slice";
export { default as formAddSupplierSlice } from "./warehouse/supplier/form-add-supplier-slice";

//order
export { default as formCheckoutSlice } from "./order/form-check-out-slice";

//contact
export { default as formContactSlice } from "./contact/form-contact-slice";

//catalog
//brand
export { default as formAddBrandSlice } from "./catalog/brand/form-add-brand-slice";
export { default as formUpdateBrandSlice } from "./catalog/brand/form-update-brand-slice";

export { default as formAddCategorySlice } from "./catalog/category/form-add-category-slice";
export { default as formUpdateCategorySlide } from "./catalog/category/form-update-category-slice";

export { default as formAddCategoryGroupSlice } from "./catalog/category-group/form-add-category-group-slice";
export { default as formUpdateCategoryGroupSlice } from "./catalog/category-group/form-update-category-group-slice";

export { default as searchSlice } from "./catalog/product/search/search-slice";
export { default as formAddProductFormSlice } from "./catalog/product/form-add-product-slice";
export { default as formUpdateProductFormSlice } from "./catalog/product/form-update-product-slice";
export { default as formAddSpecificationProductSlice } from "./catalog/product/form-add-specification-product-slice";

export { default as formAddSpecificationSlice } from "./catalog/specification/form-add-specification-slice";
export { default as formUpdateSpecificationSlice } from "./catalog/specification/form-update-specification-slice";

//auth
export { default as formLoginAdminSlice } from "./auth/actions/form-login-admin-slice";
export { default as formLoginSlice } from "./auth/actions/form-login-slice";
export { default as formRegisterSlice } from "./auth/actions/form-register-slice";

export { default as formAddAddressSlice } from "./auth/profile/form-add-address-slice";
export { default as formUpdateAddressSlice } from "./auth/profile/form-update-address-slice";

export { default as formDeliveryFormSlice } from "./auth/profile/form-delivery-slice";

export { default as authSlice } from "./auth/auth-slice";
export { default as cartSLice } from "./auth/cart-slice";
export { default as userSlide } from "./auth/user-slice";
export { default as wishListSlice } from "./auth/wish-list-slice";
