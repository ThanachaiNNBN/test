import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import './main.scss';
import Header from './componant/header';
import Table from './componant/table';


function App() {

  return (
    <div className='border m-5 p-5'>
      <Header />
      <Table />
    </div>
  );
}

export default App
