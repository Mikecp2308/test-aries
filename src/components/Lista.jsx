import React from 'react';
import '../css/style.css'
import {NavLink} from "react-router-dom";
import Datos from './Datos'





const Lista = () =>{
    const [equipo ,setEquipo] = React.useState([])

    React.useEffect(() =>{
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6')
        const users = await data.json()
        //console.log(users);
        setEquipo(users)
    }


    
    return (

                <div className="card-group">

                    {
                        equipo.map(item => (

                            <div className="card-deck p-2">
                            <div className="card">
                                <img key={item.id} width="100"  src={item.image_url} alt="Card image cap" />
                                <div className="card-body">
                                <h5 className="card-title">{item.tagline}</h5>
                                <p className="card-text"></p>
                                </div>

                                <div className="card-footer">
                                <small className="text-muted">Fecha de creación: {item.first_brewed}</small>
                                <div>
                                    <NavLink className='btn btn-outline-success m-1' to={"/datos/" + item.id}>
                                    Mas Informacion
                                    </NavLink>
                                </div>
                                </div>
                            </div>
                        </div>

                                
                            
                        ))
                        
                    }
                    
                </div>
                
    )
}


export default Lista;