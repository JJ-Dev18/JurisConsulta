
import { useState } from 'react';
import { LogicProps } from 'react-native-paper-form-builder/dist/Types/Types';


export const useDataForm = () => {

   const [state, setstate] = useState('none')
   
    const dataFormMethod: any = [
      {
        type: 'select',
        name: 'banco',

        rules: {
          required: {
            value: true,
            message: 'Banco  es requerido',
          },
        },
        textInputProps: {
          label: 'Banco',
          style: {display: state}
        },
        options: [
          {
            value: 0,
            label: 'Bancamia S.A',
          },
          {
            value: 1,
            label: 'Banco Agrario',
          },
        ],
      },
      {
        type: 'select',
        name: 'tipoPersona',

        rules: {
          required: {
            value: true,
            message: 'tipo is required',
          },
        },
        textInputProps: {
          label: 'Tipo de persona',
        },
        options: [
          {
            value: 0,
            label: 'Persona Natural',
          },
          {
            value: 1,
            label: 'Persona Juridica',
          },
        ],
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
        type: 'text',
        name: 'Nombres',
        rules: {
          required: {
            value: false,
            message: 'Numero de documento  es requerido',
          },
        },
        textInputProps: {
          label: 'Nombres',
          disabled: false,
        },
      },
      {
        type: 'text',
        name: 'Apellidos',
        rules: {
          required: {
            value: false,
            message: 'Numero de documento  es requerido',
          },
        },
        textInputProps: {
          label: 'Apellidos',
          disabled: false,
        },
      },

      {
        type: 'text',
        name: 'Numero Telefonico',
        rules: {
          required: {
            value: false,
            message: 'Numero de documento  es requerido',
          },
        },
        textInputProps: {
          label: 'Numero Telefonico',
          disabled: false,
        },
      },
    ];


   return{
     setstate,
     dataFormMethod
   }
}

