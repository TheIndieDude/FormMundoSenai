import * as C from "@chakra-ui/react"
import { Select } from '@chakra-ui/react'

const FormEndereco = () => {
    return(
        <C.VStack spacing={5}>
            <C.Text color="purple"> Insira seu Endereço!</C.Text>
            <C.Input type="text" placeholder="Insira o CEP"/>
            <C.Input type="text" placeholder="Insira o bairro"/>
            <C.Select placeholder="Escolha o UF">
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
            </C.Select>
        </C.VStack>      
    )
}



export default FormEndereco