import React from 'react';
import { View, Text, FlatList, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const productData = [
  {
    id: '1',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: '(15)',
    imageUrl: 'https://phukienpc.vn/wp-content/uploads/2019/09/dau-chuyen-ps2-sang-usb-chuot-usb-mainboard-phukienpc-vn-2.jpg',
  },
  {
    id: '2',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: '(15)',
    imageUrl: 'https://phucanhcdn.com/media/product/18245_usb_sang_ps2.jpg',
  },
  {
    id: '3',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: '(15)',
    imageUrl: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/425/698/products/dau-doi-ps2-ra-usb-cho-chuot-ps2.jpg?v=1629111328773',
  },
  {
    id: '4',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: '(15)',
    imageUrl: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/425/698/products/dau-doi-ps2-ra-usb-cho-chuot-ps2.jpg?v=1629111328773',
  },
  {
    id: '5',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: '(15)',
    imageUrl: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/425/698/products/dau-doi-ps2-ra-usb-cho-chuot-ps2.jpg?v=1629111328773',
  },
  {
    id: '6',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: '(15)',
    imageUrl: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/425/698/products/dau-doi-ps2-ra-usb-cho-chuot-ps2.jpg?v=1629111328773',
  },
];

const ProductListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <View style={styles.productDetails}>
        <Text style={styles.productRating}>★ ★ ★ ★ ☆</Text>
        <Text style={styles.productReviews}>{item.reviews}</Text>
        <Text style={styles.productDiscount}>{item.discount}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topNavbar}>
        {/* Back button to navigate to ChatScreen */}
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Entypo name="chevron-left" size={28} color="white" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBar}
          placeholder="Dây cáp usb"
        />
        <TouchableOpacity style={styles.cartButton}>
          <MaterialIcons name="shopping-cart" size={28} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={productData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2} // Display items in 2 columns
        contentContainerStyle={styles.productList}
      />

      <View style={styles.bottomNavbar}>
        <TouchableOpacity>
          <Entypo name="menu" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="home" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="keyboard-return" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  topNavbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    padding: 10,
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  cartButton: {
    padding: 5,
  },
  productList: {
    padding: 10,
  },
  productContainer: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 14,
    color: '#FF3B30',
    marginTop: 5,
  },
  productDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 5,
  },
  productRating: {
    fontSize: 12,
    color: '#FFD700',
  },
  productReviews: {
    fontSize: 12,
    color: '#888',
  },
  productDiscount: {
    fontSize: 12,
    color: '#888',
  },
  bottomNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2196F3',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default ProductListScreen;
