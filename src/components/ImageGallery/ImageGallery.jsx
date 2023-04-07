import { getImage } from 'components/services/getImage';
import React, { useState, useEffect} from 'react';
import Loader from 'components/Loader/Loader';
import AddImageBtn from '../Button/Button';
import GalleryItem from './imageGalleryItem';


export default function ImageGallery({value, pageApp}) {
  
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  

  const handleLoadMore = (e) => {
  e.preventDefault();
  setPage(prevState => prevState + 1);
};
  
  const handleEmptyState = () => {
    setImages([]);
    setPage(1); 
  };
  const renderPage =()=> {
  if (
      pageApp !== page ||
      value !== images
    ) {
      if (value !== images) {
        handleEmptyState();
      }
      setLoading(true);
      getImage(value.trim(), page)
        .then(response => response.json())
        .then(imagesEl => {
          setImages(
            page === 1
              ? [...imagesEl.hits]
              : [...imagesEl.hits, ...imagesEl.hits]
          );
        })
        .catch(errorEl => {
          console.log('error >>', errorEl);
          setError(errorEl)
        })
        .finally(() => {
          setLoading(false );
        });
    }
}

  useEffect(() => {
    if (!value) {
      return
    }
    renderPage();
}, [value, page])

  return (
  <>
        {error && <h1>{error}</h1>}
        {loading && <Loader></Loader>}
        {images && (
          <ul className="ImageGallery">
            {images.map(el => {
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
        {images.length > 0 ? (
          <AddImageBtn onClick={handleLoadMore}></AddImageBtn>
        ) : null}
  </>
  )
}

// class ImageGallery extends Component {
//   state = {
//     images: [],
//     loading: false,
//     page: 1,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.page !== this.state.page ||
//       prevProps.value !== this.props.value
//     ) {
//       if (prevProps.value !== this.props.value) {
//         this.handleEmptyState();
//       }
//       this.setState({ loading: true });
//       getImage(this.props.value.trim(), this.state.page)
//         .then(response => response.json())
//         .then(images => {
//           this.setState({
//             images:
//               this.state.page === 1
//                 ? [...images.hits]
//                 : [...this.state.images, ...images.hits],
//           });
//         })
//         .catch(error => {
//           console.log('error >>', error);
//         })
//         .finally(() => {
//           this.setState({ loading: false });
//         });
//     }
//   }
//   handleLoadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   handleEmptyState = () => {
//     this.setState({
//       images: [],
//       page: 1,
//     });
//   };

//   render() {
//     return (
//       <>
//         {this.state.error && <h1>{this.state.error}</h1>}
//         {this.state.loading && <Loader></Loader>}
//         {this.state.images && (
//           <ul className="ImageGallery">
//             {this.state.images.map(el => {
//               return (
//                 <GalleryItem
//                   key={el.id}
//                   src={el.webformatURL}
//                   alt={el.tags}
//                   srcModal={el.largeImageURL}
//                 ></GalleryItem>
//               );
//             })}
//           </ul>
//         )}
//         {this.state.images.length > 0 ? (
//           <AddImageBtn onClick={this.handleLoadMore}></AddImageBtn>
//         ) : null}
//       </>
//     );
//   }
// }

