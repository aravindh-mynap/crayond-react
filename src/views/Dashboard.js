import React from 'react';
import activity from "../images/bar-chart.png"
import timeBlur from "../images/timer_blue.png"
import pdf from "../images/pdf.png"
import picture from "../images/picture.png"
import video from "../images/video_camera.png"
import leftArrow from "../images/left_arrow.png"

export default class Dashboard extends React.Component {
    render() {
        return (
            <main>
                <div style={{
                    position: "absolute", top: 44, left: -10, zIndex: 10, padding: 3, background: "#fff", borderRadius: 14
                }}>
                    <img src={leftArrow} alt="" style={{ width: 20, height: 20 }}/>
                </div>
                <div className={"row col-sm-12"} style={{ borderBottom: "1px solid #f5f5f5"}}>
                    <div className={"row col-sm-12"}  style={{ padding: 10 }} >
                        <div className={"col-sm-3"}>
                            <a href="javascript:void(0)" className={"pull-left"} style={{
                                backgroundColor: "#f5f5f5",
                                padding:10, color: "#262626",
                                fontWeight: "bold",
                                fontSize : 12,
                                borderRadius: 5,
                                border: "1px solid #e3dddc",
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0,
                                borderRight: 0,
                                textDecoration: "none"
                            }}>
                                Design Task
                            </a>
                            <a href="javascript:void(0)" className={"pull-left"} style={{
                                backgroundColor: "#f5f5f5",
                                padding:10, color: "#262626",
                                fontWeight: "bold",
                                borderRadius: 5,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0,
                                fontSize : 12,
                                border: "1px solid #e3dddc",
                                textDecoration: "none"
                            }}>
                                <i className="fa fa-chevron-down" style={{ fontSize: 12, color: "#262626" }} ></i>
                            </a>
                        </div>
                        <div className={"col-sm-6"}></div>
                        <div className={"col-sm-3"}>
                            <a href="javascript:void(0)" className={"pull-right"} style={{
                                backgroundColor: "#E9E8F4",
                                padding:10, color: "#5E56AF",
                                fontWeight: "bold",
                                fontSize : 12,
                                borderRadius: 5,
                                textDecoration: "none"
                            }}>
                                + ADD PROJECT
                            </a>
                        </div>
                    </div>
                </div>
                <div className={"row col-sm-12"} style={{ borderBottom: "1px solid #f5f5f5"}}>
                    <div className={"col-sm-8"} style={{ borderRight: "1px solid #f5f5f5" }}>
                        <div className={"row col-sm-12"} style={{ padding: 15, display: "flex" }}>
                            <div className={"col-sm-3"}  >
                                <b>Timesheet</b>
                            </div>
                            <div className={"col-sm-9"} style={{ width: "100%" }}>
                                <img src="https://icon-library.com/images/3-dot-icon/3-dot-icon-7.jpg"
                                     style={{ width: 15, height: 12, float: "right", marginTop: 10, marginLeft: 10 }} alt=""/>
                                <a href="javascript:void(0)" className={"pull-right"} style={{
                                    backgroundColor: "#E9E8F4",
                                    padding:10, color: "#5E56AF",
                                    fontWeight: "bold",
                                    fontSize : 12,
                                    borderRadius: 5,
                                    textDecoration: "none"
                                }}>
                                    VIEW FULL SHEET
                                </a>
                            </div>
                        </div>
                        <div className={"row col-sm-12"} style={{ padding: 15, width: "100%" }}>
                            <div style={{ overflowX: "auto" }}>
                                <table className="table table-striped" style={{ width: "100%" }}>
                                    <thead>
                                    <tr>
                                        <th>Project</th>
                                        <th>Date</th>
                                        <th>Start time</th>
                                        <th>Stop time</th>
                                        <th>Duration</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <span style={{ padding: 5,
                                                paddingLeft : 8,
                                                paddingRight : 8,
                                                backgroundColor: "#E9E8F4",
                                                color: "#5E56AF",
                                                borderRadius: 5/2 }}>
                                                1
                                            </span>
                                            &nbsp; Landing page Design
                                        </td>
                                        <td>May 21, 2019</td>
                                        <td>1:10 pm</td>
                                        <td>9:20 pm</td>
                                        <td>8:10:37</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span style={{ padding: 5,
                                                paddingLeft : 8,
                                                paddingRight : 8,
                                                backgroundColor: "#F5F1E3",
                                                color: "#C5A64D",
                                                borderRadius: 5/2 }}>
                                                3
                                            </span>
                                            &nbsp; Mobile App
                                        </td>
                                        <td>May 21, 2019</td>
                                        <td>1:10 pm</td>
                                        <td>9:20 pm</td>
                                        <td>8:10:37</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span style={{ padding: 5,
                                                paddingLeft : 8,
                                                paddingRight : 8,
                                                backgroundColor: "#FAE9ED",
                                                color: "#FF5F86",
                                                borderRadius: 5/2 }}>
                                                5
                                            </span>
                                            &nbsp; UI/UX
                                        </td>
                                        <td>May 21, 2019</td>
                                        <td>1:10 pm</td>
                                        <td>9:20 pm</td>
                                        <td>8:10:37</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span style={{ padding: 5,
                                                paddingLeft : 8,
                                                paddingRight : 8,
                                                backgroundColor: "#DFE9FA",
                                                color: "#3F71C4",
                                                borderRadius: 5/2 }}>
                                                2
                                            </span>
                                            &nbsp; Website/Apps
                                        </td>
                                        <td>May 21, 2019</td>
                                        <td>1:10 pm</td>
                                        <td>9:20 pm</td>
                                        <td>8:10:37</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span style={{ padding: 5,
                                                paddingLeft : 8,
                                                paddingRight : 8,
                                                backgroundColor: "#FAEDE2",
                                                color: "#FDA85B",
                                                borderRadius: 5/2 }}>
                                                9
                                            </span>
                                            &nbsp; Branding
                                        </td>
                                        <td>May 21, 2019</td>
                                        <td>1:10 pm</td>
                                        <td>9:20 pm</td>
                                        <td>8:10:37</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className={"col-sm-4"} style={{ padding: 20 }}>
                        <b>Report</b>
                        <div className={"row col-sm-12"}><br/></div>
                        <div className={"row col-sm-12"} style={{
                            width: "100%", textDecoration: "none",
                            backgroundColor: "#382F9C",
                            display:"flex",
                            borderRadius: 8,
                            padding: 15
                        }}>
                            <div href="javascript:void(0)" className={"col-sm-2"} style={{ alignSelf: "center", width: "15%" }}>
                                <span style={{ backgroundColor: "#534BA9", borderRadius: 5, padding: 10 }}>
                                    <img src={activity} alt="" style={{ width : 20, height: 20 }}/>
                                </span>
                            </div>
                            <span href="javascript:void(0)" className={"col-sm-8"} style={{ paddingLeft : 15, width:"65%" }}>
                                <p style={{ fontSize: 10, color: "#534BA9", borderRadius: 5 }}>
                                    WEEKLY ACTIVITY
                                </p>
                                <p style={{ fontSize: 12, color: "#fff", borderRadius: 5 }}>
                                    52%
                                </p>
                            </span>
                            <span href="javascript:void(0)" className={"col-sm-2"} style={{ width: "20%" }}>
                                <span style={{ padding: 2, fontSize: 9, color: "#fff", borderRadius: 3, backgroundColor: "#39C084" }}>
                                    &nbsp;<i className="fa fa-caret-up" style={{ fontSize: 10, color: "#fff" }} ></i>
                                    &nbsp; 17% &nbsp;
                                </span>
                            </span>
                        </div>
                        <div className={"row col-sm-12"}><br/></div>
                        <div className={"row col-sm-12"} style={{
                            width: "100%", textDecoration: "none",
                            backgroundColor: "#F4F4F4",
                            display: "flex",
                            borderRadius: 8,
                            padding: 15
                        }}>
                            <div href="javascript:void(0)" className={"col-sm-2"} style={{ alignSelf: "center", width: "15%" }}>
                                <span style={{ backgroundColor: "#fff", borderRadius: 5, padding: 10 }}>
                                    <img src={timeBlur} alt="" style={{ width : 20, height: 20 }}/>
                                </span>
                            </div>
                            <span href="javascript:void(0)" className={"col-sm-8"} style={{ paddingLeft : 15, width: "65%" }}>
                                <p style={{ fontSize: 10, color: "#CECECE", borderRadius: 5 }}>
                                    WORKED THIS WEEK
                                </p>
                                <p style={{ fontSize: 12, color: "#000", borderRadius: 5 }}>
                                    11:56:33
                                </p>
                            </span>
                            <span href="javascript:void(0)" className={"col-sm-2"} style={{ width: "20%"}}>
                                <span style={{ padding: 2, fontSize: 9, color: "#F07E7E", borderRadius: 3, backgroundColor: "#EECFCF" }}>
                                    &nbsp;<i className="fa fa-caret-down" style={{ fontSize: 10, color: "#F07E7E" }} ></i>
                                    &nbsp; 17% &nbsp;
                                </span>
                            </span>
                        </div>
                        <div className={"row col-sm-12"}><br/></div>
                        <div className={"row col-sm-12"} style={{
                            width: "100%", textDecoration: "none",
                            backgroundColor: "#fff",
                            borderRadius: 8,
                            border: "1px solid #382F9C",
                            padding: 10,
                            textAlign: "center",
                            justifyContent : "center"
                        }}>
                            <img src={pdf} alt="" style={{ width : 15, height: 15 }}/>
                            &nbsp;  &nbsp;
                            <span style={{ fontSize: 13, fontWeight: "bold", color: "#382F9C" }}>EXPORT AS PDF</span>
                        </div>
                    </div>
                </div>
                <div className={"row col-sm-12"} style={{ borderBottom: "1px solid #f5f5f5"}}>
                    <div className={"col-sm-8"} style={{ borderRight: "1px solid #f5f5f5" }}>
                        <div className={"row col-sm-12"} style={{ padding: 15 }}>
                            <div className={"col-sm-9"}  >
                                <b>To - Do lists</b>
                            </div>
                        </div>
                        <div className={"row col-sm-12"} style={{ display: "flex", padding: 15 }}>
                            <div className={"col-sm-1"} style={{ paddingTop: 5, alignItems: "center", textAlign: "center"}}>
                                <b style={{ color: "#382F9C", fontSize: 20 }}>20</b>
                                <p style={{ color: "#382F9C", fontSize: 13, marginTop: -5 }}>May</p>
                            </div>
                            <div className={"col-sm-11"} style={{
                                textDecoration: "none",
                                backgroundColor: "#fff",
                                borderRadius: 5,
                                border: "1px solid #f5f5f5",
                                padding: 10,
                                paddingLeft: 20,
                                boxShadow: "0 5px 7px -7px #777",
                                width: "100%"
                            }}>
                                <p style={{ fontSize: 14 }}>
                                    Revamp Instagram app
                                    <img src="https://icon-library.com/images/3-dot-icon/3-dot-icon-7.jpg"
                                         style={{ width: 15, height: 12, float: "right", marginTop: 2 }} alt=""/>
                                </p>
                                <p  style={{ fontSize: 12, color: "#ABABAB" }}>Today</p>
                            </div>
                        </div>
                        <div className={"row col-sm-12"} style={{ display: "flex", padding: 15 }}>
                            <div className={"col-sm-1"} style={{ paddingTop: 5, alignItems: "center", textAlign: "center"}}>
                                <b style={{ color: "#000", fontSize: 20 }}>21</b>
                                <p style={{ color: "#000", fontSize: 13, marginTop: -5 }}>May</p>
                            </div>
                            <div className={"col-sm-11"} style={{
                                textDecoration: "none",
                                backgroundColor: "#f5f5f5",
                                borderRadius: 5,
                                border: "1px solid #e3dddc",
                                padding: 10,
                                paddingLeft: 20,
                                width: "100%"
                            }}>
                                <p style={{ fontSize: 14 }}>
                                    Prototyping
                                    <img src="https://icon-library.com/images/3-dot-icon/3-dot-icon-7.jpg"
                                         style={{ width: 15, height: 12, float: "right", marginTop: 2 }} alt=""/>
                                </p>
                                <p  style={{ fontSize: 12, color: "#ABABAB" }}>Upcoming</p>
                            </div>
                        </div>
                        <div className={"row col-sm-12"} style={{ display: "flex", padding: 15 }}>
                            <div className={"col-sm-1"} style={{ paddingTop: 5, alignItems: "center", textAlign: "center"}}>
                                <b style={{ color: "#000", fontSize: 20 }}>22</b>
                                <p style={{ color: "#000", fontSize: 13, marginTop: -5 }}>May</p>
                            </div>
                            <div className={"col-sm-11"} style={{
                                textDecoration: "none",
                                backgroundColor: "#f5f5f5",
                                borderRadius: 5,
                                border: "1px solid #e3dddc",
                                padding: 10,
                                paddingLeft: 20,
                                width: "100%"
                            }}>
                                <p style={{ fontSize: 14 }}>
                                    Collect reference new project
                                    <img src="https://icon-library.com/images/3-dot-icon/3-dot-icon-7.jpg"
                                         style={{ width: 15, height: 12, float: "right", marginTop: 2 }} alt=""/>
                                </p>
                                <p  style={{ fontSize: 12, color: "#ABABAB" }}>Upcoming</p>
                            </div>
                        </div>
                    </div>
                    <div className={"col-sm-4"} style={{ padding: 20 }}>
                        <b>ScreenShots</b>
                        <div className={"row col-sm-12"}><br/></div>
                        <div className={"row col-sm-12"} style={{
                            display: "flex",
                            borderBottom: "1px solid #f5f5f5",
                            padding: 10,
                            alignItems: "center"
                        }}>
                            <div href="javascript:void(0)" className={"col-sm-2"} style={{ width: "15%", alignSelf: "center" }}>
                                <img src={picture} alt="" style={{ width : 20, height: 20 }}/>
                            </div>
                            <span href="javascript:void(0)" className={"col-sm-8"} style={{ width: "65%" }} >
                                <span style={{ fontSize: 12, color: "#717171" }}>
                                    Shot_1_attach_1.png
                                </span>
                            </span>
                            <span href="javascript:void(0)" className={"col-sm-2"} style={{ width: "20%" }}>
                                <a href="javascript:void(0)" className={"pull-right"} style={{
                                    backgroundColor: "#E9E8F4",
                                    padding:5, color: "#5E56AF",
                                    paddingLeft: 8,
                                    paddingRight: 8,
                                    fontWeight: "bold",
                                    fontSize : 10,
                                    borderRadius: 3,
                                    textDecoration: "none",
                                    letterSpacing : 0.5
                                }}>
                                    View
                                </a>
                            </span>
                        </div>
                        <div className={"row col-sm-12"} style={{
                            display: "flex",
                            borderBottom: "1px solid #f5f5f5",
                            padding: 10,
                            alignItems: "center"
                        }}>
                            <div href="javascript:void(0)" className={"col-sm-2"} style={{ alignSelf: "center", width: "15%" }}>
                                <img src={picture} alt="" style={{ width : 20, height: 20 }}/>
                            </div>
                            <span href="javascript:void(0)" className={"col-sm-8"} style={{ width: "65%" }} >
                                <span style={{ fontSize: 12, color: "#717171" }}>
                                    Shot_1_attach_3.png
                                </span>
                            </span>
                            <span href="javascript:void(0)" className={"col-sm-2"} style={{ width: "20%" }}>
                                <a href="javascript:void(0)" className={"pull-right"} style={{
                                    backgroundColor: "#E9E8F4",
                                    padding:5, color: "#5E56AF",
                                    paddingLeft: 8,
                                    paddingRight: 8,
                                    fontWeight: "bold",
                                    fontSize : 10,
                                    borderRadius: 3,
                                    textDecoration: "none",
                                    letterSpacing : 0.5
                                }}>
                                    View
                                </a>
                            </span>
                        </div>
                        <div className={"row col-sm-12"} style={{
                            display: "flex",
                            borderBottom: "1px solid #f5f5f5",
                            padding: 10,
                            alignItems: "center"
                        }}>
                            <div href="javascript:void(0)" className={"col-sm-2"} style={{ alignSelf: "center", width: "15%" }}>
                                <img src={video} alt="" style={{ width : 20, height: 20 }}/>
                            </div>
                            <span href="javascript:void(0)" className={"col-sm-8"} style={{ width: "65%" }} >
                                <span style={{ fontSize: 12, color: "#717171" }}>
                                    Screen record_12.mov
                                </span>
                            </span>
                            <span href="javascript:void(0)" className={"col-sm-2"} style={{ width: "20%" }}>
                                <a href="javascript:void(0)" className={"pull-right"} style={{
                                    backgroundColor: "#382F9C",
                                    padding:5, color: "#fff",
                                    paddingLeft: 8,
                                    paddingRight: 8,
                                    fontWeight: "bold",
                                    fontSize : 10,
                                    borderRadius: 3,
                                    textDecoration: "none",
                                    letterSpacing : 0.5
                                }}>
                                    Play
                                </a>
                            </span>
                        </div>
                        <div className={"row col-sm-12"}><br/></div>
                        <div className={"row col-sm-12"} style={{
                            width: "100%", textDecoration: "none",
                            backgroundColor: "#fff",

                            borderRadius: 8,
                            border: "1px solid #382F9C",
                            padding: 10,
                            textAlign: "center",
                            justifyContent : "center"
                        }}>
                            <span style={{ fontSize: 13, fontWeight: "bold", color: "#382F9C" }}>VIEW ALL</span>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
