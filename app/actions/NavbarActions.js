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
            url: '/api/food/query={"name":' + payload.searchQuery + '}',
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
            url: '/api/foodcount'
        }).done((data) => {
            this.actions.getFoodCountSuccess(data)
        }).fail((jqXhr) => {
            this.actions.getFoodCountFail(jqXhr)
        })
    }
}

export default alt.createActions(NavbarActions)