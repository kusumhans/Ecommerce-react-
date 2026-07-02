import "./ProductList.css";

import ProductBox from "../../component/productBox/ProductBox";
import FilterProducts from "../../component/FilterProducts/FilterProducts";
import { getALLProducts } from "../../apis/fakeStoreProductApis";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [query] = useSearchParams();

  async function downloadProducts(category) {
    try {
      const url = category
        ? `${getALLProducts()}/category/${category}`
        : getALLProducts();

      const response = await axios.get(url);
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    downloadProducts(query.get("category"));
  }, [query]);

  return (
    <div className="container py-4">

      <h2 className="product-list-title">
        All Products
      </h2>

      <div className="product-layout">

        <aside className="filter-section">
          <FilterProducts />
        </aside>

        <section className="product-section">

          <div className="product-grid">

            {products.map((product) => (
              <ProductBox
                key={product.id}
                productId={product.id}
                productImage={product.image}
                name={product.title}
                price={product.price}
              />
            ))}

          </div>

        </section>

      </div>

    </div>
  );
}

export default ProductList;