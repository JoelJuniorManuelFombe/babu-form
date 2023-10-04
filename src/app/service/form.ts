import axios from 'axios'
type TForm = {
    FULLNAME: string;
    EMAIL: string;
    PHONE: number;
};


axios.defaults.baseURL = ''

export const form = async (props: TForm) => {
    try {
        const response = await axios.post('https://babuapi.savanapoint.com/api/core', {
            collectionKey: 'c1be414f-1a99-4953-a0a7-32f30b635437',
            fields: props
        }, {
            headers: {
                secret_key: 'sp-hook.651332753e2ff70deb5ecb9969235e45',
                'Content-Type': 'application/json'
            }
        })
        return response.data
    }
    catch (error) {
        return error
    }
}