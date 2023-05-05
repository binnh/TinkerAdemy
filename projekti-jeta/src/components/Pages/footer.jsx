import React from 'react'
import './footer.css'

const quickLinks01=[
    {
        path:'#',
        display:'Marketing'
    },
    {
        path:'#',
        display:'Analitics'
    },
    {
        path:'#',
        display:'Commerc'
    },
]

const Footer = () => {
    const year=new Date().getFullYear()
  return <footer className="footer">
    <div className="container">
        <div className="footer__wrapper">
            <div className="footer__logo">
                <h2>TinkerAdemy</h2>
                <p className="description">Grow with us</p>

                <p className="small__text description">Lorem ipsum, dolor sit
                 amet consectetur adipisicing eli
                </p>
            </div>


            <div className="footer__quick-links">
                <h3 className="quick__links-title">solution</h3>
                <ul className="quick__links">
                    {
                        quickLinks01.map((item,index)=>(
                            <li className="quick__link-item" key={index}><a href={item.path}>{item.display}</a></li>
                        ))
                    }
                </ul>
            </div>
            <div className="footer__quick-links">
                <h3 className="quick__links-title">solution</h3>
                <ul className="quick__links">
                    {
                        quickLinks01.map((item,index)=>(
                            <li className="quick__link-item" key={index}><a href={item.path}>{item.display}</a></li>
                        ))
                    }
                </ul>
            </div>
            <div className="footer__quick-links">
                <h3 className="quick__links-title">solution</h3>
                <ul className="quick__links">
                    {
                        quickLinks01.map((item,index)=>(
                            <li className="quick__link-item" key={index}><a href={item.path}>{item.display}</a></li>
                        ))
                    }
                </ul>
            </div>
            <p className="copyright">copyright {year} , developed by Erblina Buzhala, Jeta Haxhijaj Fatlum Zulfaj. All rights reserved.</p>
        </div>
    </div>
  </footer>
}

export default Footer