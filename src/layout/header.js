import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const [search, setSearch] = useState(true);
  const navigate = useNavigate()
  const logout = () =>{
    localStorage.removeItem('token');
    navigate("/login")
  }
  const items = [
    {
      label: 'File',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {
              label: 'Bookmark',
              icon: 'pi pi-fw pi-bookmark'
            },
            {
              label: 'Video',
              icon: 'pi pi-fw pi-video'
            },

          ]
        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-trash'
        },
        {
          separator: true
        },
        {
          label: 'Export',
          icon: 'pi pi-fw pi-external-link'
        }
      ]
    },
    {
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil',
      items: [
        {
          label: 'Left',
          icon: 'pi pi-fw pi-align-left'
        },
        {
          label: 'Right',
          icon: 'pi pi-fw pi-align-right'
        },
        {
          label: 'Center',
          icon: 'pi pi-fw pi-align-center'
        },
        {
          label: 'Justify',
          icon: 'pi pi-fw pi-align-justify'
        },

      ]
    },
    {
      label: 'Users',
      icon: 'pi pi-fw pi-user',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-user-plus',

        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-user-minus',

        },
        {
          label: 'Search',
          icon: 'pi pi-fw pi-users',
          items: [
            {
              label: 'Filter',
              icon: 'pi pi-fw pi-filter',
              items: [
                {
                  label: 'Print',
                  icon: 'pi pi-fw pi-print'
                }
              ]
            },
            {
              icon: 'pi pi-fw pi-bars',
              label: 'List'
            }
          ]
        }
      ]
    },
    {
      label: 'Events',
      icon: 'pi pi-fw pi-calendar',
      items: [
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
            {
              label: 'Save',
              icon: 'pi pi-fw pi-calendar-plus'
            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-calendar-minus'
            }
          ]
        },
        {
          label: 'Archive',
          icon: 'pi pi-fw pi-calendar-times',
          items: [
            {
              label: 'Remove',
              icon: 'pi pi-fw pi-calendar-minus'
            }
          ]
        }
      ]
    },
    {
      label: 'Quit',
      icon: 'pi pi-fw pi-power-off'
    }
  ];

  const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
  const end = <>
    <ul className="p-menubar-root-list" role='menubar'>
      <li className='p-menuitem' role='none'>
        {search ? <Link role="menuitem" className="p-menuitem-link" aria-haspopup="true" onClick={() => setSearch(!search)}>
          <span className="pi pi-search"></span>
        </Link> : <InputText placeholder="Search" type="text" className="w-full" onBlur={() => setSearch(!search)} />}
      </li>
      <li className='p-menuitem' role='none'>
        <Link to={"/register"} role="menuitem" className="p-menuitem-link" aria-haspopup="true">
          <i className="pi pi-user"></i>
        </Link>
      </li>
      <li className='p-menuitem' role='none'>
        <Link role="menuitem" className="p-menuitem-link" aria-haspopup="true">
          <i className="pi pi-shopping-cart"></i>
        </Link>
      </li>
      <li className='p-menuitem' role='none'>
        <Link role="menuitem" className="p-menuitem-link" aria-haspopup="true">
          <i className="pi pi-power-off" onClick={logout}></i>
        </Link>
      </li>
    </ul>
  </>
  // const end = <InputText placeholder="Search" type="text" className="w-full" />;

  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  )
}
