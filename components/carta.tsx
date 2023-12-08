import styles from '../styles/carta.module.css';

export default function Carta(){
    return(
        <div className={styles.carta}>
            <div className={styles.hero}>
                <img src="https://www.turflexperu.com/wp-content/uploads/2018/12/Tubo-PVC-Agua-1.jpg" alt='Tuberias metalicas' className={styles.imagen}></img>
                <div className={styles.forma}>
                    <div className={styles.letras}>
                        <h5>Nombre: </h5>
                        <p>Tuberia de acero de 4"</p>  
                    </div>
                    <div className={styles.letras}>
                        <h5>Descripción: </h5>
                        <p>
                            Tuberia metalica de cuatro pulgadas utilizada para
                            el recubrimiento de los sensores piezometricos
                            durante el proceso de recrecimiento
                        </p>
                    </div>
                    <div className={styles.letras}>
                        <h5>Ubicación: </h5>
                        <p>Almacen de Construplan en la cumbre</p>
                    </div>
                </div>
            </div>
            <div className={styles.stock}>
                <div>
                    <h5>STOCK:</h5>
                    <p>15</p>
                </div>
                <div className={styles.botones}>
                    <button>Retirar material</button>
                    <button>Aumentar material</button>
                    <button>LLamar por soporte</button>  
                </div> 
                

            </div>
        </div>
    );
}