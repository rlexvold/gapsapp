/*global $ */
import alt from '../alt'

class FoodListActions {
    constructor() {
        this.generateActions('getFoodsSuccess', 'getFoodsFail')
    }

    getFoods(payload) {
        console.log('getFoods: ' + payload)
        let url = '/api/phase'
        let params = {
            phase: 7
        }

        if (payload.phase) {
            params.phase = payload.phase
        }
        if (payload.category) {
            params.category = payload.category
        }

        console.log("Calling url, params", url, params)
        $.ajax({url: url, data: params}).done((data) => {
            console.log('Success getting foods: ', data)
            this.actions.getFoodsSuccess(data)
        }).fail((jqXhr) => {
            this.actions.getFoodsFail(jqXhr)
        })
    }
}

export default alt.createActions(FoodListActions)
