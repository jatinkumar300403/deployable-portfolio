import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Web Developer
        <span className="text-textGreen tracking-wide">@Tripster</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        May 2026 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Created a live and compltete website for flight bookings for SAYTRIP WAYS PVT. LTD.
          A startup company based on Pune.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Used NEXT.js as frontend framework, JavaScript(.jsx) as programm language and used several frontend component libraries such as 
          ShadCN and Material UI (MUI) for beautiful and customizable components. 
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Our backend team used Tripjack API for GDS data, MongoDB for databse, prima for database schema, Clerk for user authentication,
           RazorPay for payment gateway, React-email for sending booking confirmation through email and Twilio API for sending SMS and WhatsApp messages.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;