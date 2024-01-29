import React from 'react';
import './AnimeCard.style.css'

const AnimeCard = () => {
  return (
    <div className='anime-card-layout'>
        <div className=''>
            <img 
                className='anime-img' 
                src='https://image.laftel.net/carousel/2f7d20d3-b996-4fa5-9b3a-c8d69d79202b.jpg?Expires=1706005194&Signature=lZAke6hJ2S5mKx7OzEn5fw01TIpocrEFvhKtaQ~HTNZcnDrZGhT7QeZXKu54DExaxXbWbf-RINR9PTxBAyFCQe~kegqxb-8~ZR6tmx58ikhAPPiwU2dM29jqNlw~3GRcQLT4xg2toJzHP2jC7ZGqGkjohPj-p7d9PjuZ1UW5wpr8bjabKeT9LKXP-SVaSCojj~CeIcL0gBaFG54qacunhSrRWRGUtlQUNj3P9DGiyR1Mqw81A3C3Kqg0Ac7X-dE3NkB6YnBE6zQb3OT1hUkV7C3UhnkU0~DrKdZFXuXO6C2OeybY0m84dQpp9qqUqisds~ugFLEqQLF2sSe2kjCXNA__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A' 
            />
        </div>
        <div className=''>title</div>
    </div>
  );
}

export default AnimeCard;
