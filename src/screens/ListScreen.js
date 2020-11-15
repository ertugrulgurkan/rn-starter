import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Monica' },
        { name: 'Chandler' },
        { name: 'Joey' },
        { name: 'Phoebe' },
        { name: 'Ross' },
        { name: 'Ross2' },
        { name: 'Ross3' },
        { name: 'Ross4' },

    ];
    return (
        <FlatList
            //horizontal
            //showsHorizontalScrollIndicator = {false}
            //showsVerticalScrollIndicator = {false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name}</Text>
            }} />
    );
}


const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10
    }
});

export default ListScreen;