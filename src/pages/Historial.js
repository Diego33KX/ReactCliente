import { createHashHistory } from "history";
import React,{useContext,useState} from "react";
import Navbar from "../components/Navbar";
import { DataContext } from "../Context/dataProvider";

const Historial = () =>{
    const value = useContext(DataContext);
    const [historial] = value.historial;
    return(
        <>
        <Navbar/>
        <div className="container">
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <table className="table py-5">
                <thead className="table-success text-center" style={{height:40}}>
                    
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>IGV</th>
                    <th>Total</th>
                    <th>Fecha</th>
                </thead>
                <br></br>
                    {
                        historial.map(his=>(
                            <tbody>
                                <td>{his.producto}</td>
                                <td>{his.precio}</td>
                                <td>{his.cantidad}</td>
                                <td>{his.subtotal}</td>
                                <td>{his.igv}</td>
                                <td>{his.total}</td>
                                <td className="text-center">{his.fecha}</td>
                        </tbody>
                    ))
                    }
                
            </table>
        </div>
        </>
    )
}
export default Historial