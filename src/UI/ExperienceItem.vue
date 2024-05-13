<script>
export default {
  name: "ExperienceItem",
  props: { item: { type: Object, default: [] } },
};
</script>

<template>
  <div
    :class="
      item.id % 2 === 0
        ? 'experience__item'
        : 'experience__item experience__item-primary'
    "
  >
    <div class="experience__item_header">
      <h4 class="experience__item_title">{{ item.name }}</h4>
      <div class="experience__item_title_wrapper">
        <p class="experience__item_position">{{ item.position }}</p>
        <p class="experience__item_exp">{{ item.exp }}</p>
      </div>
    </div>
    <div class="experience__item_stack">
      <div class="experience__item_stack_elem" v-for="stack in item.stack">
        {{ stack }}
      </div>
    </div>
    <p class="experience__item_text">
      {{ item.description }}
    </p>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/_vars.scss";

.experience__item {
  border: 1px solid $zinc-500;
  min-height: 192px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  gap: 28px;
  justify-content: space-between;
  border-radius: 10px;
  padding: 30px 24px;
  box-sizing: border-box;
  color: $primary-white;

  &-primary {
    border: none;
    background: $zinc-800;
  }

  &_header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &_stack {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 12px;

    &_elem {
      padding: 4px 8px;
      box-sizing: border-box;
      border: 1px solid $primary-white;
      border-radius: 4px;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.02em;
      font-weight: 500;
      text-transform: capitalize;
    }
  }

  &_title,
  &_exp {
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  &_title {
    font-size: 24px;
    line-height: 32px;

    &_wrapper {
      display: flex;
      align-items: flex-end;
      flex-flow: column nowrap;
      gap: 8px;
    }
  }

  &_exp,
  &_position {
    font-size: 16px;
    line-height: 20px;
  }

  &_text {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: $zinc-300;
  }
}
</style>
