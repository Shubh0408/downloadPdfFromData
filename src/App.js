import logo from './logo.svg';
import './App.css';
import Basicdocument from './conatiner/PdfStructure/Basicdocument';
import Approute from './Approute';

function App() {
  return (
    <div className="App p-6">
      <a href='/pdf'><button className='border-2 border-black p-1'>Download pdf</button></a><br/>
      {/* <a href='/upload'><button className='border-2 border-black p-1 my-6'> upload</button></a><br/> */}
      <a href='/list'><button className='border-2 border-black p-1 mt-6'>List</button></a>
    </div>
  );
}

export default App;
