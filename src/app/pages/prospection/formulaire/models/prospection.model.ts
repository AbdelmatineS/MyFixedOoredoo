export type offre = 'FO' | 'FB' | 'FJ' | 'ADSL' | 'VDSL';

export interface ProspectionForm{

    
    offretype: string  ;
    fullName: string ;
    numID: number ;
    contactNum: number ;
    latitude: number ;
    longitude: number ;

    zone: string ;
    
    etat: string ;


}


