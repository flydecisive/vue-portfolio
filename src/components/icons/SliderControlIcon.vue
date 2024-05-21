<script>
export default {
  name: "SliderControl",
  props: {
    transform: {
      type: Boolean,
      default: false,
    },
    isDisabled: Boolean,
  },
  computed: {
    controlStyle() {
      return {
        transform: `rotate(${this.transform ? "180deg" : "0deg"})`,
      };
    },
  },
};
</script>

<template>
  <svg
    width="10px"
    height="10px"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    class="slider_control"
    :style="controlStyle"
  >
    <defs></defs>

    <g data-name="Layer 2" id="Layer_2">
      <g
        data-name="E420, Control, forward, multimedia, music, next"
        id="E420_Control_forward_multimedia_music_next"
      >
        <circle
          :class="
            isDisabled
              ? 'slider_control_figures slider_control_figures-disabled'
              : 'slider_control_figures'
          "
          cx="256"
          cy="256"
          r="246"
        />

        <line
          :class="
            isDisabled
              ? 'slider_control_figures slider_control_figures-disabled'
              : 'slider_control_figures'
          "
          x1="159.74"
          x2="341.57"
          y1="256"
          y2="256"
        />

        <polyline
          :class="
            isDisabled
              ? 'slider_control_figures slider_control_figures-disabled'
              : 'slider_control_figures'
          "
          points="288.09 309.48 341.56 256 288.09 202.52"
        />
      </g>
    </g>
  </svg>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_vars.scss";

.slider_control {
  width: 40px;
  height: 40px;

  &_figures {
    fill: none;
    stroke: $primary-black;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 20px;
    transition: all 0.3s;

    &-disabled {
      stroke: $zinc-100;

      &:hover {
        cursor: default;
      }
    }
  }

  &:hover {
    cursor: pointer;
  }

  &:hover &_figures {
    stroke: $zinc-500;
  }

  &:hover &_figures-disabled {
    stroke: $zinc-100;
  }
}
</style>
