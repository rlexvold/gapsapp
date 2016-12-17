/*global toastr */
import alt from '../alt'
import NavbarActions from '../actions/NavbarActions'

class NavbarStore {
    constructor() {
        this.bindActions(NavbarActions)
        this.totalFoods = 0
        this.onlineUsers = 0
        this.searchQuery = ''
        this.ajaxAnimationClass = ''
    }

    onFindFoodSuccess(payload) {
        payload.history.pushState(null, '/foods/' + payload.foodId)
    }

    onFindFoodFail(payload) {
        payload.searchForm.classList.add('shake')
        setTimeout(() => {
            payload.searchForm.classList.remove('shake')
        }, 1000)
    }

    onUpdateOnlineUsers(data) {
        this.onlineUsers = data.onlineUsers
    }

    onUpdateAjaxAnimation(className) {
        this.ajaxAnimationClass = className //fadein or fadeout
    }

    onUpdateSearchQuery(event) {
        this.searchQuery = event.target.value
    }

    onGetFoodCountSuccess(data) {
        this.totalFoods = data.count
    }

    onGetFoodCountFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message)
    }
}

export default alt.createStore(NavbarStore)
