import './App.css';
import Tabledata from './components/Tabledata';

const dataStudent = [
  {
    name: 'Nguyễn Văn A',
    Age: 30,
    Address: 'Hà Nội'
  },
  {
    name: 'Nguyễn Văn B',
    Age: 20,
    Address: 'Cao Bằng'
  },
  {
    name: 'Nguyễn Văn C',
    Age: 21,
    Address: 'LS'
  },
  {
    name: 'Nguyễn Văn D',
    Age: 22,
    Address: 'AG'
  }
]

function App() {
    let elementTr = dataStudent.map((student,index) => 
        <tr>
          <Tabledata data={index+1}/>
          <Tabledata data={student.name}/>
          <Tabledata data={student.Age}/>
          <Tabledata data={student.Address}/>
        </tr>
    );
  return (
    <>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
        {elementTr}
      </table>
      
    </>
  );
}

export default App;
