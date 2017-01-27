export default class Note {
    id: string
    title: string
    text: string

    constructor({id = "", title = "", text = ""}: {id?: string, title?: string, text?: string}) {
        this.id = id
        this.title = title
        this.text = text
    }
}