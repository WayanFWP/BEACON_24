import { z } from "zod";
import { FinalBenmax, RegisterCompetitionRegion } from "./register-competition-enum.contract";

export const teamNameSchema = z.object({
    teamName: z.string().min(1, "Please enter this field"),
    school: z.string().min(1, "Please enter this field"),
    schoolAddress: z.string().min(1, "Please enter this field"),
    region: z.nativeEnum(RegisterCompetitionRegion, { message: 'Please enter this field' }),
});

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_TYPES = ["application/pdf", "image/jpeg", "image/jpg", "image/png", "image/webp"];
const ABSTRACT_TYPES = ["application/pdf"];

export const membersNameSchema = z.object({
    name: z.string().min(1, "Please enter this field"),
    email: z.string().email('Please enter valid email address'),
    phone: z.string().min(8, "Please enter valid phone number"),
    line: z.string().min(1, "Please enter this field"),
    identityCard: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_TYPES.includes(files?.[0]?.type),
      ".pdf, .jpg, .jpeg, .png and .webp files are accepted."
    ),
});

export const otherFieldsSchema = z.object({
    refferal: z.string().nullable(),
    promo: z.string().nullable(),
    invoice: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_TYPES.includes(files?.[0]?.type),
      ".pdf, .jpg, .jpeg, .png and .webp files are accepted."
    ),
});

export const registerCompetitionSchema = z.object({
    team: teamNameSchema,
    leader: membersNameSchema,
    memberOne: membersNameSchema,
    memberTwo: membersNameSchema,
    others: otherFieldsSchema,
});

export const benmaxTeamNameSchema = z.object({
  teamName: z.string().min(1, "Please enter this field"),
});

export const benmaxLeaderNameSchema = z.object({
  name: z.string().min(1, "Please enter this field"),
  nim: z.string().min(1, "Please enter this field"),
  school: z.string().min(1, "Please enter this field"),
  schoolAddress: z.string().min(1, "Please enter this field"),
  region: z.nativeEnum(RegisterCompetitionRegion, { message: 'Please enter this field' }),
  email: z.string().email('Please enter valid email address'),
  phone: z.string().min(8, "Please enter valid phone number"),
  line: z.string().min(1, "Please enter this field"),
  identityCard: z
  .any()
  .refine((files) => files?.length == 1, "Image is required.")
  .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
  .refine(
    (files) => ACCEPTED_TYPES.includes(files?.[0]?.type),
    ".pdf, .jpg, .jpeg, .png and .webp files are accepted."
  ),
});

export const benmaxMembersNameSchema = z.object({
  name: z.string().nullable(),
  nim: z.string().nullable(),
  school: z.string().nullable(),
  schoolAddress: z.string().nullable(),
  region: z.nativeEnum(RegisterCompetitionRegion).nullable(),
  email: z.string().nullable(),
  phone: z.string().nullable(),
  line: z.string().nullable(),
  identityCard: z
  .any()
  .refine((files) => files?.length == 1, "Image is required.")
  .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
  .refine(
    (files) => ACCEPTED_TYPES.includes(files?.[0]?.type),
    ".pdf, .jpg, .jpeg, .png and .webp files are accepted."
  ).nullable(),
});

export const benmaxOtherFieldsSchema = z.object({
  abstract: z
  .any()
  .refine((files) => files?.length == 1, "File is required.")
  .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
  .refine(
    (files) => ABSTRACT_TYPES.includes(files?.[0]?.type),
    "only .pdf files are accepted."
  ),
});

export const registerBenmaxSchema = z.object({
    team: benmaxTeamNameSchema,
    leader: benmaxLeaderNameSchema,
    memberOne: benmaxMembersNameSchema,
    memberTwo: benmaxMembersNameSchema,
    others: benmaxOtherFieldsSchema,
});

export const finalBenmaxSchema = z.object({
  team: z.string().min(1, "Please enter this field"),
  paper: z
  .any()
  .refine((files) => files?.length == 1, "File is required.")
  .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
  .refine(
    (files) => ACCEPTED_TYPES.includes(files?.[0]?.type),
    "only .pdf, .jpg, .jpeg, .png, and .webp files are accepted."
  ),
  discount: z
  .any()
  .refine((files) => files?.length == 1, "File is required.")
  .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
  .refine(
    (files) => ACCEPTED_TYPES.includes(files?.[0]?.type),
    "only .pdf, .jpg, .jpeg, .png, and .webp files are accepted."
  ).nullable(),
  payment: z
  .any()
  .refine((files) => files?.length == 1, "File is required.")
  .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
  .refine(
    (files) => ACCEPTED_TYPES.includes(files?.[0]?.type),
    "only .pdf, .jpg, .jpeg, .png, and .webp files are accepted."
  ),
});

export type teamNameType = z.infer<typeof teamNameSchema>;
export type leaderNameType = z.infer<typeof membersNameSchema>;
export type membersNameType = z.infer<typeof membersNameSchema>;
export type otherFieldsType = z.infer<typeof otherFieldsSchema>;
export type registerCompetitionType = z.infer<typeof registerCompetitionSchema>;

export type registerBenmaxType = z.infer<typeof registerBenmaxSchema>;

export type finalBenmaxType = z.infer<typeof finalBenmaxSchema>;