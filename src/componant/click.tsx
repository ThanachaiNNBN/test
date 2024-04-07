import { useState } from "react";

export interface Personal {
    id: number;
    name: string;
    country: string;
  }
function Clicked(){
    const [count, setCount] = useState(0);
  const employees: Personal[] = [
    {id: 1, name: 'Alice', country: 'Austria'},
    {id: 2, name: 'Bob', country: 'Belgium'},
    {id: 3, name: 'Carl', country: 'Canada'},
  ];

  function handleClick() {
    setCount(count + 1)
  }

  function genText() {
    return employees.map((employee, index) => {
        return <div key={index}>
                  <h2><span className='text-primary'>name:</span>  {employee.name}</h2>
                  <h2>country: {employee.country}</h2>
                  <hr />

                  <div className="border">aaaascs
                    <button onClick={handleClick}>
                      Clicked {count} times
                    </button>
                  </div>
                </div>
        });

    }

    return(
        <div>
            {genText()}
        </div> 
    );
}
export default Clicked