import React, { useState } from "react";
import { ViewDetail } from "./ViewDetail";

interface formValue{title:string, author:string, price:string};
export interface Books{id:number,title:string, author:string, price:string};

const Book = ()=>{
  const [formData, setFormData] = useState<formValue>({title: "", author: "", price: ""})
  const [book, setBook] = useState<Books[]>([]);
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    const {title, author, price} = formData;
    // setBook()
    return {book};
  }

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
  }

  return(
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input type="text" className="form-control" name="title" onChange={handleChange} />
          </div>
          <div>
            <label>Author</label>
            <input type="text" className="form-control" name="author" onChange={handleChange} />
          </div>
          <div>
            <label>Price</label>
            <input type="text" className="form-control" name="price" onChange={handleChange} />
          </div>
          <div>
            <button className="btn btn-primary rounded-pill my-3" type="submit">Add</button>
            {/* <button type="submit">Update</button> */}
          </div>
        </form>
      </div>
      <ViewDetail  books={book}/>
    </div>
  )
}

export default Book;