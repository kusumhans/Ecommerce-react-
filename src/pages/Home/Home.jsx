import CategoryItem from '../../component/categoryItem/CategoryItem'
import './Home.css'
import  useCategory  from '../../hooks/useCategory';


function Home(){
    const[categories] = useCategory();
 
    return(
        <div>
        {/* // <!-- main text  --> */}
        <div className="container div-wrapper">
           <div className="row ">
               <h2 className="home-tittle text-center">Welcome to shop Cart</h2>
               <div className="category-list  d-flex flex-row justify-content-between align-item-center" id="categoryList">
                  <CategoryItem ItemName="All Products"/>
                  {categories && categories.map(category =>  <CategoryItem ItemName={category} key={category} filter={category} />)}
                    
               </div>
               <div className="category-tittle text-center">
                   select a category to start shoping
               </div>
           </div>
        </div>
    </div>
    )
}
export default Home;