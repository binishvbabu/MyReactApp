import React from 'react';

const Nuvento = ({nuvento, deleteNuvento}) => {

    const nuventoList = nuvento.map(n =>{
      return (
        <div className="Nuvento" key={n.id}>
            <div>name: {n.name}</div>
            <div>gender: {n.gender}</div>
            <div>salary: {n.salary}</div>
            <button onClick = {()=>{deleteNuvento(n.id)}}>Delete</button>
            <p></p>
        </div>
      ) 
    })

    return(
        <div>                
            {nuventoList}
        </div>
    )
}

export default Nuvento