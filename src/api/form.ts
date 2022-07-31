import { api } from "./apiConfig";
import { TFormValues } from "../pages/Dashboard/components/Form/Form";

export const sendForm = (data: TFormValues) => api.post(`/posts`, data);
