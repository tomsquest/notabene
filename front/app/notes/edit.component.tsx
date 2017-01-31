import * as React from "react";
import {Note} from "../api";
import TitleTextSplitter from "./titletextsplitter";

export interface Props {
    note: Note,
    onSubmit(note: Note): void
}

interface State {
    value: string
}

export default class Edit extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {value: ""}
    }

    componentWillReceiveProps(nextProps: Props) {
        this.setState({
            value: nextProps.note.title + "\n\n" + nextProps.note.text
        });
    }

    onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        this.setState({value: e.currentTarget.value});
    };

    onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {title, text} = new TitleTextSplitter(this.state.value).split();
        this.props.onSubmit(
            new Note({id: this.props.note.id, title, text})
        );
    };

    render() {
        return (
            <form className="notes-edit" onSubmit={this.onSubmit}>
                <textarea className="notes-edit__textarea" placeholder="Title\n\nSome text..."
                          value={this.state.value}
                          onChange={this.onChange}/>
                <footer className="notes-edit__footer">
                    <span className="notes-edit__footer__lastsaved">last saved 10 min ago</span>
                    <input className="notes-edit__footer__save" type="submit" value="Save"/>
                </footer>
            </form>
        )
    }
}