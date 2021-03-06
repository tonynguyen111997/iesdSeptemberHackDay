import React, { Component } from "react";
import { Button } from 'reactstrap';
import ProfilePage from '../../components/pages/ProfilePage/ProfilePage';

export default class Dashboard extends Component {
  state = {
    login: 'dhuan008',
    name: 'David Huang',
    avatar_url: 'https://avatars0.githubusercontent.com/u/33335681?v=4',
    email: 'daveshuang@gmail.com',
    location: null,
    bio: 'Smashing the stack for fun and profit'
  }
  render() {
    return (
      <div className="text-center">
        <ProfilePage {...this.state} />
      </div>
    );
  }
}
