import React from 'react';
import { useParams } from 'react-router-dom';

const Datos = () =>{
    const {id} = useParams()

    const [equipo ,setEquipo] = React.useState([])

    React.useEffect(() =>{
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
        const data = await response.json()
        setEquipo(data)
    }
    return (
        <div>
            { equipo ? 

                equipo.map(item => {
                    return (
                        <div className="jumbotron">
            <h1 className="display-4">{item.name}</h1>
            <img key={item.id} className="img-r" src={item.image_url} alt="Card image cap" />
                <p className="lead"> {item.contributed_by}</p>
                <p>{item.tagline}</p>
            <p className="lead">
               {item.description}
            </p>
            </div>
                    )
                    }) : <div>No hay datos</div>
            }
        </div>
    )
}

export default Datos