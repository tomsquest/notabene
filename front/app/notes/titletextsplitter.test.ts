import TitleTextSplitter from "./titletextsplitter";

test('title and text', () => {
    expect(new TitleTextSplitter("A title\nSome text").split()).toEqual({
        title: "A title",
        text: "Some text"
    });
});

test('empty string', () => {
    expect(new TitleTextSplitter("").split()).toEqual({
        title: "",
        text: ""
    });
});

test('blank string', () => {
    expect(new TitleTextSplitter("   \n\n\r\n\r   \n\n\r\n   ").split()).toEqual({
        title: "",
        text: ""
    });
});

test('null', () => {
    expect(new TitleTextSplitter(null).split()).toEqual({
        title: "",
        text: ""
    });
});

test('undefined', () => {
    expect(new TitleTextSplitter(undefined).split()).toEqual({
        title: "",
        text: ""
    });
});

test('only a string', () => {
    expect(new TitleTextSplitter("A string").split()).toEqual({
        title: "A string",
        text: ""
    });
});

test('blanks before title', () => {
    expect(new TitleTextSplitter("  \n\r\n\n  A title").split()).toEqual({
        title: "A title",
        text: ""
    });
});

test('blanks between title and text', () => {
    expect(new TitleTextSplitter("A title  \n\r\n  \n\n\n  Some text").split()).toEqual({
        title: "A title",
        text: "Some text"
    });
});

test('blanks after text', () => {
    expect(new TitleTextSplitter("A title\nSome\n\rtext\n\nagain\n\r  \n\n\n").split()).toEqual({
        title: "A title",
        text: "Some\n\rtext\n\nagain"
    });
});