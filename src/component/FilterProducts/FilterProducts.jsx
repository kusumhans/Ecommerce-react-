// import css
import './FilterProducts.css'

export default function FilterProducts(){

    const MinOption = [0, 10, 50, 100, 500, 1000];
    const MaxOption = [0, 10, 50, 100, 500, 1000, 5000, 10000];

    return(
        <div>
             <div className="product-list-sidebar d-flex flex-column">
                    <div className="sidebar-tittle">
                        Search product
                    </div>
                    <div className="sidebar-search form-group">
                        <input type="search" placeholder="search by name" id="search-input"/>
                    </div>
                    <div className="sidebar-category fw-bold">category</div>
                    <div id="category">
                      {/* <!-- category are populated by js --> */}

                         <a href="product-list.html?category=electronics" className="d-flex text-decoration-none">Electornics</a>
                        <a href="product-list.html?category=jewelery" className="d-flex text-decoration-none">jewelery</a>
                        <a href="product-list.html?category=men's clothing" className="d-flex text-decoration-none">men's clothing </a>
                        <a href="product-list.html?category=women's clothing" className="d-flex text-decoration-none">women's clothing</a>
                       
                    </div>
                    <div className="sidebar-tittle">filter by price</div>
                    <div className="price-filter">
                        <div className="price-filter-select d-flex flex-row justify-content-between ">
                            <div className="form-group">
                                <select name="minprice" id="minprice" className="form-group">
                                    {MinOption.map(optionValue => 
                                        <option key={optionValue} value={optionValue}>{optionValue}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <select name="maxprice" id="maxprice" className="form-group">
                                {MaxOption.map(optionValue => 
                                    <option key={optionValue} value={optionValue}>{optionValue}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="price-filter-tittle d-flex ">
                            <div id="product-list-tittle-min">Min price</div>
                            <div id="product-list-tittle-max">Max price</div>
                        </div>
                    </div>
                    <button className="btn btn-warning clear-search" id="search">
                    clear-search
                    </button>
                    <button className="btn btn-danger clear-filter" id="clear">
                        clear-filter
                    </button>
                </div>
        </div>
    )
}