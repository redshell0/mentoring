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

const SQLin = () => {
  return (
    <motion.div
      className="sql"
      variants={containerVariants}
      exit="exit"
      initial="hidden"
      animate="visible"
    >
      <h1># SQL injection</h1>
      <div className="wrapper">
        <img
          alt="1"
          src="//ww.namu.la/s/c9f0d02cb20c312251aa14650d0cfdabb3a32e483b2526e78b1eb2c39f2b83a1da07371f351aef835a48bcd4a0c8235064d11747d19ecef994e2cf74c1415bc1cdfbfa5d7740816563039f5e5cac68eb76a603d36fc2517c238d6df60d8ad831"
        />
        <p>
          위의 만화에 대해 설명하자면, 저 학교에서 입력한 명령은 다음과 같을
          것이다.
        </p>
        <blockquote class="wiki-quote">
          <div class="wiki-paragraph">
            INSERT INTO students (이름) VALUES ('학생 이름');
          </div>
        </blockquote>
        <p>
          여기서 "Robert'); DROP TABLE students;--"학생을 "학생 이름" 자리에
          넣을 경우 다음과 같은 명령문이 된다.
        </p>
        <blockquote class="wiki-quote">
          <div class="wiki-paragraph">
            INSERT INTO students (이름) VALUES ('학생 이름');
          </div>
        </blockquote>
        <p>
          첫 번째 줄에서는 Robert라는 학생이 입력되었지만, 두 번째 줄에서
          학생들의 데이터가 있는 테이블을 제거한다. 그리고 세 번째에서는 뒤에
          오는 내용을 모두 주석 처리한다. 결과적으로 ‘모든 학생 기록을
          삭제한다.’라는 뜻의 명령문이 완성된다.
        </p>
      </div>
    </motion.div>
  );
};

export default SQLin;
