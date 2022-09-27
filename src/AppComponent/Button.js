
import './Button.css';

function Button({color, id,onClick, turn}) {

    const select = (e) => {
        if(!e.target.className.includes('Select')){
        //    onClick(e);
            if(!check(e, turn)){
                alert('그곳엔 둘 수 없습니다.');
            }
        } else {
            alert('이미 고른 칸은 다시 고를 수 없습니다.');
        }
    }

    const check = (e, turn) => {
        const selectNum =  Number(e.target.id);
        const turnArr = [];
        if(turn.includes('my')){
            turnArr.push('mySelect');
            turnArr.push('yourSelect');
        } else {
            turnArr.push('yourSelect');
            turnArr.push('mySelect');
        }
        let possible = false;

        if(document.getElementById(selectNum+1).className.includes(turnArr[1])){
            for(let i=selectNum+2; i<=Math.ceil(selectNum/8)*8;i++)
                if(document.getElementById(i).className.includes(turnArr[0])){
                    for(let i=selectNum+1; i<=Math.ceil(selectNum/8)*8-1;i++){
                        if(document.getElementById(i).className.includes(turnArr[0])) break;
                        document.getElementById(i).classList.replace(turnArr[1], turnArr[0]);
                    }
                        onClick(e);
                        possible = true;
                    }
        }// 좌
        if(document.getElementById(selectNum-1).className.includes(turnArr[1])){
            for(let i=selectNum-2; i>=Math.floor(selectNum/8)*8+1;i--)
                if(document.getElementById(i).className.includes(turnArr[0])){
                    for(let i=selectNum-1; i>=Math.floor(selectNum/8)*8+1;i--){
                        if(document.getElementById(i).className.includes(turnArr[0])) break;
                        document.getElementById(i).classList.replace(turnArr[1], turnArr[0]);
                    }
                        onClick(e);
                        possible = true;
                    }
        }// 우
        if(document.getElementById(selectNum-8).className.includes(turnArr[1])){
            for(let i=selectNum-8; i>=0;){
                if(document.getElementById(i).className.includes(turnArr[0])){
                    for(let i=selectNum-8; i>=0;){
                        if(document.getElementById(i).className.includes(turnArr[0])) break;
                        document.getElementById(i).classList.replace(turnArr[1], turnArr[0]);
                        i -= 8;
                    }
                        onClick(e);
                        possible = true;
                    } i -= 8;
                }
        }// 상
        if(document.getElementById(selectNum+8).className.includes(turnArr[1])){
            for(let i=selectNum+8; i<=64;){
                if(document.getElementById(i).className.includes(turnArr[0])){
                    for(let i=selectNum+8; i<=64;){
                        if(document.getElementById(i).className.includes(turnArr[0])) break;
                        document.getElementById(i).classList.replace(turnArr[1], turnArr[0]);
                        i += 8;
                    }
                        onClick(e);
                        possible = true;
                    } i += 8;
                }
        }// 하
        if(document.getElementById(selectNum-7).className.includes(turnArr[1])){
            for(let i=selectNum-7; i>=0;){
                if(document.getElementById(i).className.includes(turnArr[0])){
                    for(let i=selectNum-7; i>=0;){
                        if(document.getElementById(i).className.includes(turnArr[0])) break;
                        document.getElementById(i).classList.replace(turnArr[1], turnArr[0]);
                        i -= 7;
                    }
                        onClick(e);
                        possible = true;
                    } i -= 7;
                }
        }// 대각 - 우상
        if(document.getElementById(selectNum-9).className.includes(turnArr[1])){
            for(let i=selectNum-9; i>=0;){
                if(document.getElementById(i).className.includes(turnArr[0])){
                    for(let i=selectNum-9; i>=0;){
                        if(document.getElementById(i).className.includes(turnArr[0])) break;
                        document.getElementById(i).classList.replace(turnArr[1], turnArr[0]);
                        i -= 9;
                    }
                        onClick(e);
                        possible = true;
                    } i -= 9;
                }
        }// 대각 - 좌상
        if(document.getElementById(selectNum+9).className.includes(turnArr[1])){
            for(let i=selectNum+9; i<=64;){
                if(document.getElementById(i).className.includes(turnArr[0])){
                    for(let i=selectNum+9; i<=64;){
                        if(document.getElementById(i).className.includes(turnArr[0])) break;
                            document.getElementById(i).classList.replace(turnArr[1], turnArr[0]);
                            i += 9;
                        }
                        onClick(e);
                        possible = true;
                        } i += 9;
                    }
        }// 대각 - 우하
        if(document.getElementById(selectNum+7).className.includes(turnArr[1])){
            for(let i=selectNum+7; i<=64;){
                if(document.getElementById(i).className.includes(turnArr[0])){
                    for(let i=selectNum+7; i<=64;){
                        if(document.getElementById(i).className.includes(turnArr[0])) break;
                            document.getElementById(i).classList.replace(turnArr[1], turnArr[0]);
                            i += 7;
                        }
                        onClick(e);
                        possible = true;
                        } i += 7;
                    }
        }// 대각 - 좌하  
        return possible;
    }

    return (
        <button onClick={select} id={id} className={color}>{id}</button>
    );
}

export default Button;