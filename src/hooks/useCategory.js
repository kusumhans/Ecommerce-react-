import { getALLCategories } from '../apis/fakeStoreProductApis';
import axios from 'axios';
import { useEffect, useState } from 'react';

 function useCategory(){
    const[categories, setcategories] = useState(null)
 
    async function downloadcategories(){
        const response = await axios.get(getALLCategories());
        setcategories(response.data);
    }

    useEffect(() =>{
        downloadcategories();
    }, [])

    return [categories]
}
export default useCategory;