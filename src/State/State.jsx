import React from 'react';
import App from './../App';

class State extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Dapplets: [],
            Tags: [],
            Success: '',
            StateButtonHover: '',
            StateButtonHoverId: '',
            StatusClickButton: [],
        };

        this.stateButtonHover = this.stateButtonHover.bind(this);
        this.stateButtonClick = this.stateButtonClick.bind(this);
    }

    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json; camelcase=1, */*'
            },
        };

        fetch('https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?limit=20&start=0&filter=[%7B%22property%22:%22title%22,%22value%22:%22privacy%22%7D]&sort=[%7B%22property%22:%22title%22,%22direction%22:%22ASC%22%7D]', requestOptions)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    Dapplets: responseJson
                });
                //Status API
                this.state.Dapplets.success === true ? this.setState({ Success: '1' }) : this.setState({ Success: '0' });
            })
            .catch(error => {
                console.error(error);
            });

        fetch('https://dapplets-hiring-api.herokuapp.com/api/v1/tags', requestOptions)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    Tags: responseJson
                });
                //Status API
                this.state.Dapplets.success === true ? this.setState({ Success: '1' }) : this.setState({ Success: '0' });
            })
            .catch(error => {
                console.error(error);
            });
    }

    stateButtonHover = e => {
        this.setState({
            StateButtonHover: e.title,
            StateButtonHoverId: e.id
        });
    }

    stateButtonClick = e => {
        localStorage.setItem('buttonInstalled', JSON.stringify({'id': e.id}));
    }

    render(){
        const {
            Dapplets,
            Success,
            Tags,
            StateButtonHover,
            StateButtonHoverId,
            StatusClickButton
        } = this.state;

        return(
            <App
                StatusClickButton = { StatusClickButton }
                Dapplets = { Dapplets }
                Success = { Success }
                Tags = { Tags }
                StateButtonHover = { StateButtonHover }
                StateButtonHoverId = { StateButtonHoverId }
                stateButtonHover = { this.stateButtonHover }
                stateButtonClick = { this.stateButtonClick }
            />
        )
    }
}

export default State;