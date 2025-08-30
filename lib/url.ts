import qs from "query-string"

interface UrlQueryProps {
    params : string,
    key : string,
    value : string
}

//! this will update query parameter with new value
export const createUrlQuery = ({params, key, value} : UrlQueryProps) => {
    const currentUrl = qs.parse(params)
    //!{query: 'yaha jo url mein  likhoge wo aega'}
    console.log(currentUrl) //! this is an object

    currentUrl[key] = value

    console.log(currentUrl)
    //!{query: 'yaha jo url mein  likhoge wo aega'}

    console.log("url :" , window.location.pathname)
    //! this works as url /tags /community etc

    return qs.stringifyUrl({
        url : window.location.pathname,
        query : currentUrl
    })
}

interface RemoveUrlQueryProps {
    params : string,
    keyToBeRemoved : string[]
}

export const removeUrlQuery = ({params, keyToBeRemoved} : RemoveUrlQueryProps) => {
    //! read this function again!!
    const queryString = qs.parse(params)

    keyToBeRemoved.forEach((key) => {
        delete queryString[key]
    })

    return qs.stringifyUrl({
        url : window.location.pathname,
        query : queryString
    },{
        skipNull : true
    })
}