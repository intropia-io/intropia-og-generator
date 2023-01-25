import type { GetServerSideProps, NextPage } from "next";
import styles from "../../styles/Template.module.css";

type backgroundType = {
  [key: string]: string;
};

const backgroundDictionary: backgroundType = {
  organization: "og-dao.svg",
  event: "og-event.svg",
  quest: "og-quest.svg",
  none: "og-common.svg",
};

export const getServerSideProps: GetServerSideProps = async (req) => {
  return {
    props: req.query,
  };
};

const Generate: NextPage = (props: any) => {
  const { type, avatar, name, text } = props;

  return (
    <div
      className={styles.mainTemplate}
      style={{
        backgroundSize: "cover!important",
        background: `url(/images/${
          type
            ? backgroundDictionary[type.toString().toLowerCase()]
            : backgroundDictionary.none
        }) center`,
      }}
    >
      {type && (
        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            paddingTop: "60px",
          }}
        >
          <img
            src={"/images/logo.svg"}
            style={{
              border: 0,
              borderRadius: 0,
              width: "211px",
              height: "50px",
            }}
          />
        </div>
      )}
      {avatar && name ? (
        <div className={styles.centered}>
          {type === "organization" || type === "event" ? (
            <>
              <img src={avatar?.toString()} />
              <h1>{name}</h1>
              {type === "organization" && <h3>find new opportunities</h3>}
              {type === "event" && <h3>join the event</h3>}
            </>
          ) : (
            <div className={styles.questCenter} style={{marginTop: "-60px"}}>
              <div className={styles.label} />
              <div className={styles.topTab}>
                <img src={avatar?.toString()} />
                <span>{name}</span>
              </div>
              <p>{text}</p>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Generate;
