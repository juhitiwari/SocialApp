import React, { Component } from 'react';
import { View, Text,StyleSheet, TouchableOpacity, LayoutAnimation, FlatList, Image } from 'react-native';
import Fire from '../Fire'
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment'

const dummy_post = [
  {
    id: '1',
    name: 'Joe McKay',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    timestamp: 1569109273726,
    avatar: require('../assets/images/avatar.png'),
    image: require('../assets/images/tempImage1.jpg')
  },
  {
    id: '2',
    name: 'Karyn Kim',
    text:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    timestamp: 1569109273726,
    avatar: require('../assets/images/avatar.png'),
    image: require('../assets/images/tempImage2.jpg')
  },
  {
    id: '3',
    name: 'Emerson Parsons',
    text:
      'Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.',
    timestamp: 1569109273726,
    avatar: require('../assets/images/avatar.png'),
    image: require('../assets/images/tempImage3.jpg')
  },
  {
    id: '4',
    name: 'Kathie Malone',
    text:
      'At varius vel pharetra vel turpis nunc eget lorem. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing tristique risus nec feugiat in fermentum.',
    timestamp: 1569109273726,
    avatar: require('../assets/images/avatar.png'),
    image: require('../assets/images/tempImage4.jpg')
  }
];
export default class HomeScreen extends Component {
                                                                                                                                                                                                                                                                                                                                                                                                                                            
constructor(props){
  super(props)
  this.ref =  Fire.shared.firestore.collection('posts')
  this.useref=
  this.state={
    dataSource : []
  }

}
componentDidMount(){
  this.unsubscribe = this.ref.onSnapshot(this.feedPosts);
}

feedPosts = (postSnapShot) =>{
  const post = [];
  postSnapShot.forEach((doc) => {
  const {uid,text,timestamp,image} = doc.data();
  let avatar="dwe"
  let name='ewfj'
  const data=Fire.shared.firestore
  .collection('users')
  .doc(uid)
  .get()
  .then(doc=>{
    post.push({
      avatar:doc.data().avatar
      ,name:doc.data().name,uid,
      
      text,
      timestamp,
      image
    })
    this.setState({
      dataSource : post,
    });
  })
 
  
 
  
  
  });

 
}
    

 

renderPost=post=>{
 
 
    
  
  return(
    <View style={styles.feedItem}>
      <Image source={post.avatar?{uri:post.avatar}:require('../assets/images/avatar.png')} style={styles.avatar}/>
      <View style={{flex:1}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'
    ,alignItems:'center'}}>
      <View>
  <Text style={styles.name}>{post.name?post.name:'yo'}</Text>
  <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
      </View>
      <Ionicons name='ios-more' size={24} color='#73788B'/>
      </View>
  <Text style={styles.post}>{post.text}</Text>
  <Image source={{uri:post.image}} style={styles.postImage} resizeMode='cover'/>
  <View style={{flexDirection:'row'}}>
    <Ionicons name='ios-heart-empty' size={24} color="#737888"
    style={{marginRight:16}}/>
    <Ionicons
    name='ios-chatboxes'
    size={24}
    color="#73788B"/>

  </View>
      </View>
    </View>
  )

}

  render() {
    LayoutAnimation.easeInEaseOut()
    return (
      <View style={styles.container}>
       <View style={styles.header}>
         <Text style={styles.headerTitle}>
            Feed
         </Text>

       </View>
       <FlatList style={styles.feed}
       data={this.state.dataSource}
       renderItem={({item})=>this.renderPost(item)}
       keyExtractor={item=>item.uid}
       showsVerticalScrollIndicator={false}
       />
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#EFECF4'
  },
  header:{
    paddingTop:48,
    paddingBottom:16,
    backgroundColor:'#FFF',
    alignItems:'center',
    borderBottomWidth:1,
    justifyContent:'center',
    borderBottomColor:'#EBECF4',
    shadowColor:'#454D65',
    shadowOffset:{height:5},
    shadowRadius:15,
    shadowOpacity:0.2,
    zIndex:10
  },
  headerTitle:{
    fontSize:20,
    fontWeight:'500'
  },
  feed:{
    marginHorizontal:16
  },
  feedItem:{
    backgroundColor:'#FFF',
    borderRadius:5,
    padding:8,
    flexDirection:'row',
    marginVertical:8
  },
  avatar:{
    width:36,
    height:36,
    borderRadius:18,
    marginRight:16
  },
  name:{
    fontSize:15,
    fontWeight:'500',
    color:'#454D65'
  },
  timestamp:{
    fontSize:11,
    color:'#C4C6CE',
    marginTop:4
  },
  post:{
    marginTop:16,
    fontSize:14,
    color:'#838899'
  },
  postImage:{
    width:undefined,
    height:150,
    borderRadius:5,
    marginVertical:16
  }

})
