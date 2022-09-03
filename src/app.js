import { React } from "../lib/index.js";

const arr = [
    { id: 1, text: "This is primary one" },
    { id: 2, text: "This is primary two" },
    { id: 3, text: "This is primary three" },
    { id: 4, text: "This is primary four" },
    { id: 5, text: "This is primary five" },
    { id: 6, text: "This is primary six" },
    { id: 7, text: "This is primary seven" },
    { id: 8, text: "This is primary eight" },
    { id: 9, text: "This is primary nine" },
    { id: 10, text: "This is primary ten" },
]



const App = () => {

    // console.log(a);


    return React.createElement(
        'div',
        { className: "text-primary", id: "main-container" },
        "Hello world",
        React.createElement('p', { className: "text-primary", id: "one", }, "This is primary color"),
        React.createElement(
            'p',
            {
                className: "text-secondary",
                style: { backgroundColor: 'red', fontSize: "40px" }
            },
            "This is secondary color"
        ),
        React.createElement('ul', { className: "text-success" },
            arr.map(e => {
                return React.createElement('li', { className: "list-item", }, e.text)
            })
        ),
        React.createElement('div', { className: "row", },
            React.createElement('div', { className: "col-md-6", },
                React.createElement('a',
                    {
                        className: "col-md-6",
                        href: "www.facebook.com",
                        id: "thisdfad",
                        dipu: "dfadfdf"
                    },
                    "This is primary color",
                    React.createElement('span', null, "This is span")
                )
            ),
            React.createElement('div', {
                className: "col-md-6",
                style: {
                    backgroundColor: 'red',
                    color: 'white',
                    fontSize: "24px",
                    alignItems: "center",
                }
            }, "This is primary color"),
            React.createElement('img',
                {
                    className: "img-fluild",
                    src: "../public/img/1.jpg",
                    style: { width: "100%" },
                    alt: "this is hello",
                }),

        ),

    )
}

export { App }