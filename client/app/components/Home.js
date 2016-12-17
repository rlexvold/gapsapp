/*eslint no-unused-vars: 0 */
/*eslint no-undef: 0 */
import React from 'react'
import {Link} from 'react-router'
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions'
import {first, without, findWhere} from 'underscore'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = HomeStore.getState()
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        HomeStore.listen(this.onChange)
    }

    componentWillUnmount() {
        HomeStore.unlisten(this.onChange)
    }

    onChange(state) {
        this.setState(state)
    }

    handleClick(character) {}

    render() {
        return (
            <div className='thumbnail fadeInUp animated'>
                <p>This is home</p>
            </div>
        )
    }
}

export default Home
