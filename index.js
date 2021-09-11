const fetch = require("node-fetch");
/**
 * @returns {Promise<{image: string, link: string}>}
 * @example
 * const randomfox = require("@mattplays/randomfox.js")
 * randomfox().then(({image, link}) => {
 *  console.log(image, link)
 * })
 */
module.exports = async() => {
    return fetch("https://randomfox.ca/floof/", {
        "method": "GET",
        "headers": {
            "Accept": "application/json"
        }
    }).then(data => data.json()).then((data) => {
        return {
            image: decodeURI(data.image),
            link: decodeURI(data.link)
        }
    }).catch((err) => {throw new Error(err)});
}