<script>
import AppContainer from "@/components/AppContainer.vue";
import ExperienceItem from "@/UI/ExperienceItem.vue";
import EXPERIENCE from "@/consts/EXPERIENCE.js";

export default {
  name: "ExperienceSection",
  data() {
    return {
      experience: EXPERIENCE.reverse(),
    };
  },
  components: {
    AppContainer,
    ExperienceItem,
  },
};
</script>

<template>
  <section class="experience">
    <app-container>
      <div class="experience__wrapper">
        <h2 class="experience__title section__title">
          Мой <span class="section__title-bold">Опыт</span>
        </h2>
        <div class="experience__content">
          <experience-item v-for="exp in experience" key="exp.id" :item="exp" />
        </div>
      </div>
    </app-container>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/styles/_vars.scss";

.experience {
  padding: 60px 0px;
  box-sizing: border-box;
  background: $primary-black;

  &__wrapper {
    padding: 0px 32px;
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 20px;
  }

  &__title {
    padding: 20px 0px;
    color: $primary-white;
  }

  &__content {
    padding: 40px 24px;
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 32px;
    width: 100%;
  }
}
</style>
@/consts/consts.js
