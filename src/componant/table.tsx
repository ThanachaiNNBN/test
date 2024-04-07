import { useState } from "react";

export interface Customer {
    name: string;
    age: number;
}

function Table(){
    const [customer, setCustomer] = useState<Customer[]>([]);

    function onClick(){
        setCustomer((old) => [...old, {name:"Chai", age: 2}])
    }

    function table(){
        return customer.map((m: Customer, i: number) => {
            return <>
                    <div key={m.name + i} className="col-6 border "> {m.name + i} </div>
                    <div key={m.age + i}className="col-6 border "> {m.age} </div>
                   </>
        });
    }
    return(
        <>
            <div className="overflow-auto" style={{maxHeight: "20rem"}}>
                <div className="position-sticky top-0 row bg-white">
                    <div className="col-6 border "> Name </div>
                    <div className="col-6 border "> Age </div>
                </div>
            
                <div className="row " >
                    {table()}
                </div>
            </div>
            <button onClick={onClick}>
                
                Clicked {customer.length} times
            </button>
        </>
    )
}
export default Table