import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import SuggestionListLayaut from '../pages/SuggestionListLayaut';
import Empty from './Empty';
import Separator from './Separator';
import Suggestion from '../../Suggestion';







const list = [
    {
        title: "jesus",
        key: 1,
    },
    {
        title: "eglis",
        key: 2,
    }
   
   
];

class SuggestionList extends Component{
    
    ItemSeparator = () => <Separator />

    renderEmpty = () => <Empty text="No hay sugerencias" />

    

    renderItem(item) {
      
        return(
        <Suggestion {...item}/>
        )
    }
    keyExtractor = (item) => String(item.key)

    render(){
        return(
            <SuggestionListLayaut
            title={"Recomendado para ti"}>

            <FlatList
            data={list}
            renderItem={({ item }) => this.renderItem(item) }
            keyExtractor={this.keyExtractor}
            ItemSeparatorComponent={this.ItemSeparator}
            ListEmptyComponent={this.renderEmpty}
        />
          </SuggestionListLayaut>
        
        )
    }
}

export default SuggestionList;