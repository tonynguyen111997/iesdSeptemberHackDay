import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import ProfilePage from '../../components/pages/ProfilePage/ProfilePage';
class Profile extends Component {
  state = {
    login: 'dhuan008',
    name: 'David Huang',
    avatar_url: 'https://avatars0.githubusercontent.com/u/33335681?v=4',
    email: 'daveshuang@gmail.com',
    location: null,
    bio: 'Smashing the stack for fun and profit'
  };
  
  render() {
    console.log('sate', this.state)
    return <ProfilePage info={this.state} />;
  }
}
export default Profile;