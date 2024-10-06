import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const chatData = [
  {
     id: '1',
    name: 'Ca nấu lẩu, nấu mì mini...',
    shop: 'Shop Devang',
    imageUrl: 'https://lh6.googleusercontent.com/proxy/BwrFPLMyEQ32jJv186q3Fbo1srxxZfvizox9YDD8uY7Rz6peLfwUI0lxChdAtnaZkp7DDY_HhN8Vs6kL-bcurT68RC1_ALysWPNMKU_Vfl8ZIe5stpgaiZj72PBnC1dWIg', // Replace with real image URL
  },
  {
    id: '2',
    name: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'Shop LTD Food',
    imageUrl: 'https://bizweb.dktcdn.net/100/479/235/products/z4245332450312-85ba12386b375c2621fd7cf904626478.jpg?v=1681789396517', // Replace with real image URL
  },
  {
    id: '3',
    name: 'Xe cần cẩu đa năng',
    shop: 'Shop Thế giới đồ chơi',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0731/6514/4343/t/7/assets/mykingdom-xe-doc-hoi-cho-be-1.jpg?v=1686021697', // Replace with real image URL
  },
  {
    id: '4',
    name: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi',
    imageUrl: 'https://2em.vn/wp-content/uploads/2020/11/screenshot_1606147359.png', // Replace with real image URL
  },
  {
    id: '5',
    name: 'Lãnh đạo giản đơn',
    shop: 'Shop Minh Long Book',
    imageUrl: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_182855.jpg', // Replace with real image URL
  },
  {
    id: '6',
    name: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    imageUrl: 'https://cdn0.fahasa.com/media/catalog/product/h/i/hieu_long_con_tre_tieu_hoc_1_2020_05_15_13_50_44.jpg', // Replace with real image URL
  },
];

const ChatScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.shopName}>{item.shop}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topNavbar}>
        <TouchableOpacity onPress={() => navigation.navigate('ProductList')}>
          <Entypo name="chevron-left" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Chat</Text>
        <TouchableOpacity style={styles.cartButton}>
          <MaterialIcons name="shopping-cart" size={28} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.notice}>
        Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
      </Text>
      <FlatList
        data={chatData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F0F0F0',
  },
  topNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  cartButton: {
    padding: 5,
  },
  notice: {
    fontSize: 14,
    color: '#000',
    backgroundColor: '#F5F5F5',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  productImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  shopName: {
    fontSize: 14,
    color: '#888',
  },
  chatButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChatScreen;
