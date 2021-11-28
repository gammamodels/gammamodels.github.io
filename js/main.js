function increment_img(id) {
    element = document.getElementById(id)
    src = element.src
    length = src.length

    ind_string = src.substring(length-6, length-4)
    ind = parseInt(ind_string, 10)

    next_ind = (ind+1) % 10
    next_ind_string = next_ind.toString().padStart(2, '0')

    next_src = src.replace(ind_string, next_ind_string)
    element.src = next_src
}

setInterval(function() {
    increment_img('rollout')
}, 1 * 1000);