/*global $ */
import alt from '../alt'
import {
    assign
} from 'underscore'

class NavbarActions {
    constructor() {
        this.generateActions('updateOnlineUsers', 'updateAjaxAnimation', 'updateSearchQuery', 'getFoodCountSuccess', 'getFoodCountFail', 'findFoodSuccess', 'findFoodFail')
    }

    findFood(payload) {
        $.ajax({
            url: '/api/foods/search',
            data: {
                name: payload.searchQuery
            }
        }).done((data) => {
            assign(payload, data)
            this.actions.findFoodSuccess(payload)
        }).fail(() => {
            this.actions.findFoodFail(payload)
        })
    }

    getFoodCount() {
        $.ajax({
            url: '/api/foodlist/count'
        }).done((data) => {
            this.actions.getFoodCountSuccess(data)
        }).fail((jqXhr) => {
            this.actions.getFoodCountFail(jqXhr)
        })
    }
}

export default alt.createActions(NavbarActions)