import React, {useState, useEffect} from "react";
import Searchbar from "./Searchbar/Searschbar";
import ImageGallery from "./ImageGallery/ImageGallery";


export default function App() {
  
  const [textSearch, setTextSearch] = useState('');
  const [page, setPage] = useState(1);
    
    const handleSubmit = (textSearch)=>{
      setTextSearch(textSearch);
      
  }

  useEffect(() => {

  },[textSearch])

    return(
      <div className = "App">
        <Searchbar onSearch={handleSubmit}></Searchbar>
        <ImageGallery value={textSearch} pageApp={page} ></ImageGallery>
      </div>
      )
  }
 
//   handleSubmit = (textSearch) => {
//     this.setState({textSearch})
//   }

//   render() {
//     console.log('state', this.state );
//     return()
   
//  }
// }
 

// page={this.state.page} perPage={this.state.perPage}