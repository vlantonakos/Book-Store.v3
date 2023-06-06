import React from 'react'
import { useParams } from 'react-router-dom';
import book1 from '../assets/book1.png'
import book2 from '../assets/book2.png'
import book3 from '../assets/book3.png'
import book4 from '../assets/book4.png'
import { Box, Typography } from '@mui/material';

const BookDetails = () => {
    const { id } = useParams();

    const books = [
        { id: 1, title: 'The Puppeteers: The People Who Control the People Who Control America', image: `${book1}`, author: 'Jason Chaffetz', description: '"The Puppeteers: The People Who Control the People Who Control America" is a thought-provoking book that delves into the hidden mechanisms of power and influence in modern society. With meticulous research and compelling narratives, the author uncovers the intricate web of individuals and organizations who pull the strings behind the scenes, manipulating the decisions and actions of those who hold power in America. From shadowy lobbyists to media moguls, from wealthy elites to influential interest groups, the book exposes the often covert methods employed by these puppeteers to shape policies, shape public opinion, and ultimately determine the direction of the nation. Offering a captivating blend of investigative journalism and critical analysis, "The Puppeteers" challenges readers to question the true nature of democracy and consider the far-reaching implications of power dynamics in contemporary America.' },
        { id: 2, title: 'Happy Place', image: `${book2}`, author: 'Emily Henry', description: `"Happy Place" by Emily Henry is a captivating and heartwarming tale that takes readers on an unforgettable journey of self-discovery, love, and finding joy in unexpected places. Set against a backdrop of charming small-town life, the story follows the life of the protagonist as she navigates through personal challenges and embarks on a quest for happiness. With Emily Henry's signature wit and poignant storytelling, the book explores themes of resilience, friendship, and the transformative power of embracing life's imperfections. As the pages unfold, readers will be swept away by the relatable characters, evocative descriptions, and the author's ability to effortlessly blend laughter and tears. "Happy Place" is a delightful and uplifting novel that reminds us to seek happiness in the most unexpected corners of our lives, ultimately leaving readers with a renewed sense of hope and a warm smile.` },
        { id: 3, title: 'The Book of Charlie: Wisdom from the Remarkable American Life of a 109-Year-Old Man', image: `${book3}`, author: 'David Von Drehle', description: `"The Book of Charlie: Wisdom from the Remarkable American Life of a 109-Year-Old Man" by David Von Drehle is a captivating and inspiring account that celebrates the extraordinary life of Charlie, a centenarian who has witnessed a century of history. With eloquence and empathy, the author takes readers on a journey through Charlie's remarkable experiences, offering a unique perspective on the ups and downs of American society over the decades. From the Great Depression to World War II, from civil rights movements to technological advancements, Charlie's life story becomes a lens through which we can gain valuable insights and wisdom. Through anecdotes, reflections, and profound lessons learned, this book captures Charlie's resilience, optimism, and profound understanding of the human condition. "The Book of Charlie" serves as a testament to the power of human spirit and resilience, and it reminds us of the timeless wisdom that can be gleaned from those who have lived through significant historical moments. It is a heartwarming and thought-provoking tribute to the indomitable spirit of a remarkable individual whose experiences offer lessons for generations to come.` },
        { id: 4, title: `Oh, the Places You'll Go!`, image: `${book4}`, author: 'Dr. Seuss', description: `"Oh, the Places You'll Go!" by Dr. Seuss is a beloved and timeless children's book that inspires readers of all ages to embrace life's adventures and possibilities. With whimsical illustrations and Dr. Seuss's signature rhymes, the book takes readers on a colorful journey through various life experiences and encourages them to explore the world with curiosity, courage, and determination. From soaring heights to challenging obstacles, the book beautifully captures the ups and downs of life's journey, teaching important lessons about resilience, perseverance, and self-belief. With its uplifting and motivational tone, "Oh, the Places You'll Go!" serves as a comforting and empowering reminder that each person has the ability to shape their own future and create a life full of extraordinary experiences. It has become a cherished classic, often given as a gift to mark significant milestones and transitions, and continues to inspire readers to embrace the unknown with enthusiasm and optimism.` },
    ];
    
    const book = books.find((book) => book.id === parseInt(id));

    if (!book) {
        return <div>Book not found</div>;
    }

  return (
    <Box sx={{pt:'5vh',width:'100%',height:'100vh',display:'grid',justifyContent:'center',alignItems:'center'}}>
        <Typography variant='h2' sx={{textAlign:'center',fontFamily:'Lato'}}>{book.title}</Typography>
        <Box sx={{display:'flex',pt:0,mt:0}}>
            <img src={book.image} alt={book.title} style={{position:'relative',width:'400px',height:'550px'}} />
            <Box sx={{display:'grid'}}>
                <Typography variant='h5' sx={{pl:5,fontFamily:'Libre Baskerville',fontWeight:'400',fontSize:'1.4rem'}}><Typography sx={{fontWeight:'bold'}}>Author:</Typography> {book.author}</Typography>
                <Typography variant='h5' sx={{pl:5,fontFamily:'Libre Baskerville',fontWeight:'400',fontSize:'1.4rem'}}><Typography sx={{fontWeight:'bold'}}>Description:</Typography> {book.description}</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default BookDetails