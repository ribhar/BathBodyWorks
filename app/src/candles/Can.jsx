import React from 'react'
import styles from './candle1.module.css'
import  {shop_candle} from '../data/Shop_candles'
// import Pagination from tailwindcss

export const Can = () => {
 
  return (
      <>
        <div className={styles.shivania}>
           <h1 style={{fontSize:"30px", fontWeight:"bold",marginLeft:"10%"}}>3-WICK CANDLES</h1>
           
           <div  className={styles.shivanii}>
           <div>Sort by</div>
           <select>
               <option>Low to high</option>
               <option>high to low</option>
           </select>
           </div>
           <div className={styles.shivanic}>
               {shop_candle.map((ele)=>{
                     return(
                        <div key={ele.id}>  
                                    <img style={{height:"300px"}} src={ele.pImg}/>
                                     <div className={styles.shiv11}>
                                     <b>{ele.category}</b>
                                     <h1>{ele.name}</h1>
                                     <h1>{ele.category1}</h1>
                                     <b>Rs{ele.Amount}</b>
                                     <h2>⭐⭐⭐⭐({ele.Rating})</h2>
                                     <button>ADD TO BAG</button>
                                     </div>
                    

                        </div>
                       
                    )
               })}
           </div>
        </div>
      </>
  )
}
