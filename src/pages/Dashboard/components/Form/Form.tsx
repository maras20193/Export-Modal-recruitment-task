import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, RadioInput, Select } from "../../../../components";
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
      <S.InputsWrapper>
        <Input
          label="Report name"
          placeholder="Shareablee report"
          {...register("reportName")}
          error={errors?.reportName?.message}
        />
        <RadioInput
          label="Format"
          {...register("format")}
          error={errors?.format?.message}
          options={["Excel", "CSV"]}
        />
        <Input
          label="E-mail to"
          placeholder="client"
          {...register("email")}
          error={errors?.email?.message}
        />
        <RadioInput
          label="Schedule"
          {...register("schedule")}
          error={errors?.schedule?.message}
          options={["No Repeat", "Specific Date", "Daily", "Weekly"]}
        />

        {scheduleType === "daily" ? (
          <Input
            type="time"
            label="Everyday at"
            {...register("time")}
            error={errors?.time?.message}
          />
        ) : null}

        {scheduleType === "specific date" ? (
          <S.InputRow>
            <Input
              type="date"
              label="Date"
              {...register("date")}
              error={errors?.date?.message}
            />
            <Input
              type="time"
              label="at"
              {...register("time")}
              error={errors?.time?.message}
            />
          </S.InputRow>
        ) : null}

        {scheduleType === "weekly" ? (
          <S.InputRow>
            <Select
              label="Every"
              {...register("weekday")}
              error={errors?.weekday?.message}
            />
            <Input
              type="time"
              label="at"
              {...register("time")}
              error={errors?.time?.message}
            />
          </S.InputRow>
        ) : null}
      </S.InputsWrapper>

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
