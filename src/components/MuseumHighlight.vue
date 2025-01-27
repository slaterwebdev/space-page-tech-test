<script>
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/vue/24/solid";
import newImage from "@/assets/newImage.png";

export default {
  name: "MuseumHighlight",
  components: { ChevronUpIcon, ChevronDownIcon },
  props: {
    highlights: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      expandedCards: [],
      expandedCardNews: [],
    };
  },
  methods: {
    toggleExpand(index, stateKey) {
      this[stateKey] = this[stateKey].includes(index)
        ? this[stateKey].filter((item) => item !== index)
        : [...this[stateKey], index];
    },
    isExpanded(index, stateKey) {
      return this[stateKey].includes(index);
    },
    isUrl(str) {
      const urlPattern = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i;
      return urlPattern.test(str);
    },
    async getNewImage() {
      // Simulate getting a new image URL from an API, instead its a file from the assets folder to demo the visual aspect of the project
      return newImage;
    },
    async refreshImage(index) {
      const newImage = await this.getNewImage();
      this.$emit("update-image", { index, newImage });
    },
  },
};
</script>

<template>
  <div class="highlight-container">
    <div
      class="highlight"
      v-for="(highlight, index) in highlights"
      :key="index"
    >
      <div class="highlight__badge">
        <slot name="badge" />
      </div>

      <button
        @click="toggleExpand(index, 'expandedCardNews')"
        class="highlight__news"
        v-if="highlight.news"
      >
        <p>{{ isExpanded(index, "expandedCardNews") ? "X" : "Latest News" }}</p>
        <p v-if="isExpanded(index, 'expandedCardNews')">
          {{ highlight.news.title }}
          {{ highlight.news.date && `(${highlight.news.date})` }}
        </p>
      </button>

      <img
        class="highlight__image"
        :src="highlight.image"
        :alt="highlight.name"
        loading="lazy"
      />

      <div
        class="highlight__content"
        :class="{
          expanded: isExpanded(index, 'expandedCards'),
          'highlight__content--partner-data': !highlight.id,
        }"
      >
        <div>
          <component
            class="highlight__content__expand-btn"
            :is="
              isExpanded(index, 'expandedCards')
                ? 'ChevronDownIcon'
                : 'ChevronUpIcon'
            "
            @click="toggleExpand(index, 'expandedCards')"
          />
        </div>

        <h3 class="highlight__content__title">{{ highlight.name }}</h3>

        <div class="highlight__content__summary">
          <h4>{{ highlight.date }}</h4>
          <button @click="refreshImage(index)">Refresh Image</button>
        </div>

        <p>{{ highlight.description }}</p>

        <div
          class="highlight__content__extra__properties"
          v-for="property in highlight.extraProperties"
        >
          <a
            v-if="isUrl(property.value)"
            class="highlight__content__extra__properties__link"
            :href="property.value"
            target="_blank"
            rel="noopener noreferrer"
            >{{ property.key }}</a
          >
          <div v-else class="highlight__content__extra__properties__key__vals">
            <p>{{ property.key }}:</p>
            <p>{{ property.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.highlight-container {
  @include flex($justify: center, $gap: 2.5rem, $wrap: wrap);
  margin: 3rem 0;
}

.highlight {
  @include flex(column, end, $gap: 0);
  box-shadow: $shadow;
  width: 20rem;
  height: 25rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  &__badge {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }

  &__news {
    @include button(white, black);
    @include flex(column, $gap: 0.5rem);
    position: absolute;
    top: 2%;
    margin: 0 3%;

    &.expanded {
      width: 94%;
      max-height: 100%;
    }
  }

  &__image {
    height: 100%;
    width: 100%;
  }

  &__content {
    @include flex(column, $justify: space-around, $gap: 0.5rem);
    border-radius: 0.7rem;
    background-color: white;
    position: absolute;
    overflow: hidden;
    padding: 0.5rem;
    margin: -2rem 0 3% 3%;
    max-height: 100px;
    width: 94%;
    transition: max-height 0.4s ease-in;

    &.expanded {
      max-height: 100%;
    }

    &--partner-data {
      background-color: black;
      color: white;
      border: 0.1rem solid $accent-color;

      .highlight__content__summary {
        h4 {
          color: white;
        }

        button {
          background-color: white;
          color: black;
          @include button(white, black);
        }
      }
    }

    &__expand-btn {
      @include smooth-hover();
      height: 1.5rem;
      width: 100%;
    }

    &__title {
      border-bottom: 0.2rem solid $accent-color;
    }

    &__summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;

      h4 {
        color: rgb(81, 80, 80);
      }

      button {
        @include button();
      }
    }

    &__extra__properties {
      @include flex(column, $justify: space-around, $gap: 0.5rem);
      margin: 0.5rem 0;

      &__link {
        @include button();
      }

      &__key__vals {
        @include flex($gap: 0.2rem, $wrap: wrap);
      }
    }
  }
}
</style>
