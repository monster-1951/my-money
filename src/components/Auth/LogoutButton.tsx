import { logout } from "../../api/auth";

const LogoutButton = () => {
    return <button
        onClick={async () => {
          console.log("Loggint out ");
          await logout();
        }}
        className="border-2 p-2"
      >
        Logout
      </button>
}

export default LogoutButton