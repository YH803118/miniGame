
import './WhiteButton.css';

function whiteButton({id, onClick}) {
    const select = (e) => {
        if(!e.target.className.includes('Select')){
           onClick(e);
        } else {
            alert('이미 고른 칸은 다시 고를 수 없습니다.');
        }
    }

    return (
        <button onClick={select} id={id} className='whiteGameButton'>{id}</button>
    );
}

export default whiteButton;