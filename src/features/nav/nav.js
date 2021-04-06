import React, { useState } from "react";
import logo from "../../logo.svg";
import "./nav.css";

export default function NavBar() {
  return <nav className="navbar has-shadow  is-bordered navbar-color" role="navigation">
    <div className="container big">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={logo} width="60" height="18" />
        </a>
        <a role="button" className="navbar-burger" data-target="mainNavbar">
          <span />
          <span />
          <span />
        </a>
      </div>
      <div id="mainNavbar" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item qwx-nav-item">
            <span>实况</span>
          </a>
          <a className="navbar-item qwx-nav-item">
            <span>统计</span>
          </a>
          <a className="navbar-item qwx-nav-item">
            <span>关于我们</span>
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <a className="button is-light is-outlined is-small qwx-nav-button">登录</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
}
