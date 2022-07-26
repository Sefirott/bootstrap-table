import axios from 'axios';
import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';

function App() {
  const [data, setData] = useState([]);

  //Calling Data using useEffect
  useEffect(() => {
  
    getData()
  },[])

  //Fetching Data with Axios
  const getData = async () => {
  await axios("https://restcountries.com/v2/all").then((res) => 
    {console.log(res.data);
    setData(res.data);}
    );
  };
  //Created Columns to Display Data
  const columns =[{
    dataField: 'name',
    text: 'Name',
    sort: true,
  },
  {
    dataField: 'capital',
    text: 'Capital ',
    filter: textFilter()
  },
  {
    dataField: 'region',
    text: 'Region',
    sort: true,
  },
  {
    dataField: "flag",
    text: 'Flag',
    formatter: (flag) => <img src={flag} width="50px" />
  },
]
  return (
    <div className="App">
      
      <BootstrapTable
        keyField="numericCode" 
        data={data}
        columns={columns} 
        striped
        hover
        condensed
        pagination={paginationFactory()}
        filter={filterFactory()}
        />
      

    </div>
  );
}

export default App;
