<template>
<form>
    <input type="text" class="col-5" id="search">
    <button type="submit"><i class="mdi mdi-magnify"></i></button>
</form>
</template>

<script>
import { ref } from 'vue';
import { logger } from '../utils/Logger.js';
import { giftsService } from '../services/GiftsService.js';

export default {
    setup() {

        return {
            
        }
    }
}
</script>

<style>

</style>