"use client";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/ui/field";
import { Input } from "@/registry/ui/input";

export function FieldDemo() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>account</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="email">email</FieldLabel>
          <Input id="email" type="email" placeholder="you@studio.dev" />
          <FieldDescription>we only use this for sign-in.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="name">name</FieldLabel>
          <Input id="name" placeholder="display name" />
        </Field>
        <Field data-invalid="true">
          <FieldLabel htmlFor="password">password</FieldLabel>
          <Input id="password" type="password" aria-invalid />
          <FieldError>at least eight characters.</FieldError>
        </Field>
        <FieldSeparator>or</FieldSeparator>
        <Field>
          <FieldLabel htmlFor="invite">invite code</FieldLabel>
          <Input id="invite" placeholder="optional" disabled />
          <FieldDescription>disabled until billing is set up.</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
