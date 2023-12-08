import style from '../../styles/alcances.module.css'

export default function Alcances(){
    return(
        <div>
            <h1>Alcances</h1>
            <ol className={style.requerimientos}>
                <li>Recrecimiento del Sensor de codigo CV-06</li>
                <li>Recrecimiento del sensor casagrande</li>
                <li>Supervisar reparacion del sensor VW-14</li>
                <li>Realizar las proyecciones para los siguientes recrecimientos</li>
            </ol>
        </div>
    );
}