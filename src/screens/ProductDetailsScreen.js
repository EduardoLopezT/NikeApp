import {
  StyleSheet,
  Image,
  FlatList,
  useWindowDimensions,
  Text,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import products from "../data/products";

const ProductDetailsScreen = () => {
  const product = products[0];
  const { width } = useWindowDimensions();

  const addToCart = () => {
    console.warn("Add to cart");
  };

  return (
    /*Image Carousel*/
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: width, aspectRatio: 1 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 20, paddingBottom: 65 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
  button: {
    position: "absolute",
    width: "70%",
    backgroundColor: "black",
    bottom: 30,
    borderRadius: 20,
    alignSelf: "center",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "500",
  },
});
