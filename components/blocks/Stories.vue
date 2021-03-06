<template>
  <section class="stories">
    <section-title
      v-if="$route.path === '/' || $route.path === '/stories'"
      class="stories__title"
      >{{ storiesBlock.title }}</section-title
    >
    <slot></slot>
    <ul v-if="totalItems !== 0" class="stories__list">
      <li class="stories__item" v-for="story in stories" :key="story.id">
        <story-item
          :author="story.author"
          :title="story.title"
          :ImageUrl="isSmallImageToSet(story)"
          :link="story.id"
        />
      </li>
    </ul>

    <fade>
      <div v-if="totalItems === 0" class="stories__failing">
        <p class="stories__failing-title">Ничего не найдено</p>
        <p class="stories__failing-text">Попробуйте еще раз.</p>
      </div>
    </fade>
  </section>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import StoryItem from '@/components/blocks/StoryItem';
import FadeAnimation from '@/components/ui/FadeAnimation';

export default {
  props: ['stories', 'totalItems'],
  components: {
    'section-title': SectionTitle,
    'story-item': StoryItem,
    fade: FadeAnimation,
  },

  methods: {
    isSmallImageToSet: story => {
      const imageFormats = story.ImageUrl[0].formats;
      if (imageFormats.hasOwnProperty('small')) {
        return imageFormats.small.url;
      }
      return story.ImageUrl[0].url;
    },
  },
  computed: {
    storiesBlock() {
      return this.$store.getters['blocks/getCurrentBlock']('stories');
    },
  },
};
</script>

<style scoped>
.stories {
  margin: 0 auto;
}

.stories__title {
  margin: 0 0 62px;
}

.stories__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  row-gap: 52px;
  padding: 0;
  list-style: none;
  justify-content: center;
  margin: 0 0 51px;
}
.stories__failing {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.stories__failing-title {
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 58px;
  margin: 40px 0 40px;
}
.stories__failing-text {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  margin: 0;
}
@media screen and (max-width: 1280px) {
  .stories__list {
    row-gap: 42px;
    margin-bottom: 41px;
  }
  .stories__title {
    margin: 0 0 50px;
  }
  .stories__failing-title {
    margin: 50px 0 40px;
  }
}

@media screen and (max-width: 1024px) {
  .stories__list {
    column-gap: 30px;
    row-gap: 46px;
    margin-bottom: 28px;
  }

  .stories__title {
    margin: 0 0 46px;
  }
  .stories__failing-title {
    margin: 64px 0 40px;
  }
}

@media screen and (max-width: 768px) {
  .stories__list {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 40px;
    margin-bottom: 40px;
  }

  .stories__title {
    text-align: center;
    margin: 0 auto 60px;
  }
  .stories__failing-title {
    margin: 50px 0 40px;
  }
}

@media screen and (max-width: 475px) {
  .stories__list {
    grid-template-columns: 1fr;
    row-gap: 30px;
  }

  .stories__title {
    margin: 0 0 40px;
    text-align: left;
  }
  .stories__failing-title {
    font-size: 24px;
    line-height: 29px;
    margin: 30px 0 15px;
  }
  .stories__failing-text {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
