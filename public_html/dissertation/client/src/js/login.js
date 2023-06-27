
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=650c310f0b86447a986d654cad6f4053&response_type=code&redirect_uri=http://users.sussex.ac.uk/~io202/dissertation/client/public/index.html&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-top-read"

export default function Login() {
    return (
      <div>
        <a className="btn btn-success btn-lg" href={AUTH_URL}>Login With Spotify</a>
      </div>
    )
}
