import * as React from "react";

export default class List extends React.Component {
    render() {
        return (
            <div className="notes-list">
                <header className="notes-list__header">
                    <div className="notes-list__header-icon"></div>
                    <div className="notes-list__header-title">Notes</div>
                    <div className="notes-list__header-button"></div>
                </header>
                <div className="notes-list__content">
                    <div className="notes-list__item">Note 1</div>
                    <div className="notes-list__item">Note 2</div>
                    <div className="notes-list__item">Note 3</div>
                    <div className="notes-list__item">Note 4</div>
                    <div className="notes-list__item">Note 5</div>
                    <div className="notes-list__item">Note 6</div>
                    <div className="notes-list__item">Note 7</div>
                    <div className="notes-list__item">Note 8</div>
                    <div className="notes-list__item">Note 9</div>
                    <div className="notes-list__item">Note 10</div>
                </div>
                {/*<footer className="notes-list-footer"></footer>*/}
            </div>
        )
    }
}