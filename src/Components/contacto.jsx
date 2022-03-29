import {Container, Button} from "@material-ui/core"
import { Link } from "react-router-dom"
import {Formik, Form} from "formik"
import validate from "../Library/Validate"
import TextInput from "./TextInput"
import  axios  from "axios"
import "./contacto.css"
import Auto from "./AutoComplete"
const Contact = ()=>{



    return(
    <Container>

        <Link to="/"><Button className="back" variant="outlined" color="primary">Back</Button></Link>
        <h1>Contacto</h1>

        <Formik
            
            initialValues={{
                nombre: '',
                apellido: '',
                email: '',
                pais:'',
                comentario:'',
                }}
            validate={validate}
            onSubmit={values => {
                axios.post("http://localhost:8080/post",values).then(()=> alert("Enviado"))
            }} 
        >
            <Form  autoComplete="off" >
                <TextInput  name="nombre" type="text" />
                <TextInput name="apellido" type="text" />
                <TextInput name="email" type="email"/>
                <Auto name="pais" type="text"/>
                <TextInput name="comentario" type="text"/>
                <br/>
                <Button  className="submit" variant="contained" color="secondary" type="submit">submit</Button>

            </Form>
        </Formik>
    </Container>
    )
}

export default Contact