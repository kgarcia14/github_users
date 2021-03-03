import React, { Component } from 'react';
import UserCardList from './UserCardList';
import { Field, Label, Input, Button } from 'bloomer';


class SearchForm extends Component {
    constructor(props) {
        super (props); 
        this.state = {
            username: '',
            usersArray: [],
        }
    }

    _onChange = (field, value) => {
        this.setState({
            [field]: value
        });
    };

    _handleSubmit = async (event) => {
        event.preventDefault();
        const url = `https://api.github.com/users/${this.state.username}`;
        const newUserData = await fetch(url)
            .then(response => response.json());
        this.setState({
            usersArray: [...this.state.usersArray, newUserData],
        });
    };

    render() {
        const { usersArray } =this.state;
        
        return (
            <>
                <form onSubmit={this._handleSubmit}>
                <Field isGrouped style={{justifyContent: "center", marginTop: 20}}>
                    <Label>
                        <Input 
                            name="username"
                            placeholder="Enter Username"
                            type="text" 
                            value={this.state.username}
                            onChange={(event) => {
                                this._onChange(event.target.name, event.target.value)
                            }}  
                        />
                    </Label>
                    <Button 
                    style={{margin: '0 20px'}}
                    className="center-button" type="submit" isColor='primary'>Submit</Button>
                    </Field>
                </form>

                {usersArray.length ? <UserCardList usersArray={usersArray} /> : <p>*No users to display*</p>}
            </>
        );
    }

}

export default SearchForm;