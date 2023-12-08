export default function Equipo(){
    return(
        <div>
            <h1>Equipo</h1>
            <h3>Residente: </h3>
            <h5 style={{color:"#919191"}}> Ing. Cesar Leonardo Alava Paniagua</h5>
            <h3>Ayudantes: </h3>
            <ul style={{display:"flex", flexWrap:"wrap"}}>
                <li><h5 style={{color:"#919191"}}>Ing. Angelo Mandros</h5></li>
                <li><h5 style={{color:"#919191"}}>Ing. Alexander</h5></li>
                <li><h5 style={{color:"#919191"}}>Omar Zambrano</h5></li>
                <li><h5 style={{color:"#919191"}}>Diego Zambrano</h5></li>
            </ul>
        </div>
    ) ;
}