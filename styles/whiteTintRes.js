const whiteTintList =[
    '#fff9ad',
    '#ffe7a7',
    '#fdd8a1',
    '#fdd8a1',
    '#f9b995',
    '#f7aa8e',
    '#f8ab9b',
    '#f5aca5',
    '#f7acb3',
    '#f6adc0',
    '#f6accf',
    '#e4a8cc',
    '#d0a3ca',
    '#bf9ec9',
    '#ac98c9',
    '#9c95c9',
    '#9aa2d3',
    '#97afdd',
    '#97bde4',
    '#92caed',
    '#93d7e4',
    '#92d7e7',
    '#94d5d7',
    '#96d5cd',
    '#99d5bc',
    '#9bd3ae',
    '#b2d9ad',
    '#c5e2ac',
    '#d9e8ad',
    '#eef0af'
]

const getWhiteTint = (numberOfColor=1) => {
    /* Returns a single color if no parameter is passed in, or an array of similar tint*/
    const rdNum = Math.floor(Math.random() * whiteTintList.length)
    if (numberOfColor === 1) {
        return whiteTintList[rdNum]
    } else {
        let color = []
        for(let i = 0; i < numberOfColor; i++) {
            color.push(whiteTintList[(rdNum + i) % whiteTintList.length])
        }
        return color
    }
}
export default getWhiteTint;