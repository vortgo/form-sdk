import {Input} from './input';
import {CPF} from "cpf_cnpj";

export class Cpf extends Input {
    isValid() {
        return /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/.test(this.model.get(this.full_name)) && CPF.isValid(this.model.get(this.full_name));
    }
}
