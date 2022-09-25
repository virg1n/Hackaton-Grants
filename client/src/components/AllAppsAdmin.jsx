import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const AllAppsAdmin = ({app}) => {
    const navigate = useNavigate()
  return (
    <Link to={`/admin/viewSingleProject/${app._id}`} style={{'color':'black', 'textDecoration':'none'}}>
        <h1>
            {app.title}
        </h1>
        <h4>
            {app.text}
        </h4>
        <hr/>
    </Link>
  )
}