/*global $ */
import alt from '../alt'

class AddFoodActions {
    constructor() {
        this.generateActions('addFoodSuccess', 'addFoodFail', 'updateName', 'updateCategory', 'updatePhase', 'invalidName', 'invalidCategory', 'invalidPhase')
    }

    addFood(name, category, phase) {
        $.ajax({
            type: 'POST',
            url: '/api/food',
            data: {
                name: name,
                category: category,
                phase: phase
            }
        }).done((data) => {
            this.actions.addFoodSuccess(data.message)
        }).fail((jqXhr) => {
            this.actions.addFoodFail(jqXhr.responseJSON.message)
        })
    }
}

export default alt.createActions(AddFoodActions)
