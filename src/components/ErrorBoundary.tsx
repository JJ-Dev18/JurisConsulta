import * as React from 'react';
import { Text } from 'react-native-paper';

type MyState = {hasError: boolean};

export default class ErrorBoundary extends React.Component<any, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error: Error) {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
    return {hasError: true};
  }

  // componentDidCatch(error:Error, errorInfo:any) {
  //   // También puedes registrar el error en un servicio de reporte de errores
  //   logErrorToMyService(error, errorInfo);

  // }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de repuesto
      return <Text>Something went wrong.</Text>;
    }

    return this.props.children;
  }
}
