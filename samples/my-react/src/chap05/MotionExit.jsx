import { useState } from "react";
// import { motion } from 'motion/react';
import { AnimatePresence, motion } from "motion/react";

export default function MotionExit() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "非表示" : "表示"}
      </button>
      {/* {show && (
        <motion.img src="/image/logo.jpg"
          alt="WINGS Project"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 2 }} />
      )} */}
      {/* exitは破棄（非表示）される際のアニメーションを指定するプロパティ */}
      {/* ただしそのままだと、消えるときにアニメーションされないので、
      AnimatePresenceで終了アニメーションする要素を囲むことでアニメーションしてから終了（非表示）されるようになる */}
      <AnimatePresence>
        {show && (
          <motion.img
            src="/image/logo.jpg"
            alt="WINGS Project"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
