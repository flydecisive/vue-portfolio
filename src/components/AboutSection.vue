<script>
import AppContainer from "@/components/AppContainer.vue";

export default {
  name: "AboutSection",
  components: {
    AppContainer,
  },
};
</script>

<template>
  <section class="about" id="about">
    <app-container>
      <div class="about__wrapper">
        <img src="@/assets/img/About.svg" alt="img" class="about__img" />
        <div class="about__content">
          <h2 class="about__title section__title">
            Обо <span class="section__title-bold">Мне</span>
          </h2>
          <div class="about__description">
            <p>
              Я увлеченный Frontend-разработчик, который обожает
              программирование и изучение новых технологий. Я с большим
              энтузиазмом отношусь к воплощению технических и визуальных
              аспектов цифровых продуктов в жизнь. Для меня важны удобство
              работы с пользователем, идеальный дизайн и написание четкого,
              читабельного и высокопроизводительного кода.
            </p>

            <p>
              Я начал свой путь в качестве Frontend-разработчика в 2022 году, и
              с тех пор продолжаю расти и эволюционировать как разработчик,
              принимая новые вызовы и попутно осваивая новейшие технологии.
              Сейчас я имею пол года опыта коммерческой разработки и создаю
              передовые веб-приложения, используя такие современные технологии,
              как Next.js, TypeScript, React, Tailwindcss и многое другое.
            </p>

            <p>
              В свободное время я люблю заниматься спортом и проводить время с
              семьей и друзьями, а также не много играть в игры.
            </p>
          </div>
        </div>
      </div>
    </app-container>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/styles/_vars.scss";

.about {
  padding: 60px 0px;
  box-sizing: border-box;

  &__wrapper {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px 32px;
    box-sizing: border-box;
  }

  &__content {
    display: flex;
    align-items: flex-start;
    flex-flow: column nowrap;
    gap: 20px;
    max-width: 610px;
  }

  &__description {
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
    align-items: flex-start;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: $zinc-500;
  }
}
</style>
