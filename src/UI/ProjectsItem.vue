<script>
import ReadMoreIcon from "@/components/icons/ReadMoreIcon.vue";

export default {
  name: "ProjectsItem",
  components: {
    ReadMoreIcon,
  },
  props: {
    order: Number,
    item: Object,
  },
  computed: {
    style() {
      return {
        order: this.order,
        background: `url('${this.item.cover_src}')`,
        "background-size": "cover",
        "background-repeat": "no-repeat",
      };
    },
  },
};
</script>

<template>
  <div class="project">
    <div class="project__cover" :style="style">
      <!-- <img :src="item.cover_src" alt="cover" class="project__cover_img" /> -->
    </div>
    <div class="project__content">
      <h4 class="project__title">{{ item.name }}</h4>
      <div class="project__stack">
        <div class="project__stack_item" v-for="stack in item.stacks">
          {{ stack }}
        </div>
      </div>
      <p class="project__description">
        {{ item.description }}
      </p>
      <a :href="item.link" class="project__link">
        <read-more-icon />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/_vars.scss";

.project {
  width: 100%;
  padding: 20px 0px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: space-between;

  &__cover {
    width: 530px;
    height: 400px;
    border-radius: 18px;
    flex-shrink: 0;
    // background: url("@/assets/img/covers/react-music-player.png");

    &_img {
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: $primary-white;
    letter-spacing: -0.02em;
  }

  &__description {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.02em;
    color: $zinc-500;
  }

  &__content {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    gap: 28px;
  }

  &__stack {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 12px;

    &_item {
      padding: 4px 8px;
      box-sizing: border-box;
      border: 1px solid $primary-white;
      border-radius: 4px;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: -0.02em;
      font-weight: 500;
      text-transform: capitalize;
      color: $primary-white;
    }
  }

  &__link {
    text-decoration: none;
    display: inline-block;
  }
}
</style>