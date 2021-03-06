export class taskModel {
  Description: string
  Amount: number
  Id: number
  Label: string
  Deductible: boolean

  constructor() {
    this.Description = ''
    this.Amount = 0
    this.Id = 0
    this.Label = ''
    this.Deductible = false
  }
}
export class locationModel {
  Angaende: string
  Fastighet: string
  Jobbstart: string

  constructor() {
    this.Angaende = ''
    this.Fastighet = ''
    this.Jobbstart = ''
  }
}
export class repModel {
  names: string
  mail: string
  mobile: string

  constructor() {
    this.names = ''
    this.mail = ''
    this.mobile = ''
  }
}
export class disclaimerModel {
  fakturering: string
  giltig: string
  garanti: string
  arbetstid: string
  forsakring: string
  avvikelse: string
  extra: string
  rot: string
  ovrigt: string

  constructor() {
    this.fakturering = ''
    this.giltig = ''
    this.garanti = ''
    this.arbetstid = ''
    this.forsakring = ''
    this.avvikelse = ''
    this.extra = ''
    this.rot = ''
    this.ovrigt = ''
  }
}
export class companyModel {
  previewImage: string
  leadin: string
  orgnummer: string
  hemsida: string
  address: {
    ett: string
    tva: string
  }
  fskatt: boolean

  constructor() {
    this.previewImage = ''
    this.leadin = ''
    this.orgnummer = ''
    this.hemsida = ''
    this.fskatt = false
    this.address = new addressModel()
  }
}
export class addressModel {
  ett: string
  tva: string

  constructor() {
    this.ett = ''
    this.tva = ''
  }
}

export class avdragModel {
  percentage: number
  maxamount: number

  constructor() {
    this.percentage = 0
    this.maxamount = 0
  }
}
