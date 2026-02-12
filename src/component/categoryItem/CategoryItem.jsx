function CategoryItem({ItemName}){
    return (
        <div>
             {/* <!-- List of items  --> */}
             <div className="category-item  d-flex justify-content-center align-item-center">
                       <a href="product-list.html">{ItemName}</a>
                    </div>
        </div>
    )
}
export default CategoryItem;