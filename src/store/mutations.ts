import { cnpj, stateProps } from "./types";

const mutations = {
  setCNPJ(state: stateProps, payload: cnpj): cnpj {
    return (state.cnpj = payload);
  },
  setHistory(state: stateProps, payload: cnpj): cnpj[] {
    const historyCNPJ = [...state.history];
    historyCNPJ.push(payload);
    return (state.history = historyCNPJ);
  },
};

export default mutations;
