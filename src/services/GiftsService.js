import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { logger } from "../utils/Logger.js";
import { giftApi } from "./AxiosService.js";

class GiftsService {

    async getGifts() {
        const res = await giftApi.get('api/gifts')
        logger.log('[GIFTS]', res.data)
        AppState.gifts = res.data.map(g => new Gift(g))
    }

    async getGiftById(giftId) {
        const res = await giftApi.get(`api/gifts/${giftId}`)
        logger.log('[GET BY ID]', res.data)
        AppState.activeGift = new Gift(res.data)
    }
}

export const giftsService = new GiftsService()