import "./Main.css" // 첫번째 방식
import titleCss from "../title.module.css" // 2번째방식 - CSS Module

const Main = () => {
  const number = 10;
  const user = {
    name : "RReact",
    isLogin : false
  }
    return (
      <>
      {/* CSS Module적용한 것 */}
        <h1 className={titleCss.title}>Main</h1> 

        {/* JSX 문법 */}
        <h2>{number % 2 == 0 ? "짝수" : "홀수" }</h2>

        <div>
        {/* 여기선 유저 상태에 따라 보여주는 걸 다르게  */}

        {/* 기존 CSS 이용 방식 */}
        {user.isLogin ? <div>로그인 상태임!</div> : <div className="logout">로그아웃 상태임</div>}
        </div>
      </>
    )
  }

export default Main