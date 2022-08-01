import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Input,
  RadioInput,
  Select,
  ShortInput,
} from "../../../../components";
import * as S from "./Form.styled";
import { schema } from "./validationSchema";
import { sendForm } from "../../../../api";

export type FormProps = {
  closeModal: () => void;
};

export type TFormValues = {
  reportName: string;
  format: string;
  email: string;
  schedule: string;
  time?: string;
  date?: string;
  weekday?: string;
};

export const Form = ({ closeModal }: FormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<TFormValues>({ resolver: yupResolver(schema) });

  const scheduleType = watch("schedule");

  const submitForm = async (data: TFormValues) => {
    console.log(data);

    try {
      setIsLoading(true);
      await sendForm(data);
      setIsLoading(false);
      console.log("pomyslnie wyslano formularz");
      closeModal();
    } catch (err) {
      setIsLoading(false);
      console.log("formularz nie zostal wyslany ");
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(submitForm)}>
      <S.FormItemWrapper>
        <S.FormItem>
          <Input
            label="Report name"
            placeholder="Shareablee report"
            {...register("reportName")}
            error={errors?.reportName?.message}
          />
        </S.FormItem>
        <S.FormItem>
          <RadioInput
            label="Format"
            {...register("format")}
            error={errors?.format?.message}
            options={["Excel", "CSV"]}
          />
        </S.FormItem>
        <S.FormItem>
          <Input
            label="E-mail to"
            placeholder="client"
            {...register("email")}
            error={errors?.email?.message}
          />
        </S.FormItem>
        <S.FormItem>
          <RadioInput
            label="Schedule"
            {...register("schedule")}
            error={errors?.schedule?.message}
            options={["No Repeat", "Specific Date", "Daily", "Weekly"]}
          />
        </S.FormItem>

        {scheduleType === "daily" ? (
          <S.FormItem>
            <ShortInput
              isShortWidth
              type="time"
              label="Everyday at"
              {...register("time")}
              error={errors?.time?.message}
            />
          </S.FormItem>
        ) : null}

        {scheduleType === "specific date" ? (
          <S.FormItem>
            <ShortInput
              type="date"
              label="Date"
              {...register("date")}
              error={errors?.date?.message}
            />
            <S.ExtraLabel>at</S.ExtraLabel>
            <ShortInput
              type="time"
              {...register("time")}
              error={errors?.time?.message}
            />
          </S.FormItem>
        ) : null}

        {scheduleType === "weekly" ? (
          <S.FormItem>
            <Select
              label="Every"
              {...register("weekday")}
              error={errors?.weekday?.message}
            />
            <S.ExtraLabel>at</S.ExtraLabel>
            <ShortInput
              type="time"
              {...register("time")}
              error={errors?.time?.message}
            />
          </S.FormItem>
        ) : null}
      </S.FormItemWrapper>

      <S.Footer>
        <Button.Secondary type="button" onClick={closeModal}>
          Cancel
        </Button.Secondary>
        <Button.Primary uppercase type="submit">
          Ok
        </Button.Primary>
        {isLoading && "loading..."}
      </S.Footer>
    </S.Form>
  );
};
