
const AdminPasswordReset = () => {
    return (
        <>
          <div className="settings">
            <div className="signup-wrapper">
              <div className="header-color">
                <h1 className="account-settings">Change Password</h1>
              </div>
              <div className="signup-form">
                <form action="">
                  <div className="username">
                    <input type="password" placeholder="Old Password" />
                  </div>
                  <div className="username">
                    <input type="password" placeholder="New Password" />
                  </div>
                  <div className="username">
                    <input type="password" placeholder="Confirm Password" />
                  </div>
                  <div className="singup-btn">
                    <button>Save Changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      );
}

export default AdminPasswordReset