import React from 'react'
import styles from './first.module.css'
import  {shop_body} from '../data/firstshop'

// import { CSSProperties } from 'react'


 const Shop_body = () => {
  return (
     <>
      <div className={styles.father}>
            <h1 style={{fontSize:"30px", fontWeight:"bold"}}>All Body Care</h1>
            <img style={{height:"300px"}} src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0817b914/images/Spring2022/tbctier_sp3_gh.jpg?yocs=s_'></img>
            <div className='btn'>
                <button>ALL BODY CARE</button>
                <button>FRAGRANCE</button>
                <button>BATH & SHOWER</button>
                <button>MOISTURIZERS</button>
                <button>AROMATHERAPY</button>
            </div>
            <div className='shivani'>
            <button>MEN'S</button>
            </div>

            <div className={styles.shivani1}>
                  
               {shop_body.map((ele)=>{
                   return(
                       <div key={ele.id}>                           
                                   <img style={{height:"300px"}} src={ele.pImg}/>
                                    <b>{ele.category}</b>
                                    <h1>{ele.name}</h1>
                                    <h1>{ele.category1}</h1>
                                    <b>${ele.Amount}</b>
                                    <h2>⭐⭐⭐⭐({ele.Rating})</h2>
                                    <button>ADD TO BAG</button>
                       </div>
                      
                   )
                })}

            </div>
      </div>
     </>
    
  )
}
export default Shop_body