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