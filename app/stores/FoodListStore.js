/* global toastr */
import alt from '../alt'
import FoodListActions from '../actions/FoodListActions'

class FoodListStore {
    constructor() {
        this.bindActions(FoodListActions)
        this.foods = []
    }

    getFoodsSuccess(data) {
        console.log('onGetCharacterSuccess data:', data)
        this.foods = data
    }

    getFoodsFail(jqXhr) {
        console.log('onGetCharactersFails')
        toastr.error(jqXhr.responseJSON.message)
    }
}

export default alt.createStore(FoodListStore)
