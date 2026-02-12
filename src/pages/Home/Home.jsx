import CategoryItem from '../../component/categoryItem/CategoryItem'
import './Home.css'

function Home(){
    return(
        <div>
        {/* // <!-- main text  --> */}
        <div className="container">
           <div className="row ">
               <h2 className="home-tittle text-center">Welcome to shop</h2>
               <div className="category-list  d-flex flex-row justify-content-between align-item-center" id="categoryList">
                  <CategoryItem ItemName="All Products"/>
                    
               </div>
               <div className="category-tittle text-center">
                   select a category to start shoping
               </div>
           </div>
        </div>
    </div>
    )
}
export default Home