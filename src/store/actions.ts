import Vue from "vue";
import { getData } from "@/services";
import { Commit } from "vuex";

interface vuexTypes {
  commit: Commit;
}

const actions = {
  async getCNPJ({ commit }: vuexTypes, cnpj: string): Promise<void> {
    try {
      const response = await getData(cnpj);
      commit("setCNPJ", response);
      commit("setHistory", response);
    } catch (error) {
      Vue.$toast.open({
        message: "Erro de Requisição",
        position: "top-left",
        duration: 1500,
        type: "error",
      });
    }
  },
};

export default actions;
