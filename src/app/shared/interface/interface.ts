export class Baerer {
    bearers: any;
    name: any;
    email: any;
    number: any;
    societyMemberDetailsId: any;
    registeredSocietyId: any;
}

// update society

export class Societyupdate {
    age :any
    email :any
    existingMemberCount :any
    registeredAddress : any
    registeredSocietyId : any
    societyDevelopmentSubType :any
    societyDevelopmentTypeId : any
    societyMemberDetails :Memberdetail|any
    societyName : any
    societyRegisteredCode : any
    societyRegistrationNumber : any
}

export class Memberdetail {
        email: any
        memberName:any 
        mobileNumber :any 
        registeredSocietyId : any
        societyMemberDesignationId :any 
        societyMemberDetailsId : any
}

// kyc society registration
export class updatesocietyReg {
    socityname: any;
    registrationnumber: any;
    address: any;
    city:any;
    ageofbuiling: any;
    membercount: any;
    societyemail: any;
    devlopmenttype: any;
    tretytype: any;
    plotsize: any;
    plotdimensions: any;
    carpetareofbuilding: any;
    numberofwing: any;
    usedfor: any;
    ctenament: any;
    cbuiltuparea: any;
    rtenament: any;
    rbuiltuparea: any;
    widthofroad: any;
}
// kyc society registration end

// update society registration
export class Technicaldetail {
    sizeofplot: any;
    plotdimention: any;
    existingbuilding: any;
    numberofwing: any;
    existing_commercial_tenaments: any;
    existing_residential_tenaments: any;
    existing_commercial_builtup_area: any;
    existing_residential_builtup_area: any;
    total_builtup_area: any;
    width_of_approach_road: any;
}

export class Legaldocument {
    type_of_document: any;
    file: any;
}

export class Technicaldocument {
    type_of_document: any;
    file: any;
}

export class Resolution {
    type_of_document: any;
    file: any;
}

export class Consents {
    type_of_document: any;
    file: any;
}


export class Reports {
    type_of_document: any;
    file: any;
}

export class Devappointment {
    // type_of_document:any;
    file: any;
}

export class DevConinformation {
    role: any;
    developercode: any;
    organisation_type: any;
    organisation_name: any;
    year_Experience: any;
}
// update society registration end