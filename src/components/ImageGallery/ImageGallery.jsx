import { getImage } from 'components/services/getImage';
import React, { Component } from 'react';
import Loader from 'components/Loader/Loader';
import AddImageBtn from '../Button/Button';
import GalleryItem from './imageGalleryItem';

class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevProps.value !== this.props.value
    ) {
      if (prevProps.value !== this.props.value) {
        this.handleEmptyState();
      }
      this.setState({ loading: true });
      getImage(this.props.value.trim(), this.state.page)
        .then(response => response.json())
        .then(images => {
          this.setState({
            images:
              this.state.page === 1
                ? [...images.hits]
                : [...this.state.images, ...images.hits],
          });
        })
        .catch(error => {
          console.log('error >>', error);
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }
    // if (prevProps.value !== this.props.value) {
    //     this.handleEmptyState();
    //     this.setState({loading:true})
    //     getImage(this.props.value.trim())
    //         .then((response) => response.json())
    //         .then((images) => {
    //             this.setState({
    //                 images:[...this.state.images, ...images.hits]
    //         })
    //     }).catch((error) => {
    //         console.log('error >>', error)
    //     }).finally(() => {
    //         this.setState({loading:false})
    //     })
    // }
  }
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleEmptyState = () => {
    this.setState({
      images: [],
      page: 1,
    });
  };

  render() {
    return (
      <>
        {this.state.error && <h1>{this.state.error}</h1>}
        {this.state.loading && <Loader></Loader>}
        {this.state.images && (
          <ul className="ImageGallery">
            {this.state.images.map(el => {
              return (
                <GalleryItem
                  key={el.id}
                  src={el.webformatURL}
                  alt={el.tags}
                  srcModal={el.largeImageURL}
                ></GalleryItem>
              );
            })}
          </ul>
        )}
        {this.state.images.length > 0 ? (
          <AddImageBtn onClick={this.handleLoadMore}></AddImageBtn>
        ) : null}
      </>
    );
  }
}

export default ImageGallery;

// <li  key={el.id} className="gallery-item">
// <img src={el.webformatURL} alt={el.tags} />
// </li>

// if (prevProps.value !== this.props.value) {
//     this.handleEmptyState();
//     this.setState({loading:true})
//      return getImage(this.props.value.trim(), this.state.page, this.props.perPage)
//         .then((response) => response.json())
//         .then((images) => {
//             this.setState({
//                 images:[...this.state.images, ...images.hits]
//         })
//     }).catch((error) => {
//         console.log('error >>', error)
//     }).finally(() => {
//         this.setState({loading:false})
//     })
// }