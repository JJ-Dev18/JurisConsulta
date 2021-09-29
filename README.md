
   ![Logo](https://res.cloudinary.com/dbi95d6gs/image/upload/v1630290630/Logo/Logo_JC_letras_blancas_rkhw5p.png)

    
# JurisConsultaAPP

Frontend de Aplicacion movil para consultas juridicas.


## Caracteristicas

- Light/dark mode
- Manejo de fechas para agendamiento de citas 
- Simple splash screen
- Creacion de logo y animacion
- Vista para cliente  y vista para Abogado

  
## Screenshots

[Cliente Light Mode](https://res.cloudinary.com/dbi95d6gs/image/upload/v1632941390/Logo/WhatsApp_Image_2021-09-29_at_1.48.05_PM_aax6yy.jpg)
[Abogado Dark Mode](https://res.cloudinary.com/dbi95d6gs/image/upload/v1632941359/Logo/WhatsApp_Image_2021-09-29_at_1.48.05_PM_1_cs4imf.jpg)

  
  
## Tecnologias (dependencias)

**Client:**

- [@React Native](https://reactnative.dev/docs/getting-started)
- [@Redux](https://redux.js.org/introduction/getting-started)
- [@Typescript](https://reactnative.dev/docs/typescript)
- [@Axios](https://www.npmjs.com/package/axios)
  Redux-thunk,Moment, React-native-paper,
  react-native-paper-form-builder,react-native-exception-handler, React-native-snap-carousel,
  React-native-splash-screen

**Server:** Api 

  
## Instalacion

Instalar dependencias mediante npm

```bash
  npm install 

```
    
## Correr localmente


Iniciar el server

```bash
  npx react-native run-android
```

  
## Carpetas

**Componentes:**

- Abogado Contiene todos los componentes referidos a la vista del abogado.

- App   Contiene componentes usados en clientes y en abogados

- Cliente Contiene componentes referidos a la vista del cliente

- Comprar  Contiene componentes de los formularios de metodos de pago y la tarjeta de compra

- Login   Contiene todo lo relacionado al  inicio al registro y de eleccion de tipo de usuario

- Principal Contiene componentes de el home del cliente

- #errorboundary Componente de react para manejo de errores

**Helpers:**

- contentFormMetods contenido del formulario de los metodos de pago

- contenFromCreditCard contenido del formulario de tarjeta de credito

**Hooks:**

- useAbogados Custom Hook consumiendo api con axios para listar abogados

**Images:**
Imagenes

**Interfaces:**
Interfaces para abogados

**Navigation:**

- Abogado Componentes de navegacion de la vista de abogados

- Cliente Componentes de navegacion de la vista de clientes

-  DrawerNavigator Drawer general para ambas vistas
- StackLogin      Stack General


**Reducers:**

- AuthReducer Reducer para la autenticacion (sin implementar)

- UiReducer Reducer para el manejo de el tema(Dark Ligth)

**Screens:**
Paginas principales de abogados y clientes

**Store:**
El store de redux 

**Types:**
Archivo base para manejar los nombres de los types en redux

  
**App.tsx:** Archivo principal con el provider del store y el #errorboundary  
## Cambiar de abogado a cliente

Para cambiar en desarrollo de cliente a Abogado

```bash
  Pulsar en la campana de notificacaciones

```
## Optimizaciones

El formulario de inicio de sesion y de registro falta implementar el formulario 
utilizando la dependencia react-native-paper-form-builder

Implementar lazy load para la carga de abogados y clientes.
  
  ##Documentacion react native paper form
  https://www.npmjs.com/package/react-native-paper-form-builder
## Soporte

Para soporte, email juanjomb1_vi@hotmail.com  .

  
## Authors

- [@JJDEV18](https://github.com/JJ-Dev18)

  
## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```

  
