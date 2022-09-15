export interface InfoAdviser {
    user_name?:                 string;
    user_Photo?:                string;
    ventas_monto_unidades?:     number;
    ventas_monto_vendidas?:     string;
    ventas_unidad_meta?:        string;
    ventas_monto_meta?:         string;
    events?: string;
    nombre?:                string;
    correo_electronico?:    string;
    desarrollo?:            string;
    telefono?:              string;
    status?:                string;
    etapa?:                 string;

}

export interface loginData {
    Ok?:                string;
    user_id?:           string;
    cuenta_id?:         string;
    cuenta_logo?:       string;
}

export interface clientList {
    nombre?:                string;
    correo_electronico?:    string;
    desarrollo?:            string;
    telefono?:              string;
    status?:                string;
    etapa?:                 string;
}
export interface recoverPassword {
  message?:                string;
  usuario?: [];
  flag?: string;
}

