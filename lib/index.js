const React = {
    createElement
}

export { React }

function createElement(element, props, ...children) {
    // console.log("element", typeof element);
    // console.log("attr", typeof attr);
    // console.log("props typeof", typeof props);
    // console.log("children", typeof children);


    // console.log("props", props);
    // console.log("children", [children]);

    console.log(this);




    const createEle = document.createElement(element);


    makeProps(props, createEle);
    if (children.length > 0) {

        // console.log("children", children);
        children.map(e => {

            if (Array.isArray(e)) {
                e.map(el => {
                    createEle.append(el)
                })
            } else if (typeof e === 'string') {
                createEle.textContent = e;
                return createEle;
            } else if (typeof e === 'object') {
                createEle.append(e)

                return createEle;

            }
        })

    }

    return createEle




}
function makeProps(props, createElement) {

    for (const key in props) {
        if (Object.hasOwnProperty.call(props, key)) {

            // console.log(key);

            if (key === 'className') {
                createElement.classList.add(props[key])

            } else if (key === 'style') {
                const str = makeStyle(props[key]);

                createElement.style = str;

            }
            else if (key === 'onClick') {
                createElement.addEventListener('click', props[key])
            }
            else if (key === 'onChange') {

                console.log("onchange", props[key]);
                createElement.addEventListener('change', props[key])
            }
            else {
                createElement[key] = props[key]

            }


        }
    }

    return createElement

}

function makeStyle(object) {
    // console.log(object);

    let str = ""
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const pattern = /[A-Z]/g;
            if (pattern.test(key)) {

                const match = key.split(/(?=[A-Z])/).join("-");

                str += match.toLowerCase() + ":" + object[key] + ";"

            } else {
                str += key + ":" + object[key] + ";"
            }

        }
    }
    return str;
}