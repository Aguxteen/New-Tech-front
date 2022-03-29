import {Container, Button} from "@material-ui/core"
import { Link } from "react-router-dom"

const Inicio = ()=>{

    return(
    <Container>
        <h1>Contacta con New Tech</h1>
            <Link to="/contact"><Button variant="contained" color="primary">Go contact</Button></Link>
        

    </Container>
    )
}

export default Inicio