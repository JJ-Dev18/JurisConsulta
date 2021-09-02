import * as React from 'react';
import { View, Picker } from 'react-native';
import {Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Cupones = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedValue, setSelectedValue] = React.useState('2020')
  // const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View>
      <View>
      <Icon name='info'/>
      <Searchbar
        placeholder="Search"
        // onChangeText={onChangeSearch}
        value={searchQuery}
      />
      </View>
        <View>
            <Picker
                  selectedValue={selectedValue}
                  style={{height: 50, width: 150}}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                  <Picker.Item label="2020" value="2020" />
                  <Picker.Item label="2019" value="2019" />
                </Picker>
                <Picker
                  selectedValue={selectedValue}
                  style={{height: 50, width: 150}}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                  <Picker.Item label="Septiembre" value="Septiembre" />
                  <Picker.Item label="Octubre" value="Octubre" />
                </Picker>
                
        </View>
  </View>

  );
};

export default Cupones;
