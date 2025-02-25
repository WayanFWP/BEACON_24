import { string } from "zod"

export type TTeamName = {
    teamName: string,
    school: string,
    schoolAddress: string,
    region: string, // Jawa, Sumatera, Bali dan Nusa Tenggara, Kalimantan, Sulawesi, Papua dan Maluku, International
}

export type TLeaderName = {
    name: string,
    email: string,
    phone: number,
    line: string,
    identityCard: string,
}

export type TMembersName = {
    name: string,
    email: string,
    phone: number,
    line: string,
    identityCard: string,
}

export type TOtherFields = {
    invoice: string,
    promo: string,
    refferal: string,
    dateCreated: string,
}

export type TRegisterCompetition = {
    team: TTeamName,
    leader: TLeaderName,
    members: TMembersName[],
    others: TOtherFields,
}

export type TBenmaxLeaderName = {
    name: string,
    nim: string,
    email: string,
    phone: number,
    line: string,
    school: string,
    schoolAddress: string,
    region: string,
    identityCard: string,
}

export type TBenmaxMembersName = {
    name: string,
    nim: string,
    email: string,
    phone: number,
    line: string,
    school: string,
    schoolAddress: string,
    region: string,
    identityCard: string,
}

export type TBenmaxOtherFields = {
    abstract: string,
    dateCreated: string,
}

export type TRegisterCompetitionBenmax = {
    team: TTeamName,
    leader: TBenmaxLeaderName,
    members: TBenmaxMembersName[],
    others: TBenmaxOtherFields,
}

export type TFullPaperBenmax = {
    team: string,
    paper: string,
    discount: string,
    payment: string,
    dateCreated: string,
}