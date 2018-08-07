import React from 'react'
import '../../public/css/common.pcss'
import {HashRouter, NavLink, Route} from "react-router-dom";
import Weater from "../common/Weater";

class Index extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className="allHeight">
                    <header>
                        <Weater/>
                        <NavLink to="/" className="headMenuList" activeClassName="selected" exact>
                            <span className="name">客流分析</span>
                            <span className="number">01</span>
                        </NavLink>
                        <NavLink to="/demo2" className="headMenuList" activeClassName="selected" exact>
                            <span className="name">属性分析</span>
                            <span className="number">02</span>
                        </NavLink>
                    </header>
                </div>
            </HashRouter>
        )
    }
}

export default Index