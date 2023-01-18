
import moment from 'moment';
export const fechaEdit = (fecha?:string) => {
    const date = moment(fecha).utc().format('YYYY-MM-DD');    
    return(date)
}
export const fechaView = (fecha?:string) => {
    const date = moment(fecha).utc().format('DD/MM/YYYY');
    return (date)
}
