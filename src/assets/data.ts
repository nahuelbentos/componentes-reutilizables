import { Alumno } from 'src/app/models/alumno.model';
import { Curso } from 'src/app/models/curso.model';
import { Movil } from '../app/models/movil.model';

const getCursos = (): Curso[] => {
  let cursos: Curso[] = [];
  for (let i = 0; i < 20; i++) {
    cursos.push({
      id: i,
      nombre: `Curso ${i}`,
    });
  }
  return cursos;
};

const getMoviles = (): Movil[] => {
  let moviles: Movil[] = [];
  for (let i = 0; i < 20; i++) {
    moviles.push({
      id: i,
      estado: i % 2 === 0 ? 'A' : 'D',
    });
  }
  return moviles;
};

export const ALUMNOS: Alumno[] = [
  {
    id: -9301,
    numero: 22490,
    nombre: 'Juancho Gonzalez',
    direccion: 'MERCEDES 960 AP 502',
    telefono: '',
    celular: '098765432',
    mail: 'elJuanchoPa@gmail.com',
  },
  {
    id: -9300,
    numero: 22487,
    nombre: 'Olivia Fernandez',
    fechaNacimiento: new Date('1998-08-17'),
    direccion: '',
    telefono: '',
    celular: '091234567',
    mail: 'oli_la_mas_piola@gmail.com',
  },
  {
    id: -9299,
    numero: 22483,
    nombre: 'JUANJO Ramirez',
    fechaNacimiento: new Date('2003-03-15'),
    direccion: 'ASAMBLEA  4451',
    telefono: '',
    celular: '091456123',
    mail: 'juanjo_vantix_summer@gmail.com',
  },
  {
    id: -9298,
    numero: 22481,
    nombre: 'SILVANA Fitipaldi',
    fechaNacimiento: new Date('2063-03-30'),
    direccion: 'Colonia y convencion',
    telefono: '',
    celular: '091789456',
    mail: 'fitipaldiComoFito@gmail.com',
  },
  {
    id: -9297,
    numero: 22480,
    nombre: 'MARIANA Artigas',
    fechaNacimiento: new Date('1976-05-21'),
    direccion: 'VIVO EN ARTIGAS, COMO MI TATARA ABUELO',
    telefono: '',
    celular: '098456321',
    mail: 'marianaNietaArtigas@HOTMAIL.COM',
  },
  {
    id: -9296,
    numero: 22478,
    nombre: 'PATRICIA No Pilsen',
    fechaNacimiento: new Date('1990-04-05'),
    direccion: 'FNC (Fabica Nacional de Cervezas)',
    telefono: '',
    celular: '098351426',
    mail: 'patriciaBebidaRefrescante@hotmail.com',
  },
  {
    id: -9295,
    numero: 22477,
    nombre: 'Stella Artois',
    fechaNacimiento: new Date('2066-02-05'),
    direccion: 'FNC (Fabica Nacional de Cervezas)',
    telefono: '',
    celular: '0998765432',
    mail: 'comandando_A_Las_Demas_Chelas@hotmail.com',
  },
  {
    id: -9294,
    numero: 22476,
    nombre: 'Dom Toretto',
    fechaNacimiento: new Date('1945-03-10'),
    direccion: 'En mi auto con LA FAMILIA',
    telefono: '',
    celular: '099123456',
    mail: 'soloCoronaPorfa@hotmail.com',
  },
  {
    id: -9293,
    numero: 22474,
    nombre: 'SOFIA Santos',
    fechaNacimiento: new Date('2003-07-09'),
    direccion: 'VAZQUEZ 1405 Esq OCA CARD',
    telefono: '',
    celular: '0985274361',
    mail: 'sofiDelCentro@GMAIL.COM',
  },
  {
    id: -9292,
    numero: 22473,
    nombre: 'MIKAELA CONK',
    fechaNacimiento: new Date('2003-05-22'),
    direccion: 'SI ES CON K MI NOMBRE',
    telefono: '',
    celular: '0921354468',
    mail: 'noTengoDireccion@gmail.com',
  },
];

export const CURSOS: Curso[] = getCursos();

export const MOVILES: Movil[] = getMoviles();
