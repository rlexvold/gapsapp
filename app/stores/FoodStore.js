/*global $, toastr */
/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0 */
import {assign, contains} from 'underscore'
import alt from '../alt'
import FoodActions from '../actions/FoodActions'

class FoodStore {
    constructor() {
        this.bindActions(FoodActions)
        this._id = 0
        this.name = ''
        this.category = 0
        this.phase = ''
    }

    onGetFoodSuccess(data) {
        assign(this, data)
        let localData = localStorage.getItem('foods')
            ? JSON.parse(localStorage.getItem('foods'))
            : {}
        let reports = localData.reports || []
    }

    onGetFoodFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message)
    }

}

export default alt.createStore(FoodStore)
