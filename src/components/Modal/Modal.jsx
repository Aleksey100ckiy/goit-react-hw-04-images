import React,{Component} from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root')

class Modal extends Component {
 
  componentDidMount() { 
    window.addEventListener("keydown", this.handleKeyDown 
    )
  }
  
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown )
}
  
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  }

  handleBackdropClick = evt => {
    //console.log('клац бекдроп');
    //console.log("current",evt.currentTarget);
    //console.log("Target", evt.target);
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
    
  }

  render() {
    
    const { srcModal, alt } = this.props;
    
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={srcModal} alt={alt} />
        </div>
      </div>, modalRoot, );
  }  
}
    
export default Modal;
 