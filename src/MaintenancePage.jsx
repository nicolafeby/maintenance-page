import "./maintenance.css";

export default function MaintenancePage() {
  return (
    <div className="container">
      <div className="card">
        {/* Custom Loader */}
        <div className="loader">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <h1>🚧 Server Sedang Dalam Perbaikan 🚧</h1>

        <p>
          Kami sedang melakukan pemeliharaan untuk meningkatkan kualitas server.
          <br />
          Mohon coba kembali beberapa saat lagi.
        </p>

        <p className="thanks">
          Terimakasih atas pengertiannya!
        </p>
      </div>
    </div>
  );
}