import './App.css';
import {useEffect, useState, Fragment} from "react";
import axios from "axios";

function App() {
  let [data, setData] = useState([]);
  useEffect(() => {
      axios.get("http://localhost:4000/users").then(response => {
        setData(response.data);
      })
  }, []);
  return (
    <div className="App">
      <ul style={{}}>
        {
          data.map((d, i) => {
            return (
              <Fragment key={i}>
                <li>{d.username}</li>
                <li>{d.password}</li>
                <li>{d.dob}</li>
                <br />
              </Fragment>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
