import React from 'react'

const HomeLink = (props) => {
  return (
    <a className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover home-links' href={props.refer}>{props.title}</a>
  )
}

export default HomeLink
