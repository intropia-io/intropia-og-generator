import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../../styles/Template.module.css";

type backgroundType = {
  [key: string]: string;
};

const backgroundDictionary: backgroundType = {
  organization: "tr3-og-dao.svg",
  event: "tr3-og-event.svg",
  quest: "tr3-og-quest.svg",
};

const Generate: NextPage = () => {
  const router = useRouter();
  const { type, avatar, name, text } = router.query;
  if (!type) return <></>;
  return (
    <div
      className={styles.mainTemplate}
      style={{
        background: `url(/images/${
          backgroundDictionary[type.toString().toLowerCase()]
        }) center`,
        backgroundSize: "cover",
      }}
    >
      if(avatar && name)
      {
        <div className={styles.centered}>
          {type === "organization" || type === "event" ? (
            <>
              <img src={avatar?.toString()} />
              <h1>{name}</h1>
              {type === "organization" && <h3>find new opportunities</h3>}
              {type === "event" && <h3>join the event</h3>}
            </>
          ) : (
            <div className={styles.questCenter}>
              <div className={styles.label} />
              <div className={styles.topTab}>
                <img src={avatar?.toString()} />
                <span>{name}</span>
              </div>
              <p>{text}</p>
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default Generate;
