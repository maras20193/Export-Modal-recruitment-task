import * as yup from "yup";

export const schema = yup.object({
  reportName: yup.string().required("Report name is required"),
  format: yup.string().required("Format is required").nullable(),
  email: yup.string().required("Email is required").email("Email is incorrect"),
  schedule: yup.string().required("Schedule is required").nullable(),
  time: yup
    .string()
    .when("schedule", {
      is: "specific date",
      then: yup.string().required("Time is required"),
      otherwise: yup.string().notRequired(),
    })
    .when("schedule", {
      is: "weekly",
      then: yup.string().required("Time is required"),
      otherwise: yup.string().notRequired(),
    })
    .when("schedule", {
      is: "daily",
      then: yup.string().required("Time is required"),
      otherwise: yup.string().notRequired(),
    }),

  date: yup.string().when("schedule", {
    is: "specific date",
    then: yup.string().required("Date is required"),
    otherwise: yup.string().notRequired(),
  }),
  weekday: yup.string().when("schedule", {
    is: "weekly",
    then: yup.string().required("Weekday is required"),
    otherwise: yup.string().notRequired(),
  }),
});
