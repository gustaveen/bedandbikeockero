import React from 'react'
import classNames from 'classnames';
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl';

import room1Img from '../../assets/images/rum-1.jpg'
import room2Img from '../../assets/images/rum-2.jpg'
import room3Img from '../../assets/images/rum-3.jpg'
import room4Img from '../../assets/images/rum-4.jpg'


class Rooms extends React.PureComponent {
    state = {
        index: 1
    }

    clickHandler = (e) => {
        e.preventDefault();
        
    }

    getInitialValues = () => {

        const defaultValues = [
            {
                name: 'room1',
                people: '2-3',
                bed: '2 x 90 cm',
                price: '950 kr',
                img: room1Img,
            },
            {
                name: 'room2',
                people: '2',
                bed: '2 x 90 cm',
                price: '950 kr',
                img: room2Img,
            },
            {
                name: 'room3',
                people: '2',
                bed: '2 x 90 cm',
                price: '950 kr',
                img: room3Img,
            },
            {
                name: 'room4',
                people: '1',
                bed: '1 x 120 cm',
                price: '500 kr',
                img: room4Img,
            }
        ];

        return defaultValues;
    }

    render() {
        const rooms = this.getInitialValues();
        const rum = 'room1';
        
        return (
            <section className="Rooms">
                <div className="Rooms__Container">
                    <div className="Rooms__Header">
                        <h2 className="Rooms__Title">
                            <FormattedMessage id="room" />
                        </h2>
                    </div>
                    <div className="Rooms__Menu">
                        <a href="" className="Rooms__Link Rooms__Link--Active"><FormattedMessage id={`${rum}.title`} /></a>
                        <a href="" className="Rooms__Link"><FormattedMessage id="room2.title" /></a>
                        <a href="" className="Rooms__Link"><FormattedMessage id="room3.title" /></a>
                        <a href="" className="Rooms__Link"><FormattedMessage id="room4.title" /></a>
                    </div>
                    <div className="Rooms__Content">
                        {rooms.map((room, index) =>
                            <Room
                                key={index}
                                room={room}
                                index={index}
                                active={this.state} 
                            />
                        )}
                    </div>
                </div>
            </section>
        );
    }
}

const Room = ({room, index, active}) => {

    const classes = (
        'Rooms__Item',
        {'Rooms__Item--Active': index === active}
    );
    // console.log(index);

    // const classes = (
    //     'Rooms__Item'
    // );

    return (
        <div className={classes}>
            <div className="Rooms__Info">
                <div className="Rooms__InfoHeader">
                    <p className="Rooms__ItemTitle"><FormattedMessage id={`${room.name}.title`} /></p>
                    <span className="Rooms__Meta Rooms__Meta--Pers">{room.people} <FormattedMessage id="guests" /></span>
                    <span className="Rooms__Meta Rooms__Meta--Beds">{room.bed}</span>
                    <p className="Rooms__Text"><FormattedMessage id={`${room.name}.text`} /></p>
                </div>
                <div className="Rooms__Action">
                    <div className="Rooms__Price">
                        <p className="Rooms__Text">Pris</p>
                        <p className="Rooms__PriceText">{room.price}</p>
                    </div>
                    <a href="" className="Rooms__Button">Boka</a>
                </div>
            </div>
            <div className="Rooms__Image">
                <img src={room.img} alt=""/>
            </div>
        </div>
    );
};


export default Rooms;

