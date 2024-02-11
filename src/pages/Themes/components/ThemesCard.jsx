import { useNavigate } from 'react-router-dom';

const ThemesCard = ({ id, imgUrl, title, desc }) => {
  const navigate = useNavigate();
  const showThemes = (id) => {
    navigate(`/themes/${id}`);
  };

  return (
    <div className='pt-2 pb-2 cursor-pointer' onClick={() => showThemes(id)}>
        <img
          className='object-cover rounded-sm w-full md:h-44 sm:h-36'
          src={imgUrl}
          alt='img'
        />
        <div
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}  
          className='h-auto overflow-hidden overflow-ellipsis text-lg pt-2 font-bold'>
          {title}
        </div>
        <div
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }} 
          className='h-16 overflow-hidden overflow-ellipsis text-sm text-[#616161] '
        >
          {desc}
        </div>
    </div>
  );
}

export default ThemesCard;
