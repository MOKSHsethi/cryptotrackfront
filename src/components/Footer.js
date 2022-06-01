import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/footer.css'

export default function Footer() {
  return (
<div className="bottom section-padding">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <div className="copyright">
                    <p>© <span>2022</span> <Link to="/"  className="transition">Coincap</Link> All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
