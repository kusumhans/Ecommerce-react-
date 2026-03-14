export function getALLCategories() {
  return `${import.meta.env.VITE_FAKE_STORE_URL}/products/categories`;
}

export function getALLProducts() {
  return `${import.meta.env.VITE_FAKE_STORE_URL}/products`;
}
export function getProduct(id){
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products/${id}`; 
}
