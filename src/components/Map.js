import React from "react";

const Map = () => {
  return (
    <div>
      {" "}
      <iframe
        title="map"
        width="600"
        height="510"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  );
};

export default Map;
