import React, { Component } from 'react'
import Item from './Item'

export default class ItemAll extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>

            </div>

        )
    }
}
