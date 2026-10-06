import sanitizeHtml from "sanitize-html";

export function sanitizeInput(obj){
    let newObj = { ...obj }
    for(const [key, value] of Object.entries(obj)){
        if(typeof value === 'string')
            newObj[key] = sanitizeHtml(value, { allowedTags: ['b'], allowedAttributes: []})
    }

    return newObj
}