import React from 'react'
import './CardCurso.css'
const CardCurso = ()=>{
    return(

    <div className="card-curso">
            <div className="curso-imagem"></div>
            <div className="card-detail">
                <span className="material-icons">star</span>
                9,5
                <h1>Ingles basico</h1>
                <h2>1/02/2021 a 10/7/2021</h2>
                <h3>5 semanas</h3>
            </div>
            <a href="#" className="btn-detail">
                <span className="material-icons">add_circle</span>
              detalhes
            </a>       
    </div>

     );
     
 }
export default CardCurso;