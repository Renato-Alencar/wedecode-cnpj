<template>
  <main class="consulta">
    <section class="consulta__dados">
      <h1 class="consulta__title">Dados da Empresa</h1>
      <div
        v-for="(data, key, index) in getDataCNPJ"
        :id="`${key.split(' ').join('-').toLowerCase()}`"
        class="dados__cnpj"
        :key="index"
      >
        <th class="cnpj__key">{{ key }}</th>
        <td class="cnpj__value" v-if="data === ''">NÃO POSSUI</td>
        <td class="cnpj__value" v-else>{{ data }}</td>
      </div>
    </section>
    <button class="consulta__return" @click="homeBack()">VOLTAR</button>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ConsultaCNPJ from "@/components/ConsultaCNPJ.vue"; // @ is an alias to /src
import { cnpj } from "@/store/types";

@Component({
  components: {
    ConsultaCNPJ,
  },
})
export default class Consulta extends Vue {
  get getDataCNPJ(): cnpj {
    return this.$store.state.cnpj;
  }

  homeBack(): void {
    this.$router.push({ name: "Home" });
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/reset/reset.css';

.consulta {
  height: 100vh;

  @media screen and (min-width: 768px) {
    margin: 0 10vw;
  }

  .consulta__dados {
    display: grid;
    grid-template-rows: 7vh;
    grid-column-gap: 2vw;
    grid-row-gap: 2vh;
    @media screen and (min-width: 768px) {
      grid-template-columns: 30vw 20vw auto;
      grid-template-areas:
        "title title title"
        "fantasia abertura numero"
        "razao razao cnpj"
        "descricao descricao codigo"
        "logradouro logradouro complemento"
        "bairro municipio cep"
        "tipologr uf status"
        "ddd telefone email";
    }
    @media screen and (max-width: 767px) {
      grid-template-columns: auto 30vw;
      grid-template-areas:
        "title title"
        "fantasia abertura"
        "cnpj numero"
        "razao codigo"
        "descricao descricao"
        "complemento logradouro"
        "bairro municipio"
        "tipologr cep"
        "uf status"
        "telefone ddd"
        "email .";
    }

    padding: 1.5vh 1.5vw;

    background-color: lightgray;

    font-family: sans-serif;

    border: 1px solid black;

    .consulta__title {
      grid-area: title;

      text-align: center;

      font-size: clamp(1rem, 2.5vw, 2rem);
    }

    .dados__cnpj {
      display: inline-grid;

      text-align: left;

      border: 1px solid black;

      .cnpj__key {
        font-size: clamp(0.6rem, 2.5vw, 1rem);
        font-weight: 100;

        margin-bottom: 1vh;
      }

      .cnpj__value {
        font-size: clamp(0.65rem, 2vw, 1.2rem);
        font-weight: 600;

        text-align: justify;

        margin-bottom: 0.5vh;
      }
    }

    #bairro {
      grid-area: bairro;
    }
    #cep {
      grid-area: cep;
    }
    #cnae-principal-codigo {
      grid-area: codigo;
    }
    #cnae-principal-descricao {
      grid-area: descricao;
    }
    #cnpj {
      grid-area: cnpj;
    }
    #complemento {
      grid-area: complemento;
    }
    #data-abertura {
      grid-area: abertura;
    }
    #ddd {
      grid-area: ddd;
    }
    #email {
      grid-area: email;
    }
    #logradouro {
      grid-area: logradouro;
    }
    #municipio {
      grid-area: municipio;
    }
    #nome-fantasia {
      grid-area: fantasia;
    }
    #numero {
      grid-area: numero;
    }
    #razao-social {
      grid-area: razao;
    }
    #status {
      grid-area: status;
    }
    #telefone {
      grid-area: telefone;
    }
    #tipo-logradouro {
      grid-area: tipologr;
    }
    #uf {
      grid-area: uf;
    }
  }
  .consulta__return {
    background-color: darkgreen;
    color: whitesmoke;

    margin-top: 2vh;

    padding: 1.5vh 1.5vw;

    outline: none;
    border: none;

    font-size: clamp(0.65rem, 2vw, 1.1rem);

    border-radius: 0.5vw;

    &:hover {
      cursor: pointer;

      filter: brightness(80%);
    }
  }
}
</style>
