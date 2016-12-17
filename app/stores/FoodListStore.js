/* global toastr */
import alt from '../alt'
import FoodListActions from '../actions/FoodListActions'
let log = '../../utils/logger'

class FoodListStore {
    constructor() {
        this.bindActions(FoodListActions)
        this.foods = []
    }

    getFoodsSuccess(data) {
        log.debug('onGetCharacterSuccess data:', data)
        this.foods = data
    }

    getFoodsFail(jqXhr) {
        log.debug('onGetCharactersFails')
        toastr.error(jqXhr.responseJSON.message)
    }
}

export default alt.createStore(FoodListStore)