import React from 'react';
import c from './Center.module.css';

const Center = (props) => {
    const {
        Dapplets,
        Tags,
        Success,
        StateButtonHover,
        StateButtonHoverId,
        stateButtonHover,
        stateButtonClick,
        StatusClickButton
    } = props,
        stateLocalStorange = [localStorage.getItem('buttonInstalled')];

    return (
        <>
            {Success === '1' ? Dapplets.data.map( d =>
                    <div className={c.item} key={d.id}>
                        <div className={c.burger}>
                            <img src={process.env.PUBLIC_URL + '/burger.svg'} alt=""/>
                        </div>
                        <div className={c.icon}>
                            <img className={c.image} src={`https://dapplets-hiring-api.herokuapp.com/api/v1/files/${d.icon}`} alt=""/>
                        </div>
                        <div className={c.nameDapplets}>
                            <div className={c.title}>{d.title}</div>
                            <div className={c.address}>
                                {d.address.substr(1, 5) + '......' + d.address.substr(-5)}
                            </div>
                        </div>
                        <div className={c.description}>{d.description}</div>
                        <div className={c.author}>{d.author}</div>
                        <div className={c.tags}>
                            {d.tags.map( t =>
                                <>
                                    {Tags.data.map( tag =>
                                        tag.id === t ?
                                            <div className={c.tag}>
                                                <div key={tag.id}>{tag.name}</div>
                                                <div className={c.close}>
                                                    <img src={process.env.PUBLIC_URL + '/close.svg'} alt=""/>
                                                </div>
                                            </div>
                                        :
                                            null
                                    )}

                                </>
                            )}
                        </div>
                        <div className={c.button}
                             onMouseOver = {() => stateButtonHover({
                                'title': 'INSTALLED',
                                'id': d.id
                            })}
                             onMouseOut = {() => stateButtonHover({
                                'title:': 'INSTALL',
                                'id': d.id
                            })}
                             onClick={() => stateButtonClick({
                                 'id': d.id
                             })}
                        >
                            {StateButtonHover && StateButtonHoverId === d.id ?
                                JSON.parse(stateLocalStorange).id === d.id ? 'UNINSTALL' : 'INSTALLED'
                                :
                                JSON.parse(stateLocalStorange).id === d.id ? 'INSTALLED' : 'INSTALL'
                            }
                        </div>
                    </div>
                )
             :
                null
            }
        </>
    )
};

export default Center;
