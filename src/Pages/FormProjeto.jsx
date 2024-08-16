import * as C from "@chakra-ui/react"
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

const FormProjeto = () => {
    return(
        <C.VStack spacing={5}>
            <C.Text color="purple">Insira as informações do projeto!</C.Text>
            <C.Input type="text" placeholder="Insira o nome do projeto"/>
            <C.Input type="text" placeholder="Área de atuação do projeto"/>
            <C.Checkbox>CETCC</C.Checkbox>
            <C.Checkbox>CETAFEST</C.Checkbox>
            <C.Checkbox>CETICC</C.Checkbox>
            <C.Checkbox>CETAFAJU</C.Checkbox>
            <C.Input type="text" placeholder="Coordenador/Professor"/>
        </C.VStack>
    )
}



export default FormProjeto