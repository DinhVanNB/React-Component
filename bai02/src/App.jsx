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
          <Tabledata key={index} stt={index+1}  data={student}/>
    );
  return (
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
         {elementTr}
        </tbody>
      </table>
  );
}

export default App;
