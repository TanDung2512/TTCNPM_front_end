import React,{Component} from 'react';
import './authentication.css'
class Authentication extends Component{
  render(){
    return(
      <div className="bg-light container-fluid px-5">
        <ul class="nav flex-row pr-5">
            <li class="px-2 pt-2 d-flex flex-row ">
                <p className="font-weight-light text-muted px-2">Welcome To Devicer</p>
                <p>Customer Care</p>
                <p className="font-weight-light text-muted px-2">1-800-123-4567</p>
            </li>
              <li class="nav-item active py-2 px-3 ml-auto">
                  <a className="a-modify "href="#">Sign up</a>
              </li>
              <li class="nav-item  active py-2 px-3" >
                  <a className="a-modify "href="#">Log in</a>
              </li>
              <li class="nav-item active py-2 pl-4 pr-5">
                  <a className="a-modify " href="#">My list</a>
              </li>
        </ul>
      </div>
    )
  }
}
export default Authentication;
