import React, { Component } from "react";

export default class CardFront extends Component {
  render() {
    return (
      <div
        className="card-front"
        style={{ backgroundImage: `url(${this.props.poster})` }}
      ></div>
    );
  }
}

// CardFront.defaultPoster = {
//   poster:
//     "https://m.media-amazon.com/images/M/MV5BOTJjNzczMTUtNzc5MC00ODk0LWEwYjgtNzdiOTEyZmQxNzhmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_UY268_CR1,0,182,268_AL_.jpg",
// };
