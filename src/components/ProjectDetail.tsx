import { useParams, Link } from 'react-router-dom';
import type { Project } from '../types/Project';
import data from '../data.json';

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = (data as unknown as Project[]).find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="container">
        <h2>Proyecto no encontrado</h2>
        <Link to="/" className="back-link">← Volver al listado</Link>
      </div>
    );
  }

  return (
    <div className="container detail-view">
      <header className="header">
        <h1>Cero Emisiones</h1>
        <p>Portal de Gestión Solar</p> 
      </header>
      
      <Link to="/" className="back-link">← Volver al listado</Link>

      <div className="glass-card detail-card">
        <h2>{project.name}</h2> [cite: 74]
        <p className="location">{project.location}</p>

        <div className="stats-grid">
          <div className="stat-box">
            <span>CAPACIDAD</span>
            <strong>{project.capacity} kWh</strong> 
          </div>
          <div className="stat-box">
            <span>ESTADO ACTUAL</span>
            <span className={`badge ${(project as any).status.toLowerCase()}`}>
              {(project as any).status}
            </span>
          </div>
        </div>

        <div className="description-box">
          <h3>Descripción del Sistema</h3>
          <p>{project.descripcion}</p>
        </div>
      </div>
    </div>
  );
};