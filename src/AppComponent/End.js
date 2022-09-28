import './End.css';

function End() {
    const total = () => {
        let white = 0, black = 0;
        for(let i=1; i<=64; i++){
            if(document.getElementById(i).className.includes('my')) white++;
            else if(document.getElementById(i).className.includes('your')) black++;
        }
        if(white > black) alert(`${white} : ${black} 당신의 승리입니다!`);
        else alert(`${white} : ${black} 당신의 패배입니다!`);
        document.location.reload();
    }

    return (
        <button onClick={total} className='endButton'>점수 집계</button>
    );
}

export default End;