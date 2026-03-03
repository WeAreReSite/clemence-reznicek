'use client';

import { useState, useCallback } from 'react';
import { CheckCircleIcon } from '@phosphor-icons/react';
import { Input, Textarea, Select, Button } from '@/components/ui';
import { contactForm as formContent } from '../../../content/contact';
import { cn } from '@/lib/utils';

interface FormData {
  prenom: string;
  telephone: string;
  type_soin: string;
  message: string;
}

interface FormErrors {
  prenom?: string;
  telephone?: string;
  type_soin?: string;
}

function validateField(name: keyof FormErrors, value: string): string | undefined {
  switch (name) {
    case 'prenom':
      if (!value.trim()) return formContent.validation.prenomRequired;
      if (value.trim().length < 2) return formContent.validation.prenomMinLength;
      return undefined;
    case 'telephone': {
      if (!value.trim()) return formContent.validation.telephoneRequired;
      // Allow French phone formats: 06 XX XX XX XX, +33 6 XX XX XX XX, etc.
      const phoneRegex = /^(\+33|0)[1-9](\s?\d{2}){4}$/;
      const cleaned = value.replace(/[\s.-]/g, '');
      if (!phoneRegex.test(cleaned)) return formContent.validation.telephoneInvalid;
      return undefined;
    }
    case 'type_soin':
      if (!value) return formContent.validation.typeSoinRequired;
      return undefined;
    default:
      return undefined;
  }
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    prenom: '',
    telephone: '',
    type_soin: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));

      // Clear error on change if field was touched
      if (touched[name]) {
        const fieldName = name as keyof FormErrors;
        const error = validateField(fieldName, value);
        setErrors((prev) => ({ ...prev, [fieldName]: error }));
      }
    },
    [touched]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));

      const fieldName = name as keyof FormErrors;
      if (fieldName in { prenom: 1, telephone: 1, type_soin: 1 }) {
        const error = validateField(fieldName, value);
        setErrors((prev) => ({ ...prev, [fieldName]: error }));
      }
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Validate all required fields
      const newErrors: FormErrors = {
        prenom: validateField('prenom', formData.prenom),
        telephone: validateField('telephone', formData.telephone),
        type_soin: validateField('type_soin', formData.type_soin),
      };

      // Mark all required fields as touched
      setTouched({ prenom: true, telephone: true, type_soin: true });
      setErrors(newErrors);

      // Check if any errors
      const hasErrors = Object.values(newErrors).some(Boolean);
      if (hasErrors) return;

      // Simulate submission
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 800);
    },
    [formData]
  );

  if (isSubmitted) {
    return (
      <div
        className="mx-auto max-w-[480px] text-center py-12"
        role="status"
        aria-live="polite"
      >
        <div className="flex justify-center mb-4">
          <CheckCircleIcon size={48} weight="light" className="text-success" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-indigo-500 mb-2">
          {formContent.successTitle} {formData.prenom} !
        </h3>
        <p className="font-body text-base text-neutral-600 leading-relaxed">
          {formContent.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="form"
      aria-label="Formulaire de contact"
      className="mx-auto max-w-[480px] flex flex-col gap-5"
      noValidate
    >
      <Input
        name="prenom"
        type="text"
        label={formContent.fields.prenom.label}
        required
        aria-required="true"
        value={formData.prenom}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={touched.prenom ? errors.prenom : undefined}
        className="min-h-[3rem]"
        autoComplete="given-name"
      />

      <Input
        name="telephone"
        type="tel"
        label={formContent.fields.telephone.label}
        required
        aria-required="true"
        value={formData.telephone}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={touched.telephone ? errors.telephone : undefined}
        className="min-h-[3rem]"
        autoComplete="tel"
        placeholder={formContent.fields.telephone.placeholder}
      />

      <Select
        name="type_soin"
        label={formContent.fields.typeSoin.label}
        required
        aria-required="true"
        value={formData.type_soin}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={touched.type_soin ? errors.type_soin : undefined}
        className={cn('min-h-[3rem]', !formData.type_soin && 'text-neutral-500')}
      >
        <option value="" disabled>
          {formContent.fields.typeSoin.placeholder}
        </option>
        {formContent.fields.typeSoin.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>

      <Textarea
        name="message"
        label={formContent.fields.message.label}
        rows={3}
        value={formData.message}
        onChange={handleChange}
        onBlur={handleBlur}
        className="min-h-[3rem]"
      />

      <Button
        type="submit"
        variant="warm"
        size="lg"
        fullWidth
        loading={isSubmitting}
        className="mt-2"
      >
        {formContent.submitLabel}
      </Button>
    </form>
  );
}
