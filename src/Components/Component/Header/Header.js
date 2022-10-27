import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(e => console.error(e))
    }
    return (
        <div className="navbar bg-base-200 d-flex justify-between drop-shadow-xl text-xl">

            <div>
                <Link className="btn btn-ghost normal-case text-4xl">Learning Development</Link>

            </div>

            <div>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/course'>Courses</Link>
                <Link className='link' to='/blog'>Blog</Link>
                <Link className='link' to='/FAQ'>FAQ</Link>
            </div>
            <div className='mr-20'>
                <input type="checkbox" className="toggle toggle-sm mr-3" />
                {
                    user?.uid ?
                        <>
                            <p className='mr-5'> Active User: {user?.displayName}</p>
                            <button className='mr-2' onClick={handleLogOut}> LogOut</button>
                        </>
                        :
                        <>
                            <Link className='mr-4' to='/login'>LogIn</Link>
                            <Link className='mr-3' to='/register'>Register</Link>
                        </>
                }
                {
                    user?.photoURL ?
                        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <img className='h-10 rounded-full' src={user?.photoURL} alt="" />
                        </div>
                        :
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>

                }
            </div>
        </div >
    );
};

export default Header;