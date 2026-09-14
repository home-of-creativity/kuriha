import { useState, type FormEvent } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/Button/Button';
import styles from './ContactForm.module.css';

type FormValues = {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const initialValues: FormValues = {
  name: '',
  company: '',
  phone: '',
  email: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeSyrianPhone(phone: string): string | null {
  let digits = phone.replace(/[\s\-().]/g, '');

  if (digits.startsWith('+')) {
    digits = digits.slice(1);
  }

  if (digits.startsWith('00')) {
    digits = digits.slice(2);
  }

  if (digits.startsWith('963')) {
    digits = `0${digits.slice(3)}`;
  }

  if (/^9[3-9]\d{7}$/.test(digits)) {
    digits = `0${digits}`;
  }

  if (/^09[3-9]\d{7}$/.test(digits)) {
    return `+963${digits.slice(1)}`;
  }

  return null;
}

export function ContactForm() {
  const { t } = useLanguage();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    const form = t.contact.form;

    if (!values.name.trim()) {
      nextErrors.name = form.required;
    }

    if (!values.phone.trim()) {
      nextErrors.phone = form.required;
    } else if (!normalizeSyrianPhone(values.phone.trim())) {
      nextErrors.phone = form.invalidPhone;
    }

    if (!values.email.trim()) {
      nextErrors.email = form.required;
    } else if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = form.invalidEmail;
    }

    if (!values.message.trim()) {
      nextErrors.message = form.required;
    }

    return nextErrors;
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
    if (status === 'error') {
      setStatus('idle');
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus('submitting');

    const normalizedPhone = normalizeSyrianPhone(values.phone.trim());

    const payload = {
      name: values.name.trim(),
      company: values.company.trim(),
      phone: normalizedPhone ?? values.phone.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
    };

    try {
      const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error('Request failed');
        }
      } else {
        await new Promise((resolve) => {
          window.setTimeout(resolve, 700);
        });
      }

      setValues(initialValues);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <h3 className={styles.successTitle}>{t.contact.form.successTitle}</h3>
        <p className={styles.successBody}>{t.contact.form.successBody}</p>
        <Button type="button" variant="secondary" onClick={() => setStatus('idle')}>
          {t.contact.form.sendAnother}
        </Button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="contact-name">{t.contact.form.name}</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            placeholder={t.contact.form.namePlaceholder}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            onChange={(event) => handleChange('name', event.target.value)}
          />
          {errors.name && (
            <span id="contact-name-error" className={styles.error}>
              {errors.name}
            </span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-phone">{t.contact.form.phone}</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            placeholder={t.contact.form.phonePlaceholder}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
            onChange={(event) => handleChange('phone', event.target.value)}
          />
          {errors.phone && (
            <span id="contact-phone-error" className={styles.error}>
              {errors.phone}
            </span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-email">{t.contact.form.email}</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            placeholder={t.contact.form.emailPlaceholder}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            onChange={(event) => handleChange('email', event.target.value)}
          />
          {errors.email && (
            <span id="contact-email-error" className={styles.error}>
              {errors.email}
            </span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-company">{t.contact.form.company}</label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            placeholder={t.contact.form.companyPlaceholder}
            onChange={(event) => handleChange('company', event.target.value)}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message">{t.contact.form.message}</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          placeholder={t.contact.form.messagePlaceholder}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          onChange={(event) => handleChange('message', event.target.value)}
        />
        {errors.message && (
          <span id="contact-message-error" className={styles.error}>
            {errors.message}
          </span>
        )}
      </div>

      {status === 'error' && (
        <p className={styles.formError} role="alert">
          {t.contact.form.errorBody}
        </p>
      )}

      <Button type="submit" variant="primary" showArrow disabled={status === 'submitting'}>
        {status === 'submitting' ? t.contact.form.submitting : t.contact.form.submit}
      </Button>
    </form>
  );
}
