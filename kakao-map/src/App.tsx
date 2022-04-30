import { useEffect, useRef } from "react";
import "./App.css";

declare global {
  interface Window {
    kakao: any;
  }
}

function App() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        if (mapRef.current) {
          var options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
          };

          new window.kakao.maps.Map(mapRef.current, options);
        }
      });
    };

    return () => script.remove();
  }, []);

  return (
    <div className="container">
      <div ref={mapRef} className="map"></div>
    </div>
  );
}

export default App;
