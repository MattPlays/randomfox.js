const axios = require("axios").default;
/**
 * @returns {Promise<{image: string, link: string}>}
 * @example
 * const randomfox = require("@mattplays/randomfox.js")
 * randomfox().then(({image, link}) => {
 *  console.log(image, link)
 * })
 */
module.exports = async() => {
    return axios({
        method: "GET",
        url: "https://randomfox.ca/floof/",
        headers: {
            "Accept": "application/json"
        }
    }).then(({data}) => {
        return {
            image: decodeURI(data.image),
            link: decodeURI(data.link)
        }
    }).catch((err) => {throw new Error(err)});
}