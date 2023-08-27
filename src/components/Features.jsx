import { feature1, feature2, feature3 } from "../assets";
import styles from "../styles";

const Features = () => (
  <div className="flex flex-wrap flex-col md:flex-row items-center justify-center py-20 gap-12">
    <div className={`${styles.features}`}>
      <img
        src={feature1}
        alt="feature1"
        className="w-[330px] h-[250px] rounded-sm"
      />
      <h2 className={`${styles.heading2}`}>Spa & Massage</h2>
      <p className={`${styles.paragraph}`}>
        Tense, tight, muscles call for a massage. In the right hands your aches
        and pains can be massaged away within minutes. If you can’t seem to kick
        sore shoulders and aching joints, you need to get yourself to a massage
        salon.
      </p>
      <button type="button" className={`${styles.bt}`}>
        <span className={`${styles.btSpan}`}>read more</span>
      </button>
    </div>
    <div className={`${styles.features}`}>
      <img
        src={feature2}
        alt="feature2"
        className="w-[330px] h-[250px] rounded-sm"
      />
      <h2 className={`${styles.heading2}`}>Hair & Beauty</h2>
      <p className={`${styles.paragraph}`}>
        Whether you prefer to splurge on regular hair appointments or like to
        chop and change to suit your location and your budget, one thing is for
        certain - we all need a good trim every so often and a hair salon is the
        place to do it.
      </p>
      <button type="button" className={`${styles.bt}`}>
        <span className={`${styles.btSpan}`}>read more</span>
      </button>
    </div>
    <div className={`${styles.features}`}>
      <img
        src={feature3}
        alt="feature3"
        className="w-[330px] h-[250px] rounded-sm"
      />
      <h2 className={`${styles.heading2}`}>Body Treatments</h2>
      <p className={`${styles.paragraph}`}>
        From tanning to exfoliation treatments, mud wraps to massages, if you're
        looking to treat your body to some serious pampering, booking into a
        beauty salon is the first step in your journey to utter relaxation.
      </p>
      <button type="button" className={`${styles.bt}`}>
        <span className={`${styles.btSpan}`}>read more</span>
      </button>
    </div>
  </div>
);

export default Features;
