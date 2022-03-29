const validate = (values)=>{
    const errors = {}
    var expRegEmail= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

//validacion de nombre
    if(!values.nombre){
        errors.nombre= "Se requiere un nombre"
    }

//validacion de apellido

    if(!values.apellido){
        errors.apellido= "Se requiere un apellido"
    }
//validacion de email

    if(!values.email){
        errors.email= "Se requiere un email"
    }else{
        if(!expRegEmail.test(values.email)){
            errors.email= "El Email no es valido"
        }
    }
//validacion de pais

    if(!values.pais){
        errors.pais= "Se requiere un pais"
    }
//validacion de comentario

    if(!values.comentario){
        errors.comentario= "Se requiere un comentario"
    }

    return errors
}

export default validate