import ListItem from "./ListItem";
import { Task, ListProps } from "../Types/Type";

const styles = {
  image: {
    width: 300,
    height: 300,
  },
  noData: {
    textAlign: "center",
  },
} as const;

function List({ gotData, getArray }: ListProps): JSX.Element {
  return (
    <div className="main-list" id="main-list">
      {gotData.length !== 0 ? (
        gotData.map((item: Task) => {
          return (
            <ListItem
              key={item.id}
              id={item.id}
              text={item.text}
              creatAt={item.creatAt}
              completed={item.completed}
              getArray={getArray}
            />
          );
        })
      ) : (
        <div style={styles.noData}>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-3328225-2809510.png"
            style={styles.image}
            alt=""
          />
          <p>No Task found</p>
        </div>
      )}
    </div>
  );
}

export default List;
