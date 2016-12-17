/*global $ */
import alt from '../alt'
let log = '../../utils/logger'

class FoodListActions {
    constructor() {
        this.generateActions('getFoodsSuccess', 'getFoodsFail')
    }

    getFoods(payload) {
        log.debug('getFoods: ' + payload)
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

        log.debug('Calling url, params', url, params)
        $.ajax({url: url, data: params}).done((data) => {
            log.debug('Success getting foods: ', data)
            this.actions.getFoodsSuccess(data)
        }).fail((jqXhr) => {
            this.actions.getFoodsFail(jqXhr)
        })
    }
}

export default alt.createActions(FoodListActions)
