import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import Display from '../components/display';
import useProject from '../hooks/useProject';


export default function Home() {
  const [displayPage, setDisplayPage] = useState('/');
  const { data: listProjects, loading, error } = useProject('http://localhost:3001/api/projects');

  const handleButtonClick = (page) => {
    setDisplayPage(page);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Inventario Proyectos | GeoDigital</title>
        <link rel="icon" href="/warehouse.svg" />
      </Head>

      <main>
        <h1 className={styles.title}>
          GeoDigital Warehouse
        </h1>
        <p className={styles.description}>
          Supervisor online para mejor manejo de herramientas y personal en campo
        </p>
        <div className={styles.componentes}>
          <div className={styles.lista}>
            <h3>PROYECTOS ACTUALES</h3>
            <ul>
              {loading ? (
                <p>Cargando proyectos...</p>
              ) : error ? (
                <p>Error al cargar proyectos.</p>
              ) : (
                listProjects.map((project, index) => (
                  <li key={index}>{project.name}</li>
                ))
              )}
            </ul>
          </div>
          <div className={styles.showroom}>
            <ul>
              <li>
                <a onClick={() => handleButtonClick('/routes/materiales')} className={styles.pages}>MATERIALES</a>
              </li>
              <li>
                <a onClick={() => handleButtonClick('/routes/alcances')} className={styles.pages}>ALCANCES</a>
              </li>
              <li>
                <a onClick={() => handleButtonClick('/routes/equipo')} className={styles.pages}>EQUIPO</a>
              </li>
            </ul>
            <div className={styles.informacion}>
              <Display page={displayPage} />
            </div>
          </div>
        </div>
      </main>

      <footer>
        <a
          href="https://www.geohidrac.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/logo.jpg" alt="Geohidrac" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
