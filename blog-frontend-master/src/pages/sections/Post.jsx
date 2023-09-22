import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BlogCard from '../../components/BlogCard';
import { useUser } from '../../contexts/userContext';
import NoPost from './NoPost';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
const Post = (props) => {

    
  const [newBlogTitle , setNewBlogTitle] = useState("");
  const [newBlogDescription , setNewBlogDescription] = useState("");
  const [newBlogTags , setNewBlogTags] = useState("");
  const [newBlogLink , setNewBlogLink] = useState("");

    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    const userData = JSON.parse(localStorage.getItem('userData'));
    const {user , blogs , setBlogs} = useUser();

    useEffect(()=>{

        const url = 'http://localhost:5000/blog'

        axios.get(url)
        .then((result) => {
            
            setBlogs(result.data);
        }).catch((err) => {
            console.log(err);
        });
    },[blogs])


    const add = (e)=>{
        const url = `http://localhost:5000/blog/${userData?.username}/${newBlogTitle}`;

        const data = {
            blogBody : newBlogDescription ,
            blogTitle : newBlogTitle ,
            userid : userData?.username,
            blogLink : newBlogLink,
            blogTags : newBlogTags
        }
        axios.post(url,data)
        .then((result) => {
            console.log(result);
            setBlogs([...blogs , data]);
            setNewBlogDescription("");
            setNewBlogTitle("");
            setNewBlogTags("");
            setShow(false);
            navigate('/');
            
        }).catch((err) => {
            console.log(err);
        });
    }

  return (
    <section  id={props.id}> 
        <h1 className='center'>Posts</h1>

        { 
        blogs.length === 0 ? 
        <NoPost /> : 
        blogs.map((blog)=>{
            return <BlogCard key={blog._id} blog={blog}/>
        })
        }

        {
        user?.username &&
        <button 
        onClick={handleShow} 
        className='btn add-btn'>
        <i className="fa-solid fa-plus"
        style={{color: "#ffffff" }}>
        </i>
        </button>
        }


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body className='add-form-modal'>
          You can make new contents here!
          <form onSubmit={(e) => add(e)} method='post'>
          <div className="form-group">
                <label htmlFor="newblogtitle">New Title : </label>
                <input name='userid' onChange={(e)=> setNewBlogTitle(e.target.value)}  type="email" className="form-control" id="newblogtitle" aria-describedby="emailHelp" placeholder="Enter new titile..."/>
          </div>
                <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Blog : </label>
                <textarea onChange={(e) => setNewBlogDescription(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <div className="form-group">
                <label htmlFor="newblogtags">New tags : </label>
                <input name='userid' onChange={(e)=> setNewBlogTags(e.target.value)}  type="email" className="form-control" id="newblogtags" aria-describedby="emailHelp" placeholder="Enter new tags seperated by space..."/>
                </div>
                <div className="form-group">
                <label htmlFor="newblogtags">New Link : </label>
                <input name='userid' onChange={(e)=> setNewBlogLink(e.target.value)}  type="email" className="form-control" id="newblogtags" aria-describedby="emailHelp" placeholder="Enter link to your project..."/>
                </div>
          <Button variant="primary" onClick={(e)=> add(e)}>
            Save Changes
          </Button>
          </form>
        </Modal.Body>
      </Modal>

    </section>
  )
}

export default Post
