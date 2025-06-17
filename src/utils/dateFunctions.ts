export const differenceInDays = (start: Date, end: Date, absolute: boolean = false): number => {
    const startDate = new Date(start)
    const endDate = new Date(end)

    // Caso absolute for true, irá ser considerado as horas minutos e segundos de criação, caso contrário, isso será desconsiderado
    if(!absolute){
        startDate.setHours(0, 0, 0, 0)
        endDate.setHours(0, 0 , 0, 0)
    }

    const difference = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    return difference
}

export const differenceInHours = (start: Date, end: Date): number => {
    const startDate = new Date(start).getTime()
    const endDate = new Date(end).getTime()

    const difference = Math.ceil((endDate - startDate) / (1000 * 60 * 60))
    return Math.abs(difference)
}