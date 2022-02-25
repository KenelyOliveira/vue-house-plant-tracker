import { Plant } from "@/models/Plant";

export class PlantClient {
    private baseUrl: string;

    constructor(baseUrl?: string) {
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    getPlants(): Promise<Plant[]> {
        const url = this.baseUrl + "/plant";
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

    async savePlant(data: createPlantModel | null): Promise<string> {
        const url = this.baseUrl + "/plant";
        const content = JSON.stringify(data);

        const options = <RequestInit>{
            method: "POST",
            body: content,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        };
        
        return fetch(url,  options)
        .then(res => res.json())
        .then(res => {
            return res as string;
        });
    }

    
}

export const plantClient = new PlantClient("https://sheltered-dawn-19866.herokuapp.com");

export type createPlantModel = {
    name: string;
    type: string;
    species: string | null;
    image: string;
    active: boolean;
};