import React from "react";
import { Books } from "./Books";
interface Prop{books: Books[]}

export const ViewDetail = ({books}:Prop)=>{
  return(
    <div className="container">
      <table className="table">
        <thead className="table-dark">
          <tr>
            <td>Title</td>
            <td>Author</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {books.map(item: {title:string, author:string, price:string}=>(
            <tr>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}