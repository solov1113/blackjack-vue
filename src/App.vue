<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<script>
import Game from "@/Game";

const games = [
  new Game("Blackjack", "/blackjack.jpg", "Beat the dealer and win!"),
];
export default {
  data() {
    return {
      points: Number(localStorage.getItem("points")),
      games: games,
    };
  },
  methods: {
    changePoints(x) {
      this.points += x;
      localStorage.setItem("points", this.points);
    },
  },
};
</script>

<template>
  <NavBar :points="points" />
  <RouterView
    class="h-full pb-10 pt-28"
    :games="games"
    @changePoints="changePoints"
    :points="points"
  />
</template>
