import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  return (
    <div className="mt-4">
      <motion.div
        className="text-center"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.75 }}
      >
        <div>
          <div className="flex justify-center">
            <p>Hello</p>
            <span style={{ marginLeft: 8, marginRight: 12 }}>😊</span>
            <p>we are</p>
          </div>
          <div></div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.75, delay: 0.25 }}
        className="text-center"
      >
        <p className="card li text-6xl text-slate-600">Squared Circle Studio</p>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.75, delay: 0.6 }}
        className="text-center"
      >
        <div className="flex justify-center text-lg font-bold  text-slate-800">
          <p className="mx-6">Ecommerce</p>
          <p className="mx-6">Web apps</p>
          <p className="mx-6">Kick-ass sites</p>
          <p className="mx-6">Web Animations</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
