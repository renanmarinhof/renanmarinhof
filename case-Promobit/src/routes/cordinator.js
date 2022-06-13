export const goToMain = (history) => {
    history.push('/')
}

export const goToDetail = (history, id) => {
    history.push(`/movie/${id}`)
}