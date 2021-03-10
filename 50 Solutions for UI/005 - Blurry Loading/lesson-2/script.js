const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let interval = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(interval)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale({
        num: load, 
        in_min: 0, 
        in_max: 100, 
        out_min: 1, 
        out_max: 0
    })

    bg.style.filter = `blur(${scale({
        num: load, 
        in_min: 0, 
        in_max: 100, 
        out_min: 30, 
        out_max: 0
    })}px)`
}

const scale = ({ num, in_min, in_max, out_min, out_max }) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}