/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0 */
import React from 'react'
import {Link} from 'react-router'
import {isEqual} from 'underscore'
import FoodListStore from '../stores/FoodListStore'
import FoodListActions from '../actions/FoodListActions'
let log = '../../utils/logger'

class FoodList extends React.Component {
    constructor(props) {
        super(props)
        this.state = FoodListStore.getState()
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        FoodListActions.getFoods(this.props.params)
        FoodListStore.listen(this.onChange)
        log.debug('componentDidMount', this.props.params)
    }

    componentWillUnmount() {
        FoodListStore.unlisten(this.onChange)
    }

    componentDidUpdate(prevProps) {
        log.debug('componentDidUpdate', this.props.params)
        if (!isEqual(prevProps.params, this.props.params)) {
            FoodListActions.getFoods(this.props.params)
        }
    }

    onChange(state) {
        this.setState(state)
    }

    render() {
        log.debug('Found: ' + this.state.foods.length + ' foods')
        let foodList = this.state.foods.map((food, index) => {
            log.debug('Got a foodlist')
            return (
                <div key={food._id} className='list-group-item animated fadeIn'>
                    <div className='media'>
                        <span className='position pull-left'>
                            {index + 1}
                        </span>
                        <div className='pull-left thumb-lg'>
                            <Link to={'/food?_id=' + food._id}>
                                <img className='media-object' src='https://upload.wikimedia.org/wikipedia/commons/c/c9/-Insert_image_here-.svg'/>
                            </Link>
                        </div>
                        <div className='media-body'>
                            <small>
                                Name:
                                <strong>{food.name}</strong>
                            </small><br/>
                            <small>
                                Category:
                                <strong>{food.category}</strong>
                            </small><br/>
                            <small>Phase:
                                <strong>
                                    {food.phase}</strong>
                            </small><br/>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className='container'>
                <div className='list-group'>{foodList}</div>
            </div>
        )
    }
}

export default FoodList
