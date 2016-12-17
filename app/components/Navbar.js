/*global $, io */
/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0 */
import React from 'react'
import {Link} from 'react-router'
import NavbarStore from '../stores/NavbarStore'
import NavbarActions from '../actions/NavbarActions'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = NavbarStore.getState()
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        NavbarStore.listen(this.onChange)
        NavbarActions.getFoodCount()

        let socket = io.connect()

        socket.on('onlineUsers', (data) => {
            NavbarActions.updateOnlineUsers(data)
        })

        $(document).ajaxStart(() => {
            NavbarActions.updateAjaxAnimation('fadeIn')
        })

        $(document).ajaxComplete(() => {
            setTimeout(() => {
                NavbarActions.updateAjaxAnimation('fadeOut')
            }, 750)
        })
    }

    componentWillUnmount() {
        NavbarStore.unlisten(this.onChange)
    }

    onChange(state) {
        this.setState(state)
    }

    handleSubmit(event) {
        event.preventDefault()

        let searchQuery = this.state.searchQuery.trim()

        if (searchQuery) {
            NavbarActions.findFood({searchQuery: searchQuery, searchForm: this.refs.searchForm, history: this.props.history})
        }
    }

    render() {
        return (
            <nav className='navbar navbar-default navbar-static-top'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link to='/' className='navbar-brand'>
                        <span ref='triangles' className={'triangles animated ' + this.state.ajaxAnimationClass}>
                            <div className='tri invert'></div>
                            <div className='tri invert'></div>
                            <div className='tri'></div>
                            <div className='tri invert'></div>
                            <div className='tri invert'></div>
                            <div className='tri'></div>
                            <div className='tri invert'></div>
                            <div className='tri'></div>
                            <div className='tri invert'></div>
                        </span>
                        LifeTech
                        <span className='badge badge-up badge-danger'>{this.state.onlineUsers}</span>
                    </Link>
                </div>
                <div id='navbar' className='navbar-collapse collapse'>
                    <form ref='searchForm' className='navbar-form navbar-left animated' onSubmit={this.handleSubmit.bind(this)}>
                        <div className='input-group'>
                            <input type='text' className='form-control' placeholder={this.state.totalFoods + ' Foods'} value={this.state.searchQuery} onChange={NavbarActions.updateSearchQuery}/>
                            <span className='input-group-btn'>
                                <button className='btn btn-default' onClick={this.handleSubmit.bind(this)}>
                                    <span className='glyphicon glyphicon-search'></span>
                                </button>
                            </span>
                        </div>
                    </form>
                    <ul className='nav navbar-nav'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='dropdown'>
                            <a href='#' className='dropdown-toggle' data-toggle='dropdown'>Phase
                                <span className='caret'></span>
                            </a>
                            <ul className='dropdown-menu'>
                                <li>
                                    <Link to='/phase/1'>GAPS Phase 1</Link>
                                </li>
                                <li>
                                    <Link to='/phase/2'>GAPS Phase 2</Link>
                                </li>
                                <li>
                                    <Link to='/phase/3'>GAPS Phase 3</Link>
                                </li>
                                <li>
                                    <Link to='/phase/4'>GAPS Phase 4</Link>
                                </li>
                                <li>
                                    <Link to='/phase/5'>GAPS Phase 5</Link>
                                </li>
                                <li>
                                    <Link to='/phase/6'>GAPS Phase 6</Link>
                                </li>
                                <li>
                                    <Link to='/phase/7'>GAPS Phase 7</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to='/add'>Add</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar