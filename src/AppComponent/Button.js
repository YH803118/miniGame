
import './Button.css';

function Button({color, id,onClick, turn}) {

    const select = (e) => {
        if(!e.target.className.includes('Select')){
        //    onClick(e);
            if(!check(e, turn)){
                alert('그곳엔 둘 수 없습니다.');
            } else onClick(e);
        } else {
            alert('이미 고른 칸은 다시 고를 수 없습니다.');
        }
    }

    const check = (e, turn) => {
        console.log('----------------------');
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

        const changeUp = (i, add) => {
            let possible = false;
            if(document.getElementById(i).className.includes(turnArr[0])){
                // 내 돌인가?
                for(let j=selectNum+add; j<i;){
                    if(document.getElementById(j).className.includes(turnArr[0])) break;
                    document.getElementById(j).classList.replace(turnArr[1], turnArr[0]);
                    j += add;
                }
                possible=true;
                }
            return possible;
        }
        const changeDown = (i, rem) => {
            let possible = false;
            if(document.getElementById(i).className.includes(turnArr[0])){
                for(let j=selectNum-rem; j>i;){
                    if(document.getElementById(j).className.includes(turnArr[0])) break;
                    document.getElementById(j).classList.replace(turnArr[1], turnArr[0]);
                    j -= rem;
                }
                possible=true;
                }
            return possible;
        }

        if(selectNum%8 !== 0 && document.getElementById(selectNum+1).className.includes(turnArr[1])){
            // 바로 옆에 상대편 돌이 있는지 체크 -> 방향을 결정.
            for(let i=selectNum+2; i<=Math.ceil(selectNum/8)*8;i++){
                // 상대편 돌 옆에 내 돌이 있는지 체크
                if(!document.getElementById(i).className.includes('Select')) break;
                if(changeUp(i, 1)){ possible = true; break;}
                    // 내 돌을 발견한다면 호출하고 빠져나가기
            }
        }// 좌
        if(selectNum%8 !== 1 && document.getElementById(selectNum-1).className.includes(turnArr[1])){
            for(let i=selectNum-2; i>=Math.floor((selectNum-1)/8)*8+1;i--){
                if(!document.getElementById(i).className.includes('Select')) break;
                if(changeDown(i, 1)){ possible = true; break;}
            }
        }// 우
        if(selectNum>16 && document.getElementById(selectNum-8).className.includes(turnArr[1])){
            for(let i=selectNum-8; i>=0;){
                if(!document.getElementById(i).className.includes('Select')) break;
                if(changeDown(i, 8)){ possible = true; break;}
                i -= 8;
                }
        }// 상
        if(selectNum<57 && document.getElementById(selectNum+8).className.includes(turnArr[1])){
            for(let i=selectNum+8; i<=64;){
                if(!document.getElementById(i).className.includes('Select')) break;
                if(changeUp(i, 8)) { possible = true; break;}
                i += 8;
                }
        }// 하
        if(selectNum>9 && selectNum%8 !== 0 && document.getElementById(selectNum-7).className.includes(turnArr[1])){
            for(let i=selectNum-7; i>0;){
                if(!document.getElementById(i).className.includes('Select')) break;
                if(changeDown(i,7)) { possible = true; break;}
                 i -= 7;
                }
        }// 대각 - 좌하->우상
        if(selectNum>9 && selectNum%8 !== 1 && document.getElementById(selectNum-9).className.includes(turnArr[1])){
            for(let i=selectNum-9; i>0;){
                if(!document.getElementById(i).className.includes('Select')) break;
                if(changeDown(i, 9)) { possible = true; break;}
                 i -= 9;
                }
        }// 대각 - 우하->좌상
        if(selectNum<57 && selectNum%8 !== 0 && document.getElementById(selectNum+9).className.includes(turnArr[1])){
            for(let i=selectNum+9; i<=64;){
                if(!document.getElementById(i).className.includes('Select')) break;
                if(changeUp(i, 9)){ possible = true; break;}
                 i += 9;
                    }
        }// 대각 - 좌상->우하
        if(selectNum<57 && selectNum%8 !== 1 && document.getElementById(selectNum+7).className.includes(turnArr[1])){
            for(let i=selectNum+7; i<=64;){
                if(!document.getElementById(i).className.includes('Select')) break;
                if(changeUp(i, 7)) { possible = true; break;}
                 i += 7;
                    }
        }// 대각 - 우상->좌하  
        return possible;
    }

    return (
        <button onClick={select} id={id} className={color}>{id}</button>
    );
}

export default Button;