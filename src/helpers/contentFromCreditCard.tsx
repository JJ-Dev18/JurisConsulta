

export const dataCreditCard: any = [
  {
    type: 'text',
    name: 'nombreTitular',

    rules: {
      required: {
        value: true,
        message: 'El nombre  es requerido',
      },
    },
    textInputProps: {
      label: 'Nombre del titular de la tarjeta',
    },
  },
  {
    type: 'select',
    name: 'tipoDocumento',

    rules: {
      required: {
        value: true,
        message: 'tipo is required',
      },
    },
    textInputProps: {
      label: 'Tipo de documento',
    },
    options: [
      {
        value: 0,
        label: 'Cedula de Ciudadania',
      },
      {
        value: 1,
        label: 'Cedula de Extranjeria',
      },
      {
        value: 2,
        label: 'Pasaporte',
      },
    ],
  },
  {
    type: 'text',
    name: 'Numero de documento',
    rules: {
      required: {
        value: false,
        message: 'Numero de documento  es requerido',
      },
    },
    textInputProps: {
      label: 'Numero de documento',
      disabled: true,
    },
  },
  {
    type: 'select',
    name: 'Franquicia',

    rules: {
      required: {
        value: true,
        message: 'Franquicia is required',
      },
    },
    textInputProps: {
      label: 'Franquicia',
    },
    options: [
      {
        value: 0,
        label: 'VISA',
      },
      {
        value: 1,
        label: 'MASTERCARD',
      },
    ],
  },

  {
    type: 'text',
    name: 'NumTarjeta',
    rules: {
      required: {
        value: false,
        message: 'Numero de documento  es requerido',
      },
    },
    textInputProps: {
      label: 'Numero de la tarjeta de credito',
    },
  },
  {
    type: 'text',
    name: 'Codigo de seguridad',
    rules: {
      required: {
        value: true,
        message: 'Codigo de seguridad es requerido',
      },
    },
    textInputProps: {
      label: 'Codigo de seguridad CVV ',
      disabled: false,
    },
  },

  {
    type: 'select',
    name: 'Numero de cuotas',
    rules: {
      required: {
        value: false,
        message: 'Numero de cuotas  es requerido',
      },
    },
    textInputProps: {
      label: 'Numero de cuotas',
      disabled: false,
    },
    options: [
      {
        value: 0,
        label: '1',
      },
      {
        value: 1,
        label: '2',
      },
    ],
  },
];