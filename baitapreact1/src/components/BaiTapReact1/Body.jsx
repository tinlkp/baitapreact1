import React, { Component } from 'react'
import Banner from './Banner'
import ItemAll from './ItemAll'


export default class Body extends Component {
    render() {
        return (
            <div>
                <Banner />
                <ItemAll />
            </div>


        )
    }
}
