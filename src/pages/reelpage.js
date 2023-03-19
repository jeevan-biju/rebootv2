import "./reelpage.css";
const profile_dp =
  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/xsnipp_reboot%2Fmia.png?alt=media&token=12dbbf9a-e052-488e-afe8-844b00218de8";

const insta_logo =
  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/logo-ig-png-32464.png?alt=media&token=a5ca67de-0141-477b-a27b-7403e4c5e42e";

const snapchat_logo =
  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/snapchat-icon-1701.png?alt=media&token=538f91bb-8931-4d83-b635-6a69d1a18858";

const pornhub_logo =
  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/Pornhub-Logo.wine.png?alt=media&token=41fb9259-168e-4ce7-bb78-de2ccde6dc11";

const play_logo =
  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/xsnipp_reboot%2FPlay.png?alt=media&token=4fc1a986-2cf5-4899-a429-2a642dc3cbda";

const follow_logo =
  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/xsnipp_reboot%2FTwo-user.png?alt=media&token=795153a3-cc54-4c31-b87f-54f645fd4d7d";

const like_logo =
  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/xsnipp_reboot%2FHeart.png?alt=media&token=0e5c45c0-e57e-4ef6-9cfa-e2d164c1cad0";

const images = [
  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/xsnipp_reboot%2Fmia1.jpg?alt=media&token=0dad2c3a-e420-44c2-9827-34b715707a1e",

  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/xsnipp_reboot%2Fmia3.png?alt=media&token=69421966-31ef-489f-9961-b6159f594ca3",

  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/xsnipp_reboot%2Fmia4.png?alt=media&token=65a61fb4-d2ec-464f-97b2-dcc3396e1b12",

  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/xsnipp_reboot%2Fmia7.png?alt=media&token=fb44a348-eb20-4b5e-909d-3cffc39d8a5c",

  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/xsnipp_reboot%2Fmia6.png?alt=media&token=3604c797-52eb-4752-9661-ae39f9263e48",

  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/xsnipp_reboot%2Fmia5.png?alt=media&token=9a68326c-3972-47d4-b6fc-ff127b316b72",
];

function Home_Page() {
  return (
    <div>
      <div className="border_usa">
        <div className="profile_den">
          <h1 className="logo">Xsnipp.com</h1>

          <img className="dp" src={profile_dp}></img>
          <div className="parent">
            <p>@</p>
            <h2>Mia Khalifa</h2>
          </div>
          <p className="bio"> "Finger Lickiing Good"</p>
          <div className="parent_socials">
            <a href="https://www.snapchat.com/add/thedcsportsgirl">
              <img className="logo_snap" src={snapchat_logo}></img>
            </a>
            <a href="https://www.pornhub.com/channels/mia-khalifa">
              <img className="logo_ph" src={pornhub_logo}></img>
            </a>
            <a href="https://www.instagram.com/miakhalifa/?hl=en">
              <img className="logo_insta" src={insta_logo}></img>
            </a>
          </div>
          <div className="stats">
            <div className="stat_bars">
              <img className="play_logo" src={play_logo}></img>
              <p className="digits">392 M</p>
            </div>
            <div className="stat_bars">
              <img className="follow_logo" src={follow_logo}></img>
              <p className="digits">6 M</p>
            </div>
            <div className="stat_bars">
              <img className="like_logo" src={like_logo}></img>
              <p className="digits">854 M</p>
            </div>
          </div>
        </div>

        {/* jevfkhgavfjhvk,hsjbjhevb,shjb,v */}

        <div className="Underside">
          <div
            className="gallery_display"
            style={{ display: "flex", flexWrap: "wrap", top: "40px" }}
          >
            {images.map((imageUrl, index) => (
              <a href={imageUrl}>
                <img
                  key={index}
                  src={imageUrl}
                  style={{
                    margin: "13px",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_Page;
