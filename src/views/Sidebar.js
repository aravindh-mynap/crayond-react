import React from 'react';
import '../style/style.css';
import logo from "../images/logo.png";
import notification from "../images/notification.png";
import settings from "../images/settings.png";

export default class Sidebar extends React.Component {
    state = {
        windowHeight: undefined,
        windowWidth: undefined
    }
    handleResize = () => this.setState({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
    });

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    render() {
        return (
            <nav className="menu" tabIndex="0">
                <div className="smartphone-menu-trigger"></div>
                <div className={"sidebar-control"} style={{ height: this.state.windowHeight-47, overflowY: "scroll"}}>
                    <header className="avatar">
                        <img src={logo}/>
                    </header>
                    <ul>
                        <li tabIndex="0" className="icon-dashboard active"><span>Dashboard</span></li>
                        <li tabIndex="0" className="icon-activity"><span>Activity</span></li>
                        <li tabIndex="0" className="icon-timesheet"><span>Timesheet</span></li>
                        <li tabIndex="0" className="icon-minus"></li>
                        <li tabIndex="0" className="icon-calender"><span>To - Do</span></li>
                        <li tabIndex="0" className="icon-receipt"><span>Invoices</span></li>
                        <li tabIndex="0" className="icon-folder"><span>Projects</span></li>
                        <li tabIndex="0" className="icon-minus"></li>
                        <li tabIndex="0" className="icon-help"><span>Help</span></li>
                        <li tabIndex="0" className="icon-daownload"><span>Download App</span></li>
                    </ul>
                </div>
                <div style={{position: "absolute", bottom: 0, width: "100%", display: "flex", textAlign: "center", borderTop: "0.1px solid #af8ed4" }}>
                    <div style={{ width: "33.3%", paddingTop: 15, paddingBottom: 10 }}>
                        <span style={{ position : "relative", background: "red", color: "#fff", top: -14, fontSize: 7, borderRadius: 7, left: 16, padding: 3 }}> 5 </span>
                        <img src={notification} alt="" style={{ width: 18, height: 18 }}/>
                    </div>
                    <div style={{ width: "33.3%", paddingTop: 15, paddingBottom: 10 }}>
                        <img src={settings} alt="" style={{ width: 18, height: 18 }}/>
                    </div>
                    <div style={{ width: "33.3%", paddingTop: 15, paddingBottom: 10 }}>
                        <img src={"https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg"} alt=""
                             style={{ width: 20, height: 20, borderRadius: 20/2, borderWidth: 1, borderColor : "#fff" }}
                        />
                    </div>
                </div>
            </nav>
        );
    }
}
