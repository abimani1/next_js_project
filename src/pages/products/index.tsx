import React from "react"
import styles from './style.module.css';
import '../../assets/products.css'
const Products: React.FC =() =>{
    return (
      <>
      <h1>Hello World</h1>
    <div className={styles.container}>
        <div>
            <p  className={styles.title}>Grocery  Beverages  Juices</p>
            <p className={styles.variety}>Tropical Juices , Frooti , Mazza , Guava Juices</p>
            <h5 className={styles.drinks}>Juices</h5>
        </div>
         <div className={styles.item}>
             <p>Sort by</p> 
             <p className={styles.pop}>Popularity</p> 
             <p>Price (Low to High)</p> 
             <p>Price (High to Low)</p> 
         </div>
      <div className={styles.categories_head}>
      <div className={styles.categories}>
            <div className={styles.categoryList}>
                <h3 className={styles.category}>Category</h3>
                <img  className={styles.vector_category} src="/images/vector.jpg"/>
            </div>
            <div >
               <div className={styles.fruits_veg}>
                <h6 className={styles.fruits}>Fruits & Vegetables</h6>
                <img  className={styles.vector_fruits} src="/images/vector1.jpg"/>
               </div>
               <p className={styles.fruit1}>Fresh Fruits</p>
               <p className={styles.fruit1}>Premium Fruits</p>
               <p className={styles.fruit1}>Basic Vegetables</p>
               <p className={styles.fruit1}>Roots, Herbs , Others</p>
               <p className={styles.fruit1}>Premium Fruits & Vegetables</p>
            </div>
                <hr className={styles.hori_line} />
               <div className={styles.fruits_veg}>
                <h6 className={styles.fruits}>Dairy & Bakery</h6>
                <img  className={styles.vector_Dairy} src="/images/vector1.jpg"/>
               </div>
                <hr className={styles.hori_line} />
               <div className={styles.fruits_veg}>
                <h6 className={styles.fruits}>Staples</h6>
                <img  className={styles.vector_Staples} src="/images/vector1.jpg"/>
               </div>
                 <hr className={styles.hori_line} />
               <div className={styles.fruits_veg}>
                <h6 className={styles.fruits}>Beverages</h6>
                <img  className={styles.vector_Beverages} src="/images/vector1.jpg"/>
               </div>
                <hr className={styles.hori_line} />
               <div className={styles.fruits_veg}>
                <h6 className={styles.fruits}>Personal care</h6>
                <img  className={styles.vector_personal} src="/images/vector1.jpg"/>
               </div>
                 <hr className={styles.hori_line} />
               <div className={styles.fruits_veg}>
                <h6 className={styles.fruits}>Home Care</h6>
                <img  className={styles.vector_home} src="/images/vector1.jpg"/>
               </div>
        </div>
        <div className={styles.varities}>
            <div className="varieties_mango">
              <img  className={styles.mango} src="/images/mango.jpg"/>
              <div className={styles.mango_contenet}>Mango juice</div>
              <p>Quantity : 1 L </p>
              <p>Price : <img  className={styles.price}  src="/images/price.jpg"/> 50</p>
            </div>
            <div></div>
            <div></div>
        </div>
      </div>    
       
    </div>    
      </>
    );
  }
  export default Products
  