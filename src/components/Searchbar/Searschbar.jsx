import React, {useState, useEffect} from "react";


export default function Searchbar({ onSearch }){ 

  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  }
  
  const handleSubmit = (e) => {
        e.preventDefault()
       if (!value) {
       return alert('Ваш запит пустий')
      }
        onSearch(value);
        setValue('');
  }
  
  useEffect(()=> {
    
  }, [value])

  return (
    <header className="Searchbar">
      <form className="SearchForm " onSubmit={handleSubmit}>
        <button type="submit" className="Button">
          <span className="Button-label">Search</span>
        </button>

        <input
        className="SearchForm-input"
        type="text"
        //autocomplete="off"
        //autofocus
        placeholder="Search images and photos"
        value={value}
        onChange={handleChange}/>
      </form>
    </header>
    
  )
}

//     state = {
//       value: '',
//     }

//     handleChange = ({target:{value}}) => {
//         this.setState({value})
//     }

//     handleSubmit = (e) => {
//         e.preventDefault()
//       if (!this.state.value) {
//         return alert('Ваш запит пустий')
//       }
//         this.props.onSearch(this.state.value)
//         this.setState({ value: '' })
      
//     }
  

//     render() {
//         return (

//         )
//     }
// }

// export default Searchbar;