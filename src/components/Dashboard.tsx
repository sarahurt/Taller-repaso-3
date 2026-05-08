import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../types/Project';
import data from '../data.json';

type DashboardProject = Project & { status: string; descripcion: string };

export const Dashboard = () => {
  const [projects, setProjects] = useState<DashboardProject[]>([]);
  const [filter, setFilter] = useState<string>('Todos');

  useEffect(() => {
    const projectsData = (data as any[]).map((project) => ({
      ...project,
      descripcion: project.description,
    }));
    setProjects(projectsData as DashboardProject[]);
  }, []);

 
  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.status === filter);

  return (
    <div className="container">
      <header className="header">
        <h1>Cero Emisiones</h1>
        <p>Portal de Gestión Solar</p>
      </header>

      <div className="controls">
        <h2>Proyectos Instalados</h2>
        <select 
          onChange={(e) => setFilter(e.target.value)} 
          value={filter} 
          className="glass-select"
        >
          <option value="Todos">Filtrar por estado</option>
          <option value="Activo">Activo</option>
          <option value="Mantenimiento">Mantenimiento</option>
          <option value="Pendiente">Pendiente</option>
        </select>
      </div>

      <div className="grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="glass-card">
            <span className={`badge ${project.status.toLowerCase()}`}>{project.status}</span>
            <h3>{project.name}</h3>
            <p className="location">{project.location}</p>
            <Link to={`/proyecto/${project.id}`} className="link-btn">
              Ver parámetros técnicos →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
