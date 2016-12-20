import alt from '../alt'
import toastr from 'toastr'
import FoodListActions from '../actions/FoodListActions'

class FoodListStore {
    constructor() {
        this.bindActions(FoodListActions)
        this.foods = []
    }

    getFoodsSuccess(data) {
        this.foods = data
    }

    getFoodsFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message)
    }
}

export default alt.createStore(FoodListStore)