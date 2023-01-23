import axios from 'axios'

const instanse = axios.create({
    withCredentials: false,
    url: 'https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/5UXWX7C5*BA?format=json',
})

export const checkAPI = {
    checkVin() {
        return instanse
            .get(
                'https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/5UXWX7C5*BA?format=json'
            )
            .then((response) => console.log(response))
    },
    getExtendedVarExplanation() {
        return instanse
            .get(
                'https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json'
            )
            .then((response) => console.log(response))
    },
}
