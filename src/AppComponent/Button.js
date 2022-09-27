
import './Button.css';

function Button({color, id,onClick, turn}) {

    const select = (e) => {
        if(!e.target.className.includes('Select')){
        //    onClick(e);
            check(e, turn);
        } else {
            alert('이미 고른 칸은 다시 고를 수 없습니다.');
        }
    }

    const check = (e, turn) => {
        const selectNum =  Number(e.target.id);
        // console.log(document.getElementById(selectNum));
        // if(selectNum < 8){}
        // else if(selectNum%8 == 0){}
        // else if(selectNum%8 == 1){}
        // else if(selectNum > 56){}
        // else         
        console.log(Math.ceil(selectNum/8));
        if(turn.includes('my')){
            if(document.getElementById(selectNum+1).className.includes('your')){
                for(let i=selectNum+2; i<=Math.ceil(selectNum/8)*8;i++)
                    if(document.getElementById(i).className.includes('my')){
                        for(let i=selectNum+1; i<=Math.ceil(selectNum/8)*8-1;i++)
                            document.getElementById(i).classList.replace('yourSelect', 'mySelect');
                            onClick(e);
                        }
            }// 좌
            if(document.getElementById(selectNum-1).className.includes('your')){
                for(let i=selectNum-2; i>=Math.floor(selectNum/8)*8+1;i--)
                    if(document.getElementById(i).className.includes('my')){
                        for(let i=selectNum-1; i>=Math.floor(selectNum/8)*8+1;i--)
                            document.getElementById(i).classList.replace('yourSelect', 'mySelect');
                            onClick(e);
                        }
            }// 우
            if(document.getElementById(selectNum-8).className.includes('your')){
                for(let i=selectNum-8; i>=0;){
                    if(document.getElementById(i).className.includes('my')){
                        for(let i=selectNum-8; i>=0;){
                            document.getElementById(i).classList.replace('yourSelect', 'mySelect');
                            i -= 8;
                        }
                            onClick(e);
                        } i -= 8;
                    }
            }// 상
            if(document.getElementById(selectNum+8).className.includes('your')){
                for(let i=selectNum+8; i<=64;){
                    if(document.getElementById(i).className.includes('my')){
                        for(let i=selectNum+8; i<=64;){
                            document.getElementById(i).classList.replace('yourSelect', 'mySelect');
                            i += 8;
                        }
                            onClick(e);
                        } i += 8;
                    }
            }// 하
            if(document.getElementById(selectNum-8).className.includes('your')){
                for(let i=selectNum-8; i>=0;){
                    if(document.getElementById(i).className.includes('my')){
                        for(let i=selectNum-8; i>=0;){
                            document.getElementById(i).classList.replace('yourSelect', 'mySelect');
                            i -= 8;
                        }
                            onClick(e);
                        } i -= 8;
                    }
            }// 대각 - 
            else onClick(e);
        }
        else onClick(e);
        //      if(
        //     document.getElementById(selectNum-1).className.includes('yourSelect') ||
        //     document.getElementById(selectNum+8).className.includes('yourSelect') ||
        //     document.getElementById(selectNum-8).className.includes('yourSelect')
        //     ){
        //         console.log('주위에 검은 돌이 있다?');
        //         onClick(e);
        // }
        // else {
        //     alert('둘수없는 곳입니다!');
        // }
    }

    return (
        <button onClick={select} id={id} className={color}>{id}</button>
    );
}

export default Button;