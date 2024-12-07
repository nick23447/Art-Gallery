export default function Image({ data }) {
    const imageStyle = { width: 300 };
    return data.primaryImage ? (
      <section class="image-container">
        <figure>
          <img
            style={imageStyle}
            src={data.primaryImage}
            alt="art piece from the Met"
          />
        </figure>
        <div class="text-container">
          <p>
            <b>Artist Name:</b> {data.artistDisplayName || "Unknown"}
          </p>
          <p>
            <b>Title:</b> {data.title || "Unknown"}
          </p>
        </div>
      </section>
    ) : (
      <p>No data for this artist</p>
    );
  }
  