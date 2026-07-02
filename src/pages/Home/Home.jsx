import CategoryItem from "../../component/categoryItem/CategoryItem";
import "./Home.css";
import useCategory from "../../hooks/useCategory";

function Home() {
  const [categories] = useCategory();

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h1 className="display-5 fw-bold mb-4">
            Welcome to Shop Cart
          </h1>

          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
            <CategoryItem ItemName="All Products" />

            {categories?.map((category) => (
              <CategoryItem
                key={category}
                ItemName={category}
                filter={category}
              />
            ))}
          </div>

          <p className="text-muted fs-5">
            Select a category to start shopping
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;