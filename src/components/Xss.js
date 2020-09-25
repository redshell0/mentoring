import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const Xss = () => {
  return (
    <motion.div
      className="xss"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1># Reflected XSS</h1>
      <div className="wrapper">
        <p>
          다음과 같이 ID를 입력하면 "Welcome OOO !!"을 출력해 주는 페이지가
          있다고 가정하자.
        </p>
        <img
          alt="1"
          src="https://t1.daumcdn.net/cfile/tistory/230DC54B58C4E00716"
        />
        <img
          alt="2"
          src="https://t1.daumcdn.net/cfile/tistory/2549384B58C4E00834"
        />
        <p>
          이 페이지에 간단한 스크립트를 삽입하면 별다른 필터링 없이 실행이 되는
          것을 확인할 수 있다.
        </p>
        <img
          src="https://t1.daumcdn.net/cfile/tistory/240BE14B58C4E0060D"
          alt="3"
        />
        <img
          src="https://t1.daumcdn.net/cfile/tistory/25533D4B58C4E00512"
          alt="4"
        />

        <p>
          공격자는 이러한 취약점이 존재하는 페이지를 미리 탐색한 후, XSS 공격을
          위한 스크립트가 포함 된 URL을 공격 대상자에게 노출시키는 방법으로
          공격을 수행할 수 있다.
        </p>
        <br />
        <p>Reflected XSS의 공격 순서는 다음과 같다.</p>

        <div style={{ backgroundColor: "#fff" }}>
          <img
            src="https://t1.daumcdn.net/cfile/tistory/2272044B58C4E00504"
            alt="5"
          />
        </div>
        <p>
          공격자가 미리 XSS 공격에 취약한 웹 사이트를 탐색하고, XSS 공격을 위한
          스크립트를 포함 한 URL을 사용자에 노출시킨다. 사용자가 해당 URL을 클릭
          할 경우, 취약한 웹 사이트의 서버에 스크립트가 포함 된 URL을 통해
          Request를 전송하고, 웹 서버에서는 해당 스크립트를 포함한 Response를
          전송하게 된다.
        </p>
      </div>
      <h1 style={{ marginTop: 100 }}># Stored XSS</h1>
      <div className="wrapper">
        <p>
          Stored XSS는 Reflected XSS와는 달리 웹 사이트의 게시판에 스크립트
          삽입하는 공격 방식이다.
        </p>

        <p>
          공격자는 게시판에 스크립트를 삽입한 후 공격 대상자가 해당 게시글을
          클릭하도록 유도한다.
        </p>
        <img
          src="https://t1.daumcdn.net/cfile/tistory/22662A4B58C4E00705"
          alt="10"
          style={{ backgroundColor: "#fff" }}
        />
        <p>
          공격자가 미리 XSS 공격에 취약한 웹사이트를 탐색하고 XSS 공격을 위한
          스크립트를 포함 한 게시글을 웹 사이트에 업로드 한다.
        </p>

        <p>
          게시글의 URL을 사용자에게 노출하고 사용자가 게시글을 확인함으로써
          URL에 대한 요청을 서버에 전송하게 된다.
        </p>

        <p>
          웹 서버에서 스크립트를 포함한 Response를 전송하며 공격이 수행된다.
        </p>
      </div>
      <h1 style={{ marginTop: 100 }}># XSS 방지법</h1>
      <div className="wrapper">
        <p>
          XSS 공격은 IPS, IDS, 방화벽 등으로도 방지할 수가 없다. 때문에 단순히
          문자를 필터링 하는 등의 방법만이 존재한다.
        </p>
        <h3 style={{ marginTop: 30 }}>1. script 문자 필터링</h3>
        <p>
          XSS 공격은 입력값에 대한 검증이 제대로 이루어지지 않아 발생하는
          취약점이다.
        </p>
        <p>
          때문에 사용자의 모든 입력값에 대하여 서버측에서 필터링을 해 주어야
          한다.
        </p>
        <p>
          PHP의 eregi 함수를 이용하면 XSS 공격에 주로 사용되는 문자들을 필터링
          할 수 있다.
        </p>
        <p>
          주로 스크립트를 실행하기 위한 특수문자를 필터링 하며 ", ' 등의 문자가
          있다.
        </p>
        <p>JavaScript로는 replaceAll 함수가 있다.</p>
        <h3 style={{ marginTop: 30 }}>1. script 문자 필터링</h3>
        <p>PHP 함수 중 htmlentities라는 함수가 있다.</p>
        <p>htmlentities는 모든 특수문자를 HTML 엔티티(entity)로 변환한다.</p>
      </div>
    </motion.div>
  );
};

export default Xss;
