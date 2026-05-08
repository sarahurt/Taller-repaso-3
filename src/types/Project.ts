export interface Project{
    id:number;
    name: String;
    location: String;
    capacity: 'Activo' |'Mantenimiento'|'Pendiente';
    descripcion: string;
}