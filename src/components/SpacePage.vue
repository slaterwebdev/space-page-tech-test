<script>
import MuseumHighlight from "@/components/MuseumHighlight.vue";
import formatHighlights from "@/mixins/formatHighlights.js";
import astronaut from "@/assets/astronaut.png";
import star from "@/assets/star.png";

export default {
  name: "SpacePage",
  components: {
    MuseumHighlight,
  },
  mixins: [formatHighlights],
  data() {
    return {
      astronaut,
      star,
      spaceHighlights: [
        {
          date: "2020-04-20 12:20:00",
          description:
            "Asteroids are minor planets, especially of the inner Solar System. Larger asteroids have also been called planetoids.",
          id: 1,
          image: "",
          name: "Asteroids",
        },
        {
          date: "2020-05-20 15:50:00",
          description:
            "A comet is an icy, small Solar System body that, when passing close to the Sun, warms and begins to release gases, a process called outgassing.",
          id: 9,
          image: "",
          name: "Comets",
        },
        {
          date: "2020-05-01 9:22:00",
          description:
            "The term planet is ancient, with ties to history, astrology, science, mythology, and religion.",
          id: 7,
          image: "",
          name: "Planets",
          news: {
            date: "2020-08-18 18:00:00",
            title: "Attend our talk about Jupiter with Dr. Hogarth",
          },
          quiz: "https://planetquiz.space",
        },
        {
          date: "2020-07-05 4:10:00",
          description:
            "A meteor shower is a celestial event in which a number of meteors are observed to radiate, or originate, from one point in the night sky.",
          id: 12,
          image: "",
          name: "Meteor showers",
          news: {
            title: "The Lyrids will peak at on April 21-22 2021, at night",
          },
        },
      ],
      spacePartners: {
        observatory: {
          createdAt: "2020-06-01 11:45:00",
          info: "The Mauna Kea Observatories (MKO) are a number of independent astronomical research facilities and large telescope observatories that are located at the summit of Mauna Kea on the Big Island of Hawaiʻi, United States.",
          image: "",
          name: "Mauna Kea Observatories",
        },
      },
      formattedHighlights: [],
    };
  },
  methods: {
    updateImage({ index, newImage }) {
      this.formattedHighlights[index].image = newImage;
    },
  },
  created() {
    const allHighlights = [
      ...this.spaceHighlights,
      ...Object.values(this.spacePartners),
    ];

    this.formattedHighlights = this.formatHighlights(allHighlights);
  },
};
</script>

<template>
  <main class="space-page">
    <section class="space-page__intro">
      <div class="space-page__intro__content">
        <h1 class="space-page__intro__content__title">SPACE</h1>
        <p class="space-page__intro__content__text">
          Welcome to the great beyond...
        </p>
      </div>
      <img :src="astronaut" alt="astronaut" class="space-page__intro__image" />
    </section>
    <section class="space-page__desc">
      <h2 class="space-page__desc__title">Lorem, ipsum dolor.</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo earum
        itaque rem quas minus, totam hic nesciunt aliquam nihil et. Eveniet
        quae, voluptatum suscipit delectus esse exercitationem in repellat
        voluptatibus obcaecati fugiat velit alias quidem ab quo aliquam.
        Reprehenderit ipsa vero praesentium nemo soluta quae quaerat unde.
        Mollitia explicabo laborum officiis eaque dolorem quidem quibusdam cum
        fugiat? Similique neque labore animi assumenda exercitationem laboriosam
        optio!
      </p>
    </section>
    <section class="space-page__highlights">
      <MuseumHighlight
        :highlights="formattedHighlights"
        @update-image="updateImage"
      >
        <template #badge>
          <img class="space-page__highlights__badge" :src="star" alt="Badge" />
        </template>
      </MuseumHighlight>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.space-page {
  width: 90vw;
  max-width: 1200px;
  margin: 0 auto;

  &__intro {
    @include flex($justify: space-between, $align: center);
    @include breakpoint(mobile) {
      @include flex(column, center);
      text-align: center;
    }

    &__content {
      @include flex(column, center);

      &__title {
        font-size: 12rem;
        font-style: italic;
        border-bottom: 0.2rem solid $accent-color;
        padding-top: 1.5rem;
        line-height: 0.9;

        @include breakpoint(tablet) {
          font-size: 7rem;
        }
      }

      &__text {
        overflow: hidden;
        color: grey;
        white-space: nowrap;
        border-right: 0.1rem solid #333;
        max-width: fit-content;
        animation:
          typing 6s steps(40, end),
          blink 1s step-end infinite;
        font-size: 1.5rem;

        @include breakpoint(tablet) {
          font-size: 1rem;
          margin: auto;
        }
      }
    }

    &__image {
      width: 50%;
      animation: float 3s ease-in-out infinite;
      will-change: transform, box-shadow;
      @include breakpoint(mobile) {
        width: 100%;
      }
    }
  }

  &__desc {
    &__title {
      border-bottom: 0.2rem solid $accent-color;
      margin-bottom: 1.5rem;
    }
  }

  &__highlights {
    @include flex(column, center);

    &__badge {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}
</style>
