<template>
  <div class="home">
    <ConsultaCNPJ />
    <section class="history-search">
      <div
        class="history-search__card"
        v-for="(card, index) in getHistorySearch"
        :key="index"
      >
        <h1 class="card__text" id="title" @click="goToForm()">{{ card["RAZAO SOCIAL"] }}</h1>
        <div class="card__text">
          <p class="text__field">{{ card["LOGRADOURO"] }},</p>
          <p class="text__field">{{ card["MUNICIPIO"] }} -</p>
          <p class="text__field">{{ card["UF"] }}</p>
        </div>
        <div class="card__text">
          <p class="text__field">{{ card["CNPJ"] }} -</p>
          <p class="text__field">{{ card["STATUS"] }}</p>
        </div>
      </div>
    </section>
  </div>
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
export default class Home extends Vue {
  get getHistorySearch(): cnpj[] {
    return this.$store.state.history;
  }

  goToForm(): void {
    this.$router.push({ name: "Consulta" });
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/reset/reset.css';

.home {
  max-width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .history-search {
    height: 60vh;

    position: relative;

    .history-search__card {
      @media screen and (min-width: 1023px) {
        max-width: 75vw;
      }
      @media screen and (max-width: 768px) {
        max-width: 90vw;
      }

      border-radius: 1vw;

      color: forestgreen;
      background-color: rgb(226, 218, 218);

      display: flex;
      flex-direction: column;

      padding: 2vh 2vw;
      margin-bottom: 2vh;

      font-family: sans-serif;

      .card__text {
        display: inline-flex;

        text-align: left;

        font-size: clamp(0.7rem, 2vw, 1.05rem);

        .text__field {
          margin: 0.75vw;
        }
      }

      #title {
        margin-left: 1vw;

        font-weight: 500;
        font-size: clamp(0.9rem, 2.5vw, 1.25rem);

        letter-spacing: 0.1vw;

        color: rgb(26, 107, 26);

        &:hover {
          cursor: pointer;

          color: forestgreen;
        }
      }
    }
  }
}
</style>
