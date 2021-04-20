import { data } from 'autoprefixer';

import { rendMain } from '../_Mr_Paul/index.js'
import { rendFirst } from '../rlapsky/index.js'
import { rendChart } from '../vitalik/index.js'

const magic = (arr) => {
    let current = arr[0].dt.split(" ")[2]
    let newArr = []
    return arr.reduce((p, c) => {
        if (current === c.dt.split(" ")[2]) {
            newArr.push(c)
            return p
        } else {
            current = c.dt.split(" ")[2]
            p.push(newArr)
            newArr = []
            newArr.push(c)
            return p
        }
    }, [])

}

let showToday = true

let lastData = null

const openToday = (data) => {

    document.querySelector(".firstpage-up").classList.remove("none")
    document.querySelector(".firstpage-down").classList.remove("none")
    document.querySelector(".weather-main").classList.add("compress")
    document.querySelector(".weather-title").classList.add("none")
    document.querySelector(".container").classList.add("container_off")

    rendFirst(JSON.parse(JSON.stringify(data)))
}
const closeToday = () => {
    document.querySelector(".firstpage-up").classList.add("none")
    document.querySelector(".firstpage-down").classList.add("none")
    document.querySelector(".weather-main").classList.remove("compress")
    document.querySelector(".weather-title").classList.remove("none")
    document.querySelector(".container").classList.remove("container_off")
}
const openFDays = (data) => {
    document.querySelector(".charts").classList.remove("none")
    document.querySelector(".weather-list").classList.remove("none")
    document.querySelector(".weather-moreInfo").classList.remove("none")
    document.querySelector(".weather-list-slider").classList.remove("none")
    document.querySelector(".weather-moreInfo-slider").classList.remove("none")

    rendMain(JSON.parse(JSON.stringify(data)))
    rendChart(JSON.parse(JSON.stringify(data.list)))
}
const closeFDays = () => {

    document.querySelector(".charts").classList.add("none")
    document.querySelector(".weather-list").classList.add("none")
    document.querySelector(".weather-moreInfo").classList.add("none")
    document.querySelector(".weather-list-slider").classList.add("none")
    document.querySelector(".weather-moreInfo-slider").classList.add("none")
}

const toggle = (data) => {

    if (showToday) {
        closeFDays()
        openToday(data)
    } else {
        closeToday()
        openFDays(data)
    }
}

const render = function(allData) {
    lastData = allData
    allData.list = magic(allData.list)
    console.log("render");
    toggle(allData)


}

document.querySelector(".weather-toggle-btn1").addEventListener("click", () => {
    console.log("#", showToday, lastData);
    if (showToday || !lastData) return
    console.log("$", showToday, lastData);
    showToday = !showToday
    toggle(lastData)
})

document.querySelector(".weather-toggle-btn2").addEventListener("click", () => {
    console.log("##", showToday, lastData);
    if (!showToday || !lastData) return
    console.log("$", showToday, lastData);
    showToday = !showToday
    toggle(lastData)
})

export { render }