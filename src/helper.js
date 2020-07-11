function getIndices(text, userText) {
    let right = Math.min(userText.length, text.length)
    let wrong = Math.min(userText.length, text.length)
    for (let i = 0; i < userText.length; i++) {
        if (text.charAt(i) !== userText.charAt(i)) {
            right = i
            break
        }
    }
    return {right, wrong}
}

export default getIndices