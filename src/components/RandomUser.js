import React, { Component } from 'react';
import './RandomeUser.css';


class RandomUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            data: null
        }

        this.getData = this.getData.bind(this);
    }

    render() {
        return (
            <div className='container'>
                <div className='profile-box'>
                    <img src={require("./images/menu.png")} className='menu-icon' alt="" />
                    <img src={require('./images/setting.png')} className='setting-icon' alt="" />
                    {
                        this.state.flag ?
                            <div>
                            <img src={this.state.url} className='profile-pic' alt="" /> 
                            <h3>{this.state.data}</h3> 
                            <p>{"Location:" + " "+this.state.location}</p>
                            <p>{"Age:" + " "+this.state.Age}</p>
                            <p>{"Phone:" + " "+this.state.phone}</p>
                            </div>:
                            <img src={require('./images/Spinner.gif')} className='profile-pic' alt="" />

                    }
                   
                    <div class='social-media'>
                        <img src={require('./images/instagram.png')} className='instagram-icon' alt="" />
                        <img src={require('./images/telegram.png')} className='telegram-icon' alt="" />
                        <img src={require('./images/dribble.png')} className='dribble-icon' alt="" />
                    </div>
                    <button type='button' onClick={this.getData}>Follow</button>
                    <button type='button' onClick={this.getData}>Pass</button>
                    <div className='profile-bottom'>
                        <p>Learn More About My Profile</p>
                        <img src={require('./images/arrow.png')} alt='arrow' />
                    </div>
                </div>

            </div>


        );
    }

    async getData() {
        let url = 'https://randomuser.me/api/';
        let response = await fetch(url);
        let userData = await response.json();
        this.setState({ flag: true, data: userData.results[0].name.first + " " + userData.results[0].name.last,
         url: userData.results[0].picture.large,
        location:userData.results[0].location.state+" ,"+userData.results[0].location.country,
        Age:userData.results[0].dob.age,
        phone:userData.results[0].phone
    });

    }

}

export default RandomUser;