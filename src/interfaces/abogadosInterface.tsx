
export interface AbogadosInterface {
  total:    number;
  usuarios: Usuario[];
}

export interface Usuario {
  estado: boolean;
  google: boolean;
  _id:    string;
  nombre: string;
  correo: string;
  rol:    Rol;
}

export enum Rol {
  AdminRole = "ADMIN_ROLE",
  UserRole = "USER_ROLE",
}
