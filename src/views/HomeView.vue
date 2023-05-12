<script>
import GameCard from "../components/GameCard.vue";

export default {
  components: {
    GameCard,
  },
  props: ["games"],
};
</script>

<template>
  <main
    class="flex flex-col gap-14 w-screen min-h-screen items-center justify-center"
  >
    <div class="hero w-5/6 sm:w-1/2 rounded-3xl bg-neutral">
      <div class="hero-content !w-full text-center text-neutral-content">
        <div class="m-2">
          <h1 class="mb-5 text-5xl font-bold">
            Welcome to <span class="text-primary">Blackjack!</span>
          </h1>
        </div>
      </div>
    </div>
    <div
      class="w-full flex flex-wrap items-center sm:justify-center flex-col sm:flex-row gap-10"
    >
      <GameCard v-for="game in games" :key="game.name" :game="game" />
    </div>
  </main>
</template>
