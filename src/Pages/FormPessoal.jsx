import * as C from "@chakra-ui/react"
import { Radio, RadioGroup } from '@chakra-ui/react'

const FormPessoal = () => {
    return(
        <C.VStack spacing={5}>
            <C.Text color="purple">Insira seus Dados!</C.Text>
            <C.Input type="email" placeholder="Insira seu email"/>
            <C.Input type="text" placeholder="Insira seu nome"/>     
                <C.RadioGroup>
                    <C.Radio value="m" marginRight={5}>Masculino</C.Radio>
                    <C.Radio value="f" marginRight={5}>Feminino</C.Radio>
                    <C.Radio value="o">Outro</C.Radio>
                </C.RadioGroup>
            <C.Input type="text" placeholder="Insira seu CPF"/>
            <C.Input type="text" placeholder="Insira seu telefone"/>
        </C.VStack>
    )
}



export default FormPessoal