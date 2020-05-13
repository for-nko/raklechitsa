<template>
  <section class="stories">
    <section-title class="stories__title"
      >Истории неизлечимых привычек</section-title
    >
    <slot></slot>
    <ul class="stories__list">
      <li
        class="stories__item"
        v-for="story in stories"
        :key="story.id"
        @storyClick="goToStory(story.id)"
      >
        <story-item
          :author="story.author"
          :text="story.text"
          :photoUrl="story.photoUrl"
          :link="`/stories/${story.id}`"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import StoryItem from '@/components/StoryItem';

export default {
  components: {
    'section-title': SectionTitle,
    'story-item': StoryItem,
  },

  methods: {
    goToStory(id) {
      this.$router.push(`/stories/${id}`);
    },
  },

  computed: {
    stories() {
      return this.$store.getters['stories/getStories'];
    },
  },
};
</script>

<style scoped>
.stories {
  margin: 0 auto;
}

.stories__title {
  margin: 0 0 70px;
}

.stories__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  row-gap: 70px;
  padding: 0;
  list-style: none;
  justify-content: center;
  margin: 0 0 70px;
}

@media screen and (max-width: 1280px) {
  .stories__list {
    row-gap: 60px;
    margin-bottom: 60px;
  }

  .stories__title {
    margin: 0 0 60px;
  }
}

@media screen and (max-width: 1024px) {
  .stories__list {
    column-gap: 30px;
    row-gap: 46px;
    margin-bottom: 46px;
  }

  .stories__title {
    margin: 0 0 46px;
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
}

@media screen and (max-width: 475px) {
  .stories__list {
    grid-template-columns: 1fr;
    row-gap: 30px;
  }

  .stories__title {
    margin: 50px 0 40px;
    text-align: left;
  }
}
</style>