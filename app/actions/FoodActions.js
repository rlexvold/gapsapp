/*global $ */
import alt from '../alt'

class FoodActions {
    constructor() {
        this.generateActions('getFoodSuccess', 'getFoodFail')
    }

    getFood(FoodId) {
        $.ajax({
            url: '/api/food?query?id=' + FoodId
        }).done((data) => {
            this.actions.getFoodSuccess(data)
        }).fail((jqXhr) => {
            this.actions.getFoodFail(jqXhr)
        })
    }
}

export default alt.createActions(FoodActions)
