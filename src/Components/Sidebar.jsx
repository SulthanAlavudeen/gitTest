import React from 'react'
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import '../Tables.css';
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";
import { AiFillFileAdd } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
import { BsFilePerson } from "react-icons/bs";
const Sidebar = () => {
  return (
    <div>
      <div className="SideBorder">
        <SidebarMenu>

          <SidebarMenu.Body>
            <SidebarMenu.Sub>

              <SidebarMenu.Sub.Toggle >
                <SidebarMenu.Nav.Icon>
                  <span><BsFilePerson /></span>
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title >
                  <span >Users</span>
                </SidebarMenu.Nav.Title>
              </SidebarMenu.Sub.Toggle>
              <SidebarMenu.Sub.Collapse>
                <SidebarMenu.Nav>
                  <SidebarMenu.Nav.Link>
                    <SidebarMenu.Nav.Icon>
                      <span><RxDotFilled /></span>
                    </SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title>
                      <span>Profile</span>
                    </SidebarMenu.Nav.Title>
                  </SidebarMenu.Nav.Link>

                </SidebarMenu.Nav>
                <SidebarMenu.Nav>
                  <SidebarMenu.Nav.Link>
                    <SidebarMenu.Nav.Icon>
                      <span><RxDotFilled /></span>
                    </SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title>
                      <span>Cards</span>
                    </SidebarMenu.Nav.Title>
                  </SidebarMenu.Nav.Link>

                </SidebarMenu.Nav>
                <SidebarMenu.Nav>
                  <SidebarMenu.Nav.Link>
                    <SidebarMenu.Nav.Icon>
                      <span><RxDotFilled /></span>
                    </SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title>
                      <span>List</span>
                    </SidebarMenu.Nav.Title>
                  </SidebarMenu.Nav.Link>

                </SidebarMenu.Nav>
                <SidebarMenu.Nav>
                  <SidebarMenu.Nav.Link>
                    <SidebarMenu.Nav.Icon>
                      <span><RxDotFilled /></span>
                    </SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title>
                      <span>Create</span>
                    </SidebarMenu.Nav.Title>
                  </SidebarMenu.Nav.Link>

                </SidebarMenu.Nav>
                <SidebarMenu.Nav>
                  <SidebarMenu.Nav.Link>
                    <SidebarMenu.Nav.Icon>
                      <span><RxDotFilled /></span>
                    </SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title>
                      <span>Edit</span>
                    </SidebarMenu.Nav.Title>
                  </SidebarMenu.Nav.Link>

                </SidebarMenu.Nav>
                <SidebarMenu.Nav>
                  <SidebarMenu.Nav.Link>
                    <SidebarMenu.Nav.Icon>
                      <span><RxDotFilled /></span>
                    </SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title>
                      <span>Accounts</span>
                    </SidebarMenu.Nav.Title>
                  </SidebarMenu.Nav.Link>

                </SidebarMenu.Nav>
              </SidebarMenu.Sub.Collapse>
            </SidebarMenu.Sub>

            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link>
                <SidebarMenu.Nav.Icon>
                  <span><BsFillCartCheckFill /></span>
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title>
                  <span>E-Commerce</span>
                </SidebarMenu.Nav.Title>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link>
                <SidebarMenu.Nav.Icon>
                  <span><FaFileInvoiceDollar /></span>
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title>
                  <span>Invoice</span>
                </SidebarMenu.Nav.Title>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link>
                <SidebarMenu.Nav.Icon>
                  <span><FaBloggerB /></span>
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title>
                  <span>Blog</span>
                </SidebarMenu.Nav.Title>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link>
                <SidebarMenu.Nav.Icon>
                  <span><AiFillFileAdd /></span>
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title>
                  <span>File Manager</span>
                </SidebarMenu.Nav.Title>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
            <SidebarMenu.Brand>
              App
            </SidebarMenu.Brand>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link>
                <SidebarMenu.Nav.Icon>
                  <span><IoIosMail /></span>
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title>
                  <span>Mail</span>
                </SidebarMenu.Nav.Title>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>

          </SidebarMenu.Body>
        </SidebarMenu>
      </div>

    </div>
  )
}

export default Sidebar