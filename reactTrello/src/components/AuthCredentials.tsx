import { Button } from "./Button";
import { Center } from "./Center";

export function AuthCredentials() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <div style={{ width: "100%" }}>
        <Center>
          <div style={{ fontSize: 30, padding: 20 }}>Log in to 0tello</div>
        </Center>
        <Center>Connect to 0tello with:</Center>
        <Center>
          <input
            type="text"
            placeholder="Email"
            style={{ padding: 10, borderRadius: 10, margin: 10, minWidth: 300 }}
          />
        </Center>
        <Center>
          <input
            type="text"
            placeholder="Password"
            style={{ padding: 10, borderRadius: 10, margin: 10, minWidth: 300 }}
          />
        </Center>
        <Center>
          <Button
            leftIcon={
              <img src="https://www.citypng.com/photo/2928/white-hd-google-logo" />
            }
          >
            Signup
          </Button>
        </Center>
      </div>
    </div>
  );
}
