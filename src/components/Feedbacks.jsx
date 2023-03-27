import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
    index,
    testimonial,
    name,
    designation,
    company,
    image,
}) => (
    <motion.div
        variants={fadeIn("", "spring", index * 0.5, 1)}
        className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
        <p className="text-white font-black text-4xl">"</p>

        <div className="mt-1">
            <p className="text-white tracking-wider text-xl">{testimonial}</p>
            <p className="text-white font-black text-4xl text-right">"</p>

            <div className="mt-7 flex justify-between items-center gap-1">
                <div className="flex flex-1 flex-col">
                    <p className="text-white font-medium text-lg">
                        <span className="blue-text-gradient">@</span> {name}
                    </p>
                    <p className="text-white text-md">
                        {designation} o {company}
                    </p>
                </div>

                <img
                    src={image}
                    alt={`feedback-by-${name}`}
                    className="w-10 h-10 rounded-full object-cover"
                />
            </div>
        </div>
    </motion.div>
);

const Feedbacks = () => {
    return (
        <div className="mt-12 bg-black-100 rounded-2xl">
            <div
                className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
            >
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>What others say</p>
                    <h2 className={styles.sectionHeadText}>Testimonials.</h2>
                </motion.div>
            </div>

            <div
                className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}
            >
                {testimonials.map((testimonial, index) => (
                    <FeedbackCard
                        key={testimonial.name}
                        index={index}
                        {...testimonial}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Feedbacks, "");
