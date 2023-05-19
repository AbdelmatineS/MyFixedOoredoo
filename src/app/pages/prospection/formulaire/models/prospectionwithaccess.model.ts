import { ProspectionForm } from "./prospection.model";

export interface ProspectionFormWithAccess extends ProspectionForm {
    
    access: boolean ;
    residenceName: string ;
    bloc: number ;
    etage: number ;
    appartement: number ;  
}