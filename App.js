import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { Card } from 'react-nartive-paper';


const baseURL = "https://openexchangerates.org/api/latest.json?app_id=239acfbc66184e11a1cbee16cccca9f8"

const App = () => {

  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((json) => {
        setData(json.rates);
        console.log("RATESS: ", json.rates);
      })
      .catch((error) => alert(error))
      .finally(setLoading(false));
  }, [])


  return (
    <SafeAreaView style={styles.testContainer}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Card style={{ height: 200, margin: 2, padding: 12 }}>
                <Text>
                  {item}
                </Text>
              </Card>
            )}

          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  testContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
});

export default App;
