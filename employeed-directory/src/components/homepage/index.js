import React, { Component } from "react";
import { Segment, Card, Grid, Image, CardHeader, Button, Input, Icon } from 'semantic-ui-react'
import SortSelection from "../sortby";
import FilterMethod from "../sortmethod";
const axios = require("axios");

let randomusers = [];


class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [{
                "gender": "male",
                "name": {
                    "title": "Mr",
                    "first": "Bradley",
                    "last": "Sanders"
                },
                "location": {
                    "street": {
                        "number": 3680,
                        "name": "Spring Hill Rd"
                    },
                    "city": "Bozeman",
                    "state": "North Carolina",
                    "country": "United States",
                    "postcode": 91894,
                    "coordinates": {
                        "latitude": "66.0687",
                        "longitude": "-96.2642"
                    },
                    "timezone": {
                        "offset": "-8:00",
                        "description": "Pacific Time (US & Canada)"
                    }
                },
                "email": "bradley.sanders@example.com",
                "login": {
                    "uuid": "1c25c1ae-6e22-4b1d-b031-26ef5286de1f",
                    "username": "bluebutterfly262",
                    "password": "123321",
                    "salt": "B6jiRf2T",
                    "md5": "8ccb29372d297f07453a0e95ed479594",
                    "sha1": "0ab36b62c0ddd3057c18bde15eb1689053f41a5e",
                    "sha256": "0ab6bd8f730d23dfe5cc68e071dd22d21553466c5f27a25fe0b46c000b012bfd"
                },
                "dob": {
                    "date": "1966-11-08T18:05:18.700Z",
                    "age": 54
                },
                "registered": {
                    "date": "2018-02-08T23:11:24.614Z",
                    "age": 2
                },
                "phone": "(315)-388-0998",
                "cell": "(145)-198-7734",
                "id": {
                    "name": "SSN",
                    "value": "642-59-3819"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/97.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/97.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/97.jpg"
                },
                "nat": "US"
            }],
            activeItem: '(choose method)',
            activeMethod: '(choose method)',
            activeInput: '(input search)'
        };
    }

    handleItemClick = (e, { name }) => {
        let newArr = [];
        if (name === 'first name')
            newArr = this.state.users.sort((a, b) => {
                if (a.name.first > b.name.first) {
                    return 1;
                } else {
                    return -1;
                }
            })
        if (name === 'last name')
            newArr = this.state.users.sort((a, b) => {
                if (a.name.last > b.name.last) {
                    return 1;
                } else {
                    return -1;
                }
            })
        if (name === 'username')
            newArr = this.state.users.sort((a, b) => {
                if (a.login.username > b.login.username) {
                    return 1;
                } else {
                    return -1;
                }
            })
        if (name === 'join date')
            newArr = this.state.users.sort((a, b) => {
                if (a.registered.date > b.registered.date) {
                    return 1;
                } else {
                    return -1;
                }
            })
        if (name === 'age')
            newArr = this.state.users.sort((a, b) => {
                if (a.dob.date > b.dob.date) {
                    return 1;
                } else {
                    return -1;
                }
            })
        if (name === 'gender')
            newArr = this.state.users.sort((a, b) => {
                if (a.gender > b.gender) {
                    return 1;
                } else {
                    return -1;
                }
            })
        if (name === 'city')
            newArr = this.state.users.sort((a, b) => {
                if (a.location.city > b.location.city) {
                    return 1;
                } else {
                    return -1;
                }
            })
        if (name === 'state')
            newArr = this.state.users.sort((a, b) => {
                if (a.location.state > b.location.state) {
                    return 1;
                } else {
                    return -1;
                }
            })
        if (name === 'country')
            newArr = this.state.users.sort((a, b) => {
                if (a.location.country > b.location.country) {
                    return 1;
                } else {
                    return -1;
                }
            })
        this.setState({ users: newArr });
    }

    handleFilter = (e, { name }) => {
        let newArr = [];
        if (name === 'first name')
            newArr = this.state.users.filter((user) => {

                var string = user.name.first.toString();
                var string2 = this.state.activeInput.toString();
                var regex = new RegExp(string2, 'g');
                var res = string.match(regex);


                if (res) {
                    return true;
                } else {
                    return false;
                }
            })
        if (name === 'last name')
            newArr = this.state.users.filter((user) => {

                var string = user.name.last.toString();
                var string2 = this.state.activeInput.toString();
                var regex = new RegExp(string2, 'g');
                var res = string.match(regex);


                if (res) {
                    return true;
                } else {
                    return false;
                }
            })
        if (name === 'username')
            newArr = this.state.users.filter((user) => {

                var string = user.login.username.toString();
                var string2 = this.state.activeInput.toString();
                var regex = new RegExp(string2, 'g');
                var res = string.match(regex);


                if (res) {
                    return true;
                } else {
                    return false;
                }
            })
        if (name === 'join date')

            newArr = this.state.users.filter((user) => {

                if (user.registered.date.slice(0, 10).toString() === this.state.activeInput.toString()) {
                    return true;
                } else {
                    return false;
                }
            })
        if (name === 'join date before')

            newArr = this.state.users.filter((user) => {

                if (user.registered.date.slice(0, 10).toString() < this.state.activeInput.toString()) {
                    return true;
                } else {
                    return false;
                }
            })
        if (name === 'join date after')

            newArr = this.state.users.filter((user) => {

                if (user.registered.date.slice(0, 10).toString() > this.state.activeInput.toString()) {
                    return true;
                } else {
                    return false;
                }
            })
        if (name === 'age')

            newArr = this.state.users.filter((user) => {
                if (user.dob.age === parseInt(this.state.activeInput)) {
                    return true;
                } else {
                    return false;
                }
            })
        if (name === 'older than')

            newArr = this.state.users.filter((user) => {
                if (user.dob.age > parseInt(this.state.activeInput)) {
                    return true;
                } else {
                    return false;
                }
            })
        if (name === 'younger than')

            newArr = this.state.users.filter((user) => {
                if (user.dob.age < parseInt(this.state.activeInput)) {
                    return true;
                } else {
                    return false;
                }
            })

        if (name === 'gender')
            newArr = this.state.users.filter((user) => {
                if (user.gender === this.state.activeInput) {
                    return true;
                } else {
                    return false;
                }
            })
        if (name === 'city')
            newArr = this.state.users.filter((user) => {

                var string = user.location.city.toString();
                var string2 = this.state.activeInput.toString();
                var regex = new RegExp(string2, 'g');
                var res = string.match(regex);


                if (res) {
                    return true;
                } else {
                    return false;
                }
            })
        if (name === 'state')

            newArr = this.state.users.filter((user) => {

                var string = user.location.state.toString();
                var string2 = this.state.activeInput.toString();
                var regex = new RegExp(string2, 'g');
                var res = string.match(regex);


                if (res) {
                    return true;
                } else {
                    return false;
                }
            })
        if (name === 'country')
            newArr = this.state.users.filter((user) => {

                var string = user.location.country.toString();
                var string2 = this.state.activeInput.toString();
                var regex = new RegExp(string2, 'g');
                var res = string.match(regex);


                if (res) {
                    return true;
                } else {
                    return false;
                }
            })
        this.setState({ users: newArr });
    }

    handleMethodClick = (e, { name }) => this.setState({ activeMethod: name })

    handleChange = e => this.setState({ activeInput: e.target.value })

    handleClear = e => {
        //console.log("clicked clear");
        this.setState({ users: randomusers }, () => {
            console.log(this.state.users);
        });
    }

    componentDidMount() {

        axios.get("https://randomuser.me/api/?results=200&nat=us").then((response) => {
            // console.log(response);
            console.log(response.data.results);
            randomusers = response.data.results;

            // console.log(randomusers[0].gender);
            this.setState({ users: randomusers });
        });
    }


    render() {



        return (
            <div>
                <Segment>
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column>


                                <SortSelection
                                    handleItemClick={this.handleItemClick}
                                    active={this.state.activeItem}
                                />

                            </Grid.Column>
                            <Grid.Column>
                                <Input placeholder='Search...' onChange={this.handleChange} />
                                <Button name={this.state.activeMethod} onClick={this.handleFilter}>Filter by {this.state.activeMethod} {this.state.activeInput}</Button>
                                <span title="Clear filters">
                                    <Button onClick={this.handleClear} icon><Icon name='dont' size='large' />
                                    </Button>
                                </span>
                                <FilterMethod
                                    handleMethodClick={this.handleMethodClick}
                                    active={this.state.activeMethod}
                                />

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Grid>
                    <Grid.Row columns={6}>
                        <Grid.Column width={1} />
                        <Grid.Column>
                            {this.state.users.slice(0, Math.round((this.state.users).length) * 0.2).map((user, i) => {
                                return (

                                    <Card key={i}
                                        index={i}>
                                        <Image src={user.picture.large} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>{user.name.first} {user.name.last} </Card.Header>
                                            <CardHeader>{user.login.username}</CardHeader>
                                            <Card.Meta>
                                                <p>{user.gender}</p>
                                                <span className='date'>Joined {user.registered.date.slice(0, 10)}</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                <p>{user.dob.age} years old</p>
                                                <p>{user.location.city}, {user.location.state} </p>
                                                <p>{user.location.country}</p>
                                            </Card.Description>
                                        </Card.Content>

                                    </Card>
                                )
                            })}
                        </Grid.Column>
                        <Grid.Column>
                            {this.state.users.slice(Math.round((this.state.users).length) * 0.2, Math.round((this.state.users).length) * 0.4).map((user, i) => {
                                return (

                                    <Card key={i}
                                        index={i}>
                                        <Image src={user.picture.large} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>{user.name.first} {user.name.last} </Card.Header>
                                            <CardHeader>{user.login.username}</CardHeader>
                                            <Card.Meta>
                                                <p>{user.gender}</p>
                                                <span className='date'>Joined {user.registered.date.slice(0, 10)}</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                <p>{user.dob.age} years old</p>
                                                <p>{user.location.city}, {user.location.state} </p>
                                                <p>{user.location.country}</p>
                                            </Card.Description>
                                        </Card.Content>

                                    </Card>
                                )
                            })}
                        </Grid.Column>
                        <Grid.Column>
                            {this.state.users.slice(Math.round((this.state.users).length) * 0.4, Math.round((this.state.users).length) * 0.6).map((user, i) => {
                                return (

                                    <Card key={i}
                                        index={i}>
                                        <Image src={user.picture.large} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>{user.name.first} {user.name.last} </Card.Header>
                                            <CardHeader>{user.login.username}</CardHeader>
                                            <Card.Meta>
                                                <p>{user.gender}</p>
                                                <span className='date'>Joined {user.registered.date.slice(0, 10)}</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                <p>{user.dob.age} years old</p>
                                                <p>{user.location.city}, {user.location.state} </p>
                                                <p>{user.location.country}</p>
                                            </Card.Description>
                                        </Card.Content>

                                    </Card>
                                )
                            })}
                        </Grid.Column>
                        <Grid.Column>
                            {this.state.users.slice(Math.round((this.state.users).length) * 0.6, Math.round((this.state.users).length) * 0.8).map((user, i) => {
                                return (

                                    <Card key={i}
                                        index={i}>
                                        <Image src={user.picture.large} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>{user.name.first} {user.name.last} </Card.Header>
                                            <CardHeader>{user.login.username}</CardHeader>
                                            <Card.Meta>
                                                <p>{user.gender}</p>
                                                <span className='date'>Joined {user.registered.date.slice(0, 10)}</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                <p>{user.dob.age} years old</p>
                                                <p>{user.location.city}, {user.location.state} </p>
                                                <p>{user.location.country}</p>
                                            </Card.Description>
                                        </Card.Content>

                                    </Card>
                                )
                            })}
                        </Grid.Column>
                        <Grid.Column>
                            {this.state.users.slice(Math.round((this.state.users).length) * 0.8, Math.round((this.state.users).length)).map((user, i) => {
                                return (

                                    <Card key={i}
                                        index={i}>
                                        <Image src={user.picture.large} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>{user.name.first} {user.name.last} </Card.Header>
                                            <CardHeader>{user.login.username}</CardHeader>
                                            <Card.Meta>
                                                <p>{user.gender}</p>
                                                <span className='date'>Joined {user.registered.date.slice(0, 10)}</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                <p>{user.dob.age} years old</p>
                                                <p>{user.location.city}, {user.location.state} </p>
                                                <p>{user.location.country}</p>
                                            </Card.Description>
                                        </Card.Content>

                                    </Card>
                                )
                            })}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

        )

    }
}

export default Homepage;