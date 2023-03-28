<template>
    <div>
        <img :src="giftProp?.url" :alt="giftProp?.tag" class="img-fluid elevation-5 rounded gift-card">
    </div>
</template>

<script>
import { Gift } from '../models/Gift.js';

export default {
    props: {
        giftProp: {type: Gift, required: true}
    },
    setup() {
        return {};
    }
}
</script>

<style>

</style>