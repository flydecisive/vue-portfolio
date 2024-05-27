<script>
import SliderControlIcon from "@/components/icons/SliderControlIcon.vue";

export default {
  name: "AppSlider",
  data() {
    return {
      currentIndex: 0,
      length: this.images.length,
      startX: null,
      endX: null,
    };
  },
  props: {
    images: {
      type: Object,
      require: true,
    },
  },
  components: {
    SliderControlIcon,
  },
  methods: {
    goToNextSlide() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex += 1;
      }
    },
    goToPrevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
    },
    start(e) {
      this.startX = e.touches[0].clientX;
    },
    move(e) {
      this.endX = e.touches[0].clientX;
    },
    end() {
      if (
        this.startX > this.endX &&
        this.currentIndex < this.images.length - 1
      ) {
        this.currentIndex += 1;
      }

      if (this.startX < this.endX && this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
    },
  },

  computed: {
    slideStyle() {
      return {
        backgroundImage: `url(${this.images[this.$data.currentIndex]})`,
      };
    },
  },
};
</script>

<template>
  <div class="slider" @touchstart="start" @touchmove="move" @touchend="end">
    <transition name="fade" mode="out-in">
      <div class="slider__slide" :style="slideStyle" :key="currentIndex">
        <div class="blur">
          <img :src="images[currentIndex]" alt="preview" class="slider__img" />
        </div>
      </div>
    </transition>
    <div class="slider__controls">
      <slider-control-icon
        class="slider__control"
        :transform="true"
        @click="goToPrevSlide"
        :isDisabled="this.$data.currentIndex === 0"
      />
      <div class="slider__dots">
        <div
          v-for="(n, index) in images.length"
          :key="index"
          :class="
            this.$data.currentIndex === index
              ? 'slider__dot slider__dot-active'
              : 'slider__dot'
          "
        ></div>
      </div>
      <slider-control-icon
        class="slider__control"
        @click="goToNextSlide"
        :isDisabled="this.$data.currentIndex === images.length - 1"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_vars.scss";

.slider {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;

  &__slide {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__controls {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }

  &__dots {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 4px;
  }

  &__dot {
    width: 12px;
    height: 12px;
    background: $zinc-500;
    border-radius: 50%;

    &-active {
      background: $primary-black;
    }
  }

  &__img {
    max-width: 100%;
    max-height: 100%;
  }
}

.blur {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .slider {
    &__slide {
      max-height: 250px;
    }

    &__controls {
      justify-content: center;
    }

    &__control {
      display: none;
    }
  }
}
</style>
