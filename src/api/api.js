import axios from 'axios'

const instanse = axios.create({
    withCredentials: false,
})

export const checkAPI = {
    async checkVin(vin) {
        const response = await instanse.get(
            `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`
        )
        return response.data.Results
    },
    async getExtendedVarExplanation() {
        const response = await instanse.get(
            `https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`
        )
        return response.data.Results
    },
}
