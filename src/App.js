import React from 'react';
import a from './App.module.css';
import Left from './Components/Left/Left';
import Center from './Components/Center/Center';
import Right from './Components/Right/Right';

const App = (props) => {
    const {
        Dapplets,
        Tags,
        Success,
        StateButtonHover,
        stateButtonHover,
        StateButtonHoverId,
        stateButtonClick,
        StatusClickButton
    } = props;

    return(
        <div>
            <div className={a.container}>
                <div className={a.left}>
                    <Left />
                </div>
                <div className={a.center}>
                    <Center
                        StatusClickButton = { StatusClickButton }
                        Dapplets = { Dapplets }
                        Tags = { Tags }
                        Success = {Success}
                        StateButtonHover = { StateButtonHover }
                        StateButtonHoverId = { StateButtonHoverId }
                        stateButtonHover = { stateButtonHover }
                        stateButtonClick = { stateButtonClick }
                    />
                </div>
                <div className={a.right}>
                    <Right />
                </div>
            </div>
        </div>
    )
}

export default App;
