import React from 'react'
import AddFoodStore from '../stores/AddFoodStore'
import AddFoodActions from '../actions/AddFoodActions'

class AddFood extends React.Component {
    constructor(props) {
        super(props)
        this.state = AddFoodStore.getState()
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        AddFoodStore.listen(this.onChange)
    }

    componentWillUnmount() {
        AddFoodStore.unlisten(this.onChange)
    }

    onChange(state) {
        this.setState(state)
    }

    handleSubmit(event) {
        event.preventDefault()

        var name = this.state.name.trim()
        var category = this.state.category
        var phase = this.state.phase

        if (!name) {
            AddFoodActions.invalidName()
            this.refs.nameTextField.focus()
        }

        if (!category) {
            AddFoodActions.invalidCategory()
        }

        if (!phase) {
            AddFoodActions.invalidPhase()
        }

        if (name && category && phase) {
            AddFoodActions.addFood(name, category, phase)
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row flipInX animated'>
                    <div className='col-sm-8'>
                        <div className='panel panel-default'>
                            <div className='panel-heading'>Add Food</div>
                            <div className='panel-body'>
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <div className={'form-group ' + this.state.nameValidationState}>
                                        <label className='control-label'>Food Name</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.name} onChange={AddFoodActions.updateName} autoFocus/>
                                        <span className='help-block'>{this.state.helpBlock}</span>
                                    </div>
                                    <div className={'form-group ' + this.state.categoryValidationState}>
                                        <label className='control-label'>Category</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.category} onChange={AddFoodActions.updateCategory} autoFocus/>
                                        <span className='help-block'>{this.state.helpBlock}</span>
                                    </div>
                                    <div className={'form-group ' + this.state.phaseValidationState}>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='phase' id='1' value='1' checked={this.state.phase === '1'} onChange={AddFoodActions.updatePhase}/>
                                            <label htmlFor='1'>GAPS Phase 1</label>
                                        </div>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='phase' id='2' value='2' checked={this.state.phase === '2'} onChange={AddFoodActions.updatePhase}/>
                                            <label htmlFor='2'>GAPS Phase 2</label>
                                        </div>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='phase' id='3' value='3' checked={this.state.phase === '3'} onChange={AddFoodActions.updatePhase}/>
                                            <label htmlFor='3'>GAPS Phase 3</label>
                                        </div>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='phase' id='4' value='4' checked={this.state.phase === '4'} onChange={AddFoodActions.updatePhase}/>
                                            <label htmlFor='4'>GAPS Phase 4</label>
                                        </div>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='phase' id='5' value='5' checked={this.state.phase === '5'} onChange={AddFoodActions.updatePhase}/>
                                            <label htmlFor='5'>GAPS Phase 5</label>
                                        </div>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='phase' id='6' value='6' checked={this.state.phase === '6'} onChange={AddFoodActions.updatePhase}/>
                                            <label htmlFor='6'>GAPS Phase 6</label>
                                        </div>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='phase' id='7' value='7' checked={this.state.phase === '7'} onChange={AddFoodActions.updatePhase}/>
                                            <label htmlFor='7'>GAPS Phase 7</label>
                                        </div>
                                    </div>
                                    <button type='submit' className='btn btn-primary'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddFood
