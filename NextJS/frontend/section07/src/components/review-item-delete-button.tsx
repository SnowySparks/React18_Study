"use client";

import { deleteReviewAction } from "@/actions/delete-review-action";
import { useActionState, useRef } from "react";

export default function ReviewItemDeleteButton({
  reviewId,
  bookId,
}: {
  reviewId: number;
  bookId: number;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    deleteReviewAction,
    null
  );
  return (
    <form ref={formRef} action={formAction}>
      <input name="reviewId" defaultValue={reviewId} type="hidden" />
      <input name="bookId" defaultValue={bookId} type="hidden" />
      <div
        onClick={() => {
          formRef.current?.requestSubmit();
        }}
      >
        삭제
      </div>
    </form>
  );
}
