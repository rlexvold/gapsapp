/* global toastr */
let logger = require.main.require('./utils/logger')
import alt from '../alt'
import FoodListActions from '../actions/FoodListActions'

class FoodListStore {
    constructor() {
        this.bindActions(FoodListActions)
        this.foods = []
    }

    getFoodsSuccess(data) {
        logger.debug('onGetCharacterSuccess data:', data)
        this.foods = data
    }

    getFoodsFail(jqXhr) {
        logger.debug('onGetCharactersFails')
        toastr.error(jqXhr.responseJSON.message)
    }
}

export default alt.createStore(FoodListStore)