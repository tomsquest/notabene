import * as React from "react";

export default class List extends React.Component {
    render() {
        return (
            <div className="notes-list-container">
                <header className="notes-list-header">
                    <div className="notes-list-header-icon"></div>
                    <div className="notes-list-header-title">Notes</div>
                    <div className="notes-list-header-button"></div>
                </header>
                <div className="notes-list-content">
                    <div className="notes-list-item">Note 1</div>
                    <div className="notes-list-item">Note 2</div>
                    <div className="notes-list-item">Note 3</div>
                    <div className="notes-list-item">Note 4</div>
                    <div className="notes-list-item">Note 5</div>
                    <div className="notes-list-item">Note 6</div>
                    <div className="notes-list-item">Note 7</div>
                    <div className="notes-list-item">Note 8</div>
                    <div className="notes-list-item">Note 9</div>
                    <div className="notes-list-item">Note 10</div>
                </div>
                {/*<footer className="notes-list-footer"></footer>*/}
            </div>
        )
    }
}