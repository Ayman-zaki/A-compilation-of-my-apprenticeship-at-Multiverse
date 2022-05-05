import React, {useState} from 'react';
import './App.css';

const App =() => {

const [file, setfile] = useState(null)

const onFormSubmit = (e) => {
  e.preventDefault()

const formData = new FormData

}

const onInputChange =(e) =>{
setfile(e.target.files[0])
}



  return (
    <div className="App">
      <form onSubmit={onFormSubmit}>
        <h1>Simple File Upload</h1>
        <input type="file" name="photo" onChange={onInputChange} />
        <button type="submit">Convert</button>
      </form>
    </div>
  );
};

export default App;