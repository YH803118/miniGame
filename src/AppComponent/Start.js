import './Start.css'

function Start() {

    const gameStart = () => {
        for(let i=1; i<=64; i++){
            document.getElementById(i).classList.remove('mySelect', 'yourSelect');
        }
        document.getElementById('28').className += ' mySelect';
        document.getElementById('37').className += ' mySelect';
        document.getElementById('29').className += ' yourSelect';
        document.getElementById('36').className += ' yourSelect';
        alert('게임이 시작되었습니다! 당신의 돌은 흰색입니다.');
    }

    return (
        <>
            
            <button className='startButton' onClick={gameStart}>게임 시작</button>
        </>
    );
}

export default Start;