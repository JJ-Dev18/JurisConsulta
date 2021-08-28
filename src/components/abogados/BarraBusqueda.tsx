import * as React from 'react';
import {Searchbar} from 'react-native-paper';

const BarraBusqueda = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query:any) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Buscar Abogado"
      style={{height: 40}}
      onChangeText={onChangeSearch}
      value={searchQuery}
      
    />
  );
};

export default BarraBusqueda;
