import React, {Component} from "react";
import Searchbar from "./Searchbar/Searschbar";
import ImageGallery from "./ImageGallery/ImageGallery";


export class App extends Component {
  state = {
    textSearch: '',
    
  }
 
  handleSubmit = (textSearch) => {
    this.setState({textSearch})
  }

  render() {
    console.log('state', this.state );
    return(<div className="App"
    >
      <Searchbar onSearch={this.handleSubmit}></Searchbar>
      <ImageGallery value={this.state.textSearch} ></ImageGallery>
    </div>)
   
 }
}
 

// page={this.state.page} perPage={this.state.perPage}