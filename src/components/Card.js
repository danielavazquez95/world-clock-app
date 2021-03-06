import React, { useEffect, useState } from 'react';
import { deleteDB, getTimeZone } from '../helpers/fetchTimezone';

export const Card = ({name, id, handleDeleteOperation}) => {

    const [timezone, setTimezone] = useState({});

    useEffect(() => {
        getTimeZone(name)
        .then(data =>setTimezone(data))
     
    }, [name])
   
    const handlerClickDelete = () => {
        deleteDB(id);
        handleDeleteOperation(id);
    };
    
    return (
        <>
            {   
                <div className="card card-clock my-2 center-block">
                    <div className="card-body">
                        { 
                            (timezone.unixtime === undefined ) ?
                        <div className="spinner"></div>
                        : 
                        <>
                            <i className="fas fa-times text-danger mx-2" onClick={handlerClickDelete}/>
                            <h5 className="card-title text-dark text-center mb-2">{timezone.timezone}</h5>
                            <h6 className="card-subtitle text-muted text-center my-2 ">{timezone.datetime.slice(0,10)}</h6>
                            <p className="card-text text-success text-center my-2">{timezone.datetime.slice(11,16)}</p>
                        </>
                        }
                    </div>
                </div>

            }
        </>
    )
}