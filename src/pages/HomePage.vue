<template>
  <div class="container-fluid">
    <div class="row">

        <div class="col-5 p-3">
          <SearchBar/>
        </div>
      
        <div v-for="giftFromVFor in gifts" class="col-3 m-2 p-3 card border border-primary-subtle ">
          <GiftCard :giftProp="giftFromVFor"/>
        </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { giftsService } from '../services/GiftsService.js';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js';
import GiftCard from '../components/GiftCard.vue';
import SearchBar from '../components/SearchBar.vue';

export default {
    setup() {
      onMounted(() => {
          getGifts()
        })
      async function getGifts() {
        try {
          await giftsService.getGifts()
        } catch (error) {
          logger.log(error.message)
        }
        
      }
        return {
          gifts: computed(() => AppState.gifts),
        };
    },
    components: { SearchBar, GiftCard }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}

.gift-card{
  cursor: pointer;
}

.gift-card:hover{
  transform: scale(0.50);
}
</style>
