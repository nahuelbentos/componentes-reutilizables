export interface Categoria {
    id?:                    string;
    nombre?:                string;
    descripcion?:           string;
    urlImagen?:             string;
    aprobada?:              boolean;
    planificacionServicio?: any[];
    publicacion?:           any[];
}
