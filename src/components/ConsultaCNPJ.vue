<template>
  <form class="consulta-cnpj" @submit.stop.prevent="getInput()">
    <input
      type="text"
      class="consulta-cnpj__input"
      placeholder="Insira o CNPJ"
      v-model="cnpj"
      maxlength="18"
      @keyup="handle()"
    />
    <button type="submit" class="consulta-cnpj__btn" :disabled="!validation">
      CONSULTAR
    </button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import formatCNPJ from "@/helpers/formatCNPJ";
import validateCNPJ from "@/helpers/validateCNPJ";

@Component
export default class ConsultaCNPJ extends Vue {
  private cnpj = "";
  private cnpjNoFormat = "";
  private validation = false;

  checkCNPJ(cnpj: string): void {
    this.validation = validateCNPJ(cnpj);

    if (!this.validation && cnpj.length === 14) {
      this.$toast.open({
        message: "CNPJ Inválido!",
        position: "top-left",
        duration: 1500,
        type: "error",
      });
    }
  }

  handle(): void {
    const formatInput = formatCNPJ(this.cnpj);
    this.cnpj = formatInput.cnpj;
    this.cnpjNoFormat = formatInput.value;
    this.checkCNPJ(formatInput.value);
  }
  async getInput(): Promise<void> {
    try {
      await this.$store.dispatch("getCNPJ", this.cnpjNoFormat);
      this.$router.push({ name: "Consulta" });
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<style lang="scss" scoped>

$fontSize: 1.75rem;

.consulta-cnpj {
  position: fixed;

  top: 0;

  z-index: 1;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    height: 15vh;

    margin-top: 8vh;
  }
  @media screen and (max-width: 767px) {
    height: 10vh;

    margin-top: 13.5vh;
  }

  background-color: white;

  padding: 0 4.5vw;

  border-radius: 1vw;

  .consulta-cnpj__input {
    outline: none;
    border: 2px solid #e2dada;

    margin-right: 1vw;
    font-size: clamp(0.8rem, 2vw, $fontSize - 0.25);

    @media screen and (min-width: 1024px) {
      width: 45vw;
    }
    @media screen and (max-width: 768px) {
      width: 60vw;
    }
    height: 5vh;

    &::placeholder {
      padding-left: 1.5vw;
    }

    &:focus {
      border: 2px solid forestgreen;
      border-radius: 1vw;
    }
  }
  .consulta-cnpj__btn {
    outline: none;
    border: none;

    border-radius: 5px;

    font-weight: 600;

    color: whitesmoke;
    background-color: forestgreen;

    padding: 2.25vh;

    font-size: clamp(0.6rem, 2vw, 1rem);

    &:disabled {
      background-color: gray;
      &:hover {
        filter: brightness(100%);
      }
    }

    &:hover {
      cursor: pointer;
      filter: brightness(125%);
    }
  }
}
</style>
