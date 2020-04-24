import React from 'react';
import Link from 'next/link';

class Navbar extends React.Component {
  render() {
    const { active } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a className="navbar-brand">Nextjs CebTeam</a>
          <ul className="navbar-nav">
            <li
              className={active.props.courses ? 'nav-item active' : 'nav-item'}
            >
              <Link href="/">
                <a className="nav-link">
                  Courses <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li
              className={active.props.provider ? 'nav-item active' : 'nav-item'}
            >
              <Link href="/provider">
                <a className="nav-link">Provider</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
