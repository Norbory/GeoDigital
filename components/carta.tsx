import styles from '../styles/carta.module.css';

interface CartaProps {
    nombre: string;
    descripcion: string;
    ubicacion: string;
    stock: number;
    onRetirar: () => void;
    onAumentar: () => void;
    onSoporte: () => void;
  }

  const Carta: React.FC<CartaProps> = ({ nombre, descripcion, ubicacion, stock, onRetirar, onAumentar, onSoporte }) => {
    return(
        <div className={styles.carta}>
            <div className={styles.hero}>
                <img src="https://www.turflexperu.com/wp-content/uploads/2018/12/Tubo-PVC-Agua-1.jpg" alt='Tuberias metalicas' className={styles.imagen}></img>
                <div className={styles.forma}>
                    <div className={styles.letras}>
                        <h5>Nombre: </h5>
                        <p>{nombre}</p>  
                    </div>
                    <div className={styles.letras}>
                        <h5>Descripción: </h5>
                        <p>{descripcion}</p>
                    </div>
                    <div className={styles.letras}>
                        <h5>Ubicación: </h5>
                        <p>{ubicacion}</p>
                    </div>
                </div>
            </div>
            <div className={styles.stock}>
                <div>
                    <h5>STOCK:</h5>
                    <p>{stock}</p>
                </div>
                <div className={styles.botones}>
                    <button onClick={()=>onRetirar()}>Retirar material</button>
                    <button onClick={()=>onAumentar()}>Aumentar material</button>
                    <button onClick={()=>onSoporte()}>LLamar por soporte</button>  
                </div> 
                

            </div>
        </div>
    );
}

export default Carta;