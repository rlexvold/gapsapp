/*eslint no-unused-vars: 0*/
import React from 'react'
import {Route} from 'react-router'
import App from './components/App'
import Home from './components/Home'
import FoodList from './components/FoodList'
import Food from './components/Food'
import AddFood from './components/AddFood'

export default(
    <Route component={App}>
        <Route path='/' component={Home}/>
        <Route path='/food/phase' component={FoodList}/>
        <Route path='/add' component={AddFood}/>
        <Route path='/food' component={Food}/>
    </Route>
)
