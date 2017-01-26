export default class TitleTextSplitter {
    constructor(readonly rawValue: string) {
    }

    split(): {title: string, text: string} {
        const [, rawTitle = "", rawText = "",] = this.rawValue.trim().match(/(.*)[\n\r]*([^]*)/);

        return {
            title: rawTitle.trim(),
            text: rawText.trim()
        }
    }
}