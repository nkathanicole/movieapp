
import React from 'react';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <h2>The Passion of the Christ</h2>
      <p>Depicts the final twelve hours in the life of Jesus of Nazareth, on the day of his crucifixion in Jerusalem. Mel Gibson's well-publicized production The Passion of the Christ concerns the last 12 hours in the life of Jesus of Nazareth. The dialogue is spoken in the ancient Aramaic language, along with Latin and Hebrew.</p>
      <img src='https://cdn.cinematerial.com/p/297x/llimnn6k/the-passion-of-the-christ-british-movie-poster-md.jpg?v=1456113988' />
      <p>Rating: 'pg'</p>


      <h2>Father_Stu</h2>
      <p>'Father Stu is a 2022 biographical drama film starring Mark Wahlberg as Stuart Long, a boxer-turned-Catholic priest who lives with a progressive muscle disorder. The film is written and directed by Rosalind Ross in her directorial debut.</p>
      <img src='https://upload.wikimedia.org/wikipedia/en/d/db/Father_Stu.jpg' />
      <p>Rating: 'pg'</p>

      <h2>sound of music</h2>
      <p>'Set in Austria on the eve of the Anschluss in 1938, the musical tells the story of Maria, who takes a job as governess to a large family while she decides whether to become a nun. She falls in love with the children, and eventually their widowed father, Captain von Trapp.'</p>
      <img src='https://cinesocialuk.com/wp-content/uploads/2021/02/sound-of-music-poster.jpg'/>
      <p>Rating: 'all rating'</p>




    </div>



  );
};

export default MovieCard;