import { ProspectionForm } from "./prospection.model";

export interface ProspectionFormWithoutAccess extends ProspectionForm {
    access: boolean ;

    raison: string ;
    autres: string ;  
}
  
