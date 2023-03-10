export interface InfoAdviser {
    user_name?:                 string;
    user_Photo?:                string;
    ventas_monto_unidades?:     number;
    ventas_monto_vendidas?:     string;
    ventas_unidad_meta?:        string;
    ventas_monto_meta?:         string;
    events?: [];
    nombre?:                string;
    correo_electronico?:    string;
    desarrollo?:            string;
    telefono1?:              string;
    status?:                string;
    etapa?:                 string;
    name?:                 string;
    fecha?:                 string;
    direccion?:                 string;
    cliente?:                 string;
}

export interface loginData {
    Ok?:                string;
    user_id?:           string;
    cuenta_id?:         string;
    cuenta_logo?:       string;
}

export interface clientList {
    clientList?: [];
    nombre?:                string;
    correo_electronico?:    string;
    desarrollo?:            string;
    telefono1?:              string;
    status?:                string;
    etapa?:                 string;
    comentarios?:                  string;
    linea_contacto?:                  string;
    User?:                  string;
    id?:                  string;
}
export interface recoverPassword {
  message?:                string;
  usuario?: [];
  flag?: string;
}
export interface developments {
    desarrollos?:                 string;
    developments?:                string;
    desarrollo?:                string;
    id?:                        string;
    portada?:                        string;
}
export interface events {
  id?:                 string;
  titulo?:                string;
  fecha_inicio?:                string;
  color?:                        string;
  icon?:                        string;
  url?:                 string;
  fecha_inicio_format?:                string;
  tipo_tarea?:                string;
  ubicacion?:                        string;
  id_evento?:                        string;
  hora?:       string;
  nombre_evento?: string;
}
export interface inmuebles {
  nombre?:                 string;
  etapa?:                string;
  metros?:                string;
  id?:                        string;
  portada?:                        string;
  recamaras?:                string;
  banios?:                        string;
  estacionamiento?:                        string;
}
