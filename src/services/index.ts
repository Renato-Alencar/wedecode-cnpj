import { cnpj } from "@/store/types";
import axios from "axios";

export async function getData(cnpj: string): Promise<cnpj> {
  try {
    const response = await axios.get(
      `https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpj}`
    );

    if (response.data.error !== undefined) {
      console.log(response.data.error);
      throw "CNPJ NÃO ENCONTRADO.";
    }
    if (response.status !== 200) throw "Erro";

    return response.data;
  } catch (error) {
    const msg = error;
    throw msg;
  }
}
