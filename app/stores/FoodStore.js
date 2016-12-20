/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0 */
import alt from '../alt'
import toastr from 'toastr'
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
        let localData = localStorage.getItem('food') ?
            JSON.parse(localStorage.getItem('food')) :
            {}
        let reports = localData.reports || []
    }

    onGetFoodFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message)
    }

}

export default alt.createStore(FoodStore)