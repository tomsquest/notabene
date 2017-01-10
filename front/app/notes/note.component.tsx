import * as React from "react";

interface NoteProps {
    text: string
}

export class NoteComponent extends React.Component<NoteProps, undefined> {
    render() {
        const {text} = this.props;
        return <div className="note">
            <span className="text">{text}</span>
        </div>
    }
}