<script>
export default {
  props: ["points"],
};
</script>

<template>
  <nav
    class="fixed sm:px-20 py-5 bg-neutral bg-opacity-50 backdrop-blur-xl sm:bg-opacity-0 sm:backdrop-blur-0 w-screen flex flex-col sm:flex-row items-center justify-between z-40"
  >
    <div
      id="pointCounter"
      class="flex items-center justify-center gap-2 w-1/12"
    ></div>
  </nav>
</template>

<style scoped>
.white-icon {
  filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(17%)
    hue-rotate(241deg) brightness(105%) contrast(100%);
}
</style>
