import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer>
     <h3>Reach Us</h3>
     <div className="email">
     <h4><i className="fas fa-envelope"></i> Email Addresses</h4>
     <ul>
          <li><a href="mailto:ps.medical@health.go.ke">ps.medical@health.go.ke</a></li>
          <li><a href="mailto:ps.publichealth@health.go.ke">ps.publichealth@health.go.ke</a></li>
          <li><a href="mailto:mohcommunication@health.go.ke">mohcommunication@health.go.ke</a></li>
          <li><a href="mailto:complaint@health.go.ke">complaint@health.go.ke</a></li>
        </ul>
     </div>
     <div className="address">
     <address className="physical-address">
        <h3><i className="fas fa-map-marker-alt"></i> Physical Address</h3>
        <p>MINISTRY OF HEALTH</p>
        <p>Afya House, Cathedral Road</p>
        <p>P.O Box 30016-00100</p>
        <p>Nairobi, Kenya</p>
      </address>
     </div>
    </footer>
  )
}

export default Footer