import alt from '../alt'
import AddFoodActions from '../actions/AddFoodActions'

class AddFoodStore {
    constructor() {
        this.bindActions(AddFoodActions)
        this.name = ''
        this.category = ''
        this.phase = 0
        this.helpBlock = ''
        this.nameValidationState = ''
        this.categoryValidationState = ''
        this.phaseValidationState = ''
    }

    onAddFoodSuccess(successMessage) {
        this.nameValidationState = 'has-success'
        this.helpBlock = successMessage
    }

    onAddFoodFail(errorMessage) {
        this.nameValidationState = 'has-error'
        this.helpBlock = errorMessage
    }

    onUpdateName(event) {
        this.name = event.target.value
        this.nameValidationState = ''
        this.helpBlock = ''
    }

    onUpdateCategory(event) {
        this.category = event.target.value
        this.categoryValidationState = ''
    }

    onUpdatePhase(event) {
        this.phase = event.target.value
        this.phaseValidationState = ''
    }

    onInvalidName() {
        this.nameValidationState = 'has-error'
        this.helpBlock = 'Please enter a Food name.'
    }

    onInvalidCategory() {
        this.categoryValidationState = 'has-error'
    }
}

export default alt.createStore(AddFoodStore)
