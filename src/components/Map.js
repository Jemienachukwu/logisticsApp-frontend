// import React, { useEffect } from "react";
// import mapboxgl from "mapbox-gl";
// import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";

// Set access token outside the component
// mapboxgl.accessToken =
//   "pk.eyJ1IjoiamVtaWVuYWNodWt3dSIsImEiOiJjbGlhNWQ2YmIwMGM1M2NtbGE5eXlxdWEyIn0.f7axHcFB0mWwMvzv31cSkw";

// const Map = () => {
//   useEffect(() => {
//     mapboxgl.accessToken =
//       "pk.eyJ1IjoiamVtaWVuYWNodWt3dSIsImEiOiJjbGlhNWQ2YmIwMGM1M2NtbGE5eXlxdWEyIn0.f7axHcFB0mWwMvzv31cSkw";

//     const map = new mapboxgl.Map({
//       container: "map",
//       style: "mapbox://styles/mapbox/streets-v12",
//       center: [-79.4512, 43.6568],
//       zoom: 13,
//     });

//     map.addControl(
//       new MapboxDirections({
//         accessToken: mapboxgl.accessToken,
//       }),
//       "top-right"
//     );
//   }, []);

//  // 002

// useEffect(() => {
//   mapboxgl.accessToken =
//     "pk.eyJ1IjoiamVtaWVuYWNodWt3dSIsImEiOiJjbGlhNWQ2YmIwMGM1M2NtbGE5eXlxdWEyIn0.f7axHcFB0mWwMvzv31cSkw";

//   const map = new mapboxgl.Map({
//     style: "mapbox://styles/mapbox/streets-v12",
//     center: [12.550343, 55.665957],
//     zoom: 15.5,
//     pitch: 45,
//     bearing: -17.6,
//     container: "map",
//     antialias: true,
//   });

//   // Add markers
//   new mapboxgl.Marker().setLngLat([12.554729, 55.70651]).addTo(map);
//   new mapboxgl.Marker({ color: "black", rotation: 45 })
//     .setLngLat([12.65147, 55.608166])
//     .addTo(map);
// }, []);

//   return <div id="map" className="map"></div>;
// };

// export default Map;

import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";

function Map() {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiamVtaWVuYWNodWt3dSIsImEiOiJjbGlhNWQ2YmIwMGM1M2NtbGE5eXlxdWEyIn0.f7axHcFB0mWwMvzv31cSkw";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-122.662323, 45.523751],
      zoom: 12,
    });

    const bounds = [
      [-123.069003, 45.395273],
      [-122.303707, 45.612333],
    ];
    map.setMaxBounds(bounds);

    // set to current location
    const start = [-122.686443, 45.511115];

    async function getRoute(end) {
      try {
        const response = await axios.get(
          `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`
        );
        const data = response.data;
        const route = data.routes[0].geometry.coordinates;
        const geojson = {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: route,
          },
        };

        if (map.getSource("route")) {
          map.getSource("route").setData(geojson);
        } else {
          map.addLayer({
            id: "route",
            type: "line",
            source: {
              type: "geojson",
              data: geojson,
            },
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "#35B368",
              "line-width": 5,
              "line-opacity": 0.75,
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    }

    map.on("load", () => {
      getRoute(start);

      map.addLayer({
        id: "point",
        type: "circle",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: start,
                },
              },
            ],
          },
        },

        // current user location marker
        paint: {
          "circle-radius": 10,
          "circle-color": "#3887be",
        },
      });

      map.on("click", (event) => {
        const coords = Object.keys(event.lngLat).map(
          (key) => event.lngLat[key]
        );
        const end = {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Point",
                coordinates: coords,
              },
            },
          ],
        };

        if (map.getLayer("end")) {
          map.getSource("end").setData(end);
        } else {
          map.addLayer({
            id: "end",
            type: "circle",
            source: {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    properties: {},
                    geometry: {
                      type: "Point",
                      coordinates: coords,
                    },
                  },
                ],
              },
            },
            paint: {
              "circle-radius": 10,
              "circle-color": "#f30",
            },
          });
        }

        getRoute(coords);
      });
    });
  }, []);

  return (
    <div
      id="map"
      className="map"
      // style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
    ></div>
  );
}

export default Map;
