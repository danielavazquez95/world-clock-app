import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Card } from './components/Card';
import { loadDB } from './helpers/fetchTimezone';
import { SearchInput } from './components/SearchInput';
import { Footer } from './components/Footer';

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
            <div className="container-app">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <h1 className="title-app text-dark text-center my-3">World<span className="text-danger">Clock</span></h1>
                        <div className="search-input">
                            <SearchInput handleNewTimezone={handleNewTimezone} />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center"> 
                        { 
                        timeDataBase.map((data) => {
                            return(
                            <div key={uuidv4()} className="col-sm-6 col-md-4">    
                                <Card name={data.name} id={data.id} handleDeleteOperation={handleDeleteOperation}/>
                            </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    )
}