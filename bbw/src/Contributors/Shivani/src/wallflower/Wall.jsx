import React from 'react'
import styles from './wallflower.module.css'
import  {shop_wallflower} from '../data/shop_wallflower'

export const Wall = () => {
  return (
    <>
    <div className={styles.shivani20}>
       <div> <img style={{height:"300px" , width:"100%"}} src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwc6f06e7d/images/Spring2021/diff_olfactive-plugs_SP1_0_gh_ref.jpg?yocs=s_'></img></div>
       <h1 style={{fontSize:"30px", fontWeight:"bold",marginLeft:"10%"}}>WALLFLOWERS REFILLS</h1>
       <div  className={styles.shivani21}>
           <div>Sort by</div>
           <select>
               <option>Low to high</option>
               <option>high to low</option>
           </select>
           </div>
           <div className={styles.shivani22}>
               {shop_wallflower.map((ele)=>{
                     return(
                        <div key={ele.id}>                           
                                    <img style={{height:"220px"}} src={ele.pImg}/>
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
