export class ClientInterface {
}

// ****************** Menu 1 Client Information *************************
// menu 1 table 1
export interface Element {
    PolicyNo: string;
    Plan: string;
    Effective: string;
    Expired: string;
    PolicyYear: string;
}
// menu 1 client data
export interface clientModel {
    cradID: string;
    name: string;
    policyHolder: string;
    policyNo: string;
    familyPerson: string;
    plan: string;
    personalID: string;
    sex: string;
    waittingTo: string;
    planID: string;
    DOB: string;
    age: string;
    policyDate: string;
    graceTo: string;
    policyYear: string;
    duration: string;
    payFreq: string;
    status: string;
    riderDate: string;
    deductible: string;
    meCover: string;
    effective: string;
    exclusionWaitting: string;
    coPayment: string;
    mccover: string;
    expiry: string;
    chronicWaitting: string;
    hsCover: string;
    hbLimit: string;
    piadDate: string;
    reinstableDate: string;
    lastExpiry: string;
}
// menu 1 Dialog
export interface tableDialogModel {
    code: any;
    description: any;
    day: any;
    per: any;
    benefitPPO: any;
    benefitOON: any;
    deductible: any;
    copayment: any;
  }


// menu 1 tab data
export interface tabData {
    tab1: {
        Eclusion: string;
        InfoNote: string;
        Notation: string;
    };
    tab2: {
        data: string;
    };
    tab3: {
        Permium: string;
        Waitting1: string;
        Mobile: string;
        Payee: string;
        ClientNo: string;
        Group: string;
        Address: string;
        Note: string;
        Waitting2: string;
        OldPolicy: string;
        PolicyID: string;
    };
    tab4: {
        OldCardNo: string;
        AdjustDate: string;
    };
    tab6: {
        Prefer: string;
        Agent: string;
        Agency: string;
        AgentCode: string;
        Address: string;
        AgencyCode: string;
    };
    tab7: {
        Quotation: string;
        OldGracePeriod: string;
        NewRecieve: string;
        CancleRecieve: string;
        LastUpdateUser: string;
        DueDate: string;
        NewUpload: string;
        CancleUpload: string;
        LastUpdateDate: string;
    };
    tab8: {
        call: string;
        date: string;
    };
}
// menu 1 tab 4 table
export interface Element {
    PolicyNo: string;
    Plan: string;
    Effective: string;
    Expired: string;
    PolicyYear: string;
}

// menu 1 tab 5 table
export interface payment {
    Period: string;
    DueDate: string;
    PiadDate: string;
    Premium: string;
    Filename: string;
}

// ****************** Menu 2 Claim Disability *************************
// menu 2 claim disability table 1
export interface claimDisDatasource {
    NotifyNo: string;
    AccDate: string;
    AdmitDate: string;
    Discharge: string;
    ClaimType: string;
    Diags: string;
    Charge: string;
    Benefit: string;
    EndDate: string;
    DeductiblePaidaid: string;
    ClientPaid: string;
}
// menu 2 claim disability table 2 summary
export interface summaryModel {
    Description: string;
    Group: string;
    BenefitCover: string;
    BenefitPaid: string;
    BenefitRemain: string;
    DayCover: string;
    Day: string;
    DayRemain: string;
    Per: string;
    NotifyNo: string;
}
// menu 2 claim disability table 3 detail
export interface claimDetailModel {
    notifyNo: string;
    hospital: string;
    accDate: string;
    admitDate: string;
    discharge: string;
    icd10: string;
    charge: string;
    benefitPaid: string;
}


// ****************** Menu 3 Pre-Certification *************************
// menu 3 precer data
export interface preCerShow {
    PrecertBy: string;
    NotifyDate: string;
    AuditBy: string;
    DateOfBirth: string;
    CancelBy: string;
    CancelDate: string;
    Status: string;
    IndicstorOfAdmission: string;
    TreamentPlan: string;
    Note: string;
    NoteToInsurance: string;
    ConcurrentReview: string;
    ExgratiaNore: string;
    Comment: string;
    CancelNote: string;
}
// menu 3 precer table
export interface perCerModel {
    NotifyNo: string;
    NotifyDate: string;
    PolicyNo: string;
    Plan: string;
    Hospital: string;
    AdmitDate: string;
}

// ****************** Menu 4 5  Claim His &  By NatID  *************************
// menu 4 5 his table
export interface claimHisModel {
    RecieveDate: string;
    NotifyNo: string;
    Type: string;
    VisitNo: string;
    PolicyNo: string;
    Plan: string;
    ClientName: string;
    AccDate: string;
    Hospital: string;
    AdmitDate: string;
    Discharge: string;
    Diags1: string;
    Diags2: string;
    Diags3: string;
    Charge: string;
    Discount: string;
    NonCover: string;
    Benefit: string;
    Exgratia: string;
    DeducPaid: string;
    ClientPaid: string;
    Indicator: string;
    Pending: string;
    Assesor: string;
    Nurse: string;
    AuditBy: string;
    ReturnDay: string;
    Status: string;
    PuNo: string;
    ChqNo: string;
    PaidDate: string;
    PaidTo: string;
}
// menu 4 5 his table 1  note
export interface claimHisDetail {
    IndicstorOfAdmission: string;
    TreatmentPlan: string;
}
// menu 4 5 table 2 
export interface claimHisModel2 {
    Description: string;
    Day: string;
    Per: string;
    Charge: string;
    Discount: string;
    NoCover: string;
    Exgratia: string;
    BenefitPaid: string;
    DeducPaid: string;
    ClientPaid: string;
    Note: string;
}
// menu 4 5 table 2 note
export interface claimHis2 {
    ExternalNote: string;
    FaxNoteIntenval: string;
    NoteToInsuraceExternal: string;
    AuditNoteIntenval: string;
}


// ****************** Menu 6  Appointment  *************************
// menu 6 table 
export interface appPointModel {
    DueDate: string;
    Hospital: string;
    TreantmentCode: string;
    RecieveCallDate: string;
}

// menu 6 detail
export interface appPointData {
    CustomerMobile: string;
    ClinicPhone: string;
    Receiveby: string;
    DateReceive: string;
    IndicationAdmit: string;
    TreatmentPlan: string;
    Notetoclinic: string;
    Note: string;
}



// ****************** Menu 7 Web Preauth  *************************

// menu 7 table 
export interface preAuthModel {
    PreauthNo: string;
    SwipeDate: string;
    CardNo: string;
    Hospital: string;
    Approved: string;
    Result: string;
}


// ****************** Menu 8 Claim Payment  *************************
// menu  8 table
export interface claimPayModel {
    NotifyNo: string;
    TransDate: string;
    AccDate: string;
    Hospital: string;
    Charge: string;
    Paid: string;
}



// ****************** Menu 9 CS Call Log *************************

// menu 9 detail
export interface callLogDetail {
    Reason: string;
    Note: string;
    CallFile: string;
}
// menu 9 table
export interface callLogModel {
    NotifyNo: string;
    TransDate: string;
    AccDate: string;
    Hospital: string;
    Charge: string;
    Paid: string;
}