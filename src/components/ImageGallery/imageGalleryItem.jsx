import React, {Component} from "react";
import Modal from "components/Modal/Modal";

class GalleryItem extends Component {
    state = {
        showModal: false,
    }

    toggleModal = () => {
        this.setState(({showModal}) => ({
            showModal:!showModal,
        }))
    }

    render() {
        const { key, src, alt, srcModal } = this.props;
        const { showModal} = this.state;
        return (
            <>
                {<button type="Button" onClick={this.toggleModal}>
                    <li key={key} className="Gallery-item">
                    <img className="ImageGalleryItem-image" src={src} alt={alt} />
                    </li >
                </button>}
            {showModal && < Modal onClose={this.toggleModal} srcModal = { srcModal } alt = { alt } ></Modal >}
            </>
            
            
    )
    }
    
}

export default GalleryItem; //  