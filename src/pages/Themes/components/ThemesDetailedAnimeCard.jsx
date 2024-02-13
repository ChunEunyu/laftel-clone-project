import { FaStar } from "react-icons/fa";

const ThemesDetailedAnimeCard = ({ info }) => {
  return (
    <div className="py-3">
        <div className="flex px-5 shrink items-start">
            <div className="w-1/5">
                <img 
                    className="w-full  object-cover rounded-md content-center"
                    src={info.img_url} 
                    alt="img" 
                />
            </div>
            <div className="w-4/5 px-5">
                <p>{info.name}</p>
                <div className="flex">
                    <div className='text-[#816BFF] flex flex-row w-16 h-8'>
                        <FaStar className='w-3 h-6 mr-1' />
                        <p className="text-md font-semibold">{info.avg_rating.toFixed(1)}</p>
                    </div>
                    <p>{info.genre_tag_list.join('ㆍ')} | {info.content_rating.slice(0, 3)}ㆍ</p>
                    <p>{info.is_ending?'완결':'방영중'}</p>
                </div>
                <p>{info.content}</p>
            </div>
        </div>
    </div>
  );
}

export default ThemesDetailedAnimeCard;
