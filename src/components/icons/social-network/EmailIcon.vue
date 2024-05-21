<script>
export default {
  name: "EmailIcon",
};
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="email-icon-size"
  >
    <path
      d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="email-icon"
    />
    <rect
      class="email-icon"
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_vars.scss";

.email-icon {
  stroke: $primary-black;
  transition: all 0.3s;

  &-size {
    width: 32px;
    height: 32px;
  }
}

.socials__item:hover .email-icon {
  stroke: $primary-white;
}
</style>
