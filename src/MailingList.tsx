import "./App.css";

const MailingList = () => (
  <div
    className="mailinglist-root"
    style={{
      minHeight: "100vh",
      minWidth: "100vw",
      width: "100vw",
      height: "100vh",
      background: "#fff",
      display: "flex",
      alignItems: "stretch",
      justifyContent: "center",
    }}
  >
    {/* Left: Image */}
    <div
      style={{
        flex: "0 0 35%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
      }}
    >
      <img
        src="https://i-p.rmcdn.net/651da635459e8b003da4fa0b/5574031/image-f2616d20-b8a8-4067-bb0a-136b33c93757.jpg?cX=37&cY=0&cW=693&cH=1008"
        alt="Girl Pervert"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 16,
          boxShadow: "0 0 10px #eee",
        }}
      />
    </div>
    {/* Right: Form and Text */}
    <div
      style={{
        flex: "1 1 65%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2vw",
        background: "#fff",
      }}
    >
      {/* Big Text */}
      <div style={{ marginBottom: 24 }}>
        <p
          style={{
            lineHeight: "7vw",
            fontFamily: "Times New Roman, serif",
            fontWeight: 400,
            fontSize: "8vw",
            textAlign: "center",
            margin: 0,
          }}
        >
          <span style={{ color: "#000" }}>"Girl Perverts...</span>
        </p>
        <p
          style={{
            lineHeight: "7vw",
            fontFamily: "Times New Roman, serif",
            fontWeight: 400,
            fontSize: "8vw",
            textAlign: "center",
            margin: 0,
          }}
        >
          <span style={{ color: "#000" }}>
            in{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              MY
            </span>{" "}
            email?!"
          </span>
        </p>
      </div>
      {/* Mailing List Form */}
      <form
        encType="multipart/form-data"
        method="post"
        target="form_submit_iframe"
        style={{
          width: "100%",
          maxWidth: 429,
          background: "rgba(255,255,255,0.95)",
          borderRadius: 10,
          boxShadow: "0 0 10px #eee",
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <div
          className="input-wrapper"
          style={{
            height: 40,
            width: "100%",
            marginBottom: 0,
            backgroundColor: "#efefef",
            borderRadius: 10,
            boxShadow: "0 0 0 1px #fff inset",
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            className="js-input"
            type="text"
            autoCapitalize="on"
            autoComplete="off"
            autoCorrect="off"
            name="Name"
            placeholder="Name"
            spellCheck={false}
            style={{
              fontFamily: "Roboto, sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
              color: "#000",
              fontSize: 18,
              letterSpacing: 0,
              marginBottom: 0,
              textAlign: "left",
              direction: "ltr",
              background: "transparent",
              border: "none",
              outline: "none",
              width: "100%",
              padding: "0 12px",
            }}
          />
        </div>
        <div
          className="input-wrapper"
          style={{
            height: 39,
            width: "100%",
            marginBottom: 1,
            backgroundColor: "#efefef",
            borderRadius: 10,
            boxShadow: "0 0 0 1px #fff inset",
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            className="js-input"
            type="email"
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            name="Email"
            placeholder="Email"
            spellCheck={false}
            inputMode="email"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
              color: "#000",
              fontSize: 18,
              letterSpacing: 0,
              marginBottom: 0,
              textAlign: "left",
              direction: "ltr",
              background: "transparent",
              border: "none",
              outline: "none",
              width: "100%",
              padding: "0 12px",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            height: 39,
            width: "100%",
            lineHeight: "39px",
            backgroundColor: "#ff0000",
            borderRadius: 10,
            boxShadow: "0 0 0 1px #fff inset",
            fontFamily: "Roboto, sans-serif",
            fontStyle: "normal",
            fontWeight: 400,
            color: "#fff",
            fontSize: 21,
            letterSpacing: 0,
            textAlign: "center",
            textIndent: 0,
            border: "none",
            marginTop: 8,
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseOver={e =>
            (e.currentTarget.style.backgroundColor = "rgba(255,0,0,0.9)")
          }
          onMouseOut={e =>
            (e.currentTarget.style.backgroundColor = "#ff0000")
          }
        >
          FUCK YES
        </button>
      </form>
      {/* Blue Text */}
      <div style={{ marginTop: 32 }}>
        <p
          style={{
            lineHeight: "2vw",
            fontFamily: "Trebuchet MS, sans-serif",
            fontWeight: 400,
            fontSize: "2vw",
            textAlign: "center",
            color: "rgb(27,27,198)",
            margin: 0,
          }}
        >
          It's nothing naughty, we promise ;)
        </p>
      </div>
    </div>
  </div>
);

export default MailingList;