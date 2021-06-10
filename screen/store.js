import  React, {Component} from 'react';
import {  View, Text,TouchableOpacity,Image  ,FlatList ,ActivityIndicator ,StyleSheet} from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons'
import {Icon} from 'react-native-elements'
import {connect} from 'react-redux'
import {Add_to_basket} from '../redux/ection'; 
 class Store extends Component {
  state ={
    
    data :[],
    loading : true,
    basket_empty : true ,
    
         }
  async componentDidMount(){
    const response = await fetch('http://192.168.0.117:3000/');
   const responsejson = await response.json();

 this.setState({ data: responsejson });
 }
 renderitems=({item})=>{
  return(
      <TouchableOpacity style ={styles.image_view} onPress ={()=>{
        if(item.id %2 ==0){
          this.props.navigation.navigate('item',{
            type : 'item'
            
          })
        }
        else {
          this.props.navigation.navigate('item',{
            type : 'item_2'
            
          })
        }
     
      }
      }>
        <Text style ={styles.name_style}> {item.name}</Text>
   <Image source = {{uri:item.logo}} style =  {styles.logo_style} resizeMode='contain' />
   
      </TouchableOpacity>
      
  )
}
  render (){
    const data = this.props.empty
 
     return(
      <View style={{backgroundColor:'white',height:'100%'}} >
   
      <FlatList
//  horizontal ={true}
    showsVerticalScrollIndicator={false}
 data={this.state.data}
// ref={this.props.scrollRef}
           renderItem ={this.renderitems
           }
           ListEmptyComponent ={()=>{
             return(
               <View style ={styles.root}>
                  <ActivityIndicator size = "large" color = 'green' /> 
                 </View>
              
             )
           }}
         
           keyExtractor ={ item =>item.id}

/>
<Icon  name ='shopping-basket'  size={60} style ={{position:'relative',top:0}}
 color= { data.empty ===undefined? 'gray' :data.empty===false ?'#50C878':'gray' } onPress = { ()=>{
   if(data.empty ===false){
    this.props.navigation.navigate('basket')
   }
 
}} />
</View> 
     )
  }
}
const styles =StyleSheet.create({
 root : {
    flex:1,justifyContent:'center',
    alignItems:'center',

 },
 image_view :{

   justifyContent:'center',
   alignItems:'center',
 marginVertical:'2%',
 borderBottomColor:'green',
 borderBottomWidth:0.5

 },
 logo_style :{
  width:'96%',
  height:250,
   borderRadius:25
 },
 name_style : {fontSize:24,fontStyle:'italic',fontWeight:'bold',color:'#C12267',width:'100%',textAlign:'center'}
})
const mapStateToProps = state =>{
  return {
      empty :state
  }
}
export default  connect(mapStateToProps , {Add_to_basket})(Store)  ;