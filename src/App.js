import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Card } from './components/Card';
import { SearchInput } from './components/SearchInput';
import { loadDB } from './helpers/fetchTimezone';



export const App = () => {

    const [timeDataBase, setTimeDataBase] = useState([]);

    useEffect(() => { 
        loadDB()
        .then(data =>  setTimeDataBase(data));
    }, [])
    

    const handleNewTimezone = (data) => {
        setTimeDataBase([...timeDataBase, data]);
    };

    const handleDeleteOperation = (id) => {
        const timeDataBaseDelete = [...timeDataBase].filter(element => element.id !== id );
        setTimeDataBase(timeDataBaseDelete);
    };

    return (  
        <>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <h1 className="title-app text-center my-4">World clock app</h1>
                    <div >
                        <SearchInput handleNewTimezone={handleNewTimezone} />
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center"> 
                  { 
                    timeDataBase.map((data) => {
                        return(
                        <div key={uuidv4()} className="col-sm-4 py-3 py-sm-0">    
                            <Card name={data.name} id={data.id} handleDeleteOperation={handleDeleteOperation}/>
                        </div>
                        )
                            
                    })
                  }
                </div>
            </div>
      
    
         </>

    )
}
