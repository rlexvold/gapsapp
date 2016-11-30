/*global $ */
import React from 'react'
import FoodStore from '../stores/FoodStore'
import FoodActions from '../actions/FoodActions'

class Food extends React.Component {
    constructor(props) {
        super(props)
        this.state = FoodStore.getState()
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        FoodStore.listen(this.onChange)
        FoodActions.getFood(this.props.params._id)

        $('.magnific-popup').magnificPopup({
            type: 'image',
            mainClass: 'mfp-zoom-in',
            closeOnContentClick: true,
            midClick: true,
            zoom: {
                enabled: true,
                duration: 300
            }
        })
    }

    componentWillUnmount() {
        FoodStore.unlisten(this.onChange)
        $(document.body).removeClass()
    }

    componentDidUpdate(prevProps) {
        // Fetch new charachter data when URL path changes
        if (prevProps.params.id !== this.props.params._id) {
            FoodActions.getFood(this.props.params._id)
        }
    }

    onChange(state) {
        this.setState(state)
    }

    render() {
        return (
            <div className='container'>
                <div className='profile-img'>
                    <a className='magnific-popup' href='https://upload.wikimedia.org/wikipedia/commons/c/c9/-Insert_image_here-.svg'><img src='https://upload.wikimedia.org/wikipedia/commons/c/c9/-Insert_image_here-.svg'/></a>
                </div>
                <div className='media-body'>
                    <small>
                        Name:
                        <strong>{this.state.name}</strong>
                    </small><br/>
                    <small>
                        Category:
                        <strong>{this.state.category}</strong>
                    </small><br/>
                    <small>Phase:
                        <strong>
                            {this.state.phase}</strong>
                    </small><br/>
                </div>
            </div>
        )
    }
}

export default Food
