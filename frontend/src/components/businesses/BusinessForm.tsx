"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import {
  businessStatusLabels,
  businessTypeOptions,
} from "@/config/businesses";
import { cn } from "@/lib/utils";
import type {
  Business,
  BusinessInput,
  BusinessStatus,
  BusinessType,
} from "@/types/business";

type BusinessFormProps = {
  initialValues?: Business;
  submitLabel: string;
  onSubmit: (values: BusinessInput) => void;
  onCancel: () => void;
};

type FormErrors = Partial<Record<keyof BusinessInput, string>>;

const selectClassName = cn(
  "flex h-11 w-full rounded-lg border border-border bg-surface px-3 text-sm text-foreground",
  "focus:border-gold/40 focus:outline-none focus:ring-2 focus:ring-ring",
);

const emptyValues: BusinessInput = {
  name: "",
  city: "",
  type: "Bar",
  status: "pendiente",
  address: "",
  email: "",
  phone: "",
  description: "",
};

export function BusinessForm({
  initialValues,
  submitLabel,
  onSubmit,
  onCancel,
}: BusinessFormProps) {
  const [values, setValues] = useState<BusinessInput>(
    initialValues
      ? {
          name: initialValues.name,
          city: initialValues.city,
          type: initialValues.type,
          status: initialValues.status,
          address: initialValues.address,
          email: initialValues.email,
          phone: initialValues.phone,
          description: initialValues.description,
        }
      : emptyValues,
  );
  const [errors, setErrors] = useState<FormErrors>({});

  function updateField<K extends keyof BusinessInput>(
    key: K,
    value: BusinessInput[K],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function validate(next: BusinessInput): FormErrors {
    const nextErrors: FormErrors = {};

    if (!next.name.trim()) {
      nextErrors.name = "El nombre es obligatorio.";
    }
    if (!next.city.trim()) {
      nextErrors.city = "La ciudad es obligatoria.";
    }
    if (!next.address.trim()) {
      nextErrors.address = "La dirección es obligatoria.";
    }
    if (!next.email.trim()) {
      nextErrors.email = "El email es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email.trim())) {
      nextErrors.email = "Introduce un email válido.";
    }
    if (!next.phone.trim()) {
      nextErrors.phone = "El teléfono es obligatorio.";
    }
    if (!next.description.trim()) {
      nextErrors.description = "La descripción es obligatoria.";
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    onSubmit({
      ...values,
      name: values.name.trim(),
      city: values.city.trim(),
      address: values.address.trim(),
      email: values.email.trim().toLowerCase(),
      phone: values.phone.trim(),
      description: values.description.trim(),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="business-name">Nombre</Label>
          <Input
            id="business-name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Ej. Luna Lounge"
            error={errors.name}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="business-city">Ciudad</Label>
          <Input
            id="business-city"
            value={values.city}
            onChange={(event) => updateField("city", event.target.value)}
            placeholder="Madrid"
            error={errors.city}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="business-type">Tipo</Label>
          <select
            id="business-type"
            className={selectClassName}
            value={values.type}
            onChange={(event) =>
              updateField("type", event.target.value as BusinessType)
            }
          >
            {businessTypeOptions.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="business-status">Estado</Label>
          <select
            id="business-status"
            className={selectClassName}
            value={values.status}
            onChange={(event) =>
              updateField("status", event.target.value as BusinessStatus)
            }
          >
            {(Object.keys(businessStatusLabels) as BusinessStatus[]).map(
              (status) => (
                <option key={status} value={status}>
                  {businessStatusLabels[status]}
                </option>
              ),
            )}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="business-phone">Teléfono</Label>
          <Input
            id="business-phone"
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+34 600 000 000"
            error={errors.phone}
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="business-address">Dirección</Label>
          <Input
            id="business-address"
            value={values.address}
            onChange={(event) => updateField("address", event.target.value)}
            placeholder="Calle, número y ciudad"
            error={errors.address}
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="business-email">Email</Label>
          <Input
            id="business-email"
            type="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="hola@empresa.es"
            error={errors.email}
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="business-description">Descripción</Label>
          <textarea
            id="business-description"
            value={values.description}
            onChange={(event) =>
              updateField("description", event.target.value)
            }
            rows={4}
            placeholder="Describe el concepto del local..."
            className={cn(
              "flex w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-foreground",
              "placeholder:text-muted-foreground",
              "focus:border-gold/40 focus:outline-none focus:ring-2 focus:ring-ring",
              errors.description &&
                "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20",
            )}
          />
          {errors.description && (
            <p className="text-xs text-red-400">{errors.description}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" variant="primary">
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
