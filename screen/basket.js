import  React, {Component} from 'react';
import {  View, Text,TouchableOpacity,Image ,FlatList ,ActivityIndicator  } from 'react-native';
import {connect} from 'react-redux'
import {Add_to_basket} from '../redux/ection'; 
 class Basket extends Component {


  renderitems=({item})=>{
  
        return(
            <View 
            style ={{justifyContent:'center',alignItems:'center',margin:'3%'}}>
         <Image source = {{uri:item.uri}} style =  {{width:200,height:200}} />
         <Text>{item.name}</Text>
         <Text>{item.price} $</Text>
           </View>
            
        )
    

   
}
  render (){
    const data = this.props.empty
     return(
    <View>
   <View style ={{flexDirection :'row', justifyContent:'space-between',alignItems:'center',width:'100%',height:50,backgroundColor:'#6CBB3C',}}>
        <Text style ={{fontSize:18,paddingHorizontal:'4%',color:'white'}}>
          quantity : {data.num}
        </Text>
        <Text style ={{fontSize:18,paddingHorizontal:'4%',color:'white'}}>
          total price : {data.total_price} $
        </Text>
      </View>
            <FlatList
//  horizontal ={true}
    showsVerticalScrollIndicator={false}
 data={data.items}
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
         ListFooterComponent ={()=>{
           return(
<View style ={{height:50}}>

</View>
           )
         }}
           keyExtractor ={ item =>item.id}

/>


    </View>
     )
  }
}
const mapStateToProps = state =>{
  return {
      empty :state
  }
}
export default  connect(mapStateToProps , {Add_to_basket})(Basket) 