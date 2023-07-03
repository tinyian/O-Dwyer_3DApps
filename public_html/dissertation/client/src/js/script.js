const clientId = "650c310f0b86447a986d654cad6f4053";
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

const profileURL = "https://api.spotify.com/v1/me";
const artistsURL = "https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=5";
const tracksURL = "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10";
const playingURL = "https://api.spotify.com/v1/me/player/currently-playing";
const playbackURL = "https://api.spotify.com/v1/me/player";

if (!code) {
        redirectToAuthCodeFlow(clientId);
    } else {
        const accessToken = await getAccessToken(clientId, code);
        const profile = await fetchProfile(accessToken);
        const topArtists = await fetchTopArtists(accessToken);
        const topTracks = await fetchTopTracks(accessToken);
        const nowPlaying = await fetchNowPlaying(accessToken);
        const playback = await fetchPlayback(accessToken);
        populateUI(profile);
        populateTopArtists(topArtists, topTracks);
        populateTopTracks(topArtists, topTracks);
        populateNowPlaying(nowPlaying, playback);
        //        console.log(profile);
        //        console.log(topArtists);
        //        console.log(topTracks);
        console.log(nowPlaying);
        console.log(playback);
    }

export async function redirectToAuthCodeFlow(clientId) {
    const verifier = generateCodeVerifier(128);
        const challenge = await generateCodeChallenge(verifier);

        localStorage.setItem("verifier", verifier);

        const params = new URLSearchParams();
        params.append("client_id", clientId);
        params.append("response_type", "code");
        params.append("redirect_uri", "http://users.sussex.ac.uk/~io202/dissertation/client/public/index.html");
        params.append("scope", "user-read-private user-read-email user-top-read user-read-currently-playing user-read-playback-state");
        params.append("code_challenge_method", "S256");
        params.append("code_challenge", challenge);

        document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateCodeVerifier(length) {
    let text = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
}

async function generateCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
        const digest = await window.crypto.subtle.digest('SHA-256', data);
        return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
}

export async function getAccessToken(clientId, code) {
    const verifier = localStorage.getItem("verifier");

        const params = new URLSearchParams();
        params.append("client_id", clientId);
        params.append("grant_type", "authorization_code");
        params.append("code", code);
        params.append("redirect_uri", "http://users.sussex.ac.uk/~io202/dissertation/client/public/index.html");
        params.append("code_verifier", verifier);

        const result = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params
        });

        const { access_token } = await result.json();
        return access_token;
}

async function fetchProfile(token) {
    const result = await fetch(profileURL, {
            method: "GET", headers: { Authorization: `Bearer ${token}` }
        });

        return await result.json();
}

function populateUI(profile) {
    document.getElementById("displayName").innerText = profile.display_name;
        if (profile.images[0]) {
            const profileImage = new Image(200, 200);
            profileImage.src = profile.images[0].url;
            document.getElementById("avatar").appendChild(profileImage);
            document.getElementById("imgUrl").innerText = profile.images[0].url;
        }
        document.getElementById("id").innerText = profile.id;
        document.getElementById("email").innerText = profile.email;
        document.getElementById("uri").innerText = profile.uri;
        document.getElementById("uri").setAttribute("href", profile.external_urls.spotify);
        document.getElementById("url").innerText = profile.href;
        document.getElementById("url").setAttribute("href", profile.href);
}

async function fetchTopArtists(token) {
    const result = await fetch(artistsURL, {
            method: "GET", headers: { Authorization: `Bearer ${token}` }
        });

        return await result.json();
}

function populateTopArtists(topArtists, topTracks) {
    for (let i = 0; i < 5; i++) {
        let arr = topArtists.items[i].name;
        document.getElementById("topartist").innerHTML += JSON.stringify(arr) + " | ";
    }
}

async function fetchTopTracks(token) {
    const result = await fetch(tracksURL, {
            method: "GET", headers: { Authorization: `Bearer ${token}` }
        });

        return await result.json();
}

function populateTopTracks(topArtists, topTracks) {
    for (let i = 0; i < 10; i++) {
        
        let arrSong = topTracks.items[i].name;
        let arrArtist = topTracks.items[i].artists;
        let arrLength = topTracks.items[i].artists.length;
        
        if (arrLength != 1) {
            document.getElementById("toptrack").innerHTML += JSON.stringify(arrSong) + " - ";

            for (let j = 0; j <= arrLength-1; j++) {
                document.getElementById("toptrack").innerHTML += JSON.stringify(arrArtist[j].name);
            }
            document.getElementById("toptrack").innerHTML += " | "
        }
            
        else {
            document.getElementById("toptrack").innerHTML += JSON.stringify(arrSong) + " - " + JSON.stringify(arrArtist[0].name) + " | ";
        }
    }
}

async function fetchNowPlaying(token) {
    const result = await fetch(playingURL, {
            method: "GET", headers: { Authorization: `Bearer ${token}` }
        });

        return await result.json();
}

async function fetchPlayback(token) {
    const result = await fetch(playbackURL, {
            method: "GET", headers: { Authorization: `Bearer ${token}` }
        });

        return await result.json();
}

function populateNowPlaying(nowPlaying, playback) {
    document.getElementById("currentSong").innerText = nowPlaying.item.name;
    if (nowPlaying.item.explicit == true) {
        document.getElementById("explicit").innerText = "[E]";
    }
    document.getElementById("currentArtist").innerText = nowPlaying.item.artists[0].name;
    document.getElementById("albumArt").src = nowPlaying.item.album.images[0].url;
                 
    const ms = nowPlaying.item.duration_ms;
    const min = (ms / 1000) / 60;
    const sec = (ms / 1000) % 60;
    document.getElementById("currentLength").innerText = Math.round(min) + ":" + Math.round(sec);
                 
    document.getElementById("currentURL").innerText = nowPlaying.item.external_urls.spotify;
    document.getElementById("currentURL").setAttribute("href", nowPlaying.item.external_urls.spotify);
    
    document.getElementById("shuffle").innerText = playback.shuffle_state;
    document.getElementById("device").innerText = playback.device.name;
}
