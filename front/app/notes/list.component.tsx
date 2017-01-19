import * as React from "react";

export default class List extends React.Component {
    render() {
        return (
            <div className="notes-container">
                <header className="notes-header">
                    <div className="notes-header-icon"></div>
                    <div className="notes-header-title">Notes</div>
                    <div className="notes-header-button"></div>
                </header>
                <div className="notes-content">
                    <div className="notes-item">Note 1</div>
                    <div className="notes-item">Note 2</div>
                    <div className="notes-item">Note 3</div>
                    <div className="notes-item">Note 4</div>
                    <div className="notes-item">Note 5</div>
                    <div className="notes-item">Note 6</div>
                    <div className="notes-item">Note 7</div>
                    <div className="notes-item">Note 8</div>
                    <div className="notes-item">Note 9</div>
                    <div className="notes-item">Note 10</div>
                </div>
                {/*<footer className="notes-footer"></footer>*/}
            </div>
        )
    }
}