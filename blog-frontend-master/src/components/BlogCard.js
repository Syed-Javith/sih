import React, { useState } from 'react'
import { useUser } from '../contexts/userContext'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PostTags from './Post/PostTags';


const BlogCard = (props) => {

  const { user , blogs , setBlogs } = useUser();
  let tags = "";
 props.blog.blogTags.forEach((tag)=>{
    tags = tags + " "+ tag ; 
  })

  const [newBlogTitle , setNewBlogTitle] = useState(props.blog.blogTitle);
  const [newBlogDescription , setNewBlogDescription] = useState("");
  const [newBlogTags , setNewBlogTags] = useState(tags);
  const [newBlogLink , setNewBlogLink] = useState(props.blog.blogLink);

  const deleteBlog = ()=>{
    const url = `http://localhost:5000/blog/${props.blog.userid}/${props.blog.blogTitle}/`;

    axios.delete(url)
    .then((result) => {
      console.log(result);
      const newBlog = blogs.filter((blog) => blog.blogTitle !== props.blog.blogTitle )
      setBlogs(newBlog);
    }).catch((err) => {
      console.log(err);
    });
  }


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const edit = (e) =>{
    e.preventDefault();

    const url = `http://localhost:5000/blog/${props.blog.userid}/${props.blog.blogTitle}`;
    // console.log(url);

    const data = {
      blogBody : newBlogDescription,
      blogTitle : newBlogTitle,
      blogLink : newBlogLink,
      blogTags : newBlogTags
    }
    axios.patch(url,data)
    .then((result) => {
      console.log(result);
      setBlogs(blogs);
      setNewBlogTitle(props.blog.blogTitle);
      setNewBlogDescription("");
      setNewBlogLink("");
      setNewBlogTags("");
    }).catch((err) => {
      console.log(err);
    });
  }


  return (
    <div className='container-fluid blog-container' style={{ width: "70%"}}>
      <div className='row'>
        <h3>{props.blog.blogTitle}</h3>
        <p>{props.blog.blogBody}</p>
        <p>by {props.blog.userid}</p>
        <p> refer to <a href={props.blog.blogLink}>{props.blog.blogLink}</a></p>
        <div className='col-lg-1'>
        {
          props.blog.blogTags.map((tag,index)=>{
            return <a style={{textDecoration : "none"}} href={"https://www.google.com/search?q="+tag}><PostTags key={index} tag={tag}/></a>
          })
        }
        </div>
        <div 
        className='d-flex flex-row-reverse edit-delete-btns'>
          <button 
          onClick={handleShow}
          disabled={!(user?.username === props.blog.userid)} className='btn btn-outline-success rounded-circle'>
          <i 
          className="fa-solid fa-pen-to-square" 
          style={{color: "#1eff00"}}>
          </i>
          </button>
        <button
        onClick={()=> deleteBlog()}
        disabled={!(user?.username === props.blog.userid)} 
        className='btn btn-outline-danger rounded-circle'>
          <i className="fa-solid fa-trash" 
          style={{color: "#ff0000"}}>
            </i>
            </button>
        </div>
    </div>

{/* 
    <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Changes Here</Modal.Title>
        </Modal.Header>
        <Modal.Body className='edit-form-modal'>
          You can change the contents from here!
          <form onSubmit={(e) => edit(e)} method='post'>
          <div className="form-group">
                <label htmlFor="exampleInputEmail1">Change Title : </label>
                <input name='userid' onChange={(e)=> setNewBlogTitle(e.target.value)} value={newBlogTitle}  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter new title..."/>
                </div>
                <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Change Description : </label>
                <textarea onChange={(e) => setNewBlogDescription(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <div className="form-group">
                <label htmlFor="newblogtags">New tags : </label>
                <input name='userid' onChange={(e)=> setNewBlogTags(e.target.value)} value={newBlogTags}  type="email" className="form-control" id="newblogtags" aria-describedby="emailHelp" placeholder="Enter new tags seperated by space..."/>
                </div>
                <div className="form-group">
                <label htmlFor="newblogtags">New Link : </label>
                <input name='userid' onChange={(e)=> setNewBlogLink(e.target.value)}  type="email" className="form-control" id="newblogtags" aria-describedby="emailHelp" placeholder="Enter new tags seperated by space..."/>
                </div>
          <Button variant="primary" onClick={(e)=> edit(e)}>
            Save Changes
          </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default BlogCard
