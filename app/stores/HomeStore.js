import alt from '../alt'
import toastr from 'toastr'
import HomeActions from '../actions/HomeActions'

class HomeStore {
    constructor() {
        this.bindActions(HomeActions)
        this.foods = []
    }

    onGetTwoCharactersSuccess(data) {
        this.foods = data
    }

    onGetTwoCharactersFail(errorMessage) {
        toastr.error(errorMessage)
    }

    onVoteFail(errorMessage) {
        toastr.error(errorMessage)
    }
}

export default alt.createStore(HomeStore)