import React, { useContext } from 'react';
import { UserContext } from '../App'; // Import UserContext

const Footer = () => {
  // Use context to track if the user is logged in
  const { state } = useContext(UserContext); // Get the current login status from context

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.rowCenter}>
          <div style={styles.textCenter}>
            <h2 style={styles.footerHeading}>
              <a href="/" style={styles.logo}>FOCUS Grievance</a>
            </h2>
            <p style={styles.menu}>
              <a href="/" style={styles.menuLink}>Home</a>
              {!state ? null : <a href="/grievance" style={styles.menuLink}>Grievance</a>}
              <a href="/aboutus" style={styles.menuLink}>About Us</a>

              {/* Conditional rendering based on login status */}
              {state ? (
                <a href="/logout" style={styles.menuLink}>Logout</a>
              ) : (
                <>
                  <a href="/login" style={styles.menuLink}>Login</a>
                  <a href="/register" style={styles.menuLink}>Register</a>
                </>
              )}
            </p>
            <ul style={styles.socialIcons}>
              <li style={styles.socialIcon}><a href="#" title="Twitter"><span className="ion-logo-twitter" style={styles.icon}></span></a></li>
              <li style={styles.socialIcon}><a href="#" title="Facebook"><span className="ion-logo-facebook" style={styles.icon}></span></a></li>
              <li style={styles.socialIcon}><a href="#" title="Instagram"><span className="ion-logo-instagram" style={styles.icon}></span></a></li>
            </ul>
          </div>
        </div>
        <div style={styles.rowMarginTop}>
          <div style={styles.textCenter}>
            <p style={styles.copyright}>
              Copyright &copy; {new Date().getFullYear()} All rights reserved | FOCUS Grievance  
            </p>
            <p>
              Designed <i className="ion-ios-heart" aria-hidden="true" style={styles.heartIcon}></i> by Shriram
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};


const styles = {
  footer: {
    backgroundColor: '#1d1d1d',
    color: '#ffffff',
    padding: '40px 0',
    fontFamily: 'Poppins, sans-serif',
    animation: 'fadeInFooter 1s ease-out', // Animation to fade in footer
  },
  container: {
    maxWidth: '1170px',
    margin: '0 auto',
  },
  rowCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  footerHeading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#ffffff',
    animation: 'fadeInText 1s ease-out', // Animation for footer heading
  },
  logo: {
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: '700',
  },
  menu: {
    marginBottom: '20px',
    animation: 'fadeInText 1s ease-out', // Animation for the menu links
  },
  menuLink: {
    color: '#ffffff',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '14px',
  },
  socialIcons: {
    listStyleType: 'none',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '40px',
    animation: 'fadeInIcons 1s ease-out', // Animation for social icons
  },
  socialIcon: {
    margin: '0 10px',
  },
  icon: {
    fontSize: '20px',
    color: '#7CFC00',
  },
  rowMarginTop: {
    marginTop: '40px',
  },
  copyright: {
    fontSize: '13px',
    color: '#aaa',
  },
  heartIcon: {
    color: '#FF6347',
  },
};

// Keyframes for animations
const keyframes = `
  @keyframes fadeInFooter {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes fadeInText {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInIcons {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Inject the keyframes into the page's styles
const styleTag = document.createElement('style');
styleTag.innerHTML = keyframes;
document.head.appendChild(styleTag);

export default Footer;
