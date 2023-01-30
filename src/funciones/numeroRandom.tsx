
export const numeroRandom = (min:number,max:number) => {
    const random = Math.random();
    return (Math.floor(random*(max-min+1)+min))
}
