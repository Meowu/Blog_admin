
export default function (date) {
    let time
    if (date) {
        time = new Date(date).getTime()
    } else {
        time = Date.now()
    }
    return parseInt(time/1000)
}