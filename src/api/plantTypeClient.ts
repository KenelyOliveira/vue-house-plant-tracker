import { PlantType } from "@/models/PlantType";

export class PlantTypeClient {
    private baseUrl: string;

    constructor(baseUrl?: string) {
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    getPlantTypes(): Promise<PlantType[]> {
        const url = this.baseUrl + "/plant-types";
        const options = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return fetch(url,  options)
        .then(res => res.json())
        .then(res => {
            return res as PlantType[]
        });
    }

    
}

export const plantTypeClient = new PlantTypeClient("https://sheltered-dawn-19866.herokuapp.com");