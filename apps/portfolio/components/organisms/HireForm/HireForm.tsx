import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Alert, AlertTitle, CircularProgress, Box, Button, Grid, Paper, Typography, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import { useTranslation } from '../../../hooks/useTranslation';

declare const grecaptcha: any;

export const HireForm = (props: HireFormProps) => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const t = useTranslation();

  const validationSchema = yup.object({
    name: yup
      .string()
      .required(t('hireForm.name.required') as string),
    email: yup
      .string()
      .email(t('hireForm.email.type') as string)
      .required(t('hireForm.email.required') as string),
    message: yup
      .string()
      .max(300, t('hireForm.message.max') as string)
      .required(t('hireForm.message.required') as string),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values, helpers) => {
      setSent(false);
      setError('');
      helpers.setSubmitting(true);
      validateReCaptcha().then(async (reCaptcha: string) => {
        return axios.post('/api/send-mail', { ...values, reCaptcha }).then(() => {
          setSent(true);
          formik.resetForm({});
        });
      }).catch((error) => {
        if (error.response) {
          setError(error.response.data.message);
          return;
        }
        setError('hireForm.alert.error.message');
      }).finally(() => {
        helpers.setSubmitting(false);
      });
    },
  });

  const validateReCaptcha = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      grecaptcha.ready(() => {
        grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          { action: 'submit' },
        ).then(resolve).catch(reject);
      });
    });
  };

  return (
    <Paper id={t('hireForm.title') as string} component="section">
      <Head>
        <script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}></script>
      </Head>
      <Box p={2}>
        <Box mb={2}>
          <Typography component="h3" variant="h6">
            {t('hireForm.title')}
          </Typography>
        </Box>
        {sent && (
          <Box mb={2}>
            <Alert variant="outlined" severity="success">
              <AlertTitle>{t('hireForm.alert.success.title')}</AlertTitle>
              {t('hireForm.alert.success.message')}
            </Alert>
          </Box>
        )}
        {error && (
          <Box mb={2}>
            <Alert variant="outlined" severity="error">
              <AlertTitle>{t('hireForm.alert.error.title')}</AlertTitle>
              {t(error)}
            </Alert>
          </Box>
        )}
        <Grid
          component="form"
          container
          spacing={3}
          onSubmit={formik.handleSubmit}
          noValidate
        >
          <Grid item xs={12} sm={6}>
            <TextField
              label={t('hireForm.name.label')}
              variant="filled"
              color="secondary"
              fullWidth
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="email"
              label={t('hireForm.email.label')}
              variant="filled"
              color="secondary"
              fullWidth
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={t('hireForm.message.label')}
              variant="filled"
              color="secondary"
              multiline
              rows={4}
              fullWidth
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="outlined" color="secondary" size="large" disabled={formik.isSubmitting}>
              {formik.isSubmitting && (
                <>
                  <CircularProgress color="secondary" size={20} />
                  &nbsp;
                </>
              )}
              {t('hireForm.button.text')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

type HireFormProps = {

};
