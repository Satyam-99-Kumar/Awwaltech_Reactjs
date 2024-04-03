import CustomizedAccordions from "./CustomizedAccordions";
import style from "./HireFaq.module.scss";

function HireFaq() {
  return (
    <div className={style.faq}>
      <h3>FAQ</h3>
      <h1>Listed questions and answers</h1>
      
      
      {/* <h4>How can I start developing my IoT application?</h4>
      <p>
        Use the Preview in Designer option to make any edits to the template
        pages and preview how the layout would fit your content. Changes in
        preview mode won't be saved.
      </p> */}
      <CustomizedAccordions />
    </div>
  );
}

export default HireFaq;
