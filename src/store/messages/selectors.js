export function getMesages({ chatId }) {
    return (state) => state.message[chatId] || []
}


  