import { Link } from "react-router-dom";

function CategoryItem({ItemName}){
    return (
        <div>
             {/* <!-- List of items  --> */}
            <div className="category-item  d-flex justify-content-center align-item-center">
                 <Link to="/products">{ItemName}</Link>
            </div>
        </div>
    )
}
export default CategoryItem;