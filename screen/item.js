import  React, {Component} from 'react';
import {  View, Text,TouchableOpacity,Image  ,FlatList ,ScrollView ,StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements'

import {connect} from 'react-redux'
import {Add_to_basket} from '../redux/ection';

 class Items extends Component {
    constructor (props){
 
        super(props)
        const { type } = this.props.route.params;
        this.state ={
            data :[],
            item :type ,
            basket_empty:true
        }
    }

   add_pressed =(item)=>{
      this.props.Add_to_basket(item)
     

   }
 
    

    async componentDidMount(){
        const url = 'http://192.168.0.117:3000/'+this.state.item
       const response = await fetch(url);
      const responsejson = await response.json();
  
    this.setState({ data: responsejson });
    }
    renderitems=({item})=>{
        if(item.catagory ==='jeans'){
            return(
                <TouchableOpacity onPress ={ ()=>this.add_pressed(item)}
                style ={{justifyContent:'center',alignItems:'center',borderColor:'green',borderWidth:1,margin:'3%'}}>
             <Image source = {{uri:item.uri}} style =  {{width:150,height:150}} />
             <Text>{item.name}</Text>
             <Text>{item.price} $</Text>
                </TouchableOpacity>
                
            )
        }

       
    }


    render_t_shirts = ({item})=>{
        if(item.catagory ==='T-shirts'){
            return(
                <TouchableOpacity onPress ={()=>this.add_pressed(item)}
                style ={{justifyContent:'center',alignItems:'center' ,marginVertical:'10%'}}>
             <Image source = {{uri:item.uri}} style =  {{width:150,height:150,}} />
             <Text>{item.name}</Text>
             <Text>{item.price} $</Text>
                </TouchableOpacity>
                
            )
        }

    }
    render_shoes = ({item})=>{
        if(item.catagory ==='shoes'){
            return(
                <TouchableOpacity onPress ={()=>this.add_pressed(item)}
                style ={{justifyContent:'center',alignItems:'center' ,marginVertical:'10%'}}>
             <Image source = {{uri:item.uri}} style =  {{width:150,height:150,padding:'3%'}} resizeMode ='contain' />
             <Text>{item.name}</Text>
             <Text>{item.price} $</Text>
                </TouchableOpacity>
                
            )
        }

    }
    render_jacket =({item})=>{
        if(item.catagory ==='jackets'){
            return(
                <TouchableOpacity onPress ={()=>this.add_pressed(item)}
                style ={{justifyContent:'center',alignItems:'center',borderColor:'green',borderWidth:1,margin:'3%'}}>
             <Image source = {{uri:item.uri}} style =  {{width:150,height:150}} />
             <Text>{item.name}</Text>
             <Text>{item.price} $</Text>
                </TouchableOpacity>
                
            )
        }
    }
    header_funtion =()=>{
        return(
            <View>
        
        <FlatList
  horizontal ={true}
      showsVerticalScrollIndicator={false}
   data={this.state.data}
             renderItem ={this.render_t_shirts
             }
        
             keyExtractor ={ item =>item.id}
      
  />
  </View>
        )
    }
     footer =()=>{
         return (
            <View style ={{borderBottomColor:'black',borderBottomWidth:0.5,marginVertical:'3%'}}>
           
        <FlatList
  horizontal ={true}
      showsVerticalScrollIndicator={false}
   data={this.state.data}
  
             renderItem ={this.render_shoes
             }
    
             keyExtractor ={ item =>item.id}
            
    
  />
   
  
  </View>   
         )
     }
  render (){
   const data = this.props.empty
  
     return(
    <ScrollView>
        <View style={{backgroundColor:'white',borderBottomColor:'green'
        ,borderBottomWidth:0.5}} >
 <Icon  name ='shopping-basket'  size={60}  
 color= { data.empty ===undefined? 'gray' :data.empty===false ?'#50C878':'gray' }  onPress = { ()=>{
     if(data.empty ===false){
        this.props.navigation.navigate('basket')
     }
  
}} />
           <FlatList
 
      showsVerticalScrollIndicator={false}
   data={this.state.data}
 
             renderItem ={this.renderitems
             }
             ListHeaderComponent={this.header_funtion}
            
             keyExtractor ={ item =>item.id}
      
      numColumns={2}
   
  />
  </View>
  <View style={{backgroundColor:'white',borderBottomColor:'green'
        ,borderBottomWidth:0.5}} >   
           <FlatList
 //horizontal ={true}
      showsVerticalScrollIndicator={false}
   data={this.state.data}

           renderItem ={this.render_jacket }
          
           ListHeaderComponent={this.footer}
             keyExtractor ={ item =>item.id}
   
      numColumns={2}
     
  />
 
  </View>
 
  </ScrollView>
     )
  }
}
const styles =StyleSheet.create({
    catagory_style : {
flex:1,justifyContent:'center',alignItems:'center',
margin:'3%'
    } ,
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
    }
   })
   const mapStateToProps = state =>{
       return {
           empty :state
       }
   }
   export default  connect(mapStateToProps , {Add_to_basket})(Items) 