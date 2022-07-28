import * as yup from "yup";

export const ResearchSchema = yup.object({
  title: yup.string().required("Título é um campo obrigatório"),
  visibility: yup.string().required("Visibilidade é um campo obrigatório"),
  description: yup.string().required("Descrição é um campo obrigatório"),
  initialAge: yup.number().positive().integer(),
  finalAge: yup.number().positive().integer().moreThan(yup.ref("initialAge")),
  initialIncome: yup.number().positive().integer(),
  finalIncome: yup
    .number()
    .positive()
    .integer()
    .moreThan(yup.ref("initialIncome")),
  race: yup.string(),
  gender: yup.string(),
  sexualOrientation: yup.string(),
});
