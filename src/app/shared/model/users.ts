export interface Iusers {
  userName: string
  userId: string
  userRole: string
  profileDescription: string
  profileImage: string
  skills: string[]
  experienceYears: number
  isActive: boolean
  address: Address
}

export interface Address {
  current: Current
  permanent: Permanent
}

export interface Current {
  city: string
  state: string
  country: string
  zipcode: string
}

export interface Permanent {
  city: string
  state: string
  country: string
  zipcode: string
}