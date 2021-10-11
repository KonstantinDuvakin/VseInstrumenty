function func_1(string) {
    let mass = string.split(' ')
    let char = mass.map( word => word.toLowerCase().slice(0, 1))
    let sortChar = char.sort()
    let uniq = sortChar.reduce((result, item) => {
        return result.includes(item) ? result : [...result, item]
    }, [])
}