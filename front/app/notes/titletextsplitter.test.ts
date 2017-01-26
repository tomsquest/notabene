import TitleTextSplitter from "./titletextsplitter";

test('empty string', () => {
    expect(new TitleTextSplitter("").split()).toEqual({
        title: "",
        text: ""
    });
});

test('only a title', () => {
    expect(new TitleTextSplitter("A title").split()).toEqual({
        title: "A title",
        text: ""
    });
});

test('title and text', () => {
    expect(new TitleTextSplitter("A title\n\nSome text").split()).toEqual({
        title: "A title",
        text: "Some text"
    });
});

test('no blank line between title and text', () => {
    expect(new TitleTextSplitter("A title\nSome text").split()).toEqual({
        title: "A title",
        text: "Some text"
    });
});

test('blank line before title', () => {
    expect(new TitleTextSplitter("\n\n  A title  \n  Some text").split()).toEqual({
        title: "A title",
        text: "Some text"
    });
});

test('text with many lines', () => {
    expect(new TitleTextSplitter("\n\nA title\nSome\n\rtext\n\nagain\n\r\n").split()).toEqual({
        title: "A title",
        text: "Some\n\rtext\n\nagain"
    });
});