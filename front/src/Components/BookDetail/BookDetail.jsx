import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooksId, deleteBookDetail } from "../../actions";
import { useParams } from "react-router-dom";

//COMPONENTES
import NavBar from "../NavBar/NavBar";
import NavBar2 from "../NavBar2/NavBar2";
import Footer from "../Footer/Footer";

//CSS
import styles from "./BookDetail.module.css";







export default function BookDetail() {

  const dispatch = useDispatch();
  const { id } = useParams();

  const bookDetail = useSelector((state) => state.bookDetail);

  console.log("bookDetail", bookDetail)

  useEffect(() => {
    dispatch(getBooksId(id));
    console.log("el componente se monto");

    return () => {
      dispatch(deleteBookDetail(id));
      console.log("el componente se desmonto");
      //TENGO QUE DESMONTAR EL COMPONENTE SINO ME QUEDA AHI COLGADO
    };
  }, [dispatch, id]);




  return (
    <div className={styles.detail}>
      <NavBar />
      <NavBar2 />
    
    <div className="container">
      <div>
        <img src={bookDetail.image} alt="imagen del libro"/>
      </div>

      <div>
        <h2>{bookDetail.title}</h2>
        {/* <h4>{bookDetail.author}</h4>  */}
        {/* <h4>{bookDetail.publisher}</h4> */}
        <h4>{bookDetail.publishedDate}</h4> 
        <h4>{bookDetail.description}</h4>

        <div>{bookDetail.price}</div>
       
      </div>
    </div>

      <Footer />
    </div>
  );
}
