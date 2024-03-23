"use client";

import { verifyAndUpdateEmail } from "@/actions/update-email-verification";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { CardWrapper } from "./card-wrapper";

export const UpdateEmailVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;
    if (!token) {
      setError("Token is missing.");
      return;
    }
    verifyAndUpdateEmail(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to profile"
      backButtonHref="/profile"
    >
      <div className="flex items-center w-full justify-center">
        {!success && !error && <BeatLoader color="#6d28d9" />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};
