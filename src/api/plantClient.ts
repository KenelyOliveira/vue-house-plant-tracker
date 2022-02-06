import { Plant } from "@/models/Plant";

export class PlantClient {
    private baseUrl: string;

    constructor(baseUrl?: string) {
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    getPlants(): Promise<Plant[]> {
        const url = this.baseUrl + "/plants";
        const options = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return fetch(url,  options)
        .then(res => res.json())
        .then(res => {
            return res as Plant[]
        });
    }

    async savePlant(): Promise<string> {
        const url = this.baseUrl + "/plants";
        const options = <RequestInit>{
            method: "POST",
            headers: {
                "Accept": "application/json"
            }
        };

        await new Promise(f => setTimeout(f, 1000));

        return Promise.resolve<string>(<any>null);
        // return fetch(url,  options)
        // .then(res => res.json())
        // .then(res => {
        //     return res as Plant[]
        // });
    }

    
}

export const plantClient = new PlantClient("https://sheltered-dawn-19866.herokuapp.com");