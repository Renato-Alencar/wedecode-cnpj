export interface stateProps {
  cnpj: cnpj;
  history: cnpj[];
}

export interface cnpj {
  BAIRRO: string;
  CEP: string;
  "CNAE PRINCIPAL CODIGO": string;
  "CNAE PRINCIPAL DESCRICAO": string;
  CNPJ: string;
  COMPLEMENTO: string;
  "DATA ABERTURA": string;
  DDD: string;
  EMAIL: string;
  LOGRADOURO: string;
  MUNICIPIO: string;
  "NOME FANTASIA": string;
  NUMERO: string;
  "RAZAO SOCIAL": string;
  STATUS: string;
  TELEFONE: string;
  "TIPO LOGRADOURO": string;
  UF: string;
}
