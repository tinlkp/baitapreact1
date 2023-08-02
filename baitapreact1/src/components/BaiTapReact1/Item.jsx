import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div className='col-lg-3 mb-5'>
                <div className="card pt-0 pt-lg-0 ">
                    <div className='card-header'>
                        <img className="card-img-top " src="img_avatar1.png" alt="500 x 325" /></div>

                    <div className="card-body">
                        <h4 className="card-title">Card Title</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores, ipsum quos odit nisi odio.</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>

        )
    }
}
