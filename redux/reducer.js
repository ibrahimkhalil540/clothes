

 const intital_state = {
     empty : true ,
     total_price : 0 ,
     num : 0 ,
     items :[]
 }
 
 export const Add = (state = intital_state , action)=>{
     switch (action.type) {
         case 'add':
             console.log(state.items)
            
             
             
             state.items.push(action.item)
         
             return {...state, empty:false,
                total_price : state.total_price + action.price ,num : state.num + 1 ,items :state.items};
             
         default:
             return state
     }
 }