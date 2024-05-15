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
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>

            <p>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>

            <p>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
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
