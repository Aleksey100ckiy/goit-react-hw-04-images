import React from "react";
import { ColorRing } from 'react-loader-spinner'

const Loader = () => {
    return (
<ColorRing
  visible={true}
  height="40"
  width="40"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#060748', '#060748', '#060748', '#060748', '#060748']}
/>
        
    )
}

export default Loader;