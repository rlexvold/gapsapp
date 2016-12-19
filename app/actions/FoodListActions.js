/*global $ */
import alt from '../alt'

class FoodListActions {
    constructor() {
        this.generateActions('getFoodsSuccess', 'getFoodsFail')
    }

    getFoods(payload) {
        let queryString = '{"phase":{"$lte":' + payload.phase + '}}'
        let url = '/api/food/query=' + queryString


        $.ajax({
            url: url
        }).done((data) => {
            this.actions.getFoodsSuccess(data)
        }).fail((jqXhr) => {
            this.actions.getFoodsFail(jqXhr)
        })
    }
}

export default alt.createActions(FoodListActions)